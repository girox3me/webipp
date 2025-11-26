import React, { useState, useRef, useEffect } from 'react';
import { getSommelierResponse } from '../services/geminiService';
import { MessageSquare, Send, X, Loader2, Wine } from 'lucide-react';

const SommelierBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: "Bienvenido a Importaciones PP. Soy su Sommelier Digital. ¿En qué puedo ayudarle hoy? Puedo recomendarle vinos para su menú o informarle sobre tipos de licores.", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setInputValue("");
    setMessages(prev => [...prev, { text: userMsg, isUser: true }]);
    setIsLoading(true);

    const botResponse = await getSommelierResponse(userMsg);

    setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-wine-900 rounded-full shadow-2xl flex items-center justify-center text-gold-500 hover:scale-110 transition-transform duration-300 border-2 border-gold-500"
      >
        {isOpen ? <X size={28} /> : <Wine size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-sm bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col animate-fade-in-up h-[500px]">
          
          {/* Header */}
          <div className="bg-wine-900 p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-wine-900">
               <MessageSquare size={20} />
            </div>
            <div>
                <h3 className="text-white font-serif font-bold">Sommelier Digital</h3>
                <p className="text-gold-400 text-xs">Impulsado por IA</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.isUser 
                    ? 'bg-wine-800 text-white rounded-br-none' 
                    : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm">
                     <Loader2 className="animate-spin text-gold-600" size={20} />
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Pregunte sobre maridajes o vinos..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-wine-900 focus:ring-1 focus:ring-wine-900 text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-wine-900 hover:bg-gold-600 transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SommelierBot;