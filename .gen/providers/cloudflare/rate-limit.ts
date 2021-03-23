// https://www.terraform.io/docs/providers/cloudflare/r/rate_limit.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RateLimitConfig extends cdktf.TerraformMetaArguments {
  readonly bypassUrlPatterns?: string[];
  readonly description?: string;
  readonly disabled?: boolean;
  readonly period: number;
  readonly threshold: number;
  readonly zoneId: string;
  /** action block */
  readonly action: RateLimitAction[];
  /** correlate block */
  readonly correlate?: RateLimitCorrelate[];
  /** match block */
  readonly match?: RateLimitMatch[];
}
export interface RateLimitActionResponse {
  readonly body: string;
  readonly contentType: string;
}

function rateLimitActionResponseToTerraform(struct?: RateLimitActionResponse): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    content_type: cdktf.stringToTerraform(struct!.contentType),
  }
}

export interface RateLimitAction {
  readonly mode: string;
  readonly timeout?: number;
  /** response block */
  readonly response?: RateLimitActionResponse[];
}

function rateLimitActionToTerraform(struct?: RateLimitAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    response: cdktf.listMapper(rateLimitActionResponseToTerraform)(struct!.response),
  }
}

export interface RateLimitCorrelate {
  readonly by?: string;
}

function rateLimitCorrelateToTerraform(struct?: RateLimitCorrelate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    by: cdktf.stringToTerraform(struct!.by),
  }
}

export interface RateLimitMatchRequest {
  readonly methods?: string[];
  readonly schemes?: string[];
  readonly urlPattern?: string;
}

function rateLimitMatchRequestToTerraform(struct?: RateLimitMatchRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.methods),
    schemes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.schemes),
    url_pattern: cdktf.stringToTerraform(struct!.urlPattern),
  }
}

export interface RateLimitMatchResponse {
  readonly headers?: { [key: string]: string };
  readonly originTraffic?: boolean;
  readonly statuses?: number[];
}

function rateLimitMatchResponseToTerraform(struct?: RateLimitMatchResponse): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    headers: cdktf.listMapper(cdktf.hashMapper(cdktf.anyToTerraform))(struct!.headers),
    origin_traffic: cdktf.booleanToTerraform(struct!.originTraffic),
    statuses: cdktf.listMapper(cdktf.numberToTerraform)(struct!.statuses),
  }
}

export interface RateLimitMatch {
  /** request block */
  readonly request?: RateLimitMatchRequest[];
  /** response block */
  readonly response?: RateLimitMatchResponse[];
}

function rateLimitMatchToTerraform(struct?: RateLimitMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    request: cdktf.listMapper(rateLimitMatchRequestToTerraform)(struct!.request),
    response: cdktf.listMapper(rateLimitMatchResponseToTerraform)(struct!.response),
  }
}


// Resource

export class RateLimit extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RateLimitConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_rate_limit',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bypassUrlPatterns = config.bypassUrlPatterns;
    this._description = config.description;
    this._disabled = config.disabled;
    this._period = config.period;
    this._threshold = config.threshold;
    this._zoneId = config.zoneId;
    this._action = config.action;
    this._correlate = config.correlate;
    this._match = config.match;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass_url_patterns - computed: false, optional: true, required: false
  private _bypassUrlPatterns?: string[];
  public get bypassUrlPatterns() {
    return this.getListAttribute('bypass_url_patterns');
  }
  public set bypassUrlPatterns(value: string[] ) {
    this._bypassUrlPatterns = value;
  }
  public resetBypassUrlPatterns() {
    this._bypassUrlPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassUrlPatternsInput() {
    return this._bypassUrlPatterns
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean;
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean ) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // period - computed: false, optional: false, required: true
  private _period: number;
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold: number;
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold
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

  // action - computed: false, optional: false, required: true
  private _action: RateLimitAction[];
  public get action() {
    return this.interpolationForAttribute('action') as any;
  }
  public set action(value: RateLimitAction[]) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // correlate - computed: false, optional: true, required: false
  private _correlate?: RateLimitCorrelate[];
  public get correlate() {
    return this.interpolationForAttribute('correlate') as any;
  }
  public set correlate(value: RateLimitCorrelate[] ) {
    this._correlate = value;
  }
  public resetCorrelate() {
    this._correlate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlateInput() {
    return this._correlate
  }

  // match - computed: false, optional: true, required: false
  private _match?: RateLimitMatch[];
  public get match() {
    return this.interpolationForAttribute('match') as any;
  }
  public set match(value: RateLimitMatch[] ) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypass_url_patterns: cdktf.listMapper(cdktf.stringToTerraform)(this._bypassUrlPatterns),
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      period: cdktf.numberToTerraform(this._period),
      threshold: cdktf.numberToTerraform(this._threshold),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      action: cdktf.listMapper(rateLimitActionToTerraform)(this._action),
      correlate: cdktf.listMapper(rateLimitCorrelateToTerraform)(this._correlate),
      match: cdktf.listMapper(rateLimitMatchToTerraform)(this._match),
    };
  }
}
