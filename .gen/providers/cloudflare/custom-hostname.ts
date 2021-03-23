// https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomHostnameConfig extends cdktf.TerraformMetaArguments {
  readonly customOriginServer?: string;
  readonly hostname: string;
  readonly zoneId: string;
  /** ssl block */
  readonly ssl: CustomHostnameSsl[];
}
export interface CustomHostnameSslSettings {
  readonly ciphers?: string[];
  readonly http2?: string;
  readonly minTlsVersion?: string;
  readonly tls13?: string;
}

function customHostnameSslSettingsToTerraform(struct?: CustomHostnameSslSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ciphers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ciphers),
    http2: cdktf.stringToTerraform(struct!.http2),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    tls13: cdktf.stringToTerraform(struct!.tls13),
  }
}

export interface CustomHostnameSsl {
  readonly certificateAuthority?: string;
  readonly cnameName?: string;
  readonly cnameTarget?: string;
  readonly customCertificate?: string;
  readonly customKey?: string;
  readonly method?: string;
  readonly status?: string;
  readonly type?: string;
  readonly wildcard?: boolean;
  /** settings block */
  readonly settings?: CustomHostnameSslSettings[];
}

function customHostnameSslToTerraform(struct?: CustomHostnameSsl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_authority: cdktf.stringToTerraform(struct!.certificateAuthority),
    cname_name: cdktf.stringToTerraform(struct!.cnameName),
    cname_target: cdktf.stringToTerraform(struct!.cnameTarget),
    custom_certificate: cdktf.stringToTerraform(struct!.customCertificate),
    custom_key: cdktf.stringToTerraform(struct!.customKey),
    method: cdktf.stringToTerraform(struct!.method),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
    wildcard: cdktf.booleanToTerraform(struct!.wildcard),
    settings: cdktf.listMapper(customHostnameSslSettingsToTerraform)(struct!.settings),
  }
}


// Resource

export class CustomHostname extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CustomHostnameConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_custom_hostname',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customOriginServer = config.customOriginServer;
    this._hostname = config.hostname;
    this._zoneId = config.zoneId;
    this._ssl = config.ssl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_origin_server - computed: false, optional: true, required: false
  private _customOriginServer?: string;
  public get customOriginServer() {
    return this.getStringAttribute('custom_origin_server');
  }
  public set customOriginServer(value: string ) {
    this._customOriginServer = value;
  }
  public resetCustomOriginServer() {
    this._customOriginServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOriginServerInput() {
    return this._customOriginServer
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname: string;
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ownership_verification - computed: true, optional: false, required: false
  public ownershipVerification(key: string): string {
    return new cdktf.StringMap(this, 'ownership_verification').lookup(key);
  }

  // ownership_verification_http - computed: true, optional: false, required: false
  public ownershipVerificationHttp(key: string): string {
    return new cdktf.StringMap(this, 'ownership_verification_http').lookup(key);
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // ssl - computed: false, optional: false, required: true
  private _ssl: CustomHostnameSsl[];
  public get ssl() {
    return this.interpolationForAttribute('ssl') as any;
  }
  public set ssl(value: CustomHostnameSsl[]) {
    this._ssl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_origin_server: cdktf.stringToTerraform(this._customOriginServer),
      hostname: cdktf.stringToTerraform(this._hostname),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      ssl: cdktf.listMapper(customHostnameSslToTerraform)(this._ssl),
    };
  }
}
