// https://www.terraform.io/docs/providers/cloudflare/r/waf_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafGroupConfig extends cdktf.TerraformMetaArguments {
  readonly groupId: string;
  readonly mode?: string;
  readonly packageId?: string;
  readonly zoneId: string;
}

// Resource

export class WafGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_waf_group',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._groupId = config.groupId;
    this._mode = config.mode;
    this._packageId = config.packageId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId: string;
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string;
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string ) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
  }

  // package_id - computed: true, optional: true, required: false
  private _packageId?: string;
  public get packageId() {
    return this.getStringAttribute('package_id');
  }
  public set packageId(value: string) {
    this._packageId = value;
  }
  public resetPackageId() {
    this._packageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageIdInput() {
    return this._packageId
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
      group_id: cdktf.stringToTerraform(this._groupId),
      mode: cdktf.stringToTerraform(this._mode),
      package_id: cdktf.stringToTerraform(this._packageId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
