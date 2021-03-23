// https://www.terraform.io/docs/providers/cloudflare/r/page_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PageRuleConfig extends cdktf.TerraformMetaArguments {
  readonly priority?: number;
  readonly status?: string;
  readonly target: string;
  readonly zoneId: string;
  /** actions block */
  readonly actions: PageRuleActions[];
}
export interface PageRuleActionsCacheKeyFieldsCookie {
  readonly checkPresence?: string[];
  readonly include?: string[];
}

function pageRuleActionsCacheKeyFieldsCookieToTerraform(struct?: PageRuleActionsCacheKeyFieldsCookie): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    check_presence: cdktf.listMapper(cdktf.stringToTerraform)(struct!.checkPresence),
    include: cdktf.listMapper(cdktf.stringToTerraform)(struct!.include),
  }
}

export interface PageRuleActionsCacheKeyFieldsHeader {
  readonly checkPresence?: string[];
  readonly exclude?: string[];
  readonly include?: string[];
}

function pageRuleActionsCacheKeyFieldsHeaderToTerraform(struct?: PageRuleActionsCacheKeyFieldsHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    check_presence: cdktf.listMapper(cdktf.stringToTerraform)(struct!.checkPresence),
    exclude: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform)(struct!.include),
  }
}

export interface PageRuleActionsCacheKeyFieldsHost {
  readonly resolved?: boolean;
}

function pageRuleActionsCacheKeyFieldsHostToTerraform(struct?: PageRuleActionsCacheKeyFieldsHost): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resolved: cdktf.booleanToTerraform(struct!.resolved),
  }
}

export interface PageRuleActionsCacheKeyFieldsQueryString {
  readonly exclude?: string[];
  readonly ignore?: boolean;
  readonly include?: string[];
}

function pageRuleActionsCacheKeyFieldsQueryStringToTerraform(struct?: PageRuleActionsCacheKeyFieldsQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclude),
    ignore: cdktf.booleanToTerraform(struct!.ignore),
    include: cdktf.listMapper(cdktf.stringToTerraform)(struct!.include),
  }
}

export interface PageRuleActionsCacheKeyFieldsUser {
  readonly deviceType?: boolean;
  readonly geo?: boolean;
  readonly lang?: boolean;
}

function pageRuleActionsCacheKeyFieldsUserToTerraform(struct?: PageRuleActionsCacheKeyFieldsUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_type: cdktf.booleanToTerraform(struct!.deviceType),
    geo: cdktf.booleanToTerraform(struct!.geo),
    lang: cdktf.booleanToTerraform(struct!.lang),
  }
}

export interface PageRuleActionsCacheKeyFields {
  /** cookie block */
  readonly cookie: PageRuleActionsCacheKeyFieldsCookie[];
  /** header block */
  readonly header: PageRuleActionsCacheKeyFieldsHeader[];
  /** host block */
  readonly host: PageRuleActionsCacheKeyFieldsHost[];
  /** query_string block */
  readonly queryString: PageRuleActionsCacheKeyFieldsQueryString[];
  /** user block */
  readonly user: PageRuleActionsCacheKeyFieldsUser[];
}

function pageRuleActionsCacheKeyFieldsToTerraform(struct?: PageRuleActionsCacheKeyFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cookie: cdktf.listMapper(pageRuleActionsCacheKeyFieldsCookieToTerraform)(struct!.cookie),
    header: cdktf.listMapper(pageRuleActionsCacheKeyFieldsHeaderToTerraform)(struct!.header),
    host: cdktf.listMapper(pageRuleActionsCacheKeyFieldsHostToTerraform)(struct!.host),
    query_string: cdktf.listMapper(pageRuleActionsCacheKeyFieldsQueryStringToTerraform)(struct!.queryString),
    user: cdktf.listMapper(pageRuleActionsCacheKeyFieldsUserToTerraform)(struct!.user),
  }
}

export interface PageRuleActionsCacheTtlByStatus {
  readonly codes: string;
  readonly ttl: number;
}

function pageRuleActionsCacheTtlByStatusToTerraform(struct?: PageRuleActionsCacheTtlByStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    codes: cdktf.stringToTerraform(struct!.codes),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}

export interface PageRuleActionsForwardingUrl {
  readonly statusCode: number;
  readonly url: string;
}

function pageRuleActionsForwardingUrlToTerraform(struct?: PageRuleActionsForwardingUrl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface PageRuleActionsMinify {
  readonly css: string;
  readonly html: string;
  readonly js: string;
}

function pageRuleActionsMinifyToTerraform(struct?: PageRuleActionsMinify): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    css: cdktf.stringToTerraform(struct!.css),
    html: cdktf.stringToTerraform(struct!.html),
    js: cdktf.stringToTerraform(struct!.js),
  }
}

