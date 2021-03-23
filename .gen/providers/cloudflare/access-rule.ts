// https://www.terraform.io/docs/providers/cloudflare/r/access_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessRuleConfig extends cdktf.TerraformMetaArguments {
  readonly configuration: { [key: string]: string };
  readonly mode: string;
  readonly notes?: string;
  readonly zoneId?: string;
}

// Resource

export class AccessRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AccessRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_access_rule',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._configuration = config.configuration;
    this._mode = config.mode;
    this._notes = config.notes;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration: { [key: string]: string };
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: false, optional: false, required: true
  private _mode: string;
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string;
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string ) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string;
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
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
      configuration: cdktf.hashMapper(cdktf.anyToTerraform)(this._configuration),
      mode: cdktf.stringToTerraform(this._mode),
      notes: cdktf.stringToTerraform(this._notes),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
