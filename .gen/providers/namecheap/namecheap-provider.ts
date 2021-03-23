// https://www.terraform.io/docs/providers/namecheap/r/namecheap_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamecheapProviderConfig {
  /** A registered apiuser for namecheap */
  readonly apiUser: string;
  /** IP addess of the machine running terraform */
  readonly ip: string;
  /** The token key for API operations. */
  readonly token: string;
  /** If true, use the namecheap sandbox */
  readonly useSandbox?: boolean;
  /** A registered username for namecheap */
  readonly username: string;
  /** Alias name */
  readonly alias?: string;
}

// Resource

export class NamecheapProvider extends cdktf.TerraformProvider {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NamecheapProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'namecheap',
      terraformGeneratorMetadata: {
        providerName: 'namecheap',
        providerVersionConstraint: '~> 1.5'
      },
      terraformProviderSource: 'github.com/adamdecaf/namecheap'
    });
    this._apiUser = config.apiUser;
    this._ip = config.ip;
    this._token = config.token;
    this._useSandbox = config.useSandbox;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_user - computed: false, optional: false, required: true
  private _apiUser: string;
  public get apiUser() {
    return this._apiUser;
  }
  public set apiUser(value: string) {
    this._apiUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUserInput() {
    return this._apiUser
  }

  // ip - computed: false, optional: false, required: true
  private _ip: string;
  public get ip() {
    return this._ip;
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip
  }

  // token - computed: false, optional: false, required: true
  private _token: string;
  public get token() {
    return this._token;
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token
  }

  // use_sandbox - computed: false, optional: true, required: false
  private _useSandbox?: boolean;
  public get useSandbox() {
    return this._useSandbox;
  }
  public set useSandbox(value: boolean  | undefined) {
    this._useSandbox = value;
  }
  public resetUseSandbox() {
    this._useSandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSandboxInput() {
    return this._useSandbox
  }

  // username - computed: false, optional: false, required: true
  private _username: string;
  public get username() {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string;
  public get alias() {
    return this._alias;
  }
  public set alias(value: string  | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_user: cdktf.stringToTerraform(this._apiUser),
      ip: cdktf.stringToTerraform(this._ip),
      token: cdktf.stringToTerraform(this._token),
      use_sandbox: cdktf.booleanToTerraform(this._useSandbox),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
