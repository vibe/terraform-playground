// https://www.terraform.io/docs/providers/cloudflare/r/data_cloudflare_waf_groups.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareWafGroupsConfig extends cdktf.TerraformMetaArguments {
  readonly packageId?: string;
  readonly zoneId: string;
  /** filter block */
  readonly filter?: DataCloudflareWafGroupsFilter[];
}
export class DataCloudflareWafGroupsGroups extends cdktf.ComplexComputedList {

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // modified_rules_count - computed: true, optional: false, required: false
  public get modifiedRulesCount() {
    return this.getNumberAttribute('modified_rules_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // package_id - computed: true, optional: false, required: false
  public get packageId() {
    return this.getStringAttribute('package_id');
  }

  // rules_count - computed: true, optional: false, required: false
  public get rulesCount() {
    return this.getNumberAttribute('rules_count');
  }
}
export interface DataCloudflareWafGroupsFilter {
  readonly mode?: string;
  readonly name?: string;
}

function dataCloudflareWafGroupsFilterToTerraform(struct?: DataCloudflareWafGroupsFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


// Resource

export class DataCloudflareWafGroups extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataCloudflareWafGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_waf_groups',
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

  // groups - computed: true, optional: false, required: false
  public groups(index: string) {
    return new DataCloudflareWafGroupsGroups(this, 'groups', index);
  }

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
  private _filter?: DataCloudflareWafGroupsFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataCloudflareWafGroupsFilter[] ) {
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
      filter: cdktf.listMapper(dataCloudflareWafGroupsFilterToTerraform)(this._filter),
    };
  }
}
