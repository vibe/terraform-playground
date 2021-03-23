// https://www.terraform.io/docs/providers/cloudflare/r/account_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountMemberConfig extends cdktf.TerraformMetaArguments {
  readonly emailAddress: string;
  readonly roleIds: string[];
}

// Resource

export class AccountMember extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AccountMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_account_member',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._emailAddress = config.emailAddress;
    this._roleIds = config.roleIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_address - computed: false, optional: false, required: true
  private _emailAddress: string;
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_ids - computed: false, optional: false, required: true
  private _roleIds: string[];
  public get roleIds() {
    return this.getListAttribute('role_ids');
  }
  public set roleIds(value: string[]) {
    this._roleIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdsInput() {
    return this._roleIds
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_address: cdktf.stringToTerraform(this._emailAddress),
      role_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._roleIds),
    };
  }
}
