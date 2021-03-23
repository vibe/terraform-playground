// https://www.terraform.io/docs/providers/cloudflare/r/zone_settings_override.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneSettingsOverrideConfig extends cdktf.TerraformMetaArguments {
  readonly zoneId: string;
  /** settings block */
  readonly settings?: ZoneSettingsOverrideSettings[];
}
export class ZoneSettingsOverrideInitialSettingsMinify extends cdktf.ComplexComputedList {

  // css - computed: true, optional: false, required: false
  public get css() {
    return this.getStringAttribute('css');
  }

  // html - computed: true, optional: false, required: false
  public get html() {
    return this.getStringAttribute('html');
  }

  // js - computed: true, optional: false, required: false
  public get js() {
    return this.getStringAttribute('js');
  }
}
export class ZoneSettingsOverrideInitialSettingsMobileRedirect extends cdktf.ComplexComputedList {

  // mobile_subdomain - computed: true, optional: false, required: false
  public get mobileSubdomain() {
    return this.getStringAttribute('mobile_subdomain');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // strip_uri - computed: true, optional: false, required: false
  public get stripUri() {
    return this.getBooleanAttribute('strip_uri');
  }
}
export class ZoneSettingsOverrideInitialSettingsSecurityHeader extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // include_subdomains - computed: true, optional: false, required: false
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }

  // nosniff - computed: true, optional: false, required: false
  public get nosniff() {
    return this.getBooleanAttribute('nosniff');
  }

  // preload - computed: true, optional: false, required: false
  public get preload() {
    return this.getBooleanAttribute('preload');
  }
}
export class ZoneSettingsOverrideInitialSettings extends cdktf.ComplexComputedList {

  // always_online - computed: true, optional: false, required: false
  public get alwaysOnline() {
    return this.getStringAttribute('always_online');
  }

  // always_use_https - computed: true, optional: false, required: false
  public get alwaysUseHttps() {
    return this.getStringAttribute('always_use_https');
  }

  // automatic_https_rewrites - computed: true, optional: false, required: false
  public get automaticHttpsRewrites() {
    return this.getStringAttribute('automatic_https_rewrites');
  }

  // brotli - computed: true, optional: false, required: false
  public get brotli() {
    return this.getStringAttribute('brotli');
  }

  // browser_cache_ttl - computed: true, optional: false, required: false
  public get browserCacheTtl() {
    return this.getNumberAttribute('browser_cache_ttl');
  }

  // browser_check - computed: true, optional: false, required: false
  public get browserCheck() {
    return this.getStringAttribute('browser_check');
  }

  // cache_level - computed: true, optional: false, required: false
  public get cacheLevel() {
    return this.getStringAttribute('cache_level');
  }

  // challenge_ttl - computed: true, optional: false, required: false
  public get challengeTtl() {
    return this.getNumberAttribute('challenge_ttl');
  }

  // cname_flattening - computed: true, optional: false, required: false
  public get cnameFlattening() {
    return this.getStringAttribute('cname_flattening');
  }

  // development_mode - computed: true, optional: false, required: false
  public get developmentMode() {
    return this.getStringAttribute('development_mode');
  }

  // email_obfuscation - computed: true, optional: false, required: false
  public get emailObfuscation() {
    return this.getStringAttribute('email_obfuscation');
  }

  // h2_prioritization - computed: true, optional: false, required: false
  public get h2Prioritization() {
    return this.getStringAttribute('h2_prioritization');
  }

  // hotlink_protection - computed: true, optional: false, required: false
  public get hotlinkProtection() {
    return this.getStringAttribute('hotlink_protection');
  }

  // http2 - computed: true, optional: false, required: false
  public get http2() {
    return this.getStringAttribute('http2');
  }

  // http3 - computed: true, optional: false, required: false
  public get http3() {
    return this.getStringAttribute('http3');
  }

  // image_resizing - computed: true, optional: false, required: false
  public get imageResizing() {
    return this.getStringAttribute('image_resizing');
  }

  // ip_geolocation - computed: true, optional: false, required: false
  public get ipGeolocation() {
    return this.getStringAttribute('ip_geolocation');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }

