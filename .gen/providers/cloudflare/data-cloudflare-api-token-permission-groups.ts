// https://www.terraform.io/docs/providers/cloudflare/r/data_cloudflare_api_token_permission_groups.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareApiTokenPermissionGroupsConfig extends cdktf.TerraformMetaArguments {
}

// Resource

export class DataCloudflareApiTokenPermissionGroups extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataCloudflareApiTokenPermissionGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_api_token_permission_groups',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // permissions - computed: true, optional: false, required: false
  public permissions(key: string): string {
    return new cdktf.StringMap(this, 'permissions').lookup(key);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
