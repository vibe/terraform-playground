// https://www.terraform.io/docs/providers/cloudflare/r/access_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessApplicationConfig extends cdktf.TerraformMetaArguments {
  readonly accountId?: string;
  readonly allowedIdps?: string[];
  readonly autoRedirectToIdentity?: boolean;
  readonly customDenyMessage?: string;
  readonly customDenyUrl?: string;
  readonly domain: string;
  readonly enableBindingCookie?: boolean;
  readonly name: string;
  readonly sessionDuration?: string;
  readonly zoneId?: string;
  /** cors_headers block */
  readonly corsHeaders?: AccessApplicationCorsHeaders[];
}
export interface AccessApplicationCorsHeaders {
  readonly allowAllHeaders?: boolean;
  readonly allowAllMethods?: boolean;
  readonly allowAllOrigins?: boolean;
  readonly allowCredentials?: boolean;
  readonly allowedHeaders?: string[];
  readonly allowedMethods?: string[];
  readonly allowedOrigins?: string[];
  readonly maxAge?: number;
}

function accessApplicationCorsHeadersToTerraform(struct?: AccessApplicationCorsHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_all_headers: cdktf.booleanToTerraform(struct!.allowAllHeaders),
    allow_all_methods: cdktf.booleanToTerraform(struct!.allowAllMethods),
    allow_all_origins: cdktf.booleanToTerraform(struct!.allowAllOrigins),
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
  }
}


// Resource

export class AccessApplication extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AccessApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_access_application',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._allowedIdps = config.allowedIdps;
    this._autoRedirectToIdentity = config.autoRedirectToIdentity;
    this._customDenyMessage = config.customDenyMessage;
    this._customDenyUrl = config.customDenyUrl;
    this._domain = config.domain;
    this._enableBindingCookie = config.enableBindingCookie;
    this._name = config.name;
    this._sessionDuration = config.sessionDuration;
    this._zoneId = config.zoneId;
    this._corsHeaders = config.corsHeaders;
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

  // allowed_idps - computed: false, optional: true, required: false
  private _allowedIdps?: string[];
  public get allowedIdps() {
    return this.getListAttribute('allowed_idps');
  }
  public set allowedIdps(value: string[] ) {
    this._allowedIdps = value;
  }
  public resetAllowedIdps() {
    this._allowedIdps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIdpsInput() {
    return this._allowedIdps
  }

  // aud - computed: true, optional: false, required: false
  public get aud() {
    return this.getStringAttribute('aud');
  }

  // auto_redirect_to_identity - computed: false, optional: true, required: false
  private _autoRedirectToIdentity?: boolean;
  public get autoRedirectToIdentity() {
    return this.getBooleanAttribute('auto_redirect_to_identity');
  }
  public set autoRedirectToIdentity(value: boolean ) {
    this._autoRedirectToIdentity = value;
  }
  public resetAutoRedirectToIdentity() {
    this._autoRedirectToIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRedirectToIdentityInput() {
    return this._autoRedirectToIdentity
  }

  // custom_deny_message - computed: false, optional: true, required: false
  private _customDenyMessage?: string;
  public get customDenyMessage() {
    return this.getStringAttribute('custom_deny_message');
  }
  public set customDenyMessage(value: string ) {
    this._customDenyMessage = value;
  }
  public resetCustomDenyMessage() {
    this._customDenyMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDenyMessageInput() {
    return this._customDenyMessage
  }

  // custom_deny_url - computed: false, optional: true, required: false
  private _customDenyUrl?: string;
  public get customDenyUrl() {
    return this.getStringAttribute('custom_deny_url');
  }
  public set customDenyUrl(value: string ) {
    this._customDenyUrl = value;
  }
  public resetCustomDenyUrl() {
    this._customDenyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDenyUrlInput() {
    return this._customDenyUrl
  }

  // domain - computed: false, optional: false, required: true
  private _domain: string;
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain
  }

  // enable_binding_cookie - computed: false, optional: true, required: false
  private _enableBindingCookie?: boolean;
  public get enableBindingCookie() {
    return this.getBooleanAttribute('enable_binding_cookie');
  }
  public set enableBindingCookie(value: boolean ) {
    this._enableBindingCookie = value;
  }
  public resetEnableBindingCookie() {
    this._enableBindingCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBindingCookieInput() {
    return this._enableBindingCookie
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

  // session_duration - computed: false, optional: true, required: false
  private _sessionDuration?: string;
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }
  public set sessionDuration(value: string ) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration
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

  // cors_headers - computed: false, optional: true, required: false
  private _corsHeaders?: AccessApplicationCorsHeaders[];
  public get corsHeaders() {
    return this.interpolationForAttribute('cors_headers') as any;
  }
  public set corsHeaders(value: AccessApplicationCorsHeaders[] ) {
    this._corsHeaders = value;
  }
  public resetCorsHeaders() {
    this._corsHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsHeadersInput() {
    return this._corsHeaders
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      allowed_idps: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedIdps),
      auto_redirect_to_identity: cdktf.booleanToTerraform(this._autoRedirectToIdentity),
      custom_deny_message: cdktf.stringToTerraform(this._customDenyMessage),
      custom_deny_url: cdktf.stringToTerraform(this._customDenyUrl),
      domain: cdktf.stringToTerraform(this._domain),
      enable_binding_cookie: cdktf.booleanToTerraform(this._enableBindingCookie),
      name: cdktf.stringToTerraform(this._name),
      session_duration: cdktf.stringToTerraform(this._sessionDuration),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      cors_headers: cdktf.listMapper(accessApplicationCorsHeadersToTerraform)(this._corsHeaders),
    };
  }
}
