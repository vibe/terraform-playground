// https://www.terraform.io/docs/providers/cloudflare/r/magic_firewall_ruleset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MagicFirewallRulesetConfig extends cdktf.TerraformMetaArguments {
  readonly accountId: string;
  readonly description?: string;
  readonly name: string;
  readonly rules?: { [key: string]: string };
}

// Resource

export class MagicFirewallRuleset extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MagicFirewallRulesetConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_magic_firewall_ruleset',
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
    this._name = config.name;
    this._rules = config.rules;
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

  // rules - computed: false, optional: true, required: false
  private _rules?: { [key: string]: string };
  public get rules() {
    return this.interpolationForAttribute('rules') as any;
  }
  public set rules(value: { [key: string]: string } ) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      rules: cdktf.listMapper(cdktf.hashMapper(cdktf.anyToTerraform))(this._rules),
    };
  }
}
