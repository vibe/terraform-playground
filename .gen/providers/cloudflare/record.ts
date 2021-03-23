// https://www.terraform.io/docs/providers/cloudflare/r/record_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RecordAConfig extends cdktf.TerraformMetaArguments {
  readonly data?: { [key: string]: string };
  readonly name: string;
  readonly priority?: number;
  readonly proxied?: boolean;
  readonly ttl?: number;
  readonly type: string;
  readonly value?: string;
  readonly zoneId: string;
  /** timeouts block */
  readonly timeouts?: RecordTimeoutsA;
}
export interface RecordTimeoutsA {
  readonly create?: string;
  readonly update?: string;
}

function recordTimeoutsAToTerraform(struct?: RecordTimeoutsA): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class RecordA extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RecordAConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_record',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._data = config.data;
    this._name = config.name;
    this._priority = config.priority;
    this._proxied = config.proxied;
    this._ttl = config.ttl;
    this._type = config.type;
    this._value = config.value;
    this._zoneId = config.zoneId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string };
  public get data() {
    return this.interpolationForAttribute('data') as any;
  }
  public set data(value: { [key: string]: string } ) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: false, required: false
  public metadata(key: string): string {
    return new cdktf.StringMap(this, 'metadata').lookup(key);
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number;
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number ) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // proxiable - computed: true, optional: false, required: false
  public get proxiable() {
    return this.getBooleanAttribute('proxiable');
  }

  // proxied - computed: false, optional: true, required: false
  private _proxied?: boolean;
  public get proxied() {
    return this.getBooleanAttribute('proxied');
  }
  public set proxied(value: boolean ) {
    this._proxied = value;
  }
  public resetProxied() {
    this._proxied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxiedInput() {
    return this._proxied
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number;
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
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

  // value - computed: true, optional: true, required: false
  private _value?: string;
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RecordTimeoutsA;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RecordTimeoutsA ) {
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
      data: cdktf.hashMapper(cdktf.anyToTerraform)(this._data),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      proxied: cdktf.booleanToTerraform(this._proxied),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      timeouts: recordTimeoutsAToTerraform(this._timeouts),
    };
  }
}
