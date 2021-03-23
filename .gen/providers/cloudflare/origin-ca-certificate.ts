// https://www.terraform.io/docs/providers/cloudflare/r/origin_ca_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OriginCaCertificateConfig extends cdktf.TerraformMetaArguments {
  readonly csr?: string;
  readonly hostnames: string[];
  readonly requestType: string;
  readonly requestedValidity?: number;
}

// Resource

export class OriginCaCertificate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OriginCaCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_origin_ca_certificate',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._csr = config.csr;
    this._hostnames = config.hostnames;
    this._requestType = config.requestType;
    this._requestedValidity = config.requestedValidity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // csr - computed: false, optional: true, required: false
  private _csr?: string;
  public get csr() {
    return this.getStringAttribute('csr');
  }
  public set csr(value: string ) {
    this._csr = value;
  }
  public resetCsr() {
    this._csr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrInput() {
    return this._csr
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // hostnames - computed: false, optional: false, required: true
  private _hostnames: string[];
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // request_type - computed: false, optional: false, required: true
  private _requestType: string;
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType
  }

  // requested_validity - computed: false, optional: true, required: false
  private _requestedValidity?: number;
  public get requestedValidity() {
    return this.getNumberAttribute('requested_validity');
  }
  public set requestedValidity(value: number ) {
    this._requestedValidity = value;
  }
  public resetRequestedValidity() {
    this._requestedValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedValidityInput() {
    return this._requestedValidity
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      csr: cdktf.stringToTerraform(this._csr),
      hostnames: cdktf.listMapper(cdktf.stringToTerraform)(this._hostnames),
      request_type: cdktf.stringToTerraform(this._requestType),
      requested_validity: cdktf.numberToTerraform(this._requestedValidity),
    };
  }
}
