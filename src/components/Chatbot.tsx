"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, ChevronRight, MessageSquare } from "lucide-react"
import { useChat, type UIMessage } from "@ai-sdk/react"
import { TextStreamChatTransport, isTextUIPart } from "ai"

const SUGGESTIONS = [
  "Quelles sont vos expertises ?",
  "Demander un devis",
  "Parlez-moi de WockyTech",
  "Voir vos réalisations",
]

function getMessageText(message: UIMessage): string {
  if (message.parts) {
    return message.parts
      .filter(isTextUIPart)
      .map((part) => part.text)
      .join("")
  }
  return (message as { content?: string, text?: string }).content || (message as { content?: string, text?: string }).text || ""
}

/* ─── Message bubble ─────────────────────────────────────── */
function Bubble({ message }: { message: UIMessage }) {
  const isBot = message.role === "assistant"
  const raw = getMessageText(message)
  const html = raw
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br/>")

  if (!raw) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-3 ${isBot ? "items-start" : "items-end flex-row-reverse"}`}
    >
      {isBot && (
        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[#0066FF] shadow-md shadow-blue-500/20">
          <MessageSquare className="size-4 text-white fill-white" />
        </span>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isBot
            ? "rounded-tl-sm bg-white border border-slate-100 text-slate-800 shadow-sm"
            : "rounded-tr-sm bg-[#0066FF] text-white font-medium shadow-md shadow-blue-500/20"
        }`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </motion.div>
  )
}

/* ─── Main chatbot component ─────────────────────────────── */
export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, sendMessage, status, error } = useChat({
    transport: new TextStreamChatTransport({ api: "/api/chat" }),
    messages: [
      {
        id: "welcome",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "Bonjour 👋 Je suis Wocky, l'assistant digital de WockyTech. Comment puis-je vous aider aujourd'hui ?",
          },
        ],
      },
    ],
  })

  const isLoading = status === "streaming" || status === "submitted"

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  const handleSend = (text: string) => {
    const msg = text.trim()
    if (!msg || isLoading) return
    setInputValue("")
    sendMessage({ text: msg })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSend(inputValue)
  }

  const visibleMessages = messages.filter((m) => getMessageText(m).length > 0)

  return (
    <div className="fixed bottom-6 right-5 z-[110] flex flex-col items-end gap-3">
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="flex w-[340px] sm:w-[380px] flex-col overflow-hidden rounded-3xl bg-white shadow-[0_12px_45px_rgba(0,102,255,0.18)] border border-blue-50"
            style={{ maxHeight: "min(600px, 82vh)" }}
          >
            {/* ── Header: Identical brand blue gradient ── */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-[#0066FF] to-[#0052cc] px-5 py-4 rounded-t-3xl shadow-sm">
              <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-white/20 shadow backdrop-blur-md ring-2 ring-white/30">
                <MessageSquare className="size-5 text-white fill-white" />
                <span className="absolute bottom-0.5 right-0.5 size-2.5 rounded-full bg-emerald-400 ring-2 ring-white" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-base font-bold text-white leading-tight">Wocky AI</p>
                <p className="flex items-center gap-1.5 text-xs text-blue-100 mt-0.5 font-medium">
                  <span className="inline-block size-1.5 rounded-full bg-emerald-400" />
                  En ligne • WockyTech
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex size-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Fermer le chat"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* ── Messages ── */}
            <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-5 bg-[#F8FAFC]">
              {visibleMessages.map((m) => (
                <Bubble key={m.id} message={m} />
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#0066FF] shadow-sm">
                      <MessageSquare className="size-4 text-white fill-white" />
                    </span>
                    <span className="flex gap-1 rounded-2xl rounded-tl-sm border border-slate-100 bg-white px-4 py-3 shadow-sm">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="block size-1.5 rounded-full bg-[#0066FF]"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {error && (
                <p className="rounded-xl border border-red-500/20 bg-red-50 px-3 py-2 text-xs text-red-600">
                  Une erreur est survenue. Veuillez réessayer.
                </p>
              )}

              <div ref={bottomRef} />
            </div>

            {/* ── Suggestions ── */}
            {visibleMessages.length <= 1 && !isLoading && (
              <div className="flex flex-col gap-2 px-4 pb-3 pt-2 bg-white border-t border-slate-100">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="inline-flex w-full items-center justify-between rounded-full border border-slate-200 bg-white hover:bg-blue-50/50 px-4 py-2 text-xs font-semibold text-slate-700 transition-all hover:border-[#0066FF] hover:text-[#0066FF]"
                  >
                    <span>{s}</span>
                    <ChevronRight className="size-3.5 shrink-0 ml-2 text-slate-400 group-hover:text-[#0066FF]" />
                  </button>
                ))}
              </div>
            )}

            {/* ── Input ── */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-slate-100 px-4 py-3 bg-white">
              <input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Écrivez un message..."
                className="min-w-0 flex-1 rounded-full border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-[#0066FF] focus:bg-white focus:ring-2 focus:ring-[#0066FF]/15 text-slate-800"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white shadow-md shadow-blue-500/30 transition-all disabled:opacity-40"
                aria-label="Envoyer"
              >
                <Send className="size-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button: Matches the brand electric blue #0066FF */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Ouvrir le chatbot"
        className="relative flex size-[58px] items-center justify-center rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white shadow-[0_6px_28px_rgba(0,102,255,0.45)] transition-all duration-300"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="size-6 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="bot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquare className="size-6 text-white fill-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
