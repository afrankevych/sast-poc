import * as cdk from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {Code, Runtime} from "aws-cdk-lib/aws-lambda";
import {ApiGatewayToLambda} from "@aws-solutions-constructs/aws-apigateway-lambda";
import {NagSuppressions} from "cdk-nag";
import {CfnWebACL, CfnWebACLAssociation} from "aws-cdk-lib/aws-wafv2";

export class SastPocStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // NagSuppressions.addStackSuppressions(this, [
    //   {
    //     id: 'AwsSolutions-IAM5',
    //     reason: 'The default policy provided by aws-solutions-constructs is ok'
    //   },
    //   {
    //     id: 'AwsSolutions-APIG2',
    //     reason: 'The validation is implemented in the lambda logic'
    //   },
    //   {
    //     id: 'AwsSolutions-COG4',
    //     reason: 'This API is public'
    //   },
    // ])
    const gatewayToLambda = new ApiGatewayToLambda(this, 'ApiGatewayToLambdaPattern', {
      lambdaFunctionProps: {
        runtime: Runtime.NODEJS_18_X,
        code: Code.fromAsset('src/handlers'),
        handler: 'hello-world.handler',
      }
    });

    // const cfnWebACL = new CfnWebACL(this, 'MyCDKWebAcl', {
    //   defaultAction: {
    //     allow: {}
    //   },
    //   scope: 'REGIONAL',
    //   visibilityConfig: {
    //     cloudWatchMetricsEnabled: true,
    //     metricName: 'MetricForWebACLCDK',
    //     sampledRequestsEnabled: true,
    //   },
    //   name: 'MyCDKWebAcl',
    //   rules: [{
    //     name: 'CRSRule',
    //     priority: 0,
    //     statement: {
    //       managedRuleGroupStatement: {
    //         name: 'AWSManagedRulesCommonRuleSet',
    //         vendorName: 'AWS'
    //       }
    //     },
    //     visibilityConfig: {
    //       cloudWatchMetricsEnabled: true,
    //       metricName: 'MetricForWebACLCDK-CRS',
    //       sampledRequestsEnabled: true,
    //     },
    //     overrideAction: {
    //       none: {}
    //     },
    //   }]
    // });
    // const region = cdk.Stack.of(this).region;
    // const arn = `arn:aws:apigateway:${region}::/restapis/${gatewayToLambda.apiGateway.restApiId}/stages/${gatewayToLambda.apiGateway.deploymentStage.stageName}`;
    // new CfnWebACLAssociation(this, "WebAclAssociation", {
    //   webAclArn: cfnWebACL.attrArn,
    //   resourceArn: arn,
    // });
  }
}
