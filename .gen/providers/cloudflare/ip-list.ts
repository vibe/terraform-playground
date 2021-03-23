// https://www.terraform.io/docs/providers/cloudflare/r/ip_list.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpListConfig extends cdktf.TerraformMetaArguments {
  readonly accountId: string;
  readonly description?: string;
  readonly kind: string;
  readonly name: string;
  /** item block */
  readonly item?: IpListItem[];
}
export interface IpListItem {
  readonly comment?: string;
  readonly value: string;
}

function ipListItemToTerraform(struct?: IpListItem): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


// Resource

export class IpList extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IpListConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_ip_list',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._description = config.description;
    this._kind = config.kind;
    this._name = config.name;
    this._item = config.item;
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

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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

  // kind - computed: false, optional: false, required: true
  private _kind: string;
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
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

  // item - computed: false, optional: true, required: false
  private _item?: IpListItem[];
  public get item() {
    return this.interpolationForAttribute('item') as any;
  }
  public set item(value: IpListItem[] ) {
    this._item = value;
  }
  public resetItem() {
    this._item = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      kind: cdktf.stringToTerraform(this._kind),
      name: cdktf.stringToTerraform(this._name),
      item: cdktf.listMapper(ipListItemToTerraform)(this._item),
    };
  }
}
