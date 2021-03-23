// https://www.terraform.io/docs/providers/cloudflare/r/access_identity_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  readonly accountId?: string;
  readonly name: string;
  readonly type: string;
  readonly zoneId?: string;
  /** config block */
  readonly config?: AccessIdentityProviderConfigA[];
}
export interface AccessIdentityProviderConfigA {
  readonly appsDomain?: string;
  readonly attributes?: string[];
  readonly authUrl?: string;
  readonly centrifyAccount?: string;
  readonly centrifyAppId?: string;
  readonly certsUrl?: string;
  readonly clientId?: string;
  readonly clientSecret?: string;
  readonly directoryId?: string;
  readonly emailAttributeName?: string;
  readonly idpPublicCert?: string;
  readonly issuerUrl?: string;
  readonly oktaAccount?: string;
  readonly oneloginAccount?: string;
  readonly redirectUrl?: string;
  readonly signRequest?: boolean;
  readonly ssoTargetUrl?: string;
  readonly supportGroups?: boolean;
  readonly tokenUrl?: string;
}

function accessIdentityProviderConfigAToTerraform(struct?: AccessIdentityProviderConfigA): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    apps_domain: cdktf.stringToTerraform(struct!.appsDomain),
    attributes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.attributes),
    auth_url: cdktf.stringToTerraform(struct!.authUrl),
    centrify_account: cdktf.stringToTerraform(struct!.centrifyAccount),
    centrify_app_id: cdktf.stringToTerraform(struct!.centrifyAppId),
    certs_url: cdktf.stringToTerraform(struct!.certsUrl),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    directory_id: cdktf.stringToTerraform(struct!.directoryId),
    email_attribute_name: cdktf.stringToTerraform(struct!.emailAttributeName),
    idp_public_cert: cdktf.stringToTerraform(struct!.idpPublicCert),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    okta_account: cdktf.stringToTerraform(struct!.oktaAccount),
    onelogin_account: cdktf.stringToTerraform(struct!.oneloginAccount),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    sign_request: cdktf.booleanToTerraform(struct!.signRequest),
    sso_target_url: cdktf.stringToTerraform(struct!.ssoTargetUrl),
    support_groups: cdktf.booleanToTerraform(struct!.supportGroups),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


// Resource

export class AccessIdentityProvider extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AccessIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_access_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._name = config.name;
    this._type = config.type;
    this._zoneId = config.zoneId;
    this._config = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string;
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string ) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId
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

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string;
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string ) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId
  }

  // config - computed: false, optional: true, required: false
  private _config?: AccessIdentityProviderConfigA[];
  public get config() {
    return this.interpolationForAttribute('config') as any;
  }
  public set config(value: AccessIdentityProviderConfigA[] ) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      config: cdktf.listMapper(accessIdentityProviderConfigAToTerraform)(this._config),
    };
  }
}