export interface PageRuleActions {
  readonly alwaysOnline?: string;
  readonly alwaysUseHttps?: boolean;
  readonly automaticHttpsRewrites?: string;
  readonly browserCacheTtl?: string;
  readonly browserCheck?: string;
  readonly bypassCacheOnCookie?: string;
  readonly cacheByDeviceType?: string;
  readonly cacheDeceptionArmor?: string;
  readonly cacheLevel?: string;
  readonly cacheOnCookie?: string;
  readonly disableApps?: boolean;
  readonly disablePerformance?: boolean;
  readonly disableRailgun?: boolean;
  readonly disableSecurity?: boolean;
  readonly edgeCacheTtl?: number;
  readonly emailObfuscation?: string;
  readonly explicitCacheControl?: string;
  readonly hostHeaderOverride?: string;
  readonly ipGeolocation?: string;
  readonly mirage?: string;
  readonly opportunisticEncryption?: string;
  readonly originErrorPagePassThru?: string;
  readonly polish?: string;
  readonly resolveOverride?: string;
  readonly respectStrongEtag?: string;
  readonly responseBuffering?: string;
  readonly rocketLoader?: string;
  readonly securityLevel?: string;
  readonly serverSideExclude?: string;
  readonly sortQueryStringForCache?: string;
  readonly ssl?: string;
  readonly trueClientIpHeader?: string;
  readonly waf?: string;
  /** cache_key_fields block */
  readonly cacheKeyFields?: PageRuleActionsCacheKeyFields[];
  /** cache_ttl_by_status block */
  readonly cacheTtlByStatus?: PageRuleActionsCacheTtlByStatus[];
  /** forwarding_url block */
  readonly forwardingUrl?: PageRuleActionsForwardingUrl[];
  /** minify block */
  readonly minify?: PageRuleActionsMinify[];
}

function pageRuleActionsToTerraform(struct?: PageRuleActions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    always_online: cdktf.stringToTerraform(struct!.alwaysOnline),
    always_use_https: cdktf.booleanToTerraform(struct!.alwaysUseHttps),
    automatic_https_rewrites: cdktf.stringToTerraform(struct!.automaticHttpsRewrites),
    browser_cache_ttl: cdktf.stringToTerraform(struct!.browserCacheTtl),
    browser_check: cdktf.stringToTerraform(struct!.browserCheck),
    bypass_cache_on_cookie: cdktf.stringToTerraform(struct!.bypassCacheOnCookie),
    cache_by_device_type: cdktf.stringToTerraform(struct!.cacheByDeviceType),
    cache_deception_armor: cdktf.stringToTerraform(struct!.cacheDeceptionArmor),
    cache_level: cdktf.stringToTerraform(struct!.cacheLevel),
    cache_on_cookie: cdktf.stringToTerraform(struct!.cacheOnCookie),
    disable_apps: cdktf.booleanToTerraform(struct!.disableApps),
    disable_performance: cdktf.booleanToTerraform(struct!.disablePerformance),
    disable_railgun: cdktf.booleanToTerraform(struct!.disableRailgun),
    disable_security: cdktf.booleanToTerraform(struct!.disableSecurity),
    edge_cache_ttl: cdktf.numberToTerraform(struct!.edgeCacheTtl),
    email_obfuscation: cdktf.stringToTerraform(struct!.emailObfuscation),
    explicit_cache_control: cdktf.stringToTerraform(struct!.explicitCacheControl),
    host_header_override: cdktf.stringToTerraform(struct!.hostHeaderOverride),
    ip_geolocation: cdktf.stringToTerraform(struct!.ipGeolocation),
    mirage: cdktf.stringToTerraform(struct!.mirage),
    opportunistic_encryption: cdktf.stringToTerraform(struct!.opportunisticEncryption),
    origin_error_page_pass_thru: cdktf.stringToTerraform(struct!.originErrorPagePassThru),
    polish: cdktf.stringToTerraform(struct!.polish),
    resolve_override: cdktf.stringToTerraform(struct!.resolveOverride),
    respect_strong_etag: cdktf.stringToTerraform(struct!.respectStrongEtag),
    response_buffering: cdktf.stringToTerraform(struct!.responseBuffering),
    rocket_loader: cdktf.stringToTerraform(struct!.rocketLoader),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    server_side_exclude: cdktf.stringToTerraform(struct!.serverSideExclude),
    sort_query_string_for_cache: cdktf.stringToTerraform(struct!.sortQueryStringForCache),
    ssl: cdktf.stringToTerraform(struct!.ssl),
    true_client_ip_header: cdktf.stringToTerraform(struct!.trueClientIpHeader),
    waf: cdktf.stringToTerraform(struct!.waf),
    cache_key_fields: cdktf.listMapper(pageRuleActionsCacheKeyFieldsToTerraform)(struct!.cacheKeyFields),
    cache_ttl_by_status: cdktf.listMapper(pageRuleActionsCacheTtlByStatusToTerraform)(struct!.cacheTtlByStatus),
    forwarding_url: cdktf.listMapper(pageRuleActionsForwardingUrlToTerraform)(struct!.forwardingUrl),
    minify: cdktf.listMapper(pageRuleActionsMinifyToTerraform)(struct!.minify),
  }
}


// Resource

export class PageRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PageRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_page_rule',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._priority = config.priority;
    this._status = config.status;
    this._target = config.target;
    this._zoneId = config.zoneId;
    this._actions = config.actions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number;
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number ) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // target - computed: false, optional: false, required: true
  private _target: string;
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target
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

  // actions - computed: false, optional: false, required: true
  private _actions: PageRuleActions[];
  public get actions() {
    return this.interpolationForAttribute('actions') as any;
  }
  public set actions(value: PageRuleActions[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      priority: cdktf.numberToTerraform(this._priority),
      status: cdktf.stringToTerraform(this._status),
      target: cdktf.stringToTerraform(this._target),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      actions: cdktf.listMapper(pageRuleActionsToTerraform)(this._actions),
    };
  }
}
