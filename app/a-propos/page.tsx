import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/lib/data/services";
import { ABOUT_FIGURES, CLIENTS, CONTACT_INFO, OBJECTIVES, VALUES } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "À propos — Allianz Consulting Sarl",
  description:
    "Un partenaire stratégique, pas un prestataire de plus : contexte, objectifs et engagements du cabinet Allianz Consulting Sarl.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader variant="sub" current="about" />

      <section className="relative m-2.5 overflow-hidden rounded-[22px] bg-ac-ink px-[22px] py-14">
        <div className="absolute inset-0">
          <Image src="/images/about-banner.jpg" alt="Façade du cabinet à Akwa" fill className="object-cover opacity-60 mix-blend-overlay" />
        </div>
        <div className="pointer-events-none absolute inset-0 mix-blend-screen [background:radial-gradient(56%_100%_at_2%_0%,rgba(70,65,149,0.62),transparent_62%),radial-gradient(50%_90%_at_98%_6%,rgba(201,162,39,0.32),transparent_62%)]" />
        <div className="pointer-events-none absolute inset-0 [background:linear-gradient(180deg,rgba(20,19,31,0.84)_0%,rgba(20,19,31,0.94)_100%)]" />
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_70%_at_50%_50%,rgba(20,19,31,0.55),transparent_72%)]" />
        <div className="relative mx-auto grid max-w-[880px] animate-ac-up gap-4 text-center text-white">
          <div className="ac-eye flex items-center justify-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-gold-soft">
            <span className="h-0.5 w-[26px] bg-current" />
            À propos
            <span className="h-0.5 w-[26px] bg-current" />
          </div>
          <h1 className="text-balance font-sora text-[clamp(28px,5vw,52px)] font-bold leading-[1.05] tracking-[-0.035em]">
            Un partenaire stratégique, pas un prestataire de plus
          </h1>
          <p className="mx-auto max-w-[640px] text-[clamp(15.5px,1.8vw,18px)] leading-relaxed text-white/74">
            Allianz Consulting Sarl accompagne entreprises, entrepreneurs, commerçants,
            associations et particuliers dans leurs démarches administratives, comptables,
            fiscales, financières et managériales.
          </p>
        </div>
      </section>

      <main className="mx-auto grid max-w-[1240px] gap-12 px-5 py-11">
        <div className="grid grid-cols-1 items-center gap-[34px] nav:grid-cols-[1.05fr_0.95fr]">
          <Reveal variant="left" className="grid gap-[18px]">
            <div className="ac-eye flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-indigo">
              <span className="h-0.5 w-[26px] bg-current" />
              01 — Contexte
            </div>
            <h2 className="text-balance font-sora text-[clamp(24px,3.4vw,38px)] font-bold leading-[1.1] tracking-[-0.035em]">
              La complexité réglementaire n&apos;est pas votre métier
            </h2>
            <p className="m-0 text-base leading-[1.75] text-ac-ink/72">
              Dans un environnement caractérisé par la complexité des obligations fiscales,
              comptables, douanières, sociales et administratives, les entreprises ont besoin
              d&apos;un accompagnement permanent — adapté à leur taille et à leur secteur
              d&apos;activité, pas d&apos;une intervention ponctuelle et générique.
            </p>
            <p className="m-0 text-base leading-[1.75] text-ac-ink/72">
              Le cabinet fournit des prestations professionnelles qui permettent à ses clients de
              mieux gérer leurs activités, de respecter leurs obligations légales et fiscales,
              d&apos;améliorer leurs performances et de sécuriser leurs décisions — de la création
              de l&apos;entreprise jusqu&apos;à son développement.
            </p>
            <div className="mt-1.5 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3">
              {ABOUT_FIGURES.map((f) => (
                <div key={f.label} className="rounded-2xl border border-ac-ink/[0.09] p-[18px]">
                  <div className="font-sora text-[26px] font-bold tracking-[-0.03em] text-ac-indigo">
                    {f.value}
                  </div>
                  <div className="mt-[3px] text-[13px] leading-relaxed text-ac-ink/60">{f.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal variant="right" className="relative min-h-[460px] overflow-hidden rounded-[20px] border border-ac-ink/[0.08]">
            <Image src="/images/about-clients.jpg" alt="Dirigeant et consultant en entretien autour de documents" fill className="object-cover" />
          </Reveal>
        </div>

        <Reveal className="grid gap-[30px] rounded-[22px] border border-ac-ink/[0.07] bg-ac-mist px-[30px] py-10">
          <div className="grid max-w-[660px] gap-4">
            <div className="ac-eye flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-indigo">
              <span className="h-0.5 w-[26px] bg-current" />
              02 — Objectifs
            </div>
            <h2 className="text-balance font-sora text-[clamp(22px,3vw,32px)] font-bold leading-[1.14] tracking-[-0.035em]">
              Un accompagnement global, dix engagements précis
            </h2>
            <p className="m-0 text-[15.5px] leading-relaxed text-ac-ink/68">
              Offrir aux entreprises et aux entrepreneurs un accompagnement complet en fiscalité,
              comptabilité, gestion, finance, audit, ressources humaines, douane et transit.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-[26px] gap-y-3">
            {OBJECTIVES.map((text, i) => (
              <div key={text} className="flex items-start gap-3.5">
                <span className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-[7px] bg-ac-indigo/10 font-sora text-xs font-bold text-ac-indigo">
                  {i + 1}
                </span>
                <span className="pt-[3px] text-[14.5px] leading-relaxed text-ac-ink/78">{text}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-[34px] nav:grid-cols-[0.95fr_1.05fr]">
          <Reveal variant="left" className="relative min-h-[440px] overflow-hidden rounded-[20px] border border-ac-ink/[0.08]">
            <Image src="/images/about-team.jpg" alt="Équipe du cabinet au travail" fill className="object-cover" />
          </Reveal>
          <Reveal variant="right" className="grid gap-[18px]">
            <div className="ac-eye flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-indigo">
              <span className="h-0.5 w-[26px] bg-current" />
              03 — Nos engagements
            </div>
            <h2 className="text-balance font-sora text-[clamp(24px,3.4vw,38px)] font-bold leading-[1.1] tracking-[-0.035em]">
              Ce sur quoi vous pouvez nous juger
            </h2>
            <div className="grid gap-3">
              {VALUES.map((v) => (
                <div key={v.title} className="flex items-start gap-3.5 rounded-2xl border border-ac-ink/[0.09] px-5 py-[18px]">
                  <i className={`ti ${v.icon} mt-px flex-shrink-0 text-[22px] text-ac-indigo`} />
                  <span className="grid gap-0.5">
                    <b className="font-sora text-[15.5px] font-bold">{v.title}</b>
                    <span className="text-sm leading-relaxed text-ac-ink/65">{v.desc}</span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid gap-6">
          <div className="grid max-w-[640px] gap-4">
            <div className="ac-eye flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-indigo">
              <span className="h-0.5 w-[26px] bg-current" />
              04 — Clientèle
            </div>
            <h2 className="text-balance font-sora text-[clamp(22px,3vw,32px)] font-bold tracking-[-0.035em]">
              À qui nous nous adressons
            </h2>
          </div>
          <div className="flex flex-wrap gap-[9px]">
            {CLIENTS.map((c) => (
              <span
                key={c}
                className="rounded-full border border-ac-ink/[0.12] bg-white px-[18px] py-2.5 text-sm font-semibold text-ac-ink/78 hover:border-ac-indigo hover:text-ac-indigo"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="grid max-w-[640px] gap-4">
            <div className="ac-eye flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-indigo">
              <span className="h-0.5 w-[26px] bg-current" />
              05 — Domaines
            </div>
            <h2 className="text-balance font-sora text-[clamp(22px,3vw,32px)] font-bold tracking-[-0.035em]">
              Huit domaines d&apos;intervention
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-3.5">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                data-lift
                className="grid content-start gap-2.5 rounded-2xl border border-ac-ink/[0.09] bg-white p-[22px] text-ac-ink"
              >
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-[11px] bg-ac-mist text-ac-indigo">
                  <i className={`ti ${s.icon} text-[21px]`} />
                </span>
                <b className="font-sora text-base font-bold tracking-[-0.02em]">{s.label}</b>
                <span className="flex items-center gap-[7px] text-[13.5px] font-bold text-ac-indigo">
                  Voir le détail <i className="ti ti-arrow-right text-[15px]" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid justify-items-center gap-5 rounded-[22px] bg-ac-ink px-[30px] py-11 text-center text-white">
          <h2 className="text-balance font-sora text-[clamp(22px,3vw,32px)] font-bold tracking-[-0.035em]">
            Le premier diagnostic est offert
          </h2>
          <p className="m-0 max-w-[540px] text-[15.5px] leading-relaxed text-white/66">
            Décrivez votre situation : nous revenons sous 48 h avec une lecture claire de vos
            obligations et des priorités à traiter.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            <Link
              href="/contact"
              className="rounded-lg bg-ac-gold px-7 py-3.5 text-[15px] font-extrabold text-ac-ink hover:bg-white"
            >
              Demander un diagnostic
            </Link>
            <a
              href={`tel:${CONTACT_INFO.phoneMain}`}
              className="flex items-center gap-2.5 rounded-lg border border-white/26 px-6 py-3.5 text-[15px] font-bold text-white hover:border-ac-gold-soft hover:text-ac-gold-soft"
            >
              <i className="ti ti-phone text-[17px]" /> {CONTACT_INFO.phoneMainDisplay}
            </a>
          </div>
        </div>
      </main>

      <SiteFooter variant="sub" />
    </>
  );
}
