
// "use client";
// import { useState } from "react";
// import { MessageCircle, X } from "lucide-react";

// export default function ChatbotFloating() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const MAX_MESSAGES = 20; // limit chat history

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { role: "user", content: input };
//     const newMessages = [...messages, userMessage].slice(-MAX_MESSAGES); // keep only last 20
//     setMessages(newMessages);

//     const res = await fetch("/api/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ message: input }),
//     });

//     const data = await res.json();
//     const botMessage = { role: "assistant", content: data.reply };

//     setMessages((prev) => [...prev.slice(-MAX_MESSAGES), userMessage, botMessage]);
//     setInput("");
//   };

//   return (
//     <div>
//       {/* Floating Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed bottom-6 right-6 bg-[#31f9c7] text-black p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
//       >
//         {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
//       </button>

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-20 right-6 w-80 h-96 bg-black shadow-xl rounded-lg flex flex-col overflow-hidden border border-[#31f9c7]">
//           {/* Header */}
//           <div className="bg-[#31f9c7] text-black px-4 py-2 font-bold">
//             Chat with Saburi 🤖
//           </div>

//           {/* Messages */}
//           <div
//             className="flex-1 p-3 overflow-y-auto text-sm"
//             style={{
//               backgroundImage:
//                 "url('https://www.transparenttextures.com/patterns/cubes.png')",
//               backgroundSize: "auto",
//               backgroundRepeat: "repeat",
//             }}
//           >
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`mb-2 flex ${
//                   msg.role === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`px-3 py-2 rounded-2xl max-w-[70%] ${
//                     msg.role === "user"
//                       ? "bg-[#31f9c7] text-black rounded-br-none"
//                       : "bg-gray-800 text-[#31f9c7] rounded-bl-none"
//                   }`}
//                 >
//                   {msg.content}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Input */}
//           <div className="flex border-t border-gray-700 bg-black">
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               className="flex-1 p-2 text-sm bg-black text-white outline-none"
//               placeholder="Ask me about my work..."
//             />
//             <button
//               onClick={sendMessage}
//               className="bg-[#31f9c7] text-black px-4 py-2 font-semibold hover:opacity-80 transition"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";
import { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatbotFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  const MAX_MESSAGES = 20;

  // Auto scroll to bottom when messages change
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    const currentInput = input;
    
    // Add user message and clear input immediately
    setMessages(prev => [...prev, userMessage].slice(-MAX_MESSAGES));
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput }),
      });

      const data = await res.json();
      const botMessage = { role: "assistant", content: data.reply };

      // Add bot message
      setMessages(prev => [...prev, botMessage].slice(-MAX_MESSAGES));
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = { role: "assistant", content: "Sorry, I encountered an error. Please try again." };
      setMessages(prev => [...prev, errorMessage].slice(-MAX_MESSAGES));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="relative">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#31f9c7] text-black p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-[9998]"
        style={{ zIndex: 9998 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-20 right-6 w-80 h-96 bg-black shadow-xl rounded-lg flex flex-col overflow-hidden border border-[#31f9c7] z-[9999]"
          style={{ zIndex: 9999 }}
        >
          {/* Header */}
          <div className="bg-[#31f9c7] text-black px-4 py-2 font-bold flex-shrink-0">
            Chat with Saburi 🤖
          </div>

          {/* Messages Container */}
          <div
            ref={messagesContainerRef}
            className="flex-1 p-3 overflow-y-auto text-sm scrollbar-thin scrollbar-thumb-[#31f9c7] scrollbar-track-gray-800"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/cubes.png')",
              backgroundSize: "auto",
              backgroundRepeat: "repeat",
            }}
          >
            {messages.length === 0 && (
              <div className="text-gray-400 text-center mt-8">
                <p>👋 Hi! I'm Saburi.</p>
                <p className="text-xs mt-1">Ask me anything about my work!</p>
              </div>
            )}
            
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-3 flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl max-w-[75%] break-words ${
                    msg.role === "user"
                      ? "bg-[#31f9c7] text-black rounded-br-none shadow-sm"
                      : "bg-gray-800 text-[#31f9c7] rounded-bl-none shadow-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start mb-3">
                <div className="bg-gray-800 text-[#31f9c7] px-3 py-2 rounded-2xl rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[#31f9c7] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#31f9c7] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-[#31f9c7] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Invisible element to scroll to */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex border-t border-gray-700 bg-black flex-shrink-0">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
              className="flex-1 p-3 text-sm bg-black text-white outline-none placeholder-gray-400 disabled:opacity-50"
              placeholder={isLoading ? "Thinking..." : "Ask me about my work..."}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="bg-[#31f9c7] text-black px-4 py-2 font-semibold hover:opacity-80 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}