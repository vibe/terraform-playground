// https://www.terraform.io/docs/providers/cloudflare/r/access_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessGroupConfig extends cdktf.TerraformMetaArguments {
  readonly accountId?: string;
  readonly name: string;
  readonly zoneId?: string;
  /** exclude block */
  readonly exclude?: AccessGroupExclude[];
  /** include block */
  readonly include: AccessGroupInclude[];
  /** require block */
  readonly require?: AccessGroupRequire[];
}
export interface AccessGroupExcludeAzure {
  readonly id?: string[];
  readonly identityProviderId?: string;
}

function accessGroupExcludeAzureToTerraform(struct?: AccessGroupExcludeAzure): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupExcludeGithub {
  readonly identityProviderId?: string;
  readonly name?: string;
  readonly teams?: string[];
}

function accessGroupExcludeGithubToTerraform(struct?: AccessGroupExcludeGithub): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    teams: cdktf.listMapper(cdktf.stringToTerraform)(struct!.teams),
  }
}

export interface AccessGroupExcludeGsuite {
  readonly email?: string[];
  readonly identityProviderId?: string;
}

function accessGroupExcludeGsuiteToTerraform(struct?: AccessGroupExcludeGsuite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupExcludeOkta {
  readonly identityProviderId?: string;
  readonly name?: string[];
}

function accessGroupExcludeOktaToTerraform(struct?: AccessGroupExcludeOkta): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform)(struct!.name),
  }
}

export interface AccessGroupExcludeSaml {
  readonly attributeName?: string;
  readonly attributeValue?: string;
  readonly identityProviderId?: string;
}

function accessGroupExcludeSamlToTerraform(struct?: AccessGroupExcludeSaml): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupExclude {
  readonly anyValidServiceToken?: boolean;
  readonly authMethod?: string;
  readonly certificate?: boolean;
  readonly commonName?: string;
  readonly email?: string[];
  readonly emailDomain?: string[];
  readonly everyone?: boolean;
  readonly geo?: string[];
  readonly group?: string[];
  readonly ip?: string[];
  readonly serviceToken?: string[];
  /** azure block */
  readonly azure?: AccessGroupExcludeAzure[];
  /** github block */
  readonly github?: AccessGroupExcludeGithub[];
  /** gsuite block */
  readonly gsuite?: AccessGroupExcludeGsuite[];
  /** okta block */
  readonly okta?: AccessGroupExcludeOkta[];
  /** saml block */
  readonly saml?: AccessGroupExcludeSaml[];
}

function accessGroupExcludeToTerraform(struct?: AccessGroupExclude): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    any_valid_service_token: cdktf.booleanToTerraform(struct!.anyValidServiceToken),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    certificate: cdktf.booleanToTerraform(struct!.certificate),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    email_domain: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emailDomain),
    everyone: cdktf.booleanToTerraform(struct!.everyone),
    geo: cdktf.listMapper(cdktf.stringToTerraform)(struct!.geo),
    group: cdktf.listMapper(cdktf.stringToTerraform)(struct!.group),
    ip: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ip),
    service_token: cdktf.listMapper(cdktf.stringToTerraform)(struct!.serviceToken),
    azure: cdktf.listMapper(accessGroupExcludeAzureToTerraform)(struct!.azure),
    github: cdktf.listMapper(accessGroupExcludeGithubToTerraform)(struct!.github),
    gsuite: cdktf.listMapper(accessGroupExcludeGsuiteToTerraform)(struct!.gsuite),
    okta: cdktf.listMapper(accessGroupExcludeOktaToTerraform)(struct!.okta),
    saml: cdktf.listMapper(accessGroupExcludeSamlToTerraform)(struct!.saml),
  }
}

export interface AccessGroupIncludeAzure {
  readonly id?: string[];
  readonly identityProviderId?: string;
}

function accessGroupIncludeAzureToTerraform(struct?: AccessGroupIncludeAzure): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupIncludeGithub {
  readonly identityProviderId?: string;
  readonly name?: string;
  readonly teams?: string[];
}

function accessGroupIncludeGithubToTerraform(struct?: AccessGroupIncludeGithub): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    teams: cdktf.listMapper(cdktf.stringToTerraform)(struct!.teams),
  }
}

export interface AccessGroupIncludeGsuite {
  readonly email?: string[];
  readonly identityProviderId?: string;
}

function accessGroupIncludeGsuiteToTerraform(struct?: AccessGroupIncludeGsuite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupIncludeOkta {
  readonly identityProviderId?: string;
  readonly name?: string[];
}

function accessGroupIncludeOktaToTerraform(struct?: AccessGroupIncludeOkta): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform)(struct!.name),
  }
}

export interface AccessGroupIncludeSaml {
  readonly attributeName?: string;
  readonly attributeValue?: string;
  readonly identityProviderId?: string;
}

function accessGroupIncludeSamlToTerraform(struct?: AccessGroupIncludeSaml): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupInclude {
  readonly anyValidServiceToken?: boolean;
  readonly authMethod?: string;
  readonly certificate?: boolean;
  readonly commonName?: string;
  readonly email?: string[];
  readonly emailDomain?: string[];
  readonly everyone?: boolean;
  readonly geo?: string[];
  readonly group?: string[];
  readonly ip?: string[];
  readonly serviceToken?: string[];
  /** azure block */
  readonly azure?: AccessGroupIncludeAzure[];
  /** github block */
  readonly github?: AccessGroupIncludeGithub[];
  /** gsuite block */
  readonly gsuite?: AccessGroupIncludeGsuite[];
  /** okta block */
  readonly okta?: AccessGroupIncludeOkta[];
  /** saml block */
  readonly saml?: AccessGroupIncludeSaml[];
}

