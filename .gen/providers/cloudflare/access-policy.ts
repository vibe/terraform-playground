// https://www.terraform.io/docs/providers/cloudflare/r/access_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly accountId?: string;
  readonly applicationId: string;
  readonly decision: string;
  readonly name: string;
  readonly precedence: number;
  readonly zoneId?: string;
  /** exclude block */
  readonly exclude?: AccessPolicyExclude[];
  /** include block */
  readonly include: AccessPolicyInclude[];
  /** require block */
  readonly require?: AccessPolicyRequire[];
}
export interface AccessPolicyExcludeAzure {
  readonly id?: string[];
  readonly identityProviderId?: string;
}

function accessPolicyExcludeAzureToTerraform(struct?: AccessPolicyExcludeAzure): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessPolicyExcludeGithub {
  readonly identityProviderId?: string;
  readonly name?: string;
  readonly teams?: string[];
}

function accessPolicyExcludeGithubToTerraform(struct?: AccessPolicyExcludeGithub): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    teams: cdktf.listMapper(cdktf.stringToTerraform)(struct!.teams),
  }
}

export interface AccessPolicyExcludeGsuite {
  readonly email?: string[];
  readonly identityProviderId?: string;
}

function accessPolicyExcludeGsuiteToTerraform(struct?: AccessPolicyExcludeGsuite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessPolicyExcludeOkta {
  readonly identityProviderId?: string;
  readonly name?: string[];
}

function accessPolicyExcludeOktaToTerraform(struct?: AccessPolicyExcludeOkta): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform)(struct!.name),
  }
}

export interface AccessPolicyExcludeSaml {
  readonly attributeName?: string;
  readonly attributeValue?: string;
  readonly identityProviderId?: string;
}

function accessPolicyExcludeSamlToTerraform(struct?: AccessPolicyExcludeSaml): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessPolicyExclude {
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
  readonly azure?: AccessPolicyExcludeAzure[];
  /** github block */
  readonly github?: AccessPolicyExcludeGithub[];
  /** gsuite block */
  readonly gsuite?: AccessPolicyExcludeGsuite[];
  /** okta block */
  readonly okta?: AccessPolicyExcludeOkta[];
  /** saml block */
  readonly saml?: AccessPolicyExcludeSaml[];
}

function accessPolicyExcludeToTerraform(struct?: AccessPolicyExclude): any {
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
    azure: cdktf.listMapper(accessPolicyExcludeAzureToTerraform)(struct!.azure),
    github: cdktf.listMapper(accessPolicyExcludeGithubToTerraform)(struct!.github),
    gsuite: cdktf.listMapper(accessPolicyExcludeGsuiteToTerraform)(struct!.gsuite),
    okta: cdktf.listMapper(accessPolicyExcludeOktaToTerraform)(struct!.okta),
    saml: cdktf.listMapper(accessPolicyExcludeSamlToTerraform)(struct!.saml),
  }
}

export interface AccessPolicyIncludeAzure {
  readonly id?: string[];
  readonly identityProviderId?: string;
}

function accessPolicyIncludeAzureToTerraform(struct?: AccessPolicyIncludeAzure): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessPolicyIncludeGithub {
  readonly identityProviderId?: string;
  readonly name?: string;
  readonly teams?: string[];
}

function accessPolicyIncludeGithubToTerraform(struct?: AccessPolicyIncludeGithub): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    teams: cdktf.listMapper(cdktf.stringToTerraform)(struct!.teams),
  }
}

export interface AccessPolicyIncludeGsuite {
  readonly email?: string[];
  readonly identityProviderId?: string;
}

function accessPolicyIncludeGsuiteToTerraform(struct?: AccessPolicyIncludeGsuite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessPolicyIncludeOkta {
  readonly identityProviderId?: string;
  readonly name?: string[];
}

function accessPolicyIncludeOktaToTerraform(struct?: AccessPolicyIncludeOkta): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform)(struct!.name),
  }
}

export interface AccessPolicyIncludeSaml {
  readonly attributeName?: string;
  readonly attributeValue?: string;
  readonly identityProviderId?: string;
}

function accessPolicyIncludeSamlToTerraform(struct?: AccessPolicyIncludeSaml): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessPolicyInclude {
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
  readonly azure?: AccessPolicyIncludeAzure[];
  /** github block */
  readonly github?: AccessPolicyIncludeGithub[];
  /** gsuite block */
  readonly gsuite?: AccessPolicyIncludeGsuite[];
  /** okta block */
  readonly okta?: AccessPolicyIncludeOkta[];
  /** saml block */
  readonly saml?: AccessPolicyIncludeSaml[];
}

