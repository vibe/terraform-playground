import { Resource } from "cdktf";
import { Construct } from "constructs";
import { createHash } from "crypto"
import { readdirSync, readFileSync, statSync } from "fs"
import { join, resolve } from "path"
import * as mime from "mime-types"


interface TemplateDirectoryConfig {
    baseDir: string,
    defaultFileType?: string,
    fileTypes?: string[],
    templateFileSuffix?: string,
    templateVars?: {}
}

interface TemplateFile {
    key: string,
    contentType: string,
    content: Buffer,
    sourcePath: string,
    digests: TemplateFileDigest
}

type TemplateFileDigest = {
    [key in `${HashName}`]?: string
}

enum HashName {
    md5 = "md5",
    sha1 = "sha1",
    sha256 = "sha256",
    base64sha256 = "base64sha256",
    sha512 = "sha512",
    base64sha512 = "base64sha512"
}

export class TemplateDirectory extends Resource {
    public readonly files: TemplateFile[] = [];
    public readonly fileInMemory: [] = [];
    public readonly filesOnDisk: [] = [];
    private defaultFileType: string;
    
    constructor(scope: Construct, name: string, config: TemplateDirectoryConfig) {
        super(scope, name)

        const {
            baseDir,
            defaultFileType="application/octet-stream",
        } = config;

        this.defaultFileType = defaultFileType

        this.files = this.keyDirectory(baseDir)

    }


    keyDirectory(dirPath: string, prefix:string=''): TemplateFile[] {
        return readdirSync(dirPath).reduce((flatResults: TemplateFile[], file) => {
            const sourcePath = resolve(join(dirPath, file))
            const stats = statSync(sourcePath)
            if (stats.isFile()) {
                const key = `${prefix}${file}`
                const buffer = readFileSync(sourcePath)
                const digests = Object.keys(HashName).reduce((digests: TemplateFileDigest, key: string) => {
                    
                    const hashName = HashName[key as HashName]
                    const encode = hashName.startsWith('base64')
                    const alogirthm = encode ? hashName.replace('base64', '') : hashName
                    const hash = createHash(alogirthm).update(buffer).digest('hex').toString()
                    return {
                        ...digests,
                        [key]: encode ? Buffer.from(hash).toString('base64') : hash
                    }
                }, {})

                flatResults.push({
                    key,
                    content: buffer,
                    sourcePath,
                    digests,
                    contentType: mime.lookup(sourcePath) || this.defaultFileType
                })
            }

            if (stats.isDirectory()) {
                const results = this.keyDirectory(sourcePath, `${file}/`)
                return [...flatResults, ...results]
            }

            return flatResults
        }, [])
    }

}