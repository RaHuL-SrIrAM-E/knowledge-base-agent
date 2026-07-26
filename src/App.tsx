import { useEffect, useRef, useState } from "react";
import { suggestedQuestions, TOPIC } from "./data/knowledgeBase";
import { getMockResponse } from "./mockAi";
import { createMessage, type Message } from "./types";
import { ChatInput } from "./components/ChatInput";
import { ChatMessage } from "./components/ChatMessage";
import { SuggestedQuestions } from "./components/SuggestedQuestions";

const WELCOME_MESSAGE = createMessage(
  "assistant",
  `Hi! I'm your **${TOPIC.title}** assistant. I can help clarify how teams can start and run new initiatives.\n\nPick a suggested question below, or type your own.`,
);

export default function App() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function handleSend(question: string) {
    const trimmed = question.trim();
    if (!trimmed || isLoading) return;

    const userMessage = createMessage("user", trimmed);
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const answer = await getMockResponse(trimmed);
      setMessages((prev) => [...prev, createMessage("assistant", answer)]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>{TOPIC.title}</h1>
          <p>{TOPIC.description}</p>
        </div>
      </header>

      <main className="chat-container">
        <div className="messages">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}

          {isLoading && (
            <div className="typing-indicator" aria-label="Assistant is typing">
              <span />
              <span />
              <span />
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {!isLoading && messages.length <= 1 && (
          <SuggestedQuestions
            questions={suggestedQuestions}
            onSelect={handleSend}
          />
        )}

        <ChatInput onSend={handleSend} disabled={isLoading} />
      </main>
    </div>
  );
}
