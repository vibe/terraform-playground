// https://www.terraform.io/docs/providers/cloudflare/r/load_balancer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerConfig extends cdktf.TerraformMetaArguments {
  readonly defaultPoolIds: string[];
  readonly description?: string;
  readonly enabled?: boolean;
  readonly fallbackPoolId: string;
  readonly name: string;
  readonly proxied?: boolean;
  readonly sessionAffinity?: string;
  readonly sessionAffinityAttributes?: { [key: string]: string };
  readonly sessionAffinityTtl?: number;
  readonly steeringPolicy?: string;
  readonly ttl?: number;
  readonly zoneId: string;
  /** pop_pools block */
  readonly popPools?: LoadBalancerPopPools[];
  /** region_pools block */
  readonly regionPools?: LoadBalancerRegionPools[];
}
export interface LoadBalancerPopPools {
  readonly poolIds: string[];
  readonly pop: string;
}

function loadBalancerPopPoolsToTerraform(struct?: LoadBalancerPopPools): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.poolIds),
    pop: cdktf.stringToTerraform(struct!.pop),
  }
}

export interface LoadBalancerRegionPools {
  readonly poolIds: string[];
  readonly region: string;
}

function loadBalancerRegionPoolsToTerraform(struct?: LoadBalancerRegionPools): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.poolIds),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


// Resource

export class LoadBalancer extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_load_balancer',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultPoolIds = config.defaultPoolIds;
    this._description = config.description;
    this._enabled = config.enabled;
    this._fallbackPoolId = config.fallbackPoolId;
    this._name = config.name;
    this._proxied = config.proxied;
    this._sessionAffinity = config.sessionAffinity;
    this._sessionAffinityAttributes = config.sessionAffinityAttributes;
    this._sessionAffinityTtl = config.sessionAffinityTtl;
    this._steeringPolicy = config.steeringPolicy;
    this._ttl = config.ttl;
    this._zoneId = config.zoneId;
    this._popPools = config.popPools;
    this._regionPools = config.regionPools;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // default_pool_ids - computed: false, optional: false, required: true
  private _defaultPoolIds: string[];
  public get defaultPoolIds() {
    return this.getListAttribute('default_pool_ids');
  }
  public set defaultPoolIds(value: string[]) {
    this._defaultPoolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolIdsInput() {
    return this._defaultPoolIds
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // fallback_pool_id - computed: false, optional: false, required: true
  private _fallbackPoolId: string;
  public get fallbackPoolId() {
    return this.getStringAttribute('fallback_pool_id');
  }
  public set fallbackPoolId(value: string) {
    this._fallbackPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPoolIdInput() {
    return this._fallbackPoolId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
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

  // proxied - computed: false, optional: true, required: false
  private _proxied?: boolean;
  public get proxied() {
    return this.getBooleanAttribute('proxied');
  }
  public set proxied(value: boolean ) {
    this._proxied = value;
  }
  public resetProxied() {
    this._proxied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxiedInput() {
    return this._proxied
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: string;
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string ) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity
  }

  // session_affinity_attributes - computed: false, optional: true, required: false
  private _sessionAffinityAttributes?: { [key: string]: string };
  public get sessionAffinityAttributes() {
    return this.interpolationForAttribute('session_affinity_attributes') as any;
  }
  public set sessionAffinityAttributes(value: { [key: string]: string } ) {
    this._sessionAffinityAttributes = value;
  }
  public resetSessionAffinityAttributes() {
    this._sessionAffinityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityAttributesInput() {
    return this._sessionAffinityAttributes
  }

  // session_affinity_ttl - computed: false, optional: true, required: false
  private _sessionAffinityTtl?: number;
  public get sessionAffinityTtl() {
    return this.getNumberAttribute('session_affinity_ttl');
  }
  public set sessionAffinityTtl(value: number ) {
    this._sessionAffinityTtl = value;
  }
  public resetSessionAffinityTtl() {
    this._sessionAffinityTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityTtlInput() {
    return this._sessionAffinityTtl
  }

  // steering_policy - computed: true, optional: true, required: false
  private _steeringPolicy?: string;
  public get steeringPolicy() {
    return this.getStringAttribute('steering_policy');
  }
  public set steeringPolicy(value: string) {
    this._steeringPolicy = value;
  }
  public resetSteeringPolicy() {
    this._steeringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get steeringPolicyInput() {
    return this._steeringPolicy
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number;
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl
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

  // pop_pools - computed: false, optional: true, required: false
  private _popPools?: LoadBalancerPopPools[];
  public get popPools() {
    return this.interpolationForAttribute('pop_pools') as any;
  }
  public set popPools(value: LoadBalancerPopPools[] ) {
    this._popPools = value;
  }
  public resetPopPools() {
    this._popPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popPoolsInput() {
    return this._popPools
  }

  // region_pools - computed: false, optional: true, required: false
  private _regionPools?: LoadBalancerRegionPools[];
  public get regionPools() {
    return this.interpolationForAttribute('region_pools') as any;
  }
  public set regionPools(value: LoadBalancerRegionPools[] ) {
    this._regionPools = value;
  }
  public resetRegionPools() {
    this._regionPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionPoolsInput() {
    return this._regionPools
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_pool_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._defaultPoolIds),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fallback_pool_id: cdktf.stringToTerraform(this._fallbackPoolId),
      name: cdktf.stringToTerraform(this._name),
      proxied: cdktf.booleanToTerraform(this._proxied),
      session_affinity: cdktf.stringToTerraform(this._sessionAffinity),
      session_affinity_attributes: cdktf.hashMapper(cdktf.anyToTerraform)(this._sessionAffinityAttributes),
      session_affinity_ttl: cdktf.numberToTerraform(this._sessionAffinityTtl),
      steering_policy: cdktf.stringToTerraform(this._steeringPolicy),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      pop_pools: cdktf.listMapper(loadBalancerPopPoolsToTerraform)(this._popPools),
      region_pools: cdktf.listMapper(loadBalancerRegionPoolsToTerraform)(this._regionPools),
    };
  }
}