function accessGroupIncludeToTerraform(struct?: AccessGroupInclude): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    any_valid_service_token: cdktf.booleanToTerraform(struct!.anyValidServiceToken),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    certificate: cdktf.booleanToTerraform(struct!.certificate),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    email_domain: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emailDomain),
    everyone: cdktf.booleanToTerraform(struct!.everyone),
    geo: cdktf.listMapper(cdktf.stringToTerraform)(struct!.geo),
    group: cdktf.listMapper(cdktf.stringToTerraform)(struct!.group),
    ip: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ip),
    service_token: cdktf.listMapper(cdktf.stringToTerraform)(struct!.serviceToken),
    azure: cdktf.listMapper(accessGroupIncludeAzureToTerraform)(struct!.azure),
    github: cdktf.listMapper(accessGroupIncludeGithubToTerraform)(struct!.github),
    gsuite: cdktf.listMapper(accessGroupIncludeGsuiteToTerraform)(struct!.gsuite),
    okta: cdktf.listMapper(accessGroupIncludeOktaToTerraform)(struct!.okta),
    saml: cdktf.listMapper(accessGroupIncludeSamlToTerraform)(struct!.saml),
  }
}

export interface AccessGroupRequireAzure {
  readonly id?: string[];
  readonly identityProviderId?: string;
}

function accessGroupRequireAzureToTerraform(struct?: AccessGroupRequireAzure): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupRequireGithub {
  readonly identityProviderId?: string;
  readonly name?: string;
  readonly teams?: string[];
}

function accessGroupRequireGithubToTerraform(struct?: AccessGroupRequireGithub): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    teams: cdktf.listMapper(cdktf.stringToTerraform)(struct!.teams),
  }
}

export interface AccessGroupRequireGsuite {
  readonly email?: string[];
  readonly identityProviderId?: string;
}

function accessGroupRequireGsuiteToTerraform(struct?: AccessGroupRequireGsuite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupRequireOkta {
  readonly identityProviderId?: string;
  readonly name?: string[];
}

function accessGroupRequireOktaToTerraform(struct?: AccessGroupRequireOkta): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform)(struct!.name),
  }
}

export interface AccessGroupRequireSaml {
  readonly attributeName?: string;
  readonly attributeValue?: string;
  readonly identityProviderId?: string;
}

function accessGroupRequireSamlToTerraform(struct?: AccessGroupRequireSaml): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessGroupRequire {
  readonly anyValidServiceToken?: boolean;
  readonly authMethod?: string;
  readonly certificate?: boolean;
  readonly commonName?: string;
  readonly email?: string[];
  readonly emailDomain?: string[];
  readonly everyone?: boolean;
  readonly geo?: string[];
  readonly group?: string[];
  readonly ip?: string[];
  readonly serviceToken?: string[];
  /** azure block */
  readonly azure?: AccessGroupRequireAzure[];
  /** github block */
  readonly github?: AccessGroupRequireGithub[];
  /** gsuite block */
  readonly gsuite?: AccessGroupRequireGsuite[];
  /** okta block */
  readonly okta?: AccessGroupRequireOkta[];
  /** saml block */
  readonly saml?: AccessGroupRequireSaml[];
}

function accessGroupRequireToTerraform(struct?: AccessGroupRequire): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    any_valid_service_token: cdktf.booleanToTerraform(struct!.anyValidServiceToken),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    certificate: cdktf.booleanToTerraform(struct!.certificate),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    email_domain: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emailDomain),
    everyone: cdktf.booleanToTerraform(struct!.everyone),
    geo: cdktf.listMapper(cdktf.stringToTerraform)(struct!.geo),
    group: cdktf.listMapper(cdktf.stringToTerraform)(struct!.group),
    ip: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ip),
    service_token: cdktf.listMapper(cdktf.stringToTerraform)(struct!.serviceToken),
    azure: cdktf.listMapper(accessGroupRequireAzureToTerraform)(struct!.azure),
    github: cdktf.listMapper(accessGroupRequireGithubToTerraform)(struct!.github),
    gsuite: cdktf.listMapper(accessGroupRequireGsuiteToTerraform)(struct!.gsuite),
    okta: cdktf.listMapper(accessGroupRequireOktaToTerraform)(struct!.okta),
    saml: cdktf.listMapper(accessGroupRequireSamlToTerraform)(struct!.saml),
  }
}


// Resource

export class AccessGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AccessGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_access_group',
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
    this._zoneId = config.zoneId;
    this._exclude = config.exclude;
    this._include = config.include;
    this._require = config.require;
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

  // exclude - computed: false, optional: true, required: false
  private _exclude?: AccessGroupExclude[];
  public get exclude() {
    return this.interpolationForAttribute('exclude') as any;
  }
  public set exclude(value: AccessGroupExclude[] ) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude
  }

  // include - computed: false, optional: false, required: true
  private _include: AccessGroupInclude[];
  public get include() {
    return this.interpolationForAttribute('include') as any;
  }
  public set include(value: AccessGroupInclude[]) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include
  }

  // require - computed: false, optional: true, required: false
  private _require?: AccessGroupRequire[];
  public get require() {
    return this.interpolationForAttribute('require') as any;
  }
  public set require(value: AccessGroupRequire[] ) {
    this._require = value;
  }
  public resetRequire() {
    this._require = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireInput() {
    return this._require
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      name: cdktf.stringToTerraform(this._name),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      exclude: cdktf.listMapper(accessGroupExcludeToTerraform)(this._exclude),
      include: cdktf.listMapper(accessGroupIncludeToTerraform)(this._include),
      require: cdktf.listMapper(accessGroupRequireToTerraform)(this._require),
    };
  }
}
