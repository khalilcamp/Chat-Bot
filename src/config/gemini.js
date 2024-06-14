
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
import fs from 'fs';
import {GoogleAIFileManager} from "@google/generative-ai/files"
  
  const apiKey = "";
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  async function runChat(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
          
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    console.log(result.response.text());
    return response.text();
  }
  
  export default runChat;


  