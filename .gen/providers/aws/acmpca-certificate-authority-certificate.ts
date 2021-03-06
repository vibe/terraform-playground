// https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcmpcaCertificateAuthorityCertificateConfig extends cdktf.TerraformMetaArguments {
  readonly certificate: string;
  readonly certificateAuthorityArn: string;
  readonly certificateChain?: string;
}

// Resource

export class AcmpcaCertificateAuthorityCertificate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AcmpcaCertificateAuthorityCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_acmpca_certificate_authority_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificate = config.certificate;
    this._certificateAuthorityArn = config.certificateAuthorityArn;
    this._certificateChain = config.certificateChain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: false, optional: false, required: true
  private _certificate: string;
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // certificate_authority_arn - computed: false, optional: false, required: true
  private _certificateAuthorityArn: string;
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }
  public set certificateAuthorityArn(value: string) {
    this._certificateAuthorityArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnInput() {
    return this._certificateAuthorityArn
  }

  // certificate_chain - computed: false, optional: true, required: false
  private _certificateChain?: string;
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string ) {
    this._certificateChain = value;
  }
  public resetCertificateChain() {
    this._certificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: cdktf.stringToTerraform(this._certificate),
      certificate_authority_arn: cdktf.stringToTerraform(this._certificateAuthorityArn),
      certificate_chain: cdktf.stringToTerraform(this._certificateChain),
    };
  }
}
