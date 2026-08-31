import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ImageSlot from "@/components/ImageSlot";
import BlogList from "@/components/blog/BlogList";
import { POSTS, iconForTag } from "@/lib/data/blog";
import { SERVICES } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Blog — Allianz Consulting Sarl",
  description:
    "Veille fiscale, sociale et douanière : les échéances, réformes et décisions qui touchent directement les TPE, PME et entreprises importatrices.",
};

const featured = POSTS[0];

export default function BlogPage() {
  return (
    <>
      <SiteHeader variant="sub" current="blog" />

      <section className="relative m-2.5 overflow-hidden rounded-[22px] bg-ac-ink px-[22px] pb-[58px] pt-[62px]">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(56%_100%_at_2%_0%,rgba(70,65,149,0.85),transparent_62%),radial-gradient(50%_90%_at_98%_6%,rgba(201,162,39,0.42),transparent_62%)]" />
        <div className="relative mx-auto grid max-w-[860px] animate-ac-up gap-[18px] text-center text-white">
          <div className="ac-eye flex items-center justify-center gap-3 text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-ac-gold-soft">
            <span className="h-0.5 w-[26px] bg-current" />
            Blog
            <span className="h-0.5 w-[26px] bg-current" />
          </div>
          <h1 className="text-balance font-sora text-[clamp(30px,5.4vw,56px)] font-bold leading-[1.04] tracking-[-0.035em]">
            Veille fiscale, sociale et douanière
          </h1>
          <p className="mx-auto max-w-[620px] text-[clamp(15.5px,1.8vw,18px)] leading-relaxed text-white/72">
            Les échéances, réformes et décisions qui touchent directement les TPE, PME et
            entreprises importatrices. Écrit par les consultants du cabinet.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-[1240px] px-5 pb-[70px] pt-10">
        <Link
          href={`/blog#${featured.slug}`}
          data-lift
          className="mb-[34px] grid grid-cols-1 overflow-hidden rounded-[20px] border border-ac-ink/[0.09] text-ac-ink nav:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="relative min-h-[300px]">
            <ImageSlot
              hint="Visuel de l'article à la une — plan large d'un bureau de travail ou d'une réunion (1400×900)"
              icon={iconForTag(featured.tag)}
            />
          </div>
          <div className="grid content-center gap-3.5 p-[34px]">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-md bg-ac-gold px-[11px] py-[5px] text-[11px] font-extrabold uppercase tracking-[0.1em] text-ac-ink">
                À la une
              </span>
              <span className="rounded-md bg-ac-indigo/[0.09] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.1em] text-ac-indigo">
                {featured.tag}
              </span>
              <span className="text-[12.5px] text-ac-ink/50">
                {featured.date} · {featured.read}
              </span>
            </div>
            <h2 className="m-0 font-sora text-[clamp(21px,2.6vw,30px)] font-bold leading-[1.2] tracking-[-0.03em]">
              {featured.title}
            </h2>
            <p className="m-0 text-[15.5px] leading-relaxed text-ac-ink/65">{featured.excerpt}</p>
            <span className="flex items-center gap-2 text-[14.5px] font-bold text-ac-indigo">
              Lire l&apos;article <i className="ti ti-arrow-right text-[17px]" />
            </span>
          </div>
        </Link>

        <div className="grid grid-cols-1 items-start gap-[34px] nav:grid-cols-[1fr_300px]">
          <BlogList />

          <aside className="grid content-start gap-3.5">
            <div className="grid gap-3.5 rounded-[18px] bg-ac-ink p-6 text-white">
              <h3 className="m-0 font-sora text-[16.5px] font-bold">Lettre de veille</h3>
              <p className="m-0 text-sm leading-relaxed text-white/62">
                Les échéances fiscales et sociales du mois, dans votre boîte mail. Sans
                publicité.
              </p>
              <input
                placeholder="votre@entreprise.com"
                className="rounded-[9px] border border-white/[0.18] bg-white/[0.06] px-[13px] py-3 text-[14.5px] text-white outline-none focus:border-ac-gold"
              />
              <button className="rounded-[9px] border-none bg-ac-gold py-[13px] text-[14.5px] font-extrabold text-ac-ink hover:bg-ac-gold-soft">
                M&apos;abonner
              </button>
            </div>
            <div className="grid gap-3 rounded-[18px] border border-ac-ink/[0.07] bg-ac-mist p-6">
              <h3 className="m-0 font-sora text-[16.5px] font-bold">Nos services</h3>
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services#${s.slug}`}
                  className="flex items-center gap-2.5 text-sm font-semibold text-ac-ink/72 hover:text-ac-indigo"
                >
                  <i className={`ti ${s.icon} flex-shrink-0 text-[17px] text-ac-indigo`} /> {s.label}
                </Link>
              ))}
            </div>
            <div className="grid gap-3 rounded-[18px] border border-ac-ink/[0.07] bg-ac-mist p-6">
              <h3 className="m-0 font-sora text-[16.5px] font-bold">Un cas à nous soumettre ?</h3>
              <p className="m-0 text-sm leading-relaxed text-ac-ink/62">
                Le premier diagnostic est offert, sans engagement.
              </p>
              <Link
                href="/contact"
                className="rounded-[9px] bg-ac-indigo py-3.5 text-center text-[14.5px] font-bold text-white hover:bg-ac-gold hover:text-ac-ink"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter variant="sub" />
    </>
  );
}
