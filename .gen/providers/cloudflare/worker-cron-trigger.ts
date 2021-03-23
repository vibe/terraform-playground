// https://www.terraform.io/docs/providers/cloudflare/r/worker_cron_trigger.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkerCronTriggerConfig extends cdktf.TerraformMetaArguments {
  readonly schedules: string[];
  readonly scriptName: string;
}

// Resource

export class WorkerCronTrigger extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WorkerCronTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_worker_cron_trigger',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._schedules = config.schedules;
    this._scriptName = config.scriptName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schedules - computed: false, optional: false, required: true
  private _schedules: string[];
  public get schedules() {
    return this.getListAttribute('schedules');
  }
  public set schedules(value: string[]) {
    this._schedules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules
  }

  // script_name - computed: false, optional: false, required: true
  private _scriptName: string;
  public get scriptName() {
    return this.getStringAttribute('script_name');
  }
  public set scriptName(value: string) {
    this._scriptName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptNameInput() {
    return this._scriptName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      schedules: cdktf.listMapper(cdktf.stringToTerraform)(this._schedules),
      script_name: cdktf.stringToTerraform(this._scriptName),
    };
  }
}
