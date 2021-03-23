// https://www.terraform.io/docs/providers/cloudflare/r/data_cloudflare_waf_rules.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareWafRulesConfig extends cdktf.TerraformMetaArguments {
  readonly packageId?: string;
  readonly zoneId: string;
  /** filter block */
  readonly filter?: DataCloudflareWafRulesFilter[];
}
export class DataCloudflareWafRulesRules extends cdktf.ComplexComputedList {

  // allowed_modes - computed: true, optional: false, required: false
  public get allowedModes() {
    return this.getListAttribute('allowed_modes');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // package_id - computed: true, optional: false, required: false
  public get packageId() {
    return this.getStringAttribute('package_id');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }
}
export interface DataCloudflareWafRulesFilter {
  readonly description?: string;
  readonly groupId?: string;
  readonly mode?: string;
}

function dataCloudflareWafRulesFilterToTerraform(struct?: DataCloudflareWafRulesFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


// Resource

export class DataCloudflareWafRules extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataCloudflareWafRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_waf_rules',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._packageId = config.packageId;
    this._zoneId = config.zoneId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // package_id - computed: false, optional: true, required: false
  private _packageId?: string;
  public get packageId() {
    return this.getStringAttribute('package_id');
  }
  public set packageId(value: string ) {
    this._packageId = value;
  }
  public resetPackageId() {
    this._packageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageIdInput() {
    return this._packageId
  }

  // rules - computed: true, optional: false, required: false
  public rules(index: string) {
    return new DataCloudflareWafRulesRules(this, 'rules', index);
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataCloudflareWafRulesFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataCloudflareWafRulesFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      package_id: cdktf.stringToTerraform(this._packageId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      filter: cdktf.listMapper(dataCloudflareWafRulesFilterToTerraform)(this._filter),
    };
  }
}
