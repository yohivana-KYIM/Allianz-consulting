"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";

import Image from "next/image";

const SLIDES = [
  {
    slot: "ac-hero-1",
    hint: "Réunion de conseil",
    image: "/images/hero-1.png",
    icon: "ti-users",
  },
  {
    slot: "ac-hero-2",
    hint: "Détail de travail",
    image: "/images/hero-2.png",
    icon: "ti-report-money",
  },
  {
    slot: "ac-hero-3",
    hint: "Le cabinet",
    image: "/images/hero-3.png",
    icon: "ti-building-skyscraper",
  },
];

const CHIPS = [
  { icon: "ti-receipt-tax", label: "Fiscalité" },
  { icon: "ti-calculator", label: "Comptabilité" },
  { icon: "ti-target-arrow", label: "Management" },
  { icon: "ti-chart-arrows-vertical", label: "Ingénierie financière" },
  { icon: "ti-shield-check", label: "Audit" },
  { icon: "ti-ship", label: "Douane & transit" },
  { icon: "ti-users", label: "Ressources humaines" },
  { icon: "ti-building-store", label: "Création d’entreprise" },
];

export default function HeroCarousel() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5600);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="accueil"
      className="relative m-2.5 overflow-hidden rounded-[22px] bg-ac-ink px-5 pb-[90px] pt-[78px]"
    >
      {SLIDES.map((s, i) => (
        <div
          key={s.slot}
          className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-[1400ms]"
          style={{
            opacity: slide === i ? 1 : 0,
            transform: `scale(${slide === i ? 1.06 : 1})`,
          }}
        >
          <Image src={s.image} alt={s.hint} fill className="object-cover" priority={i === 0} />
        </div>
      ))}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen [background:radial-gradient(56%_86%_at_2%_0%,rgba(70,65,149,0.7),transparent_62%),radial-gradient(52%_80%_at_98%_4%,rgba(201,162,39,0.4),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 [background:linear-gradient(180deg,rgba(20,19,31,0.45)_0%,rgba(20,19,31,0.7)_45%,rgba(20,19,31,0.92)_100%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(72%_62%_at_50%_34%,rgba(20,19,31,0.35),transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_40px_rgba(20,19,31,0.5)]" />
      <div className="pointer-events-none absolute left-[6%] top-[6%] h-[320px] w-[320px] animate-ac-glow rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.42),transparent_66%)] blur-[30px]" />
      <div className="pointer-events-none absolute right-[4%] top-[24%] h-[380px] w-[380px] animate-ac-glow rounded-full bg-[radial-gradient(circle,rgba(70,65,149,0.6),transparent_66%)] blur-[30px] [animation-duration:13s]" />

      <div className="relative mx-auto max-w-[940px] text-center text-white">
        <div className="ac-eye flex items-center justify-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-gold-soft">
          <span className="h-0.5 w-[26px] bg-current" />
          Fiscalité · Comptabilité · Audit · Finance
          <span className="h-0.5 w-[26px] bg-current" />
        </div>
        <h1 className="mt-6 animate-ac-up text-balance font-sora text-[clamp(34px,6.2vw,68px)] font-bold leading-[1.04] tracking-[-0.035em]">
          Le partenaire stratégique de votre entreprise, de sa{" "}
          <span className="inline-block rounded-lg bg-ac-indigo px-3">création</span> à son
          développement
        </h1>
        <p className="mx-auto mt-[22px] max-w-[660px] animate-ac-up text-[clamp(16px,1.9vw,19px)] leading-relaxed text-white/72">
          Un cabinet unique pour vos obligations fiscales, votre comptabilité, vos financements,
          vos audits, vos formalités douanières et vos ressources humaines. Vous décidez, nous
          sécurisons.
        </p>
        <div className="mt-[30px] flex animate-ac-up flex-wrap justify-center gap-3">
          <Link
            href="#contact"
            className="rounded-lg bg-ac-gold px-[30px] py-[15px] text-[15.5px] font-extrabold text-ac-ink shadow-[0_14px_34px_rgba(201,162,39,0.32)] hover:bg-ac-gold-soft"
          >
            Diagnostic gratuit
          </Link>
          <Link
            href="#expertises"
            className="rounded-lg border border-white/26 px-7 py-[15px] text-[15.5px] font-bold text-white hover:border-ac-gold-soft hover:text-ac-gold-soft"
          >
            Nos 8 domaines d&apos;intervention
          </Link>
        </div>
        <div className="mt-[34px] flex justify-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.slot}
              type="button"
              aria-label="Image suivante"
              onClick={() => setSlide(i)}
              className="h-[9px] cursor-pointer rounded-full border-none p-0 transition-all duration-[450ms]"
              style={{
                width: slide === i ? 26 : 9,
                background: slide === i ? "#C9A227" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-[54px] max-w-[1040px] animate-ac-scale">
        <div className="overflow-hidden rounded-[18px] border border-white/[0.13] bg-white/[0.04] shadow-[0_40px_90px_rgba(0,0,0,0.5)] backdrop-blur-[6px]">
          <div className="grid grid-cols-1 nav-lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-4 p-[26px]">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/45">
                Domaines d&apos;intervention
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2.5">
                {CHIPS.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-2.5 rounded-[9px] border border-white/10 bg-white/[0.04] px-3 py-[11px] text-white"
                  >
                    <i className={`ti ${c.icon} flex-shrink-0 text-lg text-ac-gold-soft`} />
                    <span className="text-[13.5px] font-semibold">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid content-center gap-[18px] border-t border-white/10 p-[26px] nav-lg:border-l nav-lg:border-t-0">
              <div>
                <div className="font-sora text-[34px] font-bold tracking-[-0.03em] text-ac-gold-soft">
                  120
                </div>
                <div className="text-[13.5px] leading-relaxed text-white/60">
                  prestations couvertes par le cabinet
                </div>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <div className="font-sora text-[34px] font-bold tracking-[-0.03em] text-white">
                  48 h
                </div>
                <div className="text-[13.5px] leading-relaxed text-white/60">
                  pour votre premier diagnostic
                </div>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <div className="font-sora text-[34px] font-bold tracking-[-0.03em] text-white">
                  1 seul
                </div>
                <div className="text-[13.5px] leading-relaxed text-white/60">
                  interlocuteur dédié à votre dossier
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
