// https://www.terraform.io/docs/providers/cloudflare/r/waf_override.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafOverrideConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly groups?: { [key: string]: string };
  readonly paused?: boolean;
  readonly priority?: number;
  readonly rewriteAction?: { [key: string]: string };
  readonly rules: { [key: string]: string };
  readonly urls: string[];
  readonly zoneId: string;
}

// Resource

export class WafOverride extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_waf_override',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._groups = config.groups;
    this._paused = config.paused;
    this._priority = config.priority;
    this._rewriteAction = config.rewriteAction;
    this._rules = config.rules;
    this._urls = config.urls;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // groups - computed: false, optional: true, required: false
  private _groups?: { [key: string]: string };
  public get groups() {
    return this.interpolationForAttribute('groups') as any;
  }
  public set groups(value: { [key: string]: string } ) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // override_id - computed: true, optional: false, required: false
  public get overrideId() {
    return this.getStringAttribute('override_id');
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean;
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean ) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused
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

  // rewrite_action - computed: false, optional: true, required: false
  private _rewriteAction?: { [key: string]: string };
  public get rewriteAction() {
    return this.interpolationForAttribute('rewrite_action') as any;
  }
  public set rewriteAction(value: { [key: string]: string } ) {
    this._rewriteAction = value;
  }
  public resetRewriteAction() {
    this._rewriteAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteActionInput() {
    return this._rewriteAction
  }

  // rules - computed: false, optional: false, required: true
  private _rules: { [key: string]: string };
  public get rules() {
    return this.interpolationForAttribute('rules') as any;
  }
  public set rules(value: { [key: string]: string }) {
    this._rules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules
  }

  // urls - computed: false, optional: false, required: true
  private _urls: string[];
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      groups: cdktf.hashMapper(cdktf.anyToTerraform)(this._groups),
      paused: cdktf.booleanToTerraform(this._paused),
      priority: cdktf.numberToTerraform(this._priority),
      rewrite_action: cdktf.hashMapper(cdktf.anyToTerraform)(this._rewriteAction),
      rules: cdktf.hashMapper(cdktf.anyToTerraform)(this._rules),
      urls: cdktf.listMapper(cdktf.stringToTerraform)(this._urls),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
