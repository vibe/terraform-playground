// https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerPoolConfig extends cdktf.TerraformMetaArguments {
  readonly checkRegions?: string[];
  readonly description?: string;
  readonly enabled?: boolean;
  readonly minimumOrigins?: number;
  readonly monitor?: string;
  readonly name: string;
  readonly notificationEmail?: string;
  /** origins block */
  readonly origins: LoadBalancerPoolOrigins[];
}
export interface LoadBalancerPoolOrigins {
  readonly address: string;
  readonly enabled?: boolean;
  readonly name: string;
  readonly weight?: number;
}

function loadBalancerPoolOriginsToTerraform(struct?: LoadBalancerPoolOrigins): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


// Resource

export class LoadBalancerPool extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoadBalancerPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_load_balancer_pool',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._checkRegions = config.checkRegions;
    this._description = config.description;
    this._enabled = config.enabled;
    this._minimumOrigins = config.minimumOrigins;
    this._monitor = config.monitor;
    this._name = config.name;
    this._notificationEmail = config.notificationEmail;
    this._origins = config.origins;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_regions - computed: true, optional: true, required: false
  private _checkRegions?: string[];
  public get checkRegions() {
    return this.getListAttribute('check_regions');
  }
  public set checkRegions(value: string[]) {
    this._checkRegions = value;
  }
  public resetCheckRegions() {
    this._checkRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkRegionsInput() {
    return this._checkRegions
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // minimum_origins - computed: false, optional: true, required: false
  private _minimumOrigins?: number;
  public get minimumOrigins() {
    return this.getNumberAttribute('minimum_origins');
  }
  public set minimumOrigins(value: number ) {
    this._minimumOrigins = value;
  }
  public resetMinimumOrigins() {
    this._minimumOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumOriginsInput() {
    return this._minimumOrigins
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: string;
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string ) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor
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

  // notification_email - computed: false, optional: true, required: false
  private _notificationEmail?: string;
  public get notificationEmail() {
    return this.getStringAttribute('notification_email');
  }
  public set notificationEmail(value: string ) {
    this._notificationEmail = value;
  }
  public resetNotificationEmail() {
    this._notificationEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailInput() {
    return this._notificationEmail
  }

  // origins - computed: false, optional: false, required: true
  private _origins: LoadBalancerPoolOrigins[];
  public get origins() {
    return this.interpolationForAttribute('origins') as any;
  }
  public set origins(value: LoadBalancerPoolOrigins[]) {
    this._origins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_regions: cdktf.listMapper(cdktf.stringToTerraform)(this._checkRegions),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      minimum_origins: cdktf.numberToTerraform(this._minimumOrigins),
      monitor: cdktf.stringToTerraform(this._monitor),
      name: cdktf.stringToTerraform(this._name),
      notification_email: cdktf.stringToTerraform(this._notificationEmail),
      origins: cdktf.listMapper(loadBalancerPoolOriginsToTerraform)(this._origins),
    };
  }
}
