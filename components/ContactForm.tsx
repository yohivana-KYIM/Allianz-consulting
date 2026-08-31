"use client";

import { useState } from "react";
import { NEEDS } from "@/lib/data/site";

const inputClass =
  "w-full rounded-[9px] border border-ac-ink/[0.16] bg-white px-[13px] py-3 text-[15px] outline-none focus:border-ac-indigo";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [need, setNeed] = useState("Fiscalité");

  if (sent) {
    return (
      <div className="grid animate-ac-pop gap-[15px] py-6 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ac-indigo/10 text-ac-indigo">
          <i className="ti ti-check text-3xl" />
        </span>
        <h3 className="m-0 font-sora text-xl font-bold">Demande reçue</h3>
        <p className="m-0 text-[15px] leading-relaxed text-ac-ink/65">
          Un consultant vous contacte sous 48 h ouvrées pour votre diagnostic.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="bg-transparent font-bold text-ac-indigo"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-3.5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <h3 className="m-0 font-sora text-xl font-bold tracking-[-0.02em]">
        Demander un diagnostic
      </h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5 text-[12.5px] font-bold text-ac-ink/65">
          Nom &amp; prénom
          <input placeholder="Votre nom" className={inputClass} required />
        </label>
        <label className="grid gap-1.5 text-[12.5px] font-bold text-ac-ink/65">
          Entreprise
          <input placeholder="Raison sociale" className={inputClass} />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5 text-[12.5px] font-bold text-ac-ink/65">
          E-mail
          <input type="email" placeholder="vous@entreprise.com" className={inputClass} required />
        </label>
        <label className="grid gap-1.5 text-[12.5px] font-bold text-ac-ink/65">
          Téléphone
          <input placeholder="691 53 84 95 / 694 96 04 73" className={inputClass} />
        </label>
      </div>
      <div className="grid gap-2">
        <span className="text-[12.5px] font-bold text-ac-ink/65">Besoin principal</span>
        <div className="flex flex-wrap gap-2">
          {NEEDS.map((label) => {
            const active = need === label;
            return (
              <button
                type="button"
                key={label}
                onClick={() => setNeed(label)}
                className={`cursor-pointer rounded-full border px-3.5 py-2 text-[12.5px] font-bold transition-colors duration-200 ${
                  active
                    ? "border-ac-indigo bg-ac-indigo text-white"
                    : "border-ac-ink/[0.14] bg-white text-ac-ink"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
      <label className="grid gap-1.5 text-[12.5px] font-bold text-ac-ink/65">
        Votre situation
        <textarea
          rows={5}
          placeholder="Décrivez brièvement votre activité et ce que vous souhaitez sécuriser…"
          className="resize-y rounded-[9px] border border-ac-ink/[0.16] bg-white px-[13px] py-3 text-[15px] outline-none focus:border-ac-indigo"
        />
      </label>
      <button
        type="submit"
        className="flex items-center justify-center gap-2.5 rounded-[9px] border-none bg-ac-indigo px-4 py-[15px] text-[15.5px] font-extrabold text-white hover:bg-ac-gold hover:text-ac-ink"
      >
        <i className="ti ti-send text-lg" /> Envoyer ma demande
      </button>
      <p className="m-0 text-center text-xs text-ac-ink/50">
        Vos informations restent strictement confidentielles.
      </p>
    </form>
  );
}
