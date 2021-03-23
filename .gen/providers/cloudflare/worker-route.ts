// https://www.terraform.io/docs/providers/cloudflare/r/worker_route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkerRouteConfig extends cdktf.TerraformMetaArguments {
  readonly pattern: string;
  readonly scriptName?: string;
  readonly zoneId: string;
}

// Resource

export class WorkerRoute extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WorkerRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_worker_route',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._pattern = config.pattern;
    this._scriptName = config.scriptName;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern: string;
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern
  }

  // script_name - computed: false, optional: true, required: false
  private _scriptName?: string;
  public get scriptName() {
    return this.getStringAttribute('script_name');
  }
  public set scriptName(value: string ) {
    this._scriptName = value;
  }
  public resetScriptName() {
    this._scriptName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptNameInput() {
    return this._scriptName
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pattern: cdktf.stringToTerraform(this._pattern),
      script_name: cdktf.stringToTerraform(this._scriptName),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