  // max_upload - computed: true, optional: false, required: false
  public get maxUpload() {
    return this.getNumberAttribute('max_upload');
  }

  // min_tls_version - computed: true, optional: false, required: false
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }

  // minify - computed: true, optional: false, required: false
  public get minify() {
    return this.interpolationForAttribute('minify') as any;
  }

  // mirage - computed: true, optional: false, required: false
  public get mirage() {
    return this.getStringAttribute('mirage');
  }

  // mobile_redirect - computed: true, optional: false, required: false
  public get mobileRedirect() {
    return this.interpolationForAttribute('mobile_redirect') as any;
  }

  // opportunistic_encryption - computed: true, optional: false, required: false
  public get opportunisticEncryption() {
    return this.getStringAttribute('opportunistic_encryption');
  }

  // opportunistic_onion - computed: true, optional: false, required: false
  public get opportunisticOnion() {
    return this.getStringAttribute('opportunistic_onion');
  }

  // origin_error_page_pass_thru - computed: true, optional: false, required: false
  public get originErrorPagePassThru() {
    return this.getStringAttribute('origin_error_page_pass_thru');
  }

  // polish - computed: true, optional: false, required: false
  public get polish() {
    return this.getStringAttribute('polish');
  }

  // prefetch_preload - computed: true, optional: false, required: false
  public get prefetchPreload() {
    return this.getStringAttribute('prefetch_preload');
  }

  // privacy_pass - computed: true, optional: false, required: false
  public get privacyPass() {
    return this.getStringAttribute('privacy_pass');
  }

  // pseudo_ipv4 - computed: true, optional: false, required: false
  public get pseudoIpv4() {
    return this.getStringAttribute('pseudo_ipv4');
  }

  // response_buffering - computed: true, optional: false, required: false
  public get responseBuffering() {
    return this.getStringAttribute('response_buffering');
  }

  // rocket_loader - computed: true, optional: false, required: false
  public get rocketLoader() {
    return this.getStringAttribute('rocket_loader');
  }

  // security_header - computed: true, optional: false, required: false
  public get securityHeader() {
    return this.interpolationForAttribute('security_header') as any;
  }

  // security_level - computed: true, optional: false, required: false
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }

  // server_side_exclude - computed: true, optional: false, required: false
  public get serverSideExclude() {
    return this.getStringAttribute('server_side_exclude');
  }

  // sort_query_string_for_cache - computed: true, optional: false, required: false
  public get sortQueryStringForCache() {
    return this.getStringAttribute('sort_query_string_for_cache');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getStringAttribute('ssl');
  }

  // tls_1_2_only - computed: true, optional: false, required: false
  public get tls12Only() {
    return this.getStringAttribute('tls_1_2_only');
  }

  // tls_1_3 - computed: true, optional: false, required: false
  public get tls13() {
    return this.getStringAttribute('tls_1_3');
  }

  // tls_client_auth - computed: true, optional: false, required: false
  public get tlsClientAuth() {
    return this.getStringAttribute('tls_client_auth');
  }

  // true_client_ip_header - computed: true, optional: false, required: false
  public get trueClientIpHeader() {
    return this.getStringAttribute('true_client_ip_header');
  }

  // universal_ssl - computed: true, optional: false, required: false
  public get universalSsl() {
    return this.getStringAttribute('universal_ssl');
  }

  // waf - computed: true, optional: false, required: false
  public get waf() {
    return this.getStringAttribute('waf');
  }

  // webp - computed: true, optional: false, required: false
  public get webp() {
    return this.getStringAttribute('webp');
  }

  // websockets - computed: true, optional: false, required: false
  public get websockets() {
    return this.getStringAttribute('websockets');
  }

  // zero_rtt - computed: true, optional: false, required: false
  public get zeroRtt() {
    return this.getStringAttribute('zero_rtt');
  }
}
export interface ZoneSettingsOverrideSettingsMinify {
  readonly css: string;
  readonly html: string;
  readonly js: string;
}

function zoneSettingsOverrideSettingsMinifyToTerraform(struct?: ZoneSettingsOverrideSettingsMinify): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    css: cdktf.stringToTerraform(struct!.css),
    html: cdktf.stringToTerraform(struct!.html),
    js: cdktf.stringToTerraform(struct!.js),
  }
}

