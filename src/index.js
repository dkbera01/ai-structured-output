import inquirer from 'inquirer';
import { makeLlmCall } from './llm-api.js';


async function main() {
  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'question',
      message: 'Enter your question:',
    },
  ]);

  const input = `${answer.question}`;

  const modelOutput = await makeLlmCall(input);
  console.log("Model Output:", modelOutput);
}

main();