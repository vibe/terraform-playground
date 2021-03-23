// https://www.terraform.io/docs/providers/cloudflare/r/data_cloudflare_waf_packages.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareWafPackagesConfig extends cdktf.TerraformMetaArguments {
  readonly zoneId: string;
  /** filter block */
  readonly filter?: DataCloudflareWafPackagesFilter[];
}
export class DataCloudflareWafPackagesPackages extends cdktf.ComplexComputedList {

  // action_mode - computed: true, optional: false, required: false
  public get actionMode() {
    return this.getStringAttribute('action_mode');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // detection_mode - computed: true, optional: false, required: false
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sensitivity - computed: true, optional: false, required: false
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
}
export interface DataCloudflareWafPackagesFilter {
  readonly actionMode?: string;
  readonly detectionMode?: string;
  readonly name?: string;
  readonly sensitivity?: string;
}

function dataCloudflareWafPackagesFilterToTerraform(struct?: DataCloudflareWafPackagesFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action_mode: cdktf.stringToTerraform(struct!.actionMode),
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    name: cdktf.stringToTerraform(struct!.name),
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
  }
}


// Resource

export class DataCloudflareWafPackages extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataCloudflareWafPackagesConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_waf_packages',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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

  // packages - computed: true, optional: false, required: false
  public packages(index: string) {
    return new DataCloudflareWafPackagesPackages(this, 'packages', index);
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
  private _filter?: DataCloudflareWafPackagesFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataCloudflareWafPackagesFilter[] ) {
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
      zone_id: cdktf.stringToTerraform(this._zoneId),
      filter: cdktf.listMapper(dataCloudflareWafPackagesFilterToTerraform)(this._filter),
    };
  }
}
