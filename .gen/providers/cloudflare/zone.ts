// https://www.terraform.io/docs/providers/cloudflare/r/zone.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneConfig extends cdktf.TerraformMetaArguments {
  readonly jumpStart?: boolean;
  readonly paused?: boolean;
  readonly plan?: string;
  readonly type?: string;
  readonly zone: string;
}

// Resource

export class Zone extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zone',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._jumpStart = config.jumpStart;
    this._paused = config.paused;
    this._plan = config.plan;
    this._type = config.type;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jump_start - computed: false, optional: true, required: false
  private _jumpStart?: boolean;
  public get jumpStart() {
    return this.getBooleanAttribute('jump_start');
  }
  public set jumpStart(value: boolean ) {
    this._jumpStart = value;
  }
  public resetJumpStart() {
    this._jumpStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumpStartInput() {
    return this._jumpStart
  }

  // meta - computed: true, optional: false, required: false
  public meta(key: string): string {
    return new cdktf.StringMap(this, 'meta').lookup(key);
  }

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean;
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean ) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused
  }

  // plan - computed: true, optional: true, required: false
  private _plan?: string;
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string ) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // vanity_name_servers - computed: true, optional: false, required: false
  public get vanityNameServers() {
    return this.getListAttribute('vanity_name_servers');
  }

  // verification_key - computed: true, optional: false, required: false
  public get verificationKey() {
    return this.getStringAttribute('verification_key');
  }

  // zone - computed: false, optional: false, required: true
  private _zone: string;
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      jump_start: cdktf.booleanToTerraform(this._jumpStart),
      paused: cdktf.booleanToTerraform(this._paused),
      plan: cdktf.stringToTerraform(this._plan),
      type: cdktf.stringToTerraform(this._type),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }
}
