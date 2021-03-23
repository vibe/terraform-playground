// https://www.terraform.io/docs/providers/cloudflare/r/argo_tunnel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArgoTunnelConfig extends cdktf.TerraformMetaArguments {
  readonly accountId: string;
  readonly name: string;
  readonly secret: string;
}

// Resource

export class ArgoTunnel extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ArgoTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_argo_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._name = config.name;
    this._secret = config.secret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId: string;
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // secret - computed: false, optional: false, required: true
  private _secret: string;
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      name: cdktf.stringToTerraform(this._name),
      secret: cdktf.stringToTerraform(this._secret),
    };
  }
}
