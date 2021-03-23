// https://www.terraform.io/docs/providers/cloudflare/r/argo.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArgoConfig extends cdktf.TerraformMetaArguments {
  readonly smartRouting?: string;
  readonly tieredCaching?: string;
  readonly zoneId: string;
}

// Resource

export class Argo extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ArgoConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_argo',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._smartRouting = config.smartRouting;
    this._tieredCaching = config.tieredCaching;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // smart_routing - computed: false, optional: true, required: false
  private _smartRouting?: string;
  public get smartRouting() {
    return this.getStringAttribute('smart_routing');
  }
  public set smartRouting(value: string ) {
    this._smartRouting = value;
  }
  public resetSmartRouting() {
    this._smartRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartRoutingInput() {
    return this._smartRouting
  }

  // tiered_caching - computed: false, optional: true, required: false
  private _tieredCaching?: string;
  public get tieredCaching() {
    return this.getStringAttribute('tiered_caching');
  }
  public set tieredCaching(value: string ) {
    this._tieredCaching = value;
  }
  public resetTieredCaching() {
    this._tieredCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieredCachingInput() {
    return this._tieredCaching
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
      smart_routing: cdktf.stringToTerraform(this._smartRouting),
      tiered_caching: cdktf.stringToTerraform(this._tieredCaching),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
