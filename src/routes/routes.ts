import { Router } from "express";
import  ConversationController  from "../controller/conversation.controller";
export const router = Router();

router.post("/conversation", ConversationController.sendMessage);

