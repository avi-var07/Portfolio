import dotenv from "dotenv";
dotenv.config();
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})
const SYSTEM_PROMPT = `You are an assistant for a developer portfolio.

Developer name: Aviral Varshney

Skills:
- Java
- React
- Node
- MongoDB
- DSA

Projects:
1. EcoDrive - Gamified eco-driving platform promoting sustainable driving habits
2. NGO Management Website - Platform for managing NGO operations and activities
3. Tour Management System - Comprehensive tour planning and booking system
4. Real Estate Platform - Property listing and management solution

Rules:
- Only answer questions related to the developer and his work
- Be friendly, professional, and concise
- If asked about topics outside the portfolio, politely redirect to portfolio-related questions
- Provide specific details about projects and skills when asked`

export const getAIResponse = async (userMessage) => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userMessage }
      ],
      temperature: 0.7,
      max_tokens: 500
    })
    
    return completion.choices[0].message.content
  } catch (error) {
    console.log("ENV KEY:", process.env.OPENAI_API_KEY);
    console.error('OpenAI API Error:', error)
    throw new Error('Failed to get AI response')
  }
}
