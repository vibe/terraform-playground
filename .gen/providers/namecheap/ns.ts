// https://www.terraform.io/docs/providers/namecheap/r/ns.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsConfig extends cdktf.TerraformMetaArguments {
  readonly domain: string;
  readonly servers: string[];
}

// Resource

export class Ns extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NsConfig) {
    super(scope, id, {
      terraformResourceType: 'namecheap_ns',
      terraformGeneratorMetadata: {
        providerName: 'namecheap'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domain = config.domain;
    this._servers = config.servers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain: string;
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // servers - computed: false, optional: false, required: true
  private _servers: string[];
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      servers: cdktf.listMapper(cdktf.stringToTerraform)(this._servers),
    };
  }
}
