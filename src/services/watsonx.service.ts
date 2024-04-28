import AssistantV2 from "ibm-watson/assistant/v2";
import * as IamAuthenticator from "ibm-watson/auth";

const apiKey: string = process.env.API_KEY_WATSONX_ASSISTANT as string;
const serviceUrl: string = process.env.URL_SERVICE_WATSONX_ASSISTANT as string;
const assistantId: string = process.env.WATSONX_ASSISTANT_ID as string;

const assistant = new AssistantV2({
  version: "2021-04-06",
  authenticator: new IamAuthenticator.IamAuthenticator({
    apikey: apiKey,
  }),
  serviceUrl: serviceUrl,
});

export function sendMessage(input: string) {
  return assistant.messageStateless({
    assistantId: assistantId,
    input: {
      message_type: "text",
      text: input,
    },
  });
}
