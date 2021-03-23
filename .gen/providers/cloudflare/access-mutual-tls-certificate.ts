// https://www.terraform.io/docs/providers/cloudflare/r/access_mutual_tls_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessMutualTlsCertificateConfig extends cdktf.TerraformMetaArguments {
  readonly accountId?: string;
  readonly associatedHostnames?: string[];
  readonly certificate?: string;
  readonly name: string;
  readonly zoneId?: string;
}

// Resource

export class AccessMutualTlsCertificate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AccessMutualTlsCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_access_mutual_tls_certificate',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._associatedHostnames = config.associatedHostnames;
    this._certificate = config.certificate;
    this._name = config.name;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string;
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId
  }

  // associated_hostnames - computed: false, optional: true, required: false
  private _associatedHostnames?: string[];
  public get associatedHostnames() {
    return this.getListAttribute('associated_hostnames');
  }
  public set associatedHostnames(value: string[] ) {
    this._associatedHostnames = value;
  }
  public resetAssociatedHostnames() {
    this._associatedHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedHostnamesInput() {
    return this._associatedHostnames
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string;
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string ) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string;
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      associated_hostnames: cdktf.listMapper(cdktf.stringToTerraform)(this._associatedHostnames),
      certificate: cdktf.stringToTerraform(this._certificate),
      name: cdktf.stringToTerraform(this._name),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
