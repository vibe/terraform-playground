// https://www.terraform.io/docs/providers/cloudflare/r/data_cloudflare_ip_ranges.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareIpRangesConfig extends cdktf.TerraformMetaArguments {
}

// Resource

export class DataCloudflareIpRanges extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataCloudflareIpRangesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_ip_ranges',
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

  // china_ipv4_cidr_blocks - computed: true, optional: false, required: false
  public get chinaIpv4CidrBlocks() {
    return this.getListAttribute('china_ipv4_cidr_blocks');
  }

  // china_ipv6_cidr_blocks - computed: true, optional: false, required: false
  public get chinaIpv6CidrBlocks() {
    return this.getListAttribute('china_ipv6_cidr_blocks');
  }

  // cidr_blocks - computed: true, optional: false, required: false
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_cidr_blocks - computed: true, optional: false, required: false
  public get ipv4CidrBlocks() {
    return this.getListAttribute('ipv4_cidr_blocks');
  }

  // ipv6_cidr_blocks - computed: true, optional: false, required: false
  public get ipv6CidrBlocks() {
    return this.getListAttribute('ipv6_cidr_blocks');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
