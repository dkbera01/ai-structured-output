import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import 'dotenv/config';
import { z } from "zod";
import { procurementManagerPrompt } from "./prompts.js";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const items = z.object({
    name: z.string(),
    price: z.number(),
    tax: z.number(),
    quantity: z.number()
})

const responseSchema = z.object({
    department: z.string(),
    priority: z.enum([
        "Low",
        "Medium",
        "High"
    ]),
    items: z.array(items)
})

export async function makeLlmCall(input) {
    const response = await client.responses.parse({
        model: "gpt-4o-mini",
        instructions: procurementManagerPrompt,
        input: input,
        text: {
            format: zodTextFormat(responseSchema, 'procurement_request')
        }
    })
    return response
}