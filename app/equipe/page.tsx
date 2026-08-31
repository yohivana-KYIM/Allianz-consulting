import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import { FULL_TEAM } from "@/lib/data/team";
import { CONTACT_INFO } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Équipe — Allianz Consulting Sarl",
  description:
    "Les consultants qui suivront votre dossier : un interlocuteur unique par mission, épaulé par les spécialistes du cabinet.",
};

const PRINCIPLES = [
  {
    icon: "ti-user-check",
    title: "Un responsable identifié",
    desc: "Son nom, son numéro et son adresse figurent sur votre lettre de mission.",
  },
  {
    icon: "ti-messages",
    title: "Restitution écrite",
    desc: "Chaque intervention se conclut par une note claire, chiffrée et archivée.",
  },
  {
    icon: "ti-lock",
    title: "Confidentialité",
    desc: "Vos documents restent internes au cabinet. Aucune sous-traitance sans votre accord.",
  },
];

export default function TeamPage() {
  return (
    <>
      <SiteHeader variant="sub" current="team" />

      <section className="relative m-2.5 overflow-hidden rounded-[22px] bg-ac-ink px-[22px] py-14">
        <div className="absolute inset-0">
          <ImageSlot
            hint="Bannière — photo de groupe de l'équipe du cabinet en salle de réunion, plan large (2400×760)"
            icon="ti-users"
            tone="dark"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 mix-blend-screen [background:radial-gradient(56%_100%_at_2%_0%,rgba(70,65,149,0.62),transparent_62%),radial-gradient(50%_90%_at_98%_6%,rgba(201,162,39,0.32),transparent_62%)]" />
        <div className="pointer-events-none absolute inset-0 [background:linear-gradient(180deg,rgba(20,19,31,0.84)_0%,rgba(20,19,31,0.94)_100%)]" />
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_70%_at_50%_50%,rgba(20,19,31,0.55),transparent_72%)]" />
        <div className="relative mx-auto grid max-w-[880px] animate-ac-up gap-4 text-center text-white">
          <div className="ac-eye flex items-center justify-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-gold-soft">
            <span className="h-0.5 w-[26px] bg-current" />
            Équipe
            <span className="h-0.5 w-[26px] bg-current" />
          </div>
          <h1 className="text-balance font-sora text-[clamp(28px,5vw,52px)] font-bold leading-[1.05] tracking-[-0.035em]">
            Les consultants qui suivront votre dossier
          </h1>
          <p className="mx-auto max-w-[620px] text-[clamp(15.5px,1.8vw,18px)] leading-relaxed text-white/74">
            Un interlocuteur unique par mission, épaulé par les spécialistes du cabinet. Vous
            savez toujours qui appeler.
          </p>
        </div>
      </section>

      <main className="mx-auto grid max-w-[1240px] gap-10 px-5 py-11">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[18px]">
          {FULL_TEAM.map((t) => (
            <div key={t.slot} data-lift className="grid content-start overflow-hidden rounded-[18px] border border-ac-ink/[0.09] bg-white">
              <div className="relative h-[280px]">
                <ImageSlot hint={t.hint} icon="ti-user-circle" />
              </div>
              <div className="grid gap-2 p-[22px]">
                <b className="font-sora text-[17px] font-bold tracking-[-0.02em]">{t.name}</b>
                <span className="text-[13px] font-bold text-ac-indigo">{t.role}</span>
                <span className="text-[13.5px] leading-relaxed text-ac-ink/62">{t.desc}</span>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {t.skills?.map((sk) => (
                    <span
                      key={sk}
                      className="rounded-full border border-ac-ink/[0.08] bg-ac-mist px-[11px] py-[5px] text-[11.5px] font-bold text-ac-ink/65"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex gap-2">
                  <a href="#" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-lg bg-ac-mist text-ac-indigo hover:bg-ac-indigo hover:text-white">
                    <i className="ti ti-brand-linkedin text-base" />
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    aria-label="E-mail"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-ac-mist text-ac-indigo hover:bg-ac-indigo hover:text-white"
                  >
                    <i className="ti ti-mail text-base" />
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phoneMain}`}
                    aria-label="Téléphone"
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-ac-mist text-ac-indigo hover:bg-ac-indigo hover:text-white"
                  >
                    <i className="ti ti-phone text-base" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-[34px] nav:grid-cols-2">
          <Reveal variant="left" className="grid gap-[18px]">
            <div className="ac-eye flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-indigo">
              <span className="h-0.5 w-[26px] bg-current" />
              Notre manière de travailler
            </div>
            <h2 className="text-balance font-sora text-[clamp(24px,3.4vw,38px)] font-bold leading-[1.1] tracking-[-0.035em]">
              Un consultant dédié, jamais un standard téléphonique
            </h2>
            <p className="m-0 text-base leading-[1.7] text-ac-ink/70">
              Chaque dossier est confié à un consultant qui en porte la responsabilité de bout en
              bout. Il mobilise les autres expertises du cabinet quand le dossier l&apos;exige —
              fiscalité, douane, RH — sans que vous ayez à réexpliquer votre situation à chaque
              interlocuteur.
            </p>
            <div className="grid gap-3">
              {PRINCIPLES.map((p) => (
                <div key={p.title} className="flex items-start gap-3.5 rounded-2xl border border-ac-ink/[0.07] bg-ac-mist p-[18px]">
                  <i className={`ti ${p.icon} mt-px flex-shrink-0 text-[21px] text-ac-indigo`} />
                  <span className="grid gap-0.5">
                    <b className="font-sora text-[15.5px] font-bold">{p.title}</b>
                    <span className="text-sm leading-relaxed text-ac-ink/65">{p.desc}</span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal variant="right" className="relative min-h-[440px] overflow-hidden rounded-[20px] border border-ac-ink/[0.08]">
            <ImageSlot
              hint="Photo — réunion de travail interne du cabinet, dossiers ouverts et tableau (900×1100)"
              icon="ti-presentation"
            />
          </Reveal>
        </div>

        <div className="grid justify-items-center gap-5 rounded-[22px] bg-ac-ink px-[30px] py-11 text-center text-white">
          <h2 className="text-balance font-sora text-[clamp(22px,3vw,32px)] font-bold tracking-[-0.035em]">
            Vous cherchez à renforcer votre équipe financière ?
          </h2>
          <p className="m-0 max-w-[540px] text-[15.5px] leading-relaxed text-white/66">
            Le cabinet recrute des profils en comptabilité, fiscalité et douane. Envoyez votre
            candidature spontanée.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="rounded-lg bg-ac-gold px-7 py-3.5 text-[15px] font-extrabold text-ac-ink hover:bg-white"
            >
              Candidature spontanée
            </a>
            <Link
              href="/contact"
              className="rounded-lg border border-white/26 px-6 py-3.5 text-[15px] font-bold text-white hover:border-ac-gold-soft hover:text-ac-gold-soft"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter variant="sub" />
    </>
  );
}
