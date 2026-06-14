# OpenAI Structured Outputs

Learning and experimenting with OpenAI Structured Outputs using JavaScript and Zod.

## Project Goal

This project explores how to generate reliable, schema-validated JSON responses from OpenAI models instead of parsing free-form text.

Structured Outputs help build production-ready AI applications by enforcing response formats.

---

## Tech Stack

- Node.js
- JavaScript
- OpenAI API
- Zod

---

## Project Structure

```text
02-ai-structured-output/
│
├── src/
│   ├── index.js
│   ├── llm-api.js
│   └── prompt.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## What I Learned

### Structured Outputs

Instead of asking an LLM to return JSON and hoping it follows the format, OpenAI can enforce a predefined schema.

Example:

User Input:

```text
Create order for 10 blue pens.
```

AI Output:

```json
{
  "productName": "Blue Pen",
  "quantity": 10
}
```

---

### Schema Validation with Zod

Example schema:

```javascript
import { z } from "zod";

export const OrderSchema = z.object({
  productName: z.string(),
  quantity: z.number(),
});
```

This ensures AI responses match the expected structure.

---

### Benefits

- Predictable responses
- Easier backend integration
- Type safety
- Reduced parsing logic
- Better error handling

---

## Challenge Faced

### Zod Optional Field Error

While implementing Structured Outputs, I encountered:

```text
Zod field uses .optional() without .nullable()
which is not supported
```

Problematic schema:

```javascript
z.object({
  note: z.string().optional(),
});
```

Fixed version:

```javascript
z.object({
  note: z.string().nullable(),
});
```

### Lesson Learned

OpenAI Structured Outputs support a subset of Zod features.

Always verify schema compatibility before implementation.

---

## Running the Project

### Install Dependencies

```bash
npm install
```

### Configure Environment

Create a `.env` file:

```env
OPENAI_API_KEY=your_api_key
```

### Run

```bash
npm start
```

---

## Future Learning

- Nested schemas
- Function Calling
- Tool Calling
- AI Agents
- Multi-step workflows
- RAG (Retrieval-Augmented Generation)

---

## References

- OpenAI Structured Outputs
- Zod Documentation

---

## Author

DK

Software Engineer learning AI Engineering, Agentic AI, RAG, and AI-powered automation.

---
⭐ This repository is part of my AI Engineering learning journey.