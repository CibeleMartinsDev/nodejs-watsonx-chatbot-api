import { sendMessage } from "../services/watsonx.service";

export default class ConversationController {
  public static sendMessage(req: any, res: any) {
    const { input } = req.body;
    console.log(input)
    const outputInteration = sendMessage(input);
    outputInteration
      .then((success: any) => {
        const response = success.result;
        res.json(response);
        res.status(200);
      })
      .catch((error: any) => {
        res.json(error);
        res.status(400);
      });
  }
}
