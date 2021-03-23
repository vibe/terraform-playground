// https://www.terraform.io/docs/providers/cloudflare/r/byo_ip_prefix.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ByoIpPrefixConfig extends cdktf.TerraformMetaArguments {
  readonly advertisement?: string;
  readonly description?: string;
  readonly prefixId: string;
}

// Resource

export class ByoIpPrefix extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ByoIpPrefixConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_byo_ip_prefix',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._advertisement = config.advertisement;
    this._description = config.description;
    this._prefixId = config.prefixId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertisement - computed: true, optional: true, required: false
  private _advertisement?: string;
  public get advertisement() {
    return this.getStringAttribute('advertisement');
  }
  public set advertisement(value: string) {
    this._advertisement = value;
  }
  public resetAdvertisement() {
    this._advertisement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementInput() {
    return this._advertisement
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prefix_id - computed: false, optional: false, required: true
  private _prefixId: string;
  public get prefixId() {
    return this.getStringAttribute('prefix_id');
  }
  public set prefixId(value: string) {
    this._prefixId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixIdInput() {
    return this._prefixId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertisement: cdktf.stringToTerraform(this._advertisement),
      description: cdktf.stringToTerraform(this._description),
      prefix_id: cdktf.stringToTerraform(this._prefixId),
    };
  }
}
