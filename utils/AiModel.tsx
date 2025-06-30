// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

// import {
//   GoogleGenAI,
// } from '@google/genai';

// async function main() {
//   const ai = new GoogleGenAI({
//     apiKey: process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY,
//   });
//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1,
//     },
//     responseMimeType: 'text/plain',
//   };
//   const model = 'gemini-2.5-flash';
//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `INSERT_INPUT_HERE`,
//         },
//       ],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });
//   let fileIndex = 0;
//   for await (const chunk of response) {
//     console.log(chunk.text);
//   }
// }

// main();

// const{
//     GoogleGenAI,
//     HarmCategory,
//     HarmBlockTHresold
// } = require("@google/genai");

// const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY
// const genAi = new GoogleGenAI({ apiKey });

// // const model=genAi.getGenModel({
// //     model:'gemini-2.5-flash',
// // });
// const model = 'gemini-2.5-flash';

// const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK:64,
//     maxOutputTokens: 8192,
//     responseMmeType:"text/plain"
// };

// export const chatSession = model.startChat({
//     generationConfig,
//     history:[
        
//     ],
// })


import {
  GoogleGenAI,
} from '@google/genai';
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY,
  });
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-2.5-flash';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ];

  export const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  


