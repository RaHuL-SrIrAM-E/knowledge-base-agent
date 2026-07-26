import type { Message } from "../types";

type ChatMessageProps = {
  message: Message;
};

function formatContent(content: string): string {
  return content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`message ${isUser ? "message-user" : "message-assistant"}`}>
      <div className="message-avatar" aria-hidden="true">
        {isUser ? "You" : "AI"}
      </div>
      <div className="message-body">
        <div
          className="message-content"
          dangerouslySetInnerHTML={{ __html: formatContent(message.content) }}
        />
        <time className="message-time">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </time>
      </div>
    </div>
  );
}
