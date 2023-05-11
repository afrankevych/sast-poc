import {APIGatewayEvent, APIGatewayProxyResult} from "aws-lambda";

const handler = async (_event: APIGatewayEvent): Promise<APIGatewayProxyResult> => ({
  statusCode: 200,
  body: JSON.stringify({message: 'Hello World!'})
})