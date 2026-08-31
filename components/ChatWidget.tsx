"use client";

import { useState } from "react";
import Image from "next/image";

interface Msg {
  me: boolean;
  text: string;
}

const CHIPS = [
  {
    label: "Créer mon entreprise",
    answer:
      "Nous prenons en charge l’étude du projet, la forme juridique, le business plan, les formalités et l’immatriculation — puis un suivi post-création durant vos premiers mois.",
  },
  {
    label: "Tarif comptabilité",
    answer:
      "Le tarif dépend du volume de pièces et du régime fiscal. Quatre formules existent : complète, mensuelle, trimestrielle ou ponctuelle. Le diagnostic initial est offert.",
  },
  {
    label: "Contrôle fiscal en cours",
    answer:
      "Nous intervenons en assistance dès la notification : analyse du dossier, préparation des réponses et accompagnement pendant les échanges avec l’administration.",
  },
  {
    label: "Dossier de financement",
    answer:
      "Nous produisons business plan, plan de financement, prévisions et budget de trésorerie, puis nous structurons le dossier destiné aux banques et investisseurs.",
  },
];

function scrollToTop() {
  const start = window.scrollY || document.documentElement.scrollTop || 0;
  if (!start) return;
  let t0: number | null = null;
  const step = (now: number) => {
    if (t0 === null) t0 = now;
    const p = Math.min(1, Math.max(0, (now - t0) / 620));
    const e = 1 - Math.pow(1 - p, 3);
    const y = Math.round(start * (1 - e));
    window.scrollTo(0, y);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      me: false,
      text: "Bonjour, Allianz Consulting Sarl. Sur quel volet souhaitez-vous être accompagné : fiscalité, comptabilité, financement ou création d’entreprise ?",
    },
  ]);

  const send = (label: string, answer: string) => {
    setMsgs((m) => [...m, { me: true, text: label }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { me: false, text: answer }]);
    }, 1100);
  };

  return (
    <div className="fixed bottom-[18px] right-[18px] z-[80] grid justify-items-end gap-3">
      {open && (
        <div className="w-[330px] max-w-[calc(100vw-36px)] animate-ac-pop overflow-hidden rounded-[18px] border border-ac-ink/10 bg-white shadow-[0_30px_70px_rgba(20,19,31,0.22)]">
          <div className="flex items-center gap-3 bg-ac-ink px-[18px] py-[15px] text-white">
            <Image src="/logo-ac.png" alt="AC" width={60} height={30} className="h-[30px] w-auto" />
            <div className="grid gap-px">
              <b className="font-sora text-[14.5px]">Allianz Consulting</b>
              <span className="flex items-center gap-[5px] text-[11.5px] text-ac-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-ac-gold" />
                Un consultant vous répond
              </span>
            </div>
            <div className="flex-1" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="flex bg-transparent text-white/70"
            >
              <i className="ti ti-x text-xl" />
            </button>
          </div>
          <div className="grid max-h-[290px] gap-2.5 overflow-y-auto bg-ac-mist p-4">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] animate-ac-pop rounded-xl px-3.5 py-2.5 text-sm leading-normal ${
                  m.me
                    ? "justify-self-end rounded-br-[4px] bg-ac-indigo text-white"
                    : "rounded-bl-[4px] border border-ac-ink/[0.08] bg-white text-ac-ink"
                }`}
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="flex w-fit gap-1 rounded-xl rounded-bl-[4px] border border-ac-ink/[0.08] bg-white px-3.5 py-2.5">
                <span className="h-1.5 w-1.5 animate-ac-typing rounded-full bg-ac-indigo" />
                <span className="h-1.5 w-1.5 animate-ac-typing rounded-full bg-ac-indigo [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-ac-typing rounded-full bg-ac-indigo [animation-delay:300ms]" />
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-ac-ink/[0.07] p-3">
            {CHIPS.map((c) => (
              <button
                key={c.label}
                type="button"
                onClick={() => send(c.label, c.answer)}
                className="cursor-pointer rounded-full border border-ac-indigo/30 bg-white px-3.5 py-2 text-[12.5px] font-bold text-ac-indigo hover:bg-ac-indigo hover:text-white"
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Retour en haut"
        className="flex h-[46px] w-[46px] items-center justify-center rounded-full border-[1.5px] border-ac-indigo bg-white text-ac-indigo shadow-[0_10px_26px_rgba(20,19,31,0.14)] hover:bg-ac-indigo hover:text-white"
      >
        <i className="ti ti-arrow-up text-xl" />
      </button>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Ouvrir le chat"
        className={`flex h-14 w-14 animate-ac-ring items-center justify-center rounded-full border-none text-white shadow-[0_16px_34px_rgba(70,65,149,0.35)] ${
          open ? "bg-ac-ink" : "bg-ac-indigo"
        }`}
      >
        <i className={`ti ${open ? "ti-x" : "ti-message-circle-2"} text-2xl`} />
      </button>
    </div>
  );
}
