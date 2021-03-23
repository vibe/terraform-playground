// https://www.terraform.io/docs/providers/cloudflare/r/logpush_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogpushJobConfig extends cdktf.TerraformMetaArguments {
  readonly dataset: string;
  readonly destinationConf: string;
  readonly enabled?: boolean;
  readonly logpullOptions?: string;
  readonly name?: string;
  readonly ownershipChallenge: string;
  readonly zoneId: string;
}

// Resource

export class LogpushJob extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LogpushJobConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_logpush_job',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataset = config.dataset;
    this._destinationConf = config.destinationConf;
    this._enabled = config.enabled;
    this._logpullOptions = config.logpullOptions;
    this._name = config.name;
    this._ownershipChallenge = config.ownershipChallenge;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataset - computed: false, optional: false, required: true
  private _dataset: string;
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset
  }

  // destination_conf - computed: false, optional: false, required: true
  private _destinationConf: string;
  public get destinationConf() {
    return this.getStringAttribute('destination_conf');
  }
  public set destinationConf(value: string) {
    this._destinationConf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfInput() {
    return this._destinationConf
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logpull_options - computed: false, optional: true, required: false
  private _logpullOptions?: string;
  public get logpullOptions() {
    return this.getStringAttribute('logpull_options');
  }
  public set logpullOptions(value: string ) {
    this._logpullOptions = value;
  }
  public resetLogpullOptions() {
    this._logpullOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logpullOptionsInput() {
    return this._logpullOptions
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // ownership_challenge - computed: false, optional: false, required: true
  private _ownershipChallenge: string;
  public get ownershipChallenge() {
    return this.getStringAttribute('ownership_challenge');
  }
  public set ownershipChallenge(value: string) {
    this._ownershipChallenge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipChallengeInput() {
    return this._ownershipChallenge
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
      dataset: cdktf.stringToTerraform(this._dataset),
      destination_conf: cdktf.stringToTerraform(this._destinationConf),
      enabled: cdktf.booleanToTerraform(this._enabled),
      logpull_options: cdktf.stringToTerraform(this._logpullOptions),
      name: cdktf.stringToTerraform(this._name),
      ownership_challenge: cdktf.stringToTerraform(this._ownershipChallenge),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
