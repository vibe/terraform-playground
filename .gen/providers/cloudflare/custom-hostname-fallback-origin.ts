// https://www.terraform.io/docs/providers/cloudflare/r/custom_hostname_fallback_origin.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomHostnameFallbackOriginConfig extends cdktf.TerraformMetaArguments {
  readonly origin: string;
  readonly zoneId: string;
}

// Resource

export class CustomHostnameFallbackOrigin extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CustomHostnameFallbackOriginConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_custom_hostname_fallback_origin',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._origin = config.origin;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // origin - computed: false, optional: false, required: true
  private _origin: string;
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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
      origin: cdktf.stringToTerraform(this._origin),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
