// https://www.terraform.io/docs/providers/cloudflare/r/authenticated_origin_pulls.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticatedOriginPullsConfig extends cdktf.TerraformMetaArguments {
  readonly authenticatedOriginPullsCertificate?: string;
  readonly enabled: boolean;
  readonly hostname?: string;
  readonly zoneId: string;
}

// Resource

export class AuthenticatedOriginPulls extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AuthenticatedOriginPullsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_authenticated_origin_pulls',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authenticatedOriginPullsCertificate = config.authenticatedOriginPullsCertificate;
    this._enabled = config.enabled;
    this._hostname = config.hostname;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authenticated_origin_pulls_certificate - computed: false, optional: true, required: false
  private _authenticatedOriginPullsCertificate?: string;
  public get authenticatedOriginPullsCertificate() {
    return this.getStringAttribute('authenticated_origin_pulls_certificate');
  }
  public set authenticatedOriginPullsCertificate(value: string ) {
    this._authenticatedOriginPullsCertificate = value;
  }
  public resetAuthenticatedOriginPullsCertificate() {
    this._authenticatedOriginPullsCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatedOriginPullsCertificateInput() {
    return this._authenticatedOriginPullsCertificate
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string;
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string ) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      authenticated_origin_pulls_certificate: cdktf.stringToTerraform(this._authenticatedOriginPullsCertificate),
      enabled: cdktf.booleanToTerraform(this._enabled),
      hostname: cdktf.stringToTerraform(this._hostname),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
