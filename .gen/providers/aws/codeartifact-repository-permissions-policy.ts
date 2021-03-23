// https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodeartifactRepositoryPermissionsPolicyConfig extends cdktf.TerraformMetaArguments {
  readonly domain: string;
  readonly domainOwner?: string;
  readonly policyDocument: string;
  readonly policyRevision?: string;
  readonly repository: string;
}

// Resource

export class CodeartifactRepositoryPermissionsPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodeartifactRepositoryPermissionsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codeartifact_repository_permissions_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domain = config.domain;
    this._domainOwner = config.domainOwner;
    this._policyDocument = config.policyDocument;
    this._policyRevision = config.policyRevision;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain: string;
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain
  }

  // domain_owner - computed: true, optional: true, required: false
  private _domainOwner?: string;
  public get domainOwner() {
    return this.getStringAttribute('domain_owner');
  }
  public set domainOwner(value: string) {
    this._domainOwner = value;
  }
  public resetDomainOwner() {
    this._domainOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainOwnerInput() {
    return this._domainOwner
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_document - computed: false, optional: false, required: true
  private _policyDocument: string;
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDocumentInput() {
    return this._policyDocument
  }

  // policy_revision - computed: true, optional: true, required: false
  private _policyRevision?: string;
  public get policyRevision() {
    return this.getStringAttribute('policy_revision');
  }
  public set policyRevision(value: string) {
    this._policyRevision = value;
  }
  public resetPolicyRevision() {
    this._policyRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRevisionInput() {
    return this._policyRevision
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      domain_owner: cdktf.stringToTerraform(this._domainOwner),
      policy_document: cdktf.stringToTerraform(this._policyDocument),
      policy_revision: cdktf.stringToTerraform(this._policyRevision),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }
}
