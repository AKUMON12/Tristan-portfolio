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
              <em key={i} className="italic text-sky-700 dark:text-cyan-200">
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
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 md:right-8 z-50 flex h-[min(540px,calc(100vh-7rem))] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/95 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200 dark:border-cyan-500/30 dark:bg-[#0A0D14]/95 dark:shadow-[0_0_45px_rgba(0,240,255,0.18)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-sky-50 via-white to-violet-50 px-4 py-3.5 dark:border-slate-800/90 dark:from-cyan-950/50 dark:via-[#0E131F] dark:to-purple-950/50">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-sky-200 bg-sky-100 text-sky-600 shadow-sm dark:border-cyan-400/40 dark:bg-cyan-500/15 dark:text-cyan-300 dark:shadow-[0_0_15px_rgba(0,240,255,0.25)]">
                <Bot className="h-5 w-5" />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 dark:border-[#0A0D14] dark:bg-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-mono text-sm font-bold tracking-wide text-slate-900 dark:text-white">AKU</h3>
                  <span className="rounded-full border border-sky-200 bg-sky-100/80 px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-sky-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300">
                    AI Assistant
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">AI&apos;s Knowledge Under Tristan</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                title="Reset conversation"
                aria-label="Reset conversation"
                className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-slate-200/70 hover:text-sky-700 dark:text-slate-400 dark:hover:bg-slate-800/80 dark:hover:text-cyan-300"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
                className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/80 dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50/50 px-4 py-4 dark:bg-transparent">
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
                        ? 'rounded-br-sm bg-gradient-to-r from-sky-500 to-blue-600 font-medium text-slate-50 shadow-sm dark:from-cyan-500 dark:to-blue-600 dark:text-black dark:shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        : 'rounded-bl-sm border border-slate-200 bg-white text-slate-700 shadow-sm dark:border-slate-800 dark:bg-[#0E131F]/90 dark:text-slate-200 dark:shadow-none'
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
                  <Sparkles className="h-3 w-3 text-sky-600 dark:text-cyan-400" />
                  <span>Suggested questions</span>
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {STARTER_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => sendMessage(prompt)}
                      className="rounded-xl border border-sky-200 bg-sky-50 px-2.5 py-1.5 text-left text-[11px] font-medium text-sky-700 transition-all hover:border-sky-400 hover:bg-sky-100 hover:text-sky-900 dark:border-cyan-500/25 dark:bg-cyan-950/25 dark:text-cyan-200 dark:hover:border-cyan-400/60 dark:hover:bg-cyan-500/15 dark:hover:text-white"
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
                <div className="inline-flex items-center gap-2 rounded-2xl rounded-bl-sm border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-sky-600 shadow-sm dark:border-slate-800 dark:bg-[#0E131F]/90 dark:text-cyan-300 dark:shadow-none">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  <span className="font-mono text-[11px]">AKU is thinking...</span>
                </div>
              </div>
            )}

            {/* Error Notice */}
            {error && (
              <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-[11px] text-rose-700 dark:border-rose-500/30 dark:bg-rose-950/30 dark:text-rose-300">
                {error}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Strip */}
          <div className="flex items-center gap-2 border-t border-slate-200 bg-slate-50 px-3.5 py-2 dark:border-slate-800/70 dark:bg-[#0C101A]">
            {onOpenResume && (
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-sm transition-colors hover:border-sky-400 hover:text-sky-700 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:shadow-none dark:hover:border-cyan-500/40 dark:hover:text-cyan-300"
              >
                <FileText className="h-3 w-3 text-sky-600 dark:text-cyan-400" />
                <span>View Resume</span>
              </button>
            )}
            <button
              type="button"
              onClick={handleGoToContact}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 shadow-sm transition-colors hover:border-violet-400 hover:text-violet-700 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:shadow-none dark:hover:border-purple-500/40 dark:hover:text-purple-300"
            >
              <Mail className="h-3 w-3 text-violet-600 dark:text-purple-400" />
              <span>Contact Tristan</span>
            </button>
          </div>

          {/* Input Bar */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-slate-200 bg-white p-3 dark:border-slate-800/90 dark:bg-[#0A0D14]"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT_LENGTH))}
              disabled={isLoading}
              placeholder="Ask AKU anything about Tristan..."
              className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none disabled:opacity-60 transition-colors dark:border-slate-800 dark:bg-slate-950/80 dark:text-white dark:placeholder-slate-500 dark:focus:border-cyan-400 dark:focus:bg-slate-950"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-slate-50 shadow-sm transition-all hover:from-sky-400 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-40 dark:from-cyan-500 dark:to-blue-600 dark:text-black dark:shadow-[0_0_15px_rgba(0,240,255,0.3)] dark:hover:from-cyan-400 dark:hover:to-blue-500"
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
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 group flex items-center gap-2 rounded-full border border-sky-300 bg-white/95 px-4 py-3 text-slate-900 shadow-[0_8px_28px_rgba(2,132,199,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500 hover:shadow-[0_12px_32px_rgba(2,132,199,0.3)] active:scale-95 dark:border-cyan-400/50 dark:bg-gradient-to-r dark:from-[#0E131F]/95 dark:to-cyan-950/90 dark:text-white dark:shadow-[0_0_25px_rgba(0,240,255,0.3)] dark:hover:border-cyan-300 dark:hover:shadow-[0_0_35px_rgba(0,240,255,0.5)]"
      >
        <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-cyan-500/20 dark:text-cyan-300">
          {isOpen ? <X className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
          {!isOpen && (
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-500 animate-ping dark:bg-emerald-400" />
          )}
        </span>
        <span className="font-mono text-xs font-bold tracking-wider text-sky-700 group-hover:text-sky-900 dark:text-cyan-200 dark:group-hover:text-white">
          {isOpen ? 'Close AKU' : 'Ask AKU'}
        </span>
      </button>
    </>
  );
};
