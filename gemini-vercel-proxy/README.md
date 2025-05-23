# Gemini Proxy for Vercel

This is a simple serverless function you can deploy to Vercel to safely use your Gemini API key without exposing it to the frontend.

## How to Use

1. Replace `YOUR_GEMINI_API_KEY_HERE` in your environment variables.
2. Deploy to Vercel using `vercel deploy`.
3. Send POST requests to `/api/gemini` with a JSON body like:
```json
{
  "message": "Hello, Gemini!"
}
```
