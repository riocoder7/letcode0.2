import { GoogleGenerativeAI } from "@google/generative-ai";

const api_key = "enter you gamini  api key "; 
  const genAI = new GoogleGenerativeAI(api_key);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",  
  });
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

 export async function gamini_ai_response(inputText:string, setGeneratedText :any , setLoading:any) {
    setLoading(true);
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    try {
      const result = await chatSession.sendMessage(inputText);
      setGeneratedText(result.response.text());
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setLoading(false);
    }
  }