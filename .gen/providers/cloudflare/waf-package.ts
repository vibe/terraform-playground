// https://www.terraform.io/docs/providers/cloudflare/r/waf_package.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafPackageConfig extends cdktf.TerraformMetaArguments {
  readonly actionMode?: string;
  readonly packageId: string;
  readonly sensitivity?: string;
  readonly zoneId: string;
}

// Resource

export class WafPackage extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafPackageConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_waf_package',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._actionMode = config.actionMode;
    this._packageId = config.packageId;
    this._sensitivity = config.sensitivity;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_mode - computed: false, optional: true, required: false
  private _actionMode?: string;
  public get actionMode() {
    return this.getStringAttribute('action_mode');
  }
  public set actionMode(value: string ) {
    this._actionMode = value;
  }
  public resetActionMode() {
    this._actionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionModeInput() {
    return this._actionMode
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // package_id - computed: false, optional: false, required: true
  private _packageId: string;
  public get packageId() {
    return this.getStringAttribute('package_id');
  }
  public set packageId(value: string) {
    this._packageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageIdInput() {
    return this._packageId
  }

  // sensitivity - computed: false, optional: true, required: false
  private _sensitivity?: string;
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string ) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity
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
      action_mode: cdktf.stringToTerraform(this._actionMode),
      package_id: cdktf.stringToTerraform(this._packageId),
      sensitivity: cdktf.stringToTerraform(this._sensitivity),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
