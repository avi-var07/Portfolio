import { getAIResponse } from '../services/openaiService.js'

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body

    if (!message) {
      return res.status(400).json({ error: 'Message is required' })
    }

    const reply = await getAIResponse(message)
    res.json({ reply })
  } catch (error) {
    console.error('AI Chat Error:', error)
    res.status(500).json({ error: 'Failed to get AI response' })
  }
}
