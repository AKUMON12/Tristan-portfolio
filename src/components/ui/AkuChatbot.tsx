'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  X,
  Send,
  Sparkles,
  RotateCcw,
  FileText,
  Mail,
  Loader2,
  MessageSquare,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface AkuChatbotProps {
  onOpenResume?: () => void;
}

const WELCOME_MESSAGE: ChatMessage = {
  id: 'aku-welcome',
  role: 'assistant',
  content:
    "Hey there! I'm **AKU** (*AI's Knowledge Under Tristan*), Tristan's personal AI assistant. Ask me anything about his projects, tech stack, Cisco certs, or why he'd be a great fit for your team!",
};

const STARTER_PROMPTS = [
  'Why should we hire Tristan?',
  'Tell me about his top projects',
  'What are his skills & Cisco certs?',
  'How can I contact or hire him?',
];

const MAX_INPUT_LENGTH = 500;

/**
 * Lightweight inline formatter for **bold**, *italic*, and bare URLs / emails
 */
function renderFormattedText(text: string) {
  const lines = text.split('\n');

  return lines.map((line, lineIdx) => {
    const parts = line.split(/(\*\*[^*]+\*\*|\*[^*]+\*|https?:\/\/[^\s)]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g);

    return (
      <React.Fragment key={lineIdx}>
        {parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={i} className="font-semibold text-white">
                {part.slice(2, -2)}
              </strong>
            );
          }
          if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
            return (
              <em key={i} className="italic text-cyan-200">
                {part.slice(1, -1)}
              </em>
            );
          }
          if (/^https?:\/\//.test(part)) {
            return (
              <a
                key={i}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline decoration-cyan-400/50 hover:text-cyan-300 break-all"
              >
                {part}
              </a>
            );
          }
          if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part)) {
            return (
              <a
                key={i}
                href={`mailto:${part}`}
                className="text-cyan-400 underline decoration-cyan-400/50 hover:text-cyan-300"
              >
                {part}
              </a>
            );
          }
          return <React.Fragment key={i}>{part}</React.Fragment>;
        })}
        {lineIdx < lines.length - 1 && <br />}
      </React.Fragment>
    );
  });
}

export const AkuChatbot: React.FC<AkuChatbotProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [isOpen, messages, isLoading]);

  const sendMessage = async (textOverride?: string) => {
    const content = (textOverride ?? input).trim();
    if (!content || isLoading) return;

    setError(null);
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: content.slice(0, MAX_INPUT_LENGTH),
    };

    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    if (!textOverride) setInput('');
    setIsLoading(true);

    try {
      // Send conversation history excluding the static welcome message
      const payloadMessages = nextMessages
        .filter((m) => m.id !== WELCOME_MESSAGE.id)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || 'AKU had trouble replying. Please try again.');
        return;
      }

      const botMsg: ChatMessage = {
        id: `aku-${Date.now()}`,
        role: 'assistant',
        content: data.reply,
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setError('Connection hiccup — please check your internet or email tjelvinia@gmail.com.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  const handleReset = () => {
    setMessages([WELCOME_MESSAGE]);
    setError(null);
    setInput('');
  };

  const handleGoToContact = () => {
    setIsOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Chat Drawer / Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="AKU — Tristan's Portfolio Assistant"
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 md:right-8 z-50 flex h-[min(540px,calc(100vh-7rem))] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0A0D14]/95 shadow-[0_0_45px_rgba(0,240,255,0.18)] backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800/90 bg-gradient-to-r from-cyan-950/50 via-[#0E131F] to-purple-950/50 px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/15 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.25)]">
                <Bot className="h-5 w-5" />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0A0D14] bg-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-mono text-sm font-bold tracking-wide text-white">AKU</h3>
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-cyan-300">
                    AI Assistant
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">AI&apos;s Knowledge Under Tristan</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                title="Reset conversation"
                aria-label="Reset conversation"
                className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-800/80 hover:text-cyan-300"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
                className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-800/80 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed ${
                      isUser
                        ? 'rounded-br-sm bg-gradient-to-r from-cyan-500 to-blue-600 font-medium text-black shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        : 'rounded-bl-sm border border-slate-800 bg-[#0E131F]/90 text-slate-200'
                    }`}
                  >
                    {isUser ? msg.content : renderFormattedText(msg.content)}
                  </div>
                </div>
              );
            })}

            {/* Starter Prompt Chips (shown when only welcome message exists) */}
            {messages.length === 1 && !isLoading && (
              <div className="pt-1">
                <p className="mb-2 flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  <Sparkles className="h-3 w-3 text-cyan-400" />
                  <span>Suggested questions</span>
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {STARTER_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => sendMessage(prompt)}
                      className="rounded-xl border border-cyan-500/25 bg-cyan-950/25 px-2.5 py-1.5 text-left text-[11px] font-medium text-cyan-200 transition-all hover:border-cyan-400/60 hover:bg-cyan-500/15 hover:text-white"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-2 rounded-2xl rounded-bl-sm border border-slate-800 bg-[#0E131F]/90 px-3.5 py-2.5 text-xs text-cyan-300">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  <span className="font-mono text-[11px]">AKU is thinking...</span>
                </div>
              </div>
            )}

            {/* Error Notice */}
            {error && (
              <div className="rounded-xl border border-rose-500/30 bg-rose-950/30 px-3 py-2 text-[11px] text-rose-300">
                {error}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Strip */}
          <div className="flex items-center gap-2 border-t border-slate-800/70 bg-[#0C101A] px-3.5 py-2">
            {onOpenResume && (
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/70 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-cyan-300"
              >
                <FileText className="h-3 w-3 text-cyan-400" />
                <span>View Resume</span>
              </button>
            )}
            <button
              type="button"
              onClick={handleGoToContact}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/70 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition-colors hover:border-purple-500/40 hover:text-purple-300"
            >
              <Mail className="h-3 w-3 text-purple-400" />
              <span>Contact Tristan</span>
            </button>
          </div>

          {/* Input Bar */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-slate-800/90 bg-[#0A0D14] p-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT_LENGTH))}
              disabled={isLoading}
              placeholder="Ask AKU anything about Tristan..."
              className="flex-1 rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none disabled:opacity-60 transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all hover:from-cyan-400 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating AKU Launcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close AKU assistant' : 'Chat with AKU — Tristan’s AI Assistant'}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 group flex items-center gap-2 rounded-full border border-cyan-400/50 bg-gradient-to-r from-[#0E131F]/95 to-cyan-950/90 px-4 py-3 text-white shadow-[0_0_25px_rgba(0,240,255,0.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] active:scale-95"
      >
        <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
          {isOpen ? <X className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
          {!isOpen && (
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          )}
        </span>
        <span className="font-mono text-xs font-bold tracking-wider text-cyan-200 group-hover:text-white">
          {isOpen ? 'Close AKU' : 'Ask AKU'}
        </span>
      </button>
    </>
  );
};
