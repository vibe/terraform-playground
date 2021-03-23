// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Apigatewayv2IntegrationConfig extends cdktf.TerraformMetaArguments {
  readonly apiId: string;
  readonly connectionId?: string;
  readonly connectionType?: string;
  readonly contentHandlingStrategy?: string;
  readonly credentialsArn?: string;
  readonly description?: string;
  readonly integrationMethod?: string;
  readonly integrationSubtype?: string;
  readonly integrationType: string;
  readonly integrationUri?: string;
  readonly passthroughBehavior?: string;
  readonly payloadFormatVersion?: string;
  readonly requestParameters?: { [key: string]: string };
  readonly requestTemplates?: { [key: string]: string };
  readonly templateSelectionExpression?: string;
  readonly timeoutMilliseconds?: number;
  /** response_parameters block */
  readonly responseParameters?: Apigatewayv2IntegrationResponseParameters[];
  /** tls_config block */
  readonly tlsConfig?: Apigatewayv2IntegrationTlsConfig[];
}
export interface Apigatewayv2IntegrationResponseParameters {
  readonly mappings: { [key: string]: string };
  readonly statusCode: string;
}

function apigatewayv2IntegrationResponseParametersToTerraform(struct?: Apigatewayv2IntegrationResponseParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mappings: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.mappings),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}

export interface Apigatewayv2IntegrationTlsConfig {
  readonly serverNameToVerify?: string;
}

function apigatewayv2IntegrationTlsConfigToTerraform(struct?: Apigatewayv2IntegrationTlsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    server_name_to_verify: cdktf.stringToTerraform(struct!.serverNameToVerify),
  }
}


// Resource

