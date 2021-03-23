// https://www.terraform.io/docs/providers/cloudflare/r/custom_ssl.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomSslConfig extends cdktf.TerraformMetaArguments {
  readonly customSslOptions?: { [key: string]: string };
  readonly zoneId: string;
  /** custom_ssl_priority block */
  readonly customSslPriority?: CustomSslCustomSslPriority[];
}
export interface CustomSslCustomSslPriority {
  readonly id?: string;
  readonly priority?: number;
}

function customSslCustomSslPriorityToTerraform(struct?: CustomSslCustomSslPriority): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


// Resource

export class CustomSsl extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CustomSslConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_custom_ssl',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customSslOptions = config.customSslOptions;
    this._zoneId = config.zoneId;
    this._customSslPriority = config.customSslPriority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_ssl_options - computed: false, optional: true, required: false
  private _customSslOptions?: { [key: string]: string };
  public get customSslOptions() {
    return this.interpolationForAttribute('custom_ssl_options') as any;
  }
  public set customSslOptions(value: { [key: string]: string } ) {
    this._customSslOptions = value;
  }
  public resetCustomSslOptions() {
    this._customSslOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSslOptionsInput() {
    return this._customSslOptions
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uploaded_on - computed: true, optional: false, required: false
  public get uploadedOn() {
    return this.getStringAttribute('uploaded_on');
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

  // custom_ssl_priority - computed: false, optional: true, required: false
  private _customSslPriority?: CustomSslCustomSslPriority[];
  public get customSslPriority() {
    return this.interpolationForAttribute('custom_ssl_priority') as any;
  }
  public set customSslPriority(value: CustomSslCustomSslPriority[] ) {
    this._customSslPriority = value;
  }
  public resetCustomSslPriority() {
    this._customSslPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSslPriorityInput() {
    return this._customSslPriority
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_ssl_options: cdktf.hashMapper(cdktf.anyToTerraform)(this._customSslOptions),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      custom_ssl_priority: cdktf.listMapper(customSslCustomSslPriorityToTerraform)(this._customSslPriority),
    };
  }
}
