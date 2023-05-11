import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {NodejsFunction} from "aws-cdk-lib/aws-lambda-nodejs";
import {Runtime} from "aws-cdk-lib/aws-lambda";
import {LambdaRestApi} from "aws-cdk-lib/aws-apigateway";

export class SastPocStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const apiHandler = new NodejsFunction(this, 'SastPocApiHandler', {
      runtime: Runtime.NODEJS_18_X,
      entry: 'src/handlers/hello-world.ts',
    })

    new LambdaRestApi(this, 'SastPocApiGateway', {
      handler: apiHandler
    });
  }
}
