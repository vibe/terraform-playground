// https://www.terraform.io/docs/providers/cloudflare/r/data_cloudflare_zones.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZonesConfig extends cdktf.TerraformMetaArguments {
  /** filter block */
  readonly filter: DataCloudflareZonesFilter[];
}
export class DataCloudflareZonesZones extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataCloudflareZonesFilter {
  readonly lookupType?: string;
  readonly match?: string;
  readonly name?: string;
  readonly paused?: boolean;
  readonly status?: string;
}

function dataCloudflareZonesFilterToTerraform(struct?: DataCloudflareZonesFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    lookup_type: cdktf.stringToTerraform(struct!.lookupType),
    match: cdktf.stringToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
    paused: cdktf.booleanToTerraform(struct!.paused),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


// Resource

export class DataCloudflareZones extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataCloudflareZonesConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zones',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // zones - computed: true, optional: false, required: false
  public zones(index: string) {
    return new DataCloudflareZonesZones(this, 'zones', index);
  }

  // filter - computed: false, optional: false, required: true
  private _filter: DataCloudflareZonesFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataCloudflareZonesFilter[]) {
    this._filter = value;
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
      filter: cdktf.listMapper(dataCloudflareZonesFilterToTerraform)(this._filter),
    };
  }
}
