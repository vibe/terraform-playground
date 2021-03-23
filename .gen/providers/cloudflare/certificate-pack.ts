// https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificatePackConfig extends cdktf.TerraformMetaArguments {
  readonly certificateAuthority?: string;
  readonly cloudflareBranding?: boolean;
  readonly hosts: string[];
  readonly type: string;
  readonly validationMethod?: string;
  readonly validityDays?: number;
  readonly zoneId: string;
}

// Resource

export class CertificatePack extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CertificatePackConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_certificate_pack',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateAuthority = config.certificateAuthority;
    this._cloudflareBranding = config.cloudflareBranding;
    this._hosts = config.hosts;
    this._type = config.type;
    this._validationMethod = config.validationMethod;
    this._validityDays = config.validityDays;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_authority - computed: false, optional: true, required: false
  private _certificateAuthority?: string;
  public get certificateAuthority() {
    return this.getStringAttribute('certificate_authority');
  }
  public set certificateAuthority(value: string ) {
    this._certificateAuthority = value;
  }
  public resetCertificateAuthority() {
    this._certificateAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityInput() {
    return this._certificateAuthority
  }

  // cloudflare_branding - computed: false, optional: true, required: false
  private _cloudflareBranding?: boolean;
  public get cloudflareBranding() {
    return this.getBooleanAttribute('cloudflare_branding');
  }
  public set cloudflareBranding(value: boolean ) {
    this._cloudflareBranding = value;
  }
  public resetCloudflareBranding() {
    this._cloudflareBranding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudflareBrandingInput() {
    return this._cloudflareBranding
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts: string[];
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // validation_method - computed: false, optional: true, required: false
  private _validationMethod?: string;
  public get validationMethod() {
    return this.getStringAttribute('validation_method');
  }
  public set validationMethod(value: string ) {
    this._validationMethod = value;
  }
  public resetValidationMethod() {
    this._validationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationMethodInput() {
    return this._validationMethod
  }

  // validity_days - computed: false, optional: true, required: false
  private _validityDays?: number;
  public get validityDays() {
    return this.getNumberAttribute('validity_days');
  }
  public set validityDays(value: number ) {
    this._validityDays = value;
  }
  public resetValidityDays() {
    this._validityDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityDaysInput() {
    return this._validityDays
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_authority: cdktf.stringToTerraform(this._certificateAuthority),
      cloudflare_branding: cdktf.booleanToTerraform(this._cloudflareBranding),
      hosts: cdktf.listMapper(cdktf.stringToTerraform)(this._hosts),
      type: cdktf.stringToTerraform(this._type),
      validation_method: cdktf.stringToTerraform(this._validationMethod),
      validity_days: cdktf.numberToTerraform(this._validityDays),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
