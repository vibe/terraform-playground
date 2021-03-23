// https://www.terraform.io/docs/providers/cloudflare/r/workers_kv.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkersKvConfig extends cdktf.TerraformMetaArguments {
  readonly key: string;
  readonly namespaceId: string;
  readonly value: string;
}

// Resource

export class WorkersKv extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WorkersKvConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_workers_kv',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._key = config.key;
    this._namespaceId = config.namespaceId;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key: string;
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId: string;
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId
  }

  // value - computed: false, optional: false, required: true
  private _value: string;
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key: cdktf.stringToTerraform(this._key),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      value: cdktf.stringToTerraform(this._value),
    };
  }
}
