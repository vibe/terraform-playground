// https://www.terraform.io/docs/providers/cloudflare/r/waf_rule_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafRuleAConfig extends cdktf.TerraformMetaArguments {
  readonly mode: string;
  readonly packageId?: string;
  readonly ruleId: string;
  readonly zoneId: string;
}

// Resource

export class WafRuleA extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafRuleAConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_waf_rule',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._mode = config.mode;
    this._packageId = config.packageId;
    this._ruleId = config.ruleId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: false, optional: false, required: true
  private _mode: string;
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
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

  // rule_id - computed: false, optional: false, required: true
  private _ruleId: string;
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId
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
      mode: cdktf.stringToTerraform(this._mode),
      package_id: cdktf.stringToTerraform(this._packageId),
      rule_id: cdktf.stringToTerraform(this._ruleId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
