// https://www.terraform.io/docs/providers/cloudflare/r/workers_kv_namespace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkersKvNamespaceConfig extends cdktf.TerraformMetaArguments {
  readonly title: string;
}

// Resource

export class WorkersKvNamespace extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WorkersKvNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_workers_kv_namespace',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // title - computed: false, optional: false, required: true
  private _title: string;
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      title: cdktf.stringToTerraform(this._title),
    };
  }
}
