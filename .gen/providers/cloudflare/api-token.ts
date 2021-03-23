// https://www.terraform.io/docs/providers/cloudflare/r/api_token.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiTokenConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  /** condition block */
  readonly condition?: ApiTokenCondition[];
  /** policy block */
  readonly policy: ApiTokenPolicy[];
}
export interface ApiTokenConditionRequestIp {
  readonly in?: string[];
  readonly notIn?: string[];
}

function apiTokenConditionRequestIpToTerraform(struct?: ApiTokenConditionRequestIp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    in: cdktf.listMapper(cdktf.stringToTerraform)(struct!.in),
    not_in: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notIn),
  }
}

export interface ApiTokenCondition {
  /** request_ip block */
  readonly requestIp?: ApiTokenConditionRequestIp[];
}

function apiTokenConditionToTerraform(struct?: ApiTokenCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    request_ip: cdktf.listMapper(apiTokenConditionRequestIpToTerraform)(struct!.requestIp),
  }
}

export interface ApiTokenPolicy {
  readonly effect?: string;
  readonly permissionGroups: string[];
  readonly resources: { [key: string]: string };
}

function apiTokenPolicyToTerraform(struct?: ApiTokenPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    permission_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.permissionGroups),
    resources: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.resources),
  }
}


// Resource

export class ApiToken extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_api_token',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._condition = config.condition;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_on - computed: true, optional: false, required: false
  public get issuedOn() {
    return this.getStringAttribute('issued_on');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: ApiTokenCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: ApiTokenCondition[] ) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // policy - computed: false, optional: false, required: true
  private _policy: ApiTokenPolicy[];
  public get policy() {
    return this.interpolationForAttribute('policy') as any;
  }
  public set policy(value: ApiTokenPolicy[]) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      condition: cdktf.listMapper(apiTokenConditionToTerraform)(this._condition),
      policy: cdktf.listMapper(apiTokenPolicyToTerraform)(this._policy),
    };
  }
}
