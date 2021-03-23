import { Resource, TerraformOutput } from "cdktf";
import { Construct } from "constructs";
import { CloudfrontDistribution, CloudfrontOriginAccessIdentity, S3Bucket, S3BucketObject, S3BucketPolicy } from "../../.gen/providers/aws";
import { TemplateDirectory } from "../template-directory";


interface StaticSiteConfig {
    distributionName: string
    distributionFilesPath: string
}


export class StaticSite extends Resource {
    constructor(scope: Construct, name: string, config: StaticSiteConfig) {
        super(scope, name)

        const {
            distributionName,
            distributionFilesPath
        } = config;


        const originAccessIdentity = new CloudfrontOriginAccessIdentity(this, 'cloudfront-origin-access-identity', { 
            comment: "Origin acesss identity for static site cloudfront distribution."
        })
        
        const staticBucketName = `${distributionName}-static-site`
        const staticSiteBucket = new S3Bucket(this, "static-site-bucket", {
            bucket: staticBucketName,
            acl: 'private', 
        })

        new S3BucketPolicy(this, "static-site-bucket-policy", {
            bucket: staticSiteBucket.bucket,
            policy: JSON.stringify({
                Version: "2012-10-17",
                Id: "static-site-policy",
                Statement: [
                    { 
                        Sid: "PublicRead",
                        Effect: "Allow",
                        Principal: {
                            AWS: `arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity ${originAccessIdentity.id}`
                        },
                        Action: [
                            "s3:GetObject"
                        ],
                        Resource: [
                            `arn:aws:s3:::${staticBucketName}/*`
                        ]
                    }
                ]
            })
        })
        
        const directory = new TemplateDirectory(this, "static-assets", {
            baseDir: distributionFilesPath
        })

        directory.files.map(({ key, contentType, sourcePath, digests }, i) =>
                new S3BucketObject(this, `static-site-upload-${i}`, {
                    bucket: staticSiteBucket.bucket,
                    serverSideEncryption: "AES256",
                    etag: digests.sha256,
                    source: sourcePath,
                    contentType,
                    key,
                }))
        

        const distribution = new CloudfrontDistribution(this, 'cloudfront-distribution', {
            enabled: true,
            defaultRootObject: "index.html",
            origin: [{
                originId: staticSiteBucket.id,
                domainName: staticSiteBucket.bucketRegionalDomainName,
                s3OriginConfig: [{
                    originAccessIdentity: originAccessIdentity.cloudfrontAccessIdentityPath
                }]
            }],
            defaultCacheBehavior:[{
                allowedMethods: ['GET', 'HEAD', "OPTIONS"],
                cachedMethods: ["GET", "HEAD"],
                targetOriginId: staticSiteBucket.id,
                viewerProtocolPolicy: "allow-all",
                forwardedValues: [{
                    cookies: [{ forward: 'none' }],
                    queryString: false
                  }],
            }],
            restrictions: [{ geoRestriction: [{ restrictionType: 'none' }] }],
            viewerCertificate: [{ cloudfrontDefaultCertificate: true }],
        })

        new TerraformOutput(this, 'cloudfront-endpoint', {
            description: 'CloudFront Endpoint',
            value: `https://${distribution.domainName}`
          });
        
    }


}