function accessPolicyIncludeToTerraform(struct?: AccessPolicyInclude): any {
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
    azure: cdktf.listMapper(accessPolicyIncludeAzureToTerraform)(struct!.azure),
    github: cdktf.listMapper(accessPolicyIncludeGithubToTerraform)(struct!.github),
    gsuite: cdktf.listMapper(accessPolicyIncludeGsuiteToTerraform)(struct!.gsuite),
    okta: cdktf.listMapper(accessPolicyIncludeOktaToTerraform)(struct!.okta),
    saml: cdktf.listMapper(accessPolicyIncludeSamlToTerraform)(struct!.saml),
  }
}

export interface AccessPolicyRequireAzure {
  readonly id?: string[];
  readonly identityProviderId?: string;
}

function accessPolicyRequireAzureToTerraform(struct?: AccessPolicyRequireAzure): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform)(struct!.id),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessPolicyRequireGithub {
  readonly identityProviderId?: string;
  readonly name?: string;
  readonly teams?: string[];
}

function accessPolicyRequireGithubToTerraform(struct?: AccessPolicyRequireGithub): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.stringToTerraform(struct!.name),
    teams: cdktf.listMapper(cdktf.stringToTerraform)(struct!.teams),
  }
}

export interface AccessPolicyRequireGsuite {
  readonly email?: string[];
  readonly identityProviderId?: string;
}

function accessPolicyRequireGsuiteToTerraform(struct?: AccessPolicyRequireGsuite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform)(struct!.email),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessPolicyRequireOkta {
  readonly identityProviderId?: string;
  readonly name?: string[];
}

function accessPolicyRequireOktaToTerraform(struct?: AccessPolicyRequireOkta): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
    name: cdktf.listMapper(cdktf.stringToTerraform)(struct!.name),
  }
}

export interface AccessPolicyRequireSaml {
  readonly attributeName?: string;
  readonly attributeValue?: string;
  readonly identityProviderId?: string;
}

function accessPolicyRequireSamlToTerraform(struct?: AccessPolicyRequireSaml): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    identity_provider_id: cdktf.stringToTerraform(struct!.identityProviderId),
  }
}

export interface AccessPolicyRequire {
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
  readonly azure?: AccessPolicyRequireAzure[];
  /** github block */
  readonly github?: AccessPolicyRequireGithub[];
  /** gsuite block */
  readonly gsuite?: AccessPolicyRequireGsuite[];
  /** okta block */
  readonly okta?: AccessPolicyRequireOkta[];
  /** saml block */
  readonly saml?: AccessPolicyRequireSaml[];
}

function accessPolicyRequireToTerraform(struct?: AccessPolicyRequire): any {
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
    azure: cdktf.listMapper(accessPolicyRequireAzureToTerraform)(struct!.azure),
    github: cdktf.listMapper(accessPolicyRequireGithubToTerraform)(struct!.github),
    gsuite: cdktf.listMapper(accessPolicyRequireGsuiteToTerraform)(struct!.gsuite),
    okta: cdktf.listMapper(accessPolicyRequireOktaToTerraform)(struct!.okta),
    saml: cdktf.listMapper(accessPolicyRequireSamlToTerraform)(struct!.saml),
  }
}


// Resource

export class AccessPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._applicationId = config.applicationId;
    this._decision = config.decision;
    this._name = config.name;
    this._precedence = config.precedence;
    this._zoneId = config.zoneId;
    this._exclude = config.exclude;
    this._include = config.include;
    this._require = config.require;
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

  // application_id - computed: false, optional: false, required: true
  private _applicationId: string;
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId
  }

  // decision - computed: false, optional: false, required: true
  private _decision: string;
  public get decision() {
    return this.getStringAttribute('decision');
  }
  public set decision(value: string) {
    this._decision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionInput() {
    return this._decision
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

  // precedence - computed: false, optional: false, required: true
  private _precedence: number;
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
  public set precedence(value: number) {
    this._precedence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence
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
  private _exclude?: AccessPolicyExclude[];
  public get exclude() {
    return this.interpolationForAttribute('exclude') as any;
  }
  public set exclude(value: AccessPolicyExclude[] ) {
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
  private _include: AccessPolicyInclude[];
  public get include() {
    return this.interpolationForAttribute('include') as any;
  }
  public set include(value: AccessPolicyInclude[]) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include
  }

  // require - computed: false, optional: true, required: false
  private _require?: AccessPolicyRequire[];
  public get require() {
    return this.interpolationForAttribute('require') as any;
  }
  public set require(value: AccessPolicyRequire[] ) {
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
      application_id: cdktf.stringToTerraform(this._applicationId),
      decision: cdktf.stringToTerraform(this._decision),
      name: cdktf.stringToTerraform(this._name),
      precedence: cdktf.numberToTerraform(this._precedence),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      exclude: cdktf.listMapper(accessPolicyExcludeToTerraform)(this._exclude),
      include: cdktf.listMapper(accessPolicyIncludeToTerraform)(this._include),
      require: cdktf.listMapper(accessPolicyRequireToTerraform)(this._require),
    };
  }
}
