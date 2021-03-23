// https://www.terraform.io/docs/providers/namecheap/r/record.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RecordConfig extends cdktf.TerraformMetaArguments {
  readonly address: string;
  readonly domain: string;
  readonly mxPref?: number;
  readonly name: string;
  readonly ttl?: number;
  readonly type: string;
  /** timeouts block */
  readonly timeouts?: RecordTimeouts;
}
export interface RecordTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function recordTimeoutsToTerraform(struct?: RecordTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Record extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RecordConfig) {
    super(scope, id, {
      terraformResourceType: 'namecheap_record',
      terraformGeneratorMetadata: {
        providerName: 'namecheap'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._address = config.address;
    this._domain = config.domain;
    this._mxPref = config.mxPref;
    this._name = config.name;
    this._ttl = config.ttl;
    this._type = config.type;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address: string;
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address
  }

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

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mx_pref - computed: false, optional: true, required: false
  private _mxPref?: number;
  public get mxPref() {
    return this.getNumberAttribute('mx_pref');
  }
  public set mxPref(value: number ) {
    this._mxPref = value;
  }
  public resetMxPref() {
    this._mxPref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxPrefInput() {
    return this._mxPref
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number;
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number ) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RecordTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RecordTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      domain: cdktf.stringToTerraform(this._domain),
      mx_pref: cdktf.numberToTerraform(this._mxPref),
      name: cdktf.stringToTerraform(this._name),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      timeouts: recordTimeoutsToTerraform(this._timeouts),
    };
  }
}
