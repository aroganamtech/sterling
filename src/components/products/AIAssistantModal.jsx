import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import logoMark from '../../assets/logo-mark-light.png';
import { ASSISTANT_ENDPOINT, askAssistant, suggestedPrompts } from '../../lib/aiAssistant';
import { EASE, modalBackdrop, modalPanel } from '../../lib/motion';

let uid = 0;
const nextId = () => `m${++uid}`;

function Bubble({ msg }) {
  const isUser = msg.role === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
      className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
    >
      <span
        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border text-[10px] font-bold uppercase ${
          isUser ? 'border-ink-700 bg-ink-800 text-ink-300' : 'border-ember-500/50 bg-ember-500/10 text-ember-400'
        }`}
      >
        {isUser ? 'You' : 'SV'}
      </span>
      <div className={`max-w-[86%] ${isUser ? 'text-right' : ''}`}>
        <div
          className={`whitespace-pre-line px-4 py-3 text-[14px] leading-relaxed ${
            isUser ? 'bg-ink-800 text-ink-100' : 'border border-ink-800 bg-ink-900 text-ink-200'
          }`}
        >
          {msg.text}
        </div>
        {msg.links?.length ? (
          <div className={`mt-2 flex flex-wrap gap-2 ${isUser ? 'justify-end' : ''}`}>
            {msg.links.map((l) => (
              <Link
                key={l.to + l.label}
                to={l.to}
                className="inline-flex items-center gap-1.5 border border-ember-500/40 px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ember-400 transition hover:bg-ember-500 hover:text-ink-950"
              >
                {l.label}
                <Icon name="arrow" className="h-3 w-3" strokeWidth={2} />
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default function AIAssistantModal({ open, onClose, product }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const abortRef = useRef(null);

  const prompts = suggestedPrompts(product);

  useEffect(() => {
    if (!open) return;
    setMessages([
      {
        id: nextId(),
        role: 'assistant',
        text: product
          ? `Sterling engineering assistant.\n\nYou are viewing the ${product.name} (${product.model}). Ask me about specifications, certification, applications, lead times or how it is commissioned — or anything else across the range.`
          : 'Sterling engineering assistant.\n\nAsk me about product selection, EN 12101 and NFPA requirements, performance data, CFD, lead times or maintenance.',
        links: [],
      },
    ]);
    const t = setTimeout(() => inputRef.current?.focus(), 260);
    return () => clearTimeout(t);
  }, [open, product]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, busy]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const send = async (raw) => {
    const text = (raw ?? input).trim();
    if (!text || busy) return;
    setInput('');
    const history = messages.map(({ role, text: t }) => ({ role, text: t }));
    setMessages((m) => [...m, { id: nextId(), role: 'user', text }]);
    setBusy(true);
    abortRef.current = new AbortController();
    try {
      const reply = await askAssistant({ message: text, history, product, signal: abortRef.current.signal });
      setMessages((m) => [...m, { id: nextId(), role: 'assistant', text: reply.text, links: reply.links }]);
    } catch (err) {
      if (err?.name !== 'AbortError') {
        setMessages((m) => [
          ...m,
          {
            id: nextId(),
            role: 'assistant',
            text: 'Something went wrong reaching the assistant. Please try again, or send the question to our engineering team.',
            links: [{ label: 'Contact us', to: '/contact' }],
          },
        ]);
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          variants={modalBackdrop}
          initial="hidden"
          animate="show"
          exit="exit"
          className="fixed inset-0 z-[90] flex items-end justify-center bg-ink-950/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Sterling AI engineering assistant"
        >
          <motion.div
            variants={modalPanel}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="flex h-[86vh] w-full max-w-2xl flex-col border border-ink-800 bg-ink-950 shadow-2xl sm:h-[640px]"
          >
            {/* header */}
            <div className="flex items-center gap-4 border-b border-ink-800 px-5 py-4">
              <span className="relative flex h-10 w-10 items-center justify-center border border-ember-500/40 bg-ember-500/10">
                <img src={logoMark} alt="" className="h-6 w-auto" />
                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-ember-500">
                  <span className="absolute inset-0 animate-ping rounded-full bg-ember-500 opacity-70" />
                </span>
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-[16px] font-semibold uppercase tracking-wide text-white">
                  Engineering Assistant
                </p>
                <p className="truncate text-[11.5px] text-ink-400">
                  {product ? `Context: ${product.name} · ${product.model}` : 'Sterling Ventilation product range'}
                </p>
              </div>
              <span className="hidden border border-ink-700 px-2 py-1 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-ink-400 sm:inline-block">
                {ASSISTANT_ENDPOINT ? 'Live model' : 'Demo mode'}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close assistant"
                className="flex h-9 w-9 items-center justify-center border border-ink-700 text-ink-300 transition hover:border-ember-500 hover:text-ember-400"
              >
                <Icon name="close" className="h-4 w-4" strokeWidth={1.8} />
              </button>
            </div>

            {/* messages */}
            <div ref={scrollRef} className="flex-1 space-y-5 overflow-y-auto px-5 py-6">
              {messages.map((m) => (
                <Bubble key={m.id} msg={m} />
              ))}

              {busy ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-ember-500/50 bg-ember-500/10 text-[10px] font-bold text-ember-400">
                    SV
                  </span>
                  <div className="flex items-center gap-1.5 border border-ink-800 bg-ink-900 px-4 py-4">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-ember-500"
                        animate={{ opacity: [0.25, 1, 0.25], y: [0, -3, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.16 }}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </div>

            {/* suggestions */}
            {messages.length <= 1 ? (
              <div className="border-t border-ink-800 px-5 py-3">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-widest2 text-ink-500">Try asking</p>
                <div className="flex flex-wrap gap-2">
                  {prompts.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => send(p)}
                      className="border border-ink-700 px-3 py-2 text-left text-[12px] text-ink-300 transition hover:border-ember-500 hover:text-ember-400"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {/* composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-3 border-t border-ink-800 px-5 py-4"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about specifications, standards, lead times…"
                aria-label="Message"
                className="min-w-0 flex-1 border border-ink-700 bg-ink-900 px-4 py-3 text-[14px] text-white outline-none transition placeholder:text-ink-500 focus:border-ember-500"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                className="flex h-[46px] w-[46px] shrink-0 items-center justify-center bg-ember-500 text-ink-950 transition hover:bg-ember-400 disabled:cursor-not-allowed disabled:opacity-35"
                aria-label="Send message"
              >
                <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
              </button>
            </form>

            <p className="border-t border-ink-800 px-5 py-2.5 text-[10.5px] leading-relaxed text-ink-500">
              {ASSISTANT_ENDPOINT
                ? 'Responses are generated by a language model and may contain errors. Verify against the project specification.'
                : 'Demo mode — answers come from a built-in engineering knowledge base, not a language model. Set VITE_ASSISTANT_ENDPOINT to connect a real model.'}
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