export class Apigatewayv2Integration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Apigatewayv2IntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_integration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiId = config.apiId;
    this._connectionId = config.connectionId;
    this._connectionType = config.connectionType;
    this._contentHandlingStrategy = config.contentHandlingStrategy;
    this._credentialsArn = config.credentialsArn;
    this._description = config.description;
    this._integrationMethod = config.integrationMethod;
    this._integrationSubtype = config.integrationSubtype;
    this._integrationType = config.integrationType;
    this._integrationUri = config.integrationUri;
    this._passthroughBehavior = config.passthroughBehavior;
    this._payloadFormatVersion = config.payloadFormatVersion;
    this._requestParameters = config.requestParameters;
    this._requestTemplates = config.requestTemplates;
    this._templateSelectionExpression = config.templateSelectionExpression;
    this._timeoutMilliseconds = config.timeoutMilliseconds;
    this._responseParameters = config.responseParameters;
    this._tlsConfig = config.tlsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId: string;
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId
  }

  // connection_id - computed: false, optional: true, required: false
  private _connectionId?: string;
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string ) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId
  }

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string;
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string ) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType
  }

  // content_handling_strategy - computed: false, optional: true, required: false
  private _contentHandlingStrategy?: string;
  public get contentHandlingStrategy() {
    return this.getStringAttribute('content_handling_strategy');
  }
  public set contentHandlingStrategy(value: string ) {
    this._contentHandlingStrategy = value;
  }
  public resetContentHandlingStrategy() {
    this._contentHandlingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentHandlingStrategyInput() {
    return this._contentHandlingStrategy
  }

  // credentials_arn - computed: false, optional: true, required: false
  private _credentialsArn?: string;
  public get credentialsArn() {
    return this.getStringAttribute('credentials_arn');
  }
  public set credentialsArn(value: string ) {
    this._credentialsArn = value;
  }
  public resetCredentialsArn() {
    this._credentialsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsArnInput() {
    return this._credentialsArn
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_method - computed: false, optional: true, required: false
  private _integrationMethod?: string;
  public get integrationMethod() {
    return this.getStringAttribute('integration_method');
  }
  public set integrationMethod(value: string ) {
    this._integrationMethod = value;
  }
  public resetIntegrationMethod() {
    this._integrationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationMethodInput() {
    return this._integrationMethod
  }

  // integration_response_selection_expression - computed: true, optional: false, required: false
  public get integrationResponseSelectionExpression() {
    return this.getStringAttribute('integration_response_selection_expression');
  }

  // integration_subtype - computed: false, optional: true, required: false
  private _integrationSubtype?: string;
  public get integrationSubtype() {
    return this.getStringAttribute('integration_subtype');
  }
  public set integrationSubtype(value: string ) {
    this._integrationSubtype = value;
  }
  public resetIntegrationSubtype() {
    this._integrationSubtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationSubtypeInput() {
    return this._integrationSubtype
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType: string;
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType
  }

  // integration_uri - computed: false, optional: true, required: false
  private _integrationUri?: string;
  public get integrationUri() {
    return this.getStringAttribute('integration_uri');
  }
  public set integrationUri(value: string ) {
    this._integrationUri = value;
  }
  public resetIntegrationUri() {
    this._integrationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationUriInput() {
    return this._integrationUri
  }

  // passthrough_behavior - computed: false, optional: true, required: false
  private _passthroughBehavior?: string;
  public get passthroughBehavior() {
    return this.getStringAttribute('passthrough_behavior');
  }
  public set passthroughBehavior(value: string ) {
    this._passthroughBehavior = value;
  }
  public resetPassthroughBehavior() {
    this._passthroughBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughBehaviorInput() {
    return this._passthroughBehavior
  }

  // payload_format_version - computed: false, optional: true, required: false
  private _payloadFormatVersion?: string;
  public get payloadFormatVersion() {
    return this.getStringAttribute('payload_format_version');
  }
  public set payloadFormatVersion(value: string ) {
    this._payloadFormatVersion = value;
  }
  public resetPayloadFormatVersion() {
    this._payloadFormatVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFormatVersionInput() {
    return this._payloadFormatVersion
  }

  // request_parameters - computed: false, optional: true, required: false
  private _requestParameters?: { [key: string]: string };
  public get requestParameters() {
    return this.interpolationForAttribute('request_parameters') as any;
  }
  public set requestParameters(value: { [key: string]: string } ) {
    this._requestParameters = value;
  }
  public resetRequestParameters() {
    this._requestParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParametersInput() {
    return this._requestParameters
  }

  // request_templates - computed: false, optional: true, required: false
  private _requestTemplates?: { [key: string]: string };
  public get requestTemplates() {
    return this.interpolationForAttribute('request_templates') as any;
  }
  public set requestTemplates(value: { [key: string]: string } ) {
    this._requestTemplates = value;
  }
  public resetRequestTemplates() {
    this._requestTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTemplatesInput() {
    return this._requestTemplates
  }

  // template_selection_expression - computed: false, optional: true, required: false
  private _templateSelectionExpression?: string;
  public get templateSelectionExpression() {
    return this.getStringAttribute('template_selection_expression');
  }
  public set templateSelectionExpression(value: string ) {
    this._templateSelectionExpression = value;
  }
  public resetTemplateSelectionExpression() {
    this._templateSelectionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSelectionExpressionInput() {
    return this._templateSelectionExpression
  }

  // timeout_milliseconds - computed: true, optional: true, required: false
  private _timeoutMilliseconds?: number;
  public get timeoutMilliseconds() {
    return this.getNumberAttribute('timeout_milliseconds');
  }
  public set timeoutMilliseconds(value: number) {
    this._timeoutMilliseconds = value;
  }
  public resetTimeoutMilliseconds() {
    this._timeoutMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMillisecondsInput() {
    return this._timeoutMilliseconds
  }

  // response_parameters - computed: false, optional: true, required: false
  private _responseParameters?: Apigatewayv2IntegrationResponseParameters[];
  public get responseParameters() {
    return this.interpolationForAttribute('response_parameters') as any;
  }
  public set responseParameters(value: Apigatewayv2IntegrationResponseParameters[] ) {
    this._responseParameters = value;
  }
  public resetResponseParameters() {
    this._responseParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseParametersInput() {
    return this._responseParameters
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig?: Apigatewayv2IntegrationTlsConfig[];
  public get tlsConfig() {
    return this.interpolationForAttribute('tls_config') as any;
  }
  public set tlsConfig(value: Apigatewayv2IntegrationTlsConfig[] ) {
    this._tlsConfig = value;
  }
  public resetTlsConfig() {
    this._tlsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      content_handling_strategy: cdktf.stringToTerraform(this._contentHandlingStrategy),
      credentials_arn: cdktf.stringToTerraform(this._credentialsArn),
      description: cdktf.stringToTerraform(this._description),
      integration_method: cdktf.stringToTerraform(this._integrationMethod),
      integration_subtype: cdktf.stringToTerraform(this._integrationSubtype),
      integration_type: cdktf.stringToTerraform(this._integrationType),
      integration_uri: cdktf.stringToTerraform(this._integrationUri),
      passthrough_behavior: cdktf.stringToTerraform(this._passthroughBehavior),
      payload_format_version: cdktf.stringToTerraform(this._payloadFormatVersion),
      request_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestParameters),
      request_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestTemplates),
      template_selection_expression: cdktf.stringToTerraform(this._templateSelectionExpression),
      timeout_milliseconds: cdktf.numberToTerraform(this._timeoutMilliseconds),
      response_parameters: cdktf.listMapper(apigatewayv2IntegrationResponseParametersToTerraform)(this._responseParameters),
      tls_config: cdktf.listMapper(apigatewayv2IntegrationTlsConfigToTerraform)(this._tlsConfig),
    };
  }
}
