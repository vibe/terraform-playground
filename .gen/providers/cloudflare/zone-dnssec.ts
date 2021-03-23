// https://www.terraform.io/docs/providers/cloudflare/r/zone_dnssec.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneDnssecConfig extends cdktf.TerraformMetaArguments {
  readonly modifiedOn?: string;
  readonly zoneId: string;
}

// Resource

export class ZoneDnssec extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ZoneDnssecConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zone_dnssec',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._modifiedOn = config.modifiedOn;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // digest_algorithm - computed: true, optional: false, required: false
  public get digestAlgorithm() {
    return this.getStringAttribute('digest_algorithm');
  }

  // digest_type - computed: true, optional: false, required: false
  public get digestType() {
    return this.getStringAttribute('digest_type');
  }

  // ds - computed: true, optional: false, required: false
  public get ds() {
    return this.getStringAttribute('ds');
  }

  // flags - computed: true, optional: false, required: false
  public get flags() {
    return this.getNumberAttribute('flags');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_tag - computed: true, optional: false, required: false
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // modified_on - computed: true, optional: true, required: false
  private _modifiedOn?: string;
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }
  public set modifiedOn(value: string) {
    this._modifiedOn = value;
  }
  public resetModifiedOn() {
    this._modifiedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedOnInput() {
    return this._modifiedOn
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
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
      modified_on: cdktf.stringToTerraform(this._modifiedOn),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
