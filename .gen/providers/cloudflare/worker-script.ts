// https://www.terraform.io/docs/providers/cloudflare/r/worker_script.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkerScriptConfig extends cdktf.TerraformMetaArguments {
  readonly content: string;
  readonly name: string;
  /** kv_namespace_binding block */
  readonly kvNamespaceBinding?: WorkerScriptKvNamespaceBinding[];
  /** plain_text_binding block */
  readonly plainTextBinding?: WorkerScriptPlainTextBinding[];
  /** secret_text_binding block */
  readonly secretTextBinding?: WorkerScriptSecretTextBinding[];
  /** webassembly_binding block */
  readonly webassemblyBinding?: WorkerScriptWebassemblyBinding[];
}
export interface WorkerScriptKvNamespaceBinding {
  readonly name: string;
  readonly namespaceId: string;
}

function workerScriptKvNamespaceBindingToTerraform(struct?: WorkerScriptKvNamespaceBinding): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
  }
}

export interface WorkerScriptPlainTextBinding {
  readonly name: string;
  readonly text: string;
}

function workerScriptPlainTextBindingToTerraform(struct?: WorkerScriptPlainTextBinding): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    text: cdktf.stringToTerraform(struct!.text),
  }
}

export interface WorkerScriptSecretTextBinding {
  readonly name: string;
  readonly text: string;
}

function workerScriptSecretTextBindingToTerraform(struct?: WorkerScriptSecretTextBinding): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    text: cdktf.stringToTerraform(struct!.text),
  }
}

export interface WorkerScriptWebassemblyBinding {
  readonly module: string;
  readonly name: string;
}

function workerScriptWebassemblyBindingToTerraform(struct?: WorkerScriptWebassemblyBinding): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    module: cdktf.stringToTerraform(struct!.module),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


// Resource

export class WorkerScript extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WorkerScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_worker_script',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._content = config.content;
    this._name = config.name;
    this._kvNamespaceBinding = config.kvNamespaceBinding;
    this._plainTextBinding = config.plainTextBinding;
    this._secretTextBinding = config.secretTextBinding;
    this._webassemblyBinding = config.webassemblyBinding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: false, required: true
  private _content: string;
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // kv_namespace_binding - computed: false, optional: true, required: false
  private _kvNamespaceBinding?: WorkerScriptKvNamespaceBinding[];
  public get kvNamespaceBinding() {
    return this.interpolationForAttribute('kv_namespace_binding') as any;
  }
  public set kvNamespaceBinding(value: WorkerScriptKvNamespaceBinding[] ) {
    this._kvNamespaceBinding = value;
  }
  public resetKvNamespaceBinding() {
    this._kvNamespaceBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvNamespaceBindingInput() {
    return this._kvNamespaceBinding
  }

  // plain_text_binding - computed: false, optional: true, required: false
  private _plainTextBinding?: WorkerScriptPlainTextBinding[];
  public get plainTextBinding() {
    return this.interpolationForAttribute('plain_text_binding') as any;
  }
  public set plainTextBinding(value: WorkerScriptPlainTextBinding[] ) {
    this._plainTextBinding = value;
  }
  public resetPlainTextBinding() {
    this._plainTextBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainTextBindingInput() {
    return this._plainTextBinding
  }

  // secret_text_binding - computed: false, optional: true, required: false
  private _secretTextBinding?: WorkerScriptSecretTextBinding[];
  public get secretTextBinding() {
    return this.interpolationForAttribute('secret_text_binding') as any;
  }
  public set secretTextBinding(value: WorkerScriptSecretTextBinding[] ) {
    this._secretTextBinding = value;
  }
  public resetSecretTextBinding() {
    this._secretTextBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTextBindingInput() {
    return this._secretTextBinding
  }

  // webassembly_binding - computed: false, optional: true, required: false
  private _webassemblyBinding?: WorkerScriptWebassemblyBinding[];
  public get webassemblyBinding() {
    return this.interpolationForAttribute('webassembly_binding') as any;
  }
  public set webassemblyBinding(value: WorkerScriptWebassemblyBinding[] ) {
    this._webassemblyBinding = value;
  }
  public resetWebassemblyBinding() {
    this._webassemblyBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webassemblyBindingInput() {
    return this._webassemblyBinding
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      name: cdktf.stringToTerraform(this._name),
      kv_namespace_binding: cdktf.listMapper(workerScriptKvNamespaceBindingToTerraform)(this._kvNamespaceBinding),
      plain_text_binding: cdktf.listMapper(workerScriptPlainTextBindingToTerraform)(this._plainTextBinding),
      secret_text_binding: cdktf.listMapper(workerScriptSecretTextBindingToTerraform)(this._secretTextBinding),
      webassembly_binding: cdktf.listMapper(workerScriptWebassemblyBindingToTerraform)(this._webassemblyBinding),
    };
  }
}