export interface ZoneSettingsOverrideSettingsMobileRedirect {
  readonly mobileSubdomain: string;
  readonly status: string;
  readonly stripUri: boolean;
}

function zoneSettingsOverrideSettingsMobileRedirectToTerraform(struct?: ZoneSettingsOverrideSettingsMobileRedirect): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mobile_subdomain: cdktf.stringToTerraform(struct!.mobileSubdomain),
    status: cdktf.stringToTerraform(struct!.status),
    strip_uri: cdktf.booleanToTerraform(struct!.stripUri),
  }
}

export interface ZoneSettingsOverrideSettingsSecurityHeader {
  readonly enabled?: boolean;
  readonly includeSubdomains?: boolean;
  readonly maxAge?: number;
  readonly nosniff?: boolean;
  readonly preload?: boolean;
}

function zoneSettingsOverrideSettingsSecurityHeaderToTerraform(struct?: ZoneSettingsOverrideSettingsSecurityHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    include_subdomains: cdktf.booleanToTerraform(struct!.includeSubdomains),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    nosniff: cdktf.booleanToTerraform(struct!.nosniff),
    preload: cdktf.booleanToTerraform(struct!.preload),
  }
}

export interface ZoneSettingsOverrideSettings {
  readonly alwaysOnline?: string;
  readonly alwaysUseHttps?: string;
  readonly automaticHttpsRewrites?: string;
  readonly brotli?: string;
  readonly browserCacheTtl?: number;
  readonly browserCheck?: string;
  readonly cacheLevel?: string;
  readonly challengeTtl?: number;
  readonly cnameFlattening?: string;
  readonly developmentMode?: string;
  readonly emailObfuscation?: string;
  readonly h2Prioritization?: string;
  readonly hotlinkProtection?: string;
  readonly http2?: string;
  readonly http3?: string;
  readonly imageResizing?: string;
  readonly ipGeolocation?: string;
  readonly ipv6?: string;
  readonly maxUpload?: number;
  readonly minTlsVersion?: string;
  readonly mirage?: string;
  readonly opportunisticEncryption?: string;
  readonly opportunisticOnion?: string;
  readonly originErrorPagePassThru?: string;
  readonly polish?: string;
  readonly prefetchPreload?: string;
  readonly privacyPass?: string;
  readonly pseudoIpv4?: string;
  readonly responseBuffering?: string;
  readonly rocketLoader?: string;
  readonly securityLevel?: string;
  readonly serverSideExclude?: string;
  readonly sortQueryStringForCache?: string;
  readonly ssl?: string;
  readonly tls12Only?: string;
  readonly tls13?: string;
  readonly tlsClientAuth?: string;
  readonly trueClientIpHeader?: string;
  readonly universalSsl?: string;
  readonly waf?: string;
  readonly webp?: string;
  readonly websockets?: string;
  readonly zeroRtt?: string;
  /** minify block */
  readonly minify?: ZoneSettingsOverrideSettingsMinify[];
  /** mobile_redirect block */
  readonly mobileRedirect?: ZoneSettingsOverrideSettingsMobileRedirect[];
  /** security_header block */
  readonly securityHeader?: ZoneSettingsOverrideSettingsSecurityHeader[];
}

