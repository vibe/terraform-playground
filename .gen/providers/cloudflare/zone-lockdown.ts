// https://www.terraform.io/docs/providers/cloudflare/r/zone_lockdown.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneLockdownConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly paused?: boolean;
  readonly priority?: number;
  readonly urls: string[];
  readonly zoneId: string;
  /** configurations block */
  readonly configurations: ZoneLockdownConfigurations[];
}
export interface ZoneLockdownConfigurations {
  readonly target: string;
  readonly value: string;
}

function zoneLockdownConfigurationsToTerraform(struct?: ZoneLockdownConfigurations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target: cdktf.stringToTerraform(struct!.target),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


// Resource

export class ZoneLockdown extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ZoneLockdownConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zone_lockdown',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._paused = config.paused;
    this._priority = config.priority;
    this._urls = config.urls;
    this._zoneId = config.zoneId;
    this._configurations = config.configurations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // urls - computed: false, optional: false, required: true
  private _urls: string[];
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls
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

  // configurations - computed: false, optional: false, required: true
  private _configurations: ZoneLockdownConfigurations[];
  public get configurations() {
    return this.interpolationForAttribute('configurations') as any;
  }
  public set configurations(value: ZoneLockdownConfigurations[]) {
    this._configurations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      paused: cdktf.booleanToTerraform(this._paused),
      priority: cdktf.numberToTerraform(this._priority),
      urls: cdktf.listMapper(cdktf.stringToTerraform)(this._urls),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      configurations: cdktf.listMapper(zoneLockdownConfigurationsToTerraform)(this._configurations),
    };
  }
}
