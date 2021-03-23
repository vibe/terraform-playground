// https://www.terraform.io/docs/providers/cloudflare/r/load_balancer_monitor.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerMonitorConfig extends cdktf.TerraformMetaArguments {
  readonly allowInsecure?: boolean;
  readonly description?: string;
  readonly expectedBody?: string;
  readonly expectedCodes?: string;
  readonly followRedirects?: boolean;
  readonly interval?: number;
  readonly method?: string;
  readonly path?: string;
  readonly port?: number;
  readonly probeZone?: string;
  readonly retries?: number;
  readonly timeout?: number;
  readonly type?: string;
  /** header block */
  readonly header?: LoadBalancerMonitorHeader[];
}
export interface LoadBalancerMonitorHeader {
  readonly header: string;
  readonly values: string[];
}

function loadBalancerMonitorHeaderToTerraform(struct?: LoadBalancerMonitorHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class LoadBalancerMonitor extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoadBalancerMonitorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_load_balancer_monitor',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowInsecure = config.allowInsecure;
    this._description = config.description;
    this._expectedBody = config.expectedBody;
    this._expectedCodes = config.expectedCodes;
    this._followRedirects = config.followRedirects;
    this._interval = config.interval;
    this._method = config.method;
    this._path = config.path;
    this._port = config.port;
    this._probeZone = config.probeZone;
    this._retries = config.retries;
    this._timeout = config.timeout;
    this._type = config.type;
    this._header = config.header;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean;
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean ) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
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

  // expected_body - computed: false, optional: true, required: false
  private _expectedBody?: string;
  public get expectedBody() {
    return this.getStringAttribute('expected_body');
  }
  public set expectedBody(value: string ) {
    this._expectedBody = value;
  }
  public resetExpectedBody() {
    this._expectedBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBodyInput() {
    return this._expectedBody
  }

  // expected_codes - computed: false, optional: true, required: false
  private _expectedCodes?: string;
  public get expectedCodes() {
    return this.getStringAttribute('expected_codes');
  }
  public set expectedCodes(value: string ) {
    this._expectedCodes = value;
  }
  public resetExpectedCodes() {
    this._expectedCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedCodesInput() {
    return this._expectedCodes
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean;
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean ) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number;
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number ) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval
  }

  // method - computed: true, optional: true, required: false
  private _method?: string;
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // path - computed: true, optional: true, required: false
  private _path?: string;
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number ) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // probe_zone - computed: false, optional: true, required: false
  private _probeZone?: string;
  public get probeZone() {
    return this.getStringAttribute('probe_zone');
  }
  public set probeZone(value: string ) {
    this._probeZone = value;
  }
  public resetProbeZone() {
    this._probeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeZoneInput() {
    return this._probeZone
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number;
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number ) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number;
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number ) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string ) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // header - computed: false, optional: true, required: false
  private _header?: LoadBalancerMonitorHeader[];
  public get header() {
    return this.interpolationForAttribute('header') as any;
  }
  public set header(value: LoadBalancerMonitorHeader[] ) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_insecure: cdktf.booleanToTerraform(this._allowInsecure),
      description: cdktf.stringToTerraform(this._description),
      expected_body: cdktf.stringToTerraform(this._expectedBody),
      expected_codes: cdktf.stringToTerraform(this._expectedCodes),
      follow_redirects: cdktf.booleanToTerraform(this._followRedirects),
      interval: cdktf.numberToTerraform(this._interval),
      method: cdktf.stringToTerraform(this._method),
      path: cdktf.stringToTerraform(this._path),
      port: cdktf.numberToTerraform(this._port),
      probe_zone: cdktf.stringToTerraform(this._probeZone),
      retries: cdktf.numberToTerraform(this._retries),
      timeout: cdktf.numberToTerraform(this._timeout),
      type: cdktf.stringToTerraform(this._type),
      header: cdktf.listMapper(loadBalancerMonitorHeaderToTerraform)(this._header),
    };
  }
}
