// https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticatedOriginPullsCertificateConfig extends cdktf.TerraformMetaArguments {
  readonly certificate: string;
  readonly privateKey: string;
  readonly type: string;
  readonly zoneId: string;
  /** timeouts block */
  readonly timeouts?: AuthenticatedOriginPullsCertificateTimeouts;
}
export interface AuthenticatedOriginPullsCertificateTimeouts {
  readonly create?: string;
}

function authenticatedOriginPullsCertificateTimeoutsToTerraform(struct?: AuthenticatedOriginPullsCertificateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


// Resource

export class AuthenticatedOriginPullsCertificate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AuthenticatedOriginPullsCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_authenticated_origin_pulls_certificate',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificate = config.certificate;
    this._privateKey = config.privateKey;
    this._type = config.type;
    this._zoneId = config.zoneId;
    this._timeouts = config.timeouts;
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

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey: string;
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // uploaded_on - computed: true, optional: false, required: false
  public get uploadedOn() {
    return this.getStringAttribute('uploaded_on');
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId: string;
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AuthenticatedOriginPullsCertificateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AuthenticatedOriginPullsCertificateTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: cdktf.stringToTerraform(this._certificate),
      private_key: cdktf.stringToTerraform(this._privateKey),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      timeouts: authenticatedOriginPullsCertificateTimeoutsToTerraform(this._timeouts),
    };
  }
}
