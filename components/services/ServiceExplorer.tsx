"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import { SERVICES } from "@/lib/data/services";

const PROCESS = [
  {
    num: "1",
    title: "Diagnostic",
    desc: "Nous auditons votre situation sur ce domaine et chiffrons l’écart avec vos obligations.",
  },
  {
    num: "2",
    title: "Plan d’action",
    desc: "Priorités, calendrier et périmètre d’intervention validés avec vous par écrit.",
  },
  {
    num: "3",
    title: "Exécution",
    desc: "Le consultant dédié traite les dossiers et vous rend compte à chaque étape.",
  },
  {
    num: "4",
    title: "Suivi",
    desc: "Point périodique, veille réglementaire et ajustement de la formule si votre activité change.",
  },
];

export default function ServiceExplorer() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const applyHash = () => {
      const h = window.location.hash.replace("#", "");
      const idx = SERVICES.findIndex((s) => s.slug === h);
      if (idx > -1) setI(idx);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const s = SERVICES[i];
  const others = SERVICES.filter((_, k) => k !== i).slice(0, 3);

  const pick = (k: number) => {
    setI(k);
    history.replaceState(null, "", "#" + SERVICES[k].slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="relative m-2.5 overflow-hidden rounded-[22px] bg-ac-ink px-[22px] py-14">
        <div className="absolute inset-0">
          <Image src="/images/service-banner.jpg" alt="Plan large de bureaux du cabinet" fill className="object-cover opacity-60 mix-blend-overlay" />
        </div>
        <div className="pointer-events-none absolute inset-0 mix-blend-screen [background:radial-gradient(56%_100%_at_2%_0%,rgba(70,65,149,0.62),transparent_62%),radial-gradient(50%_90%_at_98%_6%,rgba(201,162,39,0.32),transparent_62%)]" />
        <div className="pointer-events-none absolute inset-0 [background:linear-gradient(180deg,rgba(20,19,31,0.84)_0%,rgba(20,19,31,0.94)_100%)]" />
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_70%_at_50%_50%,rgba(20,19,31,0.55),transparent_72%)]" />
        <div className="relative mx-auto grid max-w-[900px] animate-ac-up gap-4 text-center text-white">
          <div className="ac-eye flex items-center justify-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-gold-soft">
            <span className="h-0.5 w-[26px] bg-current" />
            Services
            <span className="h-0.5 w-[26px] bg-current" />
          </div>
          <h1 className="text-balance font-sora text-[clamp(28px,5vw,52px)] font-bold leading-[1.05] tracking-[-0.035em]">
            {s.title}
          </h1>
          <p className="mx-auto max-w-[640px] text-[clamp(15.5px,1.8vw,18px)] leading-relaxed text-white/74">
            {s.intro}
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-2.5">
            <Link
              href="/contact"
              className="rounded-lg bg-ac-gold px-[26px] py-3.5 text-[15px] font-extrabold text-ac-ink hover:bg-ac-gold-soft"
            >
              Demander un diagnostic
            </Link>
            <a
              href="#prestations"
              className="rounded-lg border border-white/26 px-6 py-3.5 text-[15px] font-bold text-white hover:border-ac-gold-soft hover:text-ac-gold-soft"
            >
              Voir les prestations
            </a>
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-[34px] px-5 pb-[70px] pt-10 nav:grid-cols-[268px_1fr]">
        <aside className="grid content-start gap-2 nav:sticky nav:top-[84px]">
          <div className="px-1 pb-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-ac-ink/45">
            Nos 8 services
          </div>
          {SERVICES.map((d, k) => (
            <button
              key={d.slug}
              type="button"
              onClick={() => pick(k)}
              className={`flex w-full cursor-pointer items-center gap-3 rounded-[10px] border px-3.5 py-3.5 text-left text-[14.5px] font-semibold transition-colors duration-200 ${
                k === i
                  ? "border-ac-indigo bg-ac-indigo text-white"
                  : "border-ac-ink/[0.09] bg-white text-ac-ink"
              }`}
            >
              <i className={`ti ${d.icon} flex-shrink-0 text-[19px]`} />
              <span className="flex-1">{d.label}</span>
              {k === i && <i className="ti ti-arrow-right text-base" />}
            </button>
          ))}
          <Link
            href="/contact"
            className="mt-2.5 rounded-[10px] bg-ac-ink py-3.5 text-center text-[14.5px] font-bold text-white hover:bg-ac-indigo"
          >
            Parler à un consultant
          </Link>
        </aside>

        <div className="grid min-w-0 gap-[22px]">
          <div className="grid items-start gap-5 nav:grid-cols-2">
            <div className="grid gap-4">
              <div className="ac-eye flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-indigo">
                <span className="h-0.5 w-[26px] bg-current" />
                {s.num} — {s.label}
              </div>
              <h2 className="text-balance font-sora text-[clamp(22px,3vw,32px)] font-bold leading-[1.15] tracking-[-0.03em]">
                {s.h2}
              </h2>
              <p className="m-0 text-base leading-[1.7] text-ac-ink/70">{s.body}</p>
              {s.note && (
                <p className="m-0 border-l-2 border-ac-gold pl-3.5 text-[13.5px] leading-relaxed text-ac-ink/58">
                  {s.note}
                </p>
              )}
            </div>
            <div className="relative min-h-[300px] overflow-hidden rounded-[18px] border border-ac-ink/[0.08]">
              {s.image ? (
                <Image src={s.image} alt={s.title} fill className="object-cover" />
              ) : (
                <ImageSlot hint={s.imgHint} icon={s.icon} />
              )}
            </div>
          </div>

          <div id="prestations" className="rounded-[20px] border border-ac-ink/[0.07] bg-ac-mist p-[30px]">
            <h3 className="m-0 mb-1 font-sora text-[19px] font-bold tracking-[-0.02em]">
              Prestations couvertes
            </h3>
            <p className="m-0 mb-5 text-[14.5px] text-ac-ink/60">
              {s.items.length} prestations prises en charge par le cabinet sur ce domaine.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-6 gap-y-[11px]">
              {s.items.map((it) => (
                <div key={it} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-ac-ink/78">
                  <i className="ti ti-check mt-0.5 flex-shrink-0 text-[17px] text-ac-gold" />
                  {it}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 nav:grid-cols-2">
            <div className="grid content-start gap-3.5 rounded-[18px] border border-ac-ink/[0.09] bg-white p-[26px]">
              <h3 className="m-0 font-sora text-[17.5px] font-bold tracking-[-0.02em]">
                Comment nous intervenons
              </h3>
              {PROCESS.map((p) => (
                <div key={p.num} className="flex items-start gap-3.5">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-ac-indigo/[0.09] font-sora text-[13px] font-bold text-ac-indigo">
                    {p.num}
                  </span>
                  <span className="grid gap-0.5">
                    <b className="text-[15px] font-bold">{p.title}</b>
                    <span className="text-sm leading-relaxed text-ac-ink/63">{p.desc}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="grid content-start gap-4 rounded-[18px] bg-ac-ink p-[26px] text-white">
              <h3 className="m-0 font-sora text-[17.5px] font-bold tracking-[-0.02em]">
                Ce que vous obtenez
              </h3>
              {s.outcomes.map((o) => (
                <div key={o} className="flex items-start gap-[11px] text-[14.5px] leading-relaxed text-white/80">
                  <i className="ti ti-circle-check-filled mt-px flex-shrink-0 text-lg text-ac-gold" />
                  {o}
                </div>
              ))}
              <div className="h-px bg-white/[0.12]" />
              <Link
                href="/contact"
                className="rounded-[9px] bg-ac-gold py-3.5 text-center text-[15px] font-extrabold text-ac-ink hover:bg-white"
              >
                Demander un devis
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <h3 className="m-0 font-sora text-[19px] font-bold tracking-[-0.02em]">
              Autres services
            </h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3.5">
              {others.map((o) => (
                <button
                  key={o.slug}
                  type="button"
                  onClick={() => pick(SERVICES.findIndex((x) => x.slug === o.slug))}
                  data-lift
                  className="grid cursor-pointer content-start gap-2.5 rounded-2xl border border-ac-ink/[0.09] bg-white p-[22px] text-left"
                >
                  <span className="flex h-[42px] w-[42px] items-center justify-center rounded-[11px] bg-ac-mist text-ac-indigo">
                    <i className={`ti ${o.icon} text-[21px]`} />
                  </span>
                  <b className="font-sora text-base font-bold tracking-[-0.02em]">{o.label}</b>
                  <span className="text-[13.5px] leading-relaxed text-ac-ink/62">{o.intro}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
