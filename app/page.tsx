import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ChatWidget from "@/components/ChatWidget";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import HeroCarousel from "@/components/home/HeroCarousel";
import DomainsAccordion from "@/components/home/DomainsAccordion";
import PartnersSection from "@/components/home/PartnersSection";
import { HOME_TEAM } from "@/lib/data/team";
import { POSTS, iconForTag } from "@/lib/data/blog";
import {
  CLIENTS,
  CONTACT_INFO,
  PLANS,
  STATS,
  STEPS,
  TESTIMONIALS,
  VALUES,
} from "@/lib/data/site";

const HOME_POSTS = POSTS.slice(0, 3);
const HOME_VALUES = VALUES.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <SiteHeader variant="home" current="home" />
      <HeroCarousel />

      <section id="expertises" className="bg-white px-5 py-[86px]">
        <div className="mx-auto max-w-[1180px]">
          <Reveal variant="scale" className="mx-auto mb-[46px] grid max-w-[680px] gap-4 text-center">
            <div className="ac-eye mx-auto flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-indigo">
              <span className="h-0.5 w-[26px] bg-current" />
              01 — Expertises
            </div>
            <h2 className="text-balance font-sora text-[clamp(28px,4.2vw,48px)] font-bold leading-[1.06] tracking-[-0.035em]">
              Huit domaines, un seul cabinet
            </h2>
            <p className="m-0 text-[16.5px] leading-relaxed text-ac-ink/66">
              Ouvrez un domaine pour voir le détail des prestations que nous prenons en charge.
            </p>
          </Reveal>
          <DomainsAccordion />
        </div>
      </section>

      <section id="methode" className="border-t border-ac-ink/[0.06] bg-ac-mist px-5 py-[84px]">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="mx-auto mb-11 grid max-w-[640px] gap-4 text-center">
            <div className="ac-eye mx-auto flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-indigo">
              <span className="h-0.5 w-[26px] bg-current" />
              02 — Méthode
            </div>
            <h2 className="text-balance font-sora text-[clamp(26px,3.8vw,42px)] font-bold tracking-[-0.035em]">
              Quatre étapes, un accompagnement continu
            </h2>
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
            {STEPS.map((s) => (
              <div key={s.num} className="grid content-start gap-2.5 rounded-2xl border border-ac-ink/[0.08] bg-white p-[26px]">
                <div className="font-sora text-[32px] font-bold leading-none tracking-[-0.04em] text-ac-indigo/26">
                  {s.num}
                </div>
                <h3 className="m-0 font-sora text-lg font-bold tracking-[-0.02em]">{s.title}</h3>
                <p className="m-0 text-[14.5px] leading-relaxed text-ac-ink/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-5 pt-[30px]">
        <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-3xl bg-ac-ink px-[26px] py-[62px] text-white">
          <div className="pointer-events-none absolute left-1/2 top-[-90px] h-[320px] w-[540px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(70,65,149,0.6),transparent_66%)] blur-3xl" />
          <Reveal className="relative mx-auto mb-12 grid max-w-[720px] gap-[18px] text-center">
            <div className="ac-eye mx-auto flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-gold-soft">
              <span className="h-0.5 w-[26px] bg-current" />
              03 — Pourquoi Allianz Consulting
            </div>
            <h2 className="text-balance font-sora text-[clamp(26px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.035em]">
              La conformité n&apos;est pas une contrainte, c&apos;est un levier
            </h2>
          </Reveal>
          <div className="relative mx-auto grid max-w-[1000px] grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-x-6 gap-y-[38px]">
            {STATS.map((s) => (
              <div key={s.value} className="grid justify-items-center gap-2 text-center">
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-white/[0.07]">
                  <i className={`ti ${s.icon} text-[23px] text-ac-gold-soft`} />
                </div>
                <div className="font-sora text-[27px] font-bold tracking-[-0.03em]">{s.value}</div>
                <div className="text-sm leading-relaxed text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="formules" className="bg-white px-5 py-[76px]">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="mx-auto mb-[46px] grid max-w-[660px] gap-4 text-center">
            <div className="ac-eye mx-auto flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-indigo">
              <span className="h-0.5 w-[26px] bg-current" />
              04 — Formules
            </div>
            <h2 className="text-balance font-sora text-[clamp(26px,4vw,44px)] font-bold tracking-[-0.035em]">
              Un accompagnement calibré sur votre taille
            </h2>
            <p className="m-0 text-[16.5px] leading-relaxed text-ac-ink/65">
              Trois régimes d&apos;intervention, ajustables à tout moment selon votre activité.
            </p>
          </Reveal>
          <div className="grid items-start grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
            {PLANS.map((p) => (
              <div
                key={p.title}
                className={`grid content-start gap-4 rounded-2xl border p-7 ${
                  p.featured
                    ? "border-ac-ink bg-ac-ink text-white shadow-[0_26px_60px_rgba(20,19,31,0.18)]"
                    : "border-ac-ink/10 bg-white text-ac-ink"
                }`}
              >
                {p.featured && (
                  <span className="w-fit rounded-md bg-ac-gold px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-ac-ink">
                    Le plus choisi
                  </span>
                )}
                <h3 className="m-0 font-sora text-xl font-bold tracking-[-0.02em]">{p.title}</h3>
                <p className={`m-0 text-[14.5px] leading-relaxed ${p.featured ? "text-white/66" : "text-ac-ink/62"}`}>
                  {p.desc}
                </p>
                <div className={`h-px ${p.featured ? "bg-white/14" : "bg-ac-ink/[0.09]"}`} />
                <div className="grid gap-[11px]">
                  {p.items.map((it) => (
                    <div
                      key={it}
                      className={`flex items-start gap-2.5 text-[14.5px] leading-relaxed ${
                        p.featured ? "text-white/82" : "text-ac-ink/75"
                      }`}
                    >
                      <i className="ti ti-check mt-0.5 flex-shrink-0 text-[17px] text-ac-gold" />
                      {it}
                    </div>
                  ))}
                </div>
                <Link
                  href="#contact"
                  className={`mt-1.5 rounded-[9px] p-3.5 text-center text-[15px] font-extrabold ${
                    p.featured
                      ? "bg-ac-gold text-ac-ink"
                      : "border border-ac-indigo/22 bg-ac-mist text-ac-indigo"
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" className="border-t border-ac-ink/[0.06] bg-ac-mist px-5 py-[84px]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 nav:grid-cols-2">
          <Reveal variant="left" className="grid content-start gap-[18px]">
            <div className="ac-eye flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-indigo">
              <span className="h-0.5 w-[26px] bg-current" />
              05 — Clientèle
            </div>
            <h2 className="text-balance font-sora text-[clamp(26px,3.8vw,42px)] font-bold leading-[1.08] tracking-[-0.035em]">
              Nous travaillons avec ceux qui construisent
            </h2>
            <p className="m-0 text-[16.5px] leading-[1.7] text-ac-ink/70">
              Du porteur de projet qui dépose ses statuts à la PME qui restructure son
              financement : nos méthodes s&apos;adaptent à votre stade de maturité, jamais
              l&apos;inverse.
            </p>
            <div className="flex flex-wrap gap-2">
              {CLIENTS.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-ac-ink/[0.12] bg-white px-4 py-2.5 text-[13.5px] font-semibold text-ac-ink/78 hover:border-ac-indigo hover:text-ac-indigo"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal variant="right" className="relative min-h-[420px] overflow-hidden rounded-[20px] border border-ac-ink/[0.08]">
            <ImageSlot hint="Photo — dirigeant en entretien avec un consultant (860×1000)" icon="ti-handshake" />
          </Reveal>
        </div>
      </section>

      <section id="cabinet" className="bg-white px-5 py-[84px]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 nav:grid-cols-2">
          <Reveal variant="left" className="relative min-h-[420px] overflow-hidden rounded-[20px] border border-ac-ink/[0.08]">
            <ImageSlot hint="Photo de l'équipe du cabinet (860×1000)" icon="ti-users" />
          </Reveal>
          <Reveal variant="right" className="grid gap-[18px]">
            <div className="ac-eye flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-indigo">
              <span className="h-0.5 w-[26px] bg-current" />
              06 — À propos
            </div>
            <h2 className="text-balance font-sora text-[clamp(26px,3.8vw,42px)] font-bold leading-[1.08] tracking-[-0.035em]">
              Un partenaire, pas un prestataire
            </h2>
            <p className="m-0 text-[16.5px] leading-[1.7] text-ac-ink/70">
              Dans un environnement où les obligations fiscales, comptables, douanières et
              sociales se complexifient, les entreprises ont besoin d&apos;un accompagnement
              permanent — pas d&apos;une intervention ponctuelle. Allianz Consulting réunit sous
              un même toit les huit expertises qui décident de la santé d&apos;une entreprise.
            </p>
            <div className="grid gap-3">
              {HOME_VALUES.map((v) => (
                <div key={v.title} className="flex items-start gap-3.5 rounded-2xl border border-ac-ink/[0.07] bg-ac-mist p-[18px]">
                  <i className={`ti ${v.icon} mt-px flex-shrink-0 text-[21px] text-ac-indigo`} />
                  <span className="grid gap-0.5">
                    <b className="font-sora text-[15.5px] font-bold">{v.title}</b>
                    <span className="text-sm leading-relaxed text-ac-ink/65">{v.desc}</span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="equipe" className="border-t border-ac-ink/[0.06] bg-ac-mist px-5 py-[84px]">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="mx-auto mb-11 grid max-w-[660px] gap-4 text-center">
            <div className="ac-eye mx-auto flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-indigo">
              <span className="h-0.5 w-[26px] bg-current" />
              07 — Équipe
            </div>
            <h2 className="text-balance font-sora text-[clamp(26px,4vw,44px)] font-bold tracking-[-0.035em]">
              Les consultants qui suivront votre dossier
            </h2>
            <p className="m-0 text-[16.5px] leading-relaxed text-ac-ink/65">
              Un interlocuteur unique par mission, épaulé par les spécialistes du cabinet.
            </p>
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
            {HOME_TEAM.map((t) => (
              <div key={t.slot} data-lift className="grid content-start overflow-hidden rounded-2xl border border-ac-ink/[0.08] bg-white">
                <div className="relative h-[250px]">
                  <ImageSlot hint={t.hint} icon="ti-user-circle" />
                </div>
                <div className="grid gap-1.5 p-5">
                  <b className="font-sora text-[16.5px] font-bold tracking-[-0.02em]">{t.name}</b>
                  <span className="text-[13px] font-bold text-ac-indigo">{t.role}</span>
                  <span className="text-[13.5px] leading-relaxed text-ac-ink/62">{t.desc}</span>
                  <div className="mt-1 flex gap-2">
                    <Link href="#contact" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-lg bg-ac-mist text-ac-indigo hover:bg-ac-indigo hover:text-white">
                      <i className="ti ti-brand-linkedin text-base" />
                    </Link>
                    <Link href="#contact" aria-label="E-mail" className="flex h-8 w-8 items-center justify-center rounded-lg bg-ac-mist text-ac-indigo hover:bg-ac-indigo hover:text-white">
                      <i className="ti ti-mail text-base" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="bg-white px-5 py-[84px]">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-10 grid grid-cols-1 items-end gap-5 nav:grid-cols-[1fr_auto]">
            <div className="grid gap-4">
              <div className="ac-eye flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-indigo">
                <span className="h-0.5 w-[26px] bg-current" />
                08 — Blog
              </div>
              <h2 className="text-balance font-sora text-[clamp(26px,4vw,44px)] font-bold tracking-[-0.035em]">
                Veille fiscale, sociale et douanière
              </h2>
              <p className="m-0 max-w-[560px] text-[16.5px] leading-relaxed text-ac-ink/65">
                Les échéances, réformes et décisions qui touchent directement les TPE et PME.
              </p>
            </div>
            <Link
              href="/blog"
              className="flex items-center justify-center gap-2.5 whitespace-nowrap rounded-[9px] border border-ac-indigo/24 px-6 py-3.5 text-[14.5px] font-bold text-ac-indigo hover:bg-ac-indigo hover:text-white"
            >
              Tous les articles <i className="ti ti-arrow-right text-[17px]" />
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[18px]">
            {HOME_POSTS.map((p) => (
              <Link
                key={p.slug}
                href={`/blog#${p.slug}`}
                data-lift
                className="grid content-start overflow-hidden rounded-2xl border border-ac-ink/[0.08] bg-white text-ac-ink hover:border-ac-indigo"
              >
                <div className="relative h-[200px]">
                  <ImageSlot hint="Visuel de l'article (800×500)" icon={iconForTag(p.tag)} />
                </div>
                <div className="grid gap-2.5 p-[22px]">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-md bg-ac-indigo/[0.09] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.1em] text-ac-indigo">
                      {p.tag}
                    </span>
                    <span className="text-[12.5px] text-ac-ink/50">
                      {p.date} · {p.read}
                    </span>
                  </div>
                  <h3 className="m-0 font-sora text-lg font-bold leading-[1.3] tracking-[-0.02em]">
                    {p.title}
                  </h3>
                  <p className="m-0 text-[14.5px] leading-relaxed text-ac-ink/62">{p.excerpt}</p>
                  <span className="mt-0.5 flex items-center gap-[7px] text-sm font-bold text-ac-indigo">
                    Lire l&apos;article <i className="ti ti-arrow-right text-base" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ac-ink/[0.06] bg-ac-mist px-5 py-20">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="mx-auto mb-10 grid max-w-[620px] gap-4 text-center">
            <div className="ac-eye mx-auto flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-indigo">
              <span className="h-0.5 w-[26px] bg-current" />
              09 — Témoignages
            </div>
            <h2 className="font-sora text-[clamp(24px,3.2vw,36px)] font-bold tracking-[-0.035em]">
              Ce que disent nos clients
            </h2>
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
            {TESTIMONIALS.map((q) => (
              <div key={q.name} className="grid content-between gap-[18px] rounded-2xl border border-ac-ink/[0.08] bg-white p-[26px]">
                <div className="grid gap-3.5">
                  <i className="ti ti-quote text-2xl text-ac-gold" />
                  <p className="m-0 text-[15.5px] leading-relaxed text-ac-ink/78">{q.text}</p>
                </div>
                <div>
                  <div className="font-sora text-[15px] font-bold">{q.name}</div>
                  <div className="text-[13px] text-ac-ink/55">{q.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white px-5 py-[84px]">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-10 nav:grid-cols-2">
          <Reveal variant="left" className="grid content-start gap-[18px]">
            <div className="ac-eye flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-indigo">
              <span className="h-0.5 w-[26px] bg-current" />
              10 — Contact
            </div>
            <h2 className="text-balance font-sora text-[clamp(26px,3.8vw,42px)] font-bold leading-[1.08] tracking-[-0.035em]">
              Premier diagnostic offert, sans engagement
            </h2>
            <p className="m-0 text-[16.5px] leading-[1.7] text-ac-ink/70">
              Décrivez votre situation en quelques lignes. Nous revenons vers vous sous 48 h avec
              une lecture claire de vos obligations et des priorités à traiter.
            </p>
            <div className="mt-1 grid gap-3">
              <div className="flex items-center gap-3.5 text-[15.5px]">
                <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-ac-mist">
                  <i className="ti ti-mail text-[19px] text-ac-indigo" />
                </span>
                {CONTACT_INFO.email}
              </div>
              <div className="flex items-center gap-3.5 text-[15.5px]">
                <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-ac-mist">
                  <i className="ti ti-phone text-[19px] text-ac-indigo" />
                </span>
                {CONTACT_INFO.phones}
              </div>
              <div className="flex items-start gap-3.5 text-[15.5px]">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] bg-ac-mist">
                  <i className="ti ti-map-pin text-[19px] text-ac-indigo" />
                </span>
                <span className="pt-2 leading-relaxed">{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3.5 text-[15.5px]">
                <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-ac-mist">
                  <i className="ti ti-clock-hour-4 text-[19px] text-ac-indigo" />
                </span>
                {CONTACT_INFO.hours}
              </div>
            </div>
          </Reveal>

          <Reveal
            variant="right"
            className="rounded-[20px] border border-ac-ink/10 bg-ac-mist p-7 shadow-[0_26px_60px_rgba(20,19,31,0.06)]"
          >
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <SiteFooter variant="home" />
      <ChatWidget />
    </>
  );
}
