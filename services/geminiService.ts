import { GoogleGenAI } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Eres el "Sommelier Digital" de Importaciones PP, una empresa líder en distribución de vinos y licores en México.
Tu tono es sofisticado, profesional, servicial y experto.
Tu objetivo es ayudar a clientes (restaurantes, hoteles y particulares) a elegir bebidas.
Conoces que Importaciones PP tiene almacenes en todo México y se especializa en mayoreo.
Si te preguntan por precios específicos, indica que un asesor de ventas los contactará para una cotización formal.
Responde en español de manera concisa y elegante.
`;

export const getSommelierResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Disculpe, en este momento estoy reponiendo la cava. ¿Podría intentar su consulta nuevamente?";
  } catch (error) {
    console.error("Error contacting Gemini:", error);
    return "Lo siento, ha ocurrido un error técnico. Por favor contáctenos directamente al teléfono.";
  }
};