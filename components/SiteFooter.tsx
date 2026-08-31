"use client";

import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO } from "@/lib/data/site";

interface SiteFooterProps {
  variant: "home" | "sub";
}

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

export default function SiteFooter({ variant }: SiteFooterProps) {
  if (variant === "sub") {
    return (
      <footer className="m-2.5 flex flex-wrap items-center justify-between gap-3.5 rounded-[20px] bg-ac-ink px-6 py-6 text-[13.5px] text-white/55">
        <span>{CONTACT_INFO.legalShort}</span>
        <Link href="/" className="font-bold text-white hover:text-ac-gold">
          ← Retour à l’accueil
        </Link>
      </footer>
    );
  }

  return (
    <footer className="m-2.5 overflow-hidden rounded-[22px] bg-ac-ink text-white">
      <div className="mx-auto max-w-[1240px] px-6 pt-[60px]">
        <div className="grid max-w-[600px] gap-4">
          <Link href="#accueil" className="flex items-center gap-[13px] text-white">
            <Image src="/logo-ac.png" alt="Allianz Consulting Sarl" width={220} height={65} className="h-[52px] w-auto" />
            <span className="font-sora text-[22px] font-bold tracking-[-0.03em]">
              Allianz Consulting<span className="text-ac-gold">.</span>
            </span>
          </Link>
          <p className="m-0 text-[15.5px] leading-[1.7] text-white/60">
            Conseil et accompagnement des entreprises : fiscalité, comptabilité, management,
            ingénierie financière, audit, douane et transit, ressources humaines, création
            d&apos;entreprise.
          </p>
        </div>

        <div className="my-[38px] h-px bg-white/10" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div />
          <div className="grid content-start gap-[13px]">
            <div className="text-[12.5px] font-extrabold uppercase tracking-[0.1em] text-white/45">
              Expertises
            </div>
            <Link href="/services#fiscalite" className="text-[14.5px] text-white/62 hover:text-ac-gold">
              Fiscalité
            </Link>
            <Link href="/services#comptabilite" className="text-[14.5px] text-white/62 hover:text-ac-gold">
              Comptabilité
            </Link>
            <Link href="/services#ingenierie-financiere" className="text-[14.5px] text-white/62 hover:text-ac-gold">
              Ingénierie financière
            </Link>
            <Link href="/services#audit" className="text-[14.5px] text-white/62 hover:text-ac-gold">
              Audit
            </Link>
          </div>
          <div className="grid content-start gap-[13px]">
            <div className="text-[12.5px] font-extrabold uppercase tracking-[0.1em] text-white/45">
              Services
            </div>
            <Link href="/services#douane-transit" className="text-[14.5px] text-white/62 hover:text-ac-gold">
              Douane &amp; transit
            </Link>
            <Link href="/services#ressources-humaines" className="text-[14.5px] text-white/62 hover:text-ac-gold">
              Ressources humaines
            </Link>
            <Link href="/services#creation-entreprise" className="text-[14.5px] text-white/62 hover:text-ac-gold">
              Création d&apos;entreprise
            </Link>
            <Link href="#formules" className="text-[14.5px] text-white/62 hover:text-ac-gold">
              Formules
            </Link>
          </div>
          <div className="grid content-start gap-[13px]">
            <div className="text-[12.5px] font-extrabold uppercase tracking-[0.1em] text-white/45">
              Le cabinet
            </div>
            <Link href="#cabinet" className="text-[14.5px] text-white/62 hover:text-ac-gold">
              Qui sommes-nous
            </Link>
            <Link href="#methode" className="text-[14.5px] text-white/62 hover:text-ac-gold">
              Notre méthode
            </Link>
            <Link href="#clients" className="text-[14.5px] text-white/62 hover:text-ac-gold">
              Clientèle
            </Link>
            <Link href="/contact" className="text-[14.5px] text-white/62 hover:text-ac-gold">
              Contact
            </Link>
          </div>
        </div>

        <div className="my-[38px] mb-5 h-px bg-white/10" />

        <div className="flex flex-wrap items-center justify-between gap-[18px]">
          <span className="text-[13.5px] text-white/50">{CONTACT_INFO.legal}</span>
          <div className="flex gap-2.5">
            <a
              href="/contact"
              aria-label="LinkedIn"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/[0.07] text-white/75 hover:bg-ac-indigo hover:text-white"
            >
              <i className="ti ti-brand-linkedin text-lg" />
            </a>
            <a
              href="/contact"
              aria-label="WhatsApp"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/[0.07] text-white/75 hover:bg-ac-indigo hover:text-white"
            >
              <i className="ti ti-brand-whatsapp text-lg" />
            </a>
            <a
              href="/contact"
              aria-label="E-mail"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/[0.07] text-white/75 hover:bg-ac-indigo hover:text-white"
            >
              <i className="ti ti-mail text-lg" />
            </a>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2.5 bg-transparent font-bold text-white hover:text-ac-gold"
          >
            Retour en haut
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/[0.09]">
              <i className="ti ti-arrow-up text-[17px]" />
            </span>
          </button>
        </div>

        <div className="mt-8 overflow-hidden">
          <div className="translate-y-[15%] whitespace-nowrap font-sora text-[clamp(40px,11.5vw,158px)] font-bold leading-[0.86] tracking-[-0.055em] text-white/[0.08]">
            Allianz Consulting<span className="text-ac-gold/45">.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