function zoneSettingsOverrideSettingsToTerraform(struct?: ZoneSettingsOverrideSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    always_online: cdktf.stringToTerraform(struct!.alwaysOnline),
    always_use_https: cdktf.stringToTerraform(struct!.alwaysUseHttps),
    automatic_https_rewrites: cdktf.stringToTerraform(struct!.automaticHttpsRewrites),
    brotli: cdktf.stringToTerraform(struct!.brotli),
    browser_cache_ttl: cdktf.numberToTerraform(struct!.browserCacheTtl),
    browser_check: cdktf.stringToTerraform(struct!.browserCheck),
    cache_level: cdktf.stringToTerraform(struct!.cacheLevel),
    challenge_ttl: cdktf.numberToTerraform(struct!.challengeTtl),
    cname_flattening: cdktf.stringToTerraform(struct!.cnameFlattening),
    development_mode: cdktf.stringToTerraform(struct!.developmentMode),
    email_obfuscation: cdktf.stringToTerraform(struct!.emailObfuscation),
    h2_prioritization: cdktf.stringToTerraform(struct!.h2Prioritization),
    hotlink_protection: cdktf.stringToTerraform(struct!.hotlinkProtection),
    http2: cdktf.stringToTerraform(struct!.http2),
    http3: cdktf.stringToTerraform(struct!.http3),
    image_resizing: cdktf.stringToTerraform(struct!.imageResizing),
    ip_geolocation: cdktf.stringToTerraform(struct!.ipGeolocation),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    max_upload: cdktf.numberToTerraform(struct!.maxUpload),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    mirage: cdktf.stringToTerraform(struct!.mirage),
    opportunistic_encryption: cdktf.stringToTerraform(struct!.opportunisticEncryption),
    opportunistic_onion: cdktf.stringToTerraform(struct!.opportunisticOnion),
    origin_error_page_pass_thru: cdktf.stringToTerraform(struct!.originErrorPagePassThru),
    polish: cdktf.stringToTerraform(struct!.polish),
    prefetch_preload: cdktf.stringToTerraform(struct!.prefetchPreload),
    privacy_pass: cdktf.stringToTerraform(struct!.privacyPass),
    pseudo_ipv4: cdktf.stringToTerraform(struct!.pseudoIpv4),
    response_buffering: cdktf.stringToTerraform(struct!.responseBuffering),
    rocket_loader: cdktf.stringToTerraform(struct!.rocketLoader),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    server_side_exclude: cdktf.stringToTerraform(struct!.serverSideExclude),
    sort_query_string_for_cache: cdktf.stringToTerraform(struct!.sortQueryStringForCache),
    ssl: cdktf.stringToTerraform(struct!.ssl),
    tls_1_2_only: cdktf.stringToTerraform(struct!.tls12Only),
    tls_1_3: cdktf.stringToTerraform(struct!.tls13),
    tls_client_auth: cdktf.stringToTerraform(struct!.tlsClientAuth),
    true_client_ip_header: cdktf.stringToTerraform(struct!.trueClientIpHeader),
    universal_ssl: cdktf.stringToTerraform(struct!.universalSsl),
    waf: cdktf.stringToTerraform(struct!.waf),
    webp: cdktf.stringToTerraform(struct!.webp),
    websockets: cdktf.stringToTerraform(struct!.websockets),
    zero_rtt: cdktf.stringToTerraform(struct!.zeroRtt),
    minify: cdktf.listMapper(zoneSettingsOverrideSettingsMinifyToTerraform)(struct!.minify),
    mobile_redirect: cdktf.listMapper(zoneSettingsOverrideSettingsMobileRedirectToTerraform)(struct!.mobileRedirect),
    security_header: cdktf.listMapper(zoneSettingsOverrideSettingsSecurityHeaderToTerraform)(struct!.securityHeader),
  }
}


// Resource

export class ZoneSettingsOverride extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ZoneSettingsOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zone_settings_override',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._zoneId = config.zoneId;
    this._settings = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_settings - computed: true, optional: false, required: false
  public initialSettings(index: string) {
    return new ZoneSettingsOverrideInitialSettings(this, 'initial_settings', index);
  }

  // initial_settings_read_at - computed: true, optional: false, required: false
  public get initialSettingsReadAt() {
    return this.getStringAttribute('initial_settings_read_at');
  }

  // readonly_settings - computed: true, optional: false, required: false
  public get readonlySettings() {
    return this.getListAttribute('readonly_settings');
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

  // zone_status - computed: true, optional: false, required: false
  public get zoneStatus() {
    return this.getStringAttribute('zone_status');
  }

  // zone_type - computed: true, optional: false, required: false
  public get zoneType() {
    return this.getStringAttribute('zone_type');
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: ZoneSettingsOverrideSettings[];
  public get settings() {
    return this.interpolationForAttribute('settings') as any;
  }
  public set settings(value: ZoneSettingsOverrideSettings[] ) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      zone_id: cdktf.stringToTerraform(this._zoneId),
      settings: cdktf.listMapper(zoneSettingsOverrideSettingsToTerraform)(this._settings),
    };
  }
}
