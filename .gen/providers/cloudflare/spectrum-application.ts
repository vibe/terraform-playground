// https://www.terraform.io/docs/providers/cloudflare/r/spectrum_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpectrumApplicationConfig extends cdktf.TerraformMetaArguments {
  readonly argoSmartRouting?: boolean;
  readonly edgeIpConnectivity?: string;
  readonly edgeIps?: string[];
  readonly ipFirewall?: boolean;
  readonly originDirect?: string[];
  readonly originPort?: number;
  readonly protocol: string;
  readonly proxyProtocol?: string;
  readonly tls?: string;
  readonly trafficType?: string;
  readonly zoneId: string;
  /** dns block */
  readonly dns: SpectrumApplicationDns[];
  /** origin_dns block */
  readonly originDns?: SpectrumApplicationOriginDns[];
  /** origin_port_range block */
  readonly originPortRange?: SpectrumApplicationOriginPortRange[];
}
export interface SpectrumApplicationDns {
  readonly name: string;
  readonly type: string;
}

function spectrumApplicationDnsToTerraform(struct?: SpectrumApplicationDns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface SpectrumApplicationOriginDns {
  readonly name: string;
}

function spectrumApplicationOriginDnsToTerraform(struct?: SpectrumApplicationOriginDns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface SpectrumApplicationOriginPortRange {
  readonly end: number;
  readonly start: number;
}

function spectrumApplicationOriginPortRangeToTerraform(struct?: SpectrumApplicationOriginPortRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


// Resource

export class SpectrumApplication extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SpectrumApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_spectrum_application',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._argoSmartRouting = config.argoSmartRouting;
    this._edgeIpConnectivity = config.edgeIpConnectivity;
    this._edgeIps = config.edgeIps;
    this._ipFirewall = config.ipFirewall;
    this._originDirect = config.originDirect;
    this._originPort = config.originPort;
    this._protocol = config.protocol;
    this._proxyProtocol = config.proxyProtocol;
    this._tls = config.tls;
    this._trafficType = config.trafficType;
    this._zoneId = config.zoneId;
    this._dns = config.dns;
    this._originDns = config.originDns;
    this._originPortRange = config.originPortRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // argo_smart_routing - computed: false, optional: true, required: false
  private _argoSmartRouting?: boolean;
  public get argoSmartRouting() {
    return this.getBooleanAttribute('argo_smart_routing');
  }
  public set argoSmartRouting(value: boolean ) {
    this._argoSmartRouting = value;
  }
  public resetArgoSmartRouting() {
    this._argoSmartRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argoSmartRoutingInput() {
    return this._argoSmartRouting
  }

  // edge_ip_connectivity - computed: false, optional: true, required: false
  private _edgeIpConnectivity?: string;
  public get edgeIpConnectivity() {
    return this.getStringAttribute('edge_ip_connectivity');
  }
  public set edgeIpConnectivity(value: string ) {
    this._edgeIpConnectivity = value;
  }
  public resetEdgeIpConnectivity() {
    this._edgeIpConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeIpConnectivityInput() {
    return this._edgeIpConnectivity
  }

  // edge_ips - computed: false, optional: true, required: false
  private _edgeIps?: string[];
  public get edgeIps() {
    return this.getListAttribute('edge_ips');
  }
  public set edgeIps(value: string[] ) {
    this._edgeIps = value;
  }
  public resetEdgeIps() {
    this._edgeIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeIpsInput() {
    return this._edgeIps
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_firewall - computed: false, optional: true, required: false
  private _ipFirewall?: boolean;
  public get ipFirewall() {
    return this.getBooleanAttribute('ip_firewall');
  }
  public set ipFirewall(value: boolean ) {
    this._ipFirewall = value;
  }
  public resetIpFirewall() {
    this._ipFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFirewallInput() {
    return this._ipFirewall
  }

  // origin_direct - computed: false, optional: true, required: false
  private _originDirect?: string[];
  public get originDirect() {
    return this.getListAttribute('origin_direct');
  }
  public set originDirect(value: string[] ) {
    this._originDirect = value;
  }
  public resetOriginDirect() {
    this._originDirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originDirectInput() {
    return this._originDirect
  }

  // origin_port - computed: false, optional: true, required: false
  private _originPort?: number;
  public get originPort() {
    return this.getNumberAttribute('origin_port');
  }
  public set originPort(value: number ) {
    this._originPort = value;
  }
  public resetOriginPort() {
    this._originPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPortInput() {
    return this._originPort
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // proxy_protocol - computed: false, optional: true, required: false
  private _proxyProtocol?: string;
  public get proxyProtocol() {
    return this.getStringAttribute('proxy_protocol');
  }
  public set proxyProtocol(value: string ) {
    this._proxyProtocol = value;
  }
  public resetProxyProtocol() {
    this._proxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolInput() {
    return this._proxyProtocol
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: string;
  public get tls() {
    return this.getStringAttribute('tls');
  }
  public set tls(value: string ) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls
  }

  // traffic_type - computed: false, optional: true, required: false
  private _trafficType?: string;
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string ) {
    this._trafficType = value;
  }
  public resetTrafficType() {
    this._trafficType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType
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

  // dns - computed: false, optional: false, required: true
  private _dns: SpectrumApplicationDns[];
  public get dns() {
    return this.interpolationForAttribute('dns') as any;
  }
  public set dns(value: SpectrumApplicationDns[]) {
    this._dns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns
  }

  // origin_dns - computed: false, optional: true, required: false
  private _originDns?: SpectrumApplicationOriginDns[];
  public get originDns() {
    return this.interpolationForAttribute('origin_dns') as any;
  }
  public set originDns(value: SpectrumApplicationOriginDns[] ) {
    this._originDns = value;
  }
  public resetOriginDns() {
    this._originDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originDnsInput() {
    return this._originDns
  }

  // origin_port_range - computed: false, optional: true, required: false
  private _originPortRange?: SpectrumApplicationOriginPortRange[];
  public get originPortRange() {
    return this.interpolationForAttribute('origin_port_range') as any;
  }
  public set originPortRange(value: SpectrumApplicationOriginPortRange[] ) {
    this._originPortRange = value;
  }
  public resetOriginPortRange() {
    this._originPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPortRangeInput() {
    return this._originPortRange
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      argo_smart_routing: cdktf.booleanToTerraform(this._argoSmartRouting),
      edge_ip_connectivity: cdktf.stringToTerraform(this._edgeIpConnectivity),
      edge_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._edgeIps),
      ip_firewall: cdktf.booleanToTerraform(this._ipFirewall),
      origin_direct: cdktf.listMapper(cdktf.stringToTerraform)(this._originDirect),
      origin_port: cdktf.numberToTerraform(this._originPort),
      protocol: cdktf.stringToTerraform(this._protocol),
      proxy_protocol: cdktf.stringToTerraform(this._proxyProtocol),
      tls: cdktf.stringToTerraform(this._tls),
      traffic_type: cdktf.stringToTerraform(this._trafficType),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      dns: cdktf.listMapper(spectrumApplicationDnsToTerraform)(this._dns),
      origin_dns: cdktf.listMapper(spectrumApplicationOriginDnsToTerraform)(this._originDns),
      origin_port_range: cdktf.listMapper(spectrumApplicationOriginPortRangeToTerraform)(this._originPortRange),
    };
  }
}
