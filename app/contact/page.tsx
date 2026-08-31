import type { Metadata } from "next";
import ImageSlot from "@/components/ImageSlot";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import { CONTACT_INFO } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact — Allianz Consulting Sarl",
  description:
    "Premier diagnostic offert, sans engagement. Contactez le cabinet Allianz Consulting Sarl à Douala.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader variant="sub" current="contact" />

      <section className="relative m-2.5 overflow-hidden rounded-[22px] bg-ac-ink px-[22px] py-14">
        <div className="absolute inset-0">
          <ImageSlot
            hint="Bannière — bureaux du cabinet à Akwa, Douala, plan large (2400×760)"
            icon="ti-map-pin"
            tone="dark"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 mix-blend-screen [background:radial-gradient(56%_100%_at_2%_0%,rgba(70,65,149,0.62),transparent_62%),radial-gradient(50%_90%_at_98%_6%,rgba(201,162,39,0.32),transparent_62%)]" />
        <div className="pointer-events-none absolute inset-0 [background:linear-gradient(180deg,rgba(20,19,31,0.84)_0%,rgba(20,19,31,0.94)_100%)]" />
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_70%_at_50%_50%,rgba(20,19,31,0.55),transparent_72%)]" />
        <div className="relative mx-auto grid max-w-[880px] animate-ac-up gap-4 text-center text-white">
          <div className="ac-eye flex items-center justify-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-gold-soft">
            <span className="h-0.5 w-[26px] bg-current" />
            Contact
            <span className="h-0.5 w-[26px] bg-current" />
          </div>
          <h1 className="text-balance font-sora text-[clamp(28px,5vw,52px)] font-bold leading-[1.05] tracking-[-0.035em]">
            Premier diagnostic offert, sans engagement
          </h1>
          <p className="mx-auto max-w-[640px] text-[clamp(15.5px,1.8vw,18px)] leading-relaxed text-white/74">
            Décrivez votre situation en quelques lignes. Nous revenons vers vous sous 48 h avec
            une lecture claire de vos obligations et des priorités à traiter.
          </p>
        </div>
      </section>

      <main className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-10 px-5 py-11 nav:grid-cols-2">
        <div className="grid content-start gap-[18px]">
          <div className="ac-eye flex items-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-indigo">
            <span className="h-0.5 w-[26px] bg-current" />
            Nos coordonnées
          </div>
          <h2 className="text-balance font-sora text-[clamp(22px,3vw,32px)] font-bold leading-[1.15] tracking-[-0.03em]">
            Parlons de votre situation
          </h2>
          <p className="m-0 text-base leading-[1.7] text-ac-ink/70">
            Un cabinet unique pour vos obligations fiscales, votre comptabilité, vos financements,
            vos audits, vos formalités douanières et vos ressources humaines.
          </p>
          <div className="mt-1 grid gap-3">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-3.5 text-[15.5px] text-ac-ink hover:text-ac-indigo"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-ac-mist">
                <i className="ti ti-mail text-[19px] text-ac-indigo" />
              </span>
              {CONTACT_INFO.email}
            </a>
            <a
              href={`tel:${CONTACT_INFO.phoneMain}`}
              className="flex items-center gap-3.5 text-[15.5px] text-ac-ink hover:text-ac-indigo"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-ac-mist">
                <i className="ti ti-phone text-[19px] text-ac-indigo" />
              </span>
              {CONTACT_INFO.phones}
            </a>
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

          <div className="mt-2 flex gap-2.5">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              aria-label="E-mail"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ac-mist text-ac-indigo hover:bg-ac-indigo hover:text-white"
            >
              <i className="ti ti-mail text-lg" />
            </a>
            <a
              href={`tel:${CONTACT_INFO.phoneMain}`}
              aria-label="Téléphone"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ac-mist text-ac-indigo hover:bg-ac-indigo hover:text-white"
            >
              <i className="ti ti-phone text-lg" />
            </a>
            <a
              href="/contact"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ac-mist text-ac-indigo hover:bg-ac-indigo hover:text-white"
            >
              <i className="ti ti-brand-linkedin text-lg" />
            </a>
          </div>
        </div>

        <div className="rounded-[20px] border border-ac-ink/10 bg-ac-mist p-7 shadow-[0_26px_60px_rgba(20,19,31,0.06)]">
          <ContactForm />
        </div>
      </main>

      <SiteFooter variant="sub" />
    </>
  );
}
