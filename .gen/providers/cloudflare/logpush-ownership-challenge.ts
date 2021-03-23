// https://www.terraform.io/docs/providers/cloudflare/r/logpush_ownership_challenge.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogpushOwnershipChallengeConfig extends cdktf.TerraformMetaArguments {
  readonly destinationConf: string;
  readonly zoneId: string;
}

// Resource

export class LogpushOwnershipChallenge extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LogpushOwnershipChallengeConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_logpush_ownership_challenge',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destinationConf = config.destinationConf;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ownership_challenge_filename - computed: true, optional: false, required: false
  public get ownershipChallengeFilename() {
    return this.getStringAttribute('ownership_challenge_filename');
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
      destination_conf: cdktf.stringToTerraform(this._destinationConf),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }
}
