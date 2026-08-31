"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/data/services";
import { CONTACT_INFO } from "@/lib/data/site";

type NavKey = "home" | "about" | "services" | "team" | "blog" | "contact";

interface SiteHeaderProps {
  variant: "home" | "sub";
  current?: NavKey;
}

const linkColor = (active: boolean) =>
  active ? "text-ac-indigo font-bold" : "text-ac-ink/72 hover:text-ac-indigo";

export default function SiteHeader({ variant, current }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const deskBp = variant === "home" ? "nav-lg" : "nav";

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-[60] border-b border-ac-ink/[0.07] bg-white/94 backdrop-blur-md">
      <div
        className={`mx-auto flex items-center gap-3 px-4 py-[11px] sm:gap-[22px] sm:px-5 ${
          variant === "home" ? "max-w-[1280px]" : "max-w-[1240px]"
        }`}
      >
        <Link
          href={variant === "home" ? "#accueil" : "/"}
          className="flex min-w-0 flex-shrink items-center gap-[11px] text-ac-ink"
          onClick={closeAll}
        >
          <Image
            src="/logo-ac.png"
            alt="Allianz Consulting Sarl"
            width={200}
            height={60}
            className={`flex-shrink-0 ${variant === "home" ? "h-11 w-auto" : "h-[42px] w-auto"}`}
            priority
          />
          <span
            className={`min-w-0 truncate font-sora font-bold tracking-[-0.02em] ${
              variant === "home" ? "text-base" : "text-[15.5px]"
            }`}
          >
            Allianz <span className="text-ac-indigo">Consulting</span>
            {variant === "home" && (
              <span className="ml-1 text-[11px] font-semibold text-ac-ink/45">Sarl</span>
            )}
          </span>
        </Link>

        <nav
          className={`ml-2 hidden items-center gap-[21px] text-[14.5px] font-semibold ${
            deskBp === "nav-lg" ? "nav-lg:flex nav-lg:gap-6" : "nav:flex nav:gap-6"
          }`}
        >
          <Link href={variant === "home" ? "#accueil" : "/"} className={linkColor(current === "home")}>
            Accueil
          </Link>
          <Link href="/a-propos" className={linkColor(current === "about")}>
            À propos
          </Link>

          {variant === "home" ? (
            <span className="relative flex items-center">
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex cursor-pointer items-center gap-1.5 bg-transparent p-0 text-[14.5px] font-semibold ${
                  servicesOpen ? "text-ac-indigo" : "text-ac-ink/72"
                }`}
              >
                Services{" "}
                <i
                  className={`ti ti-chevron-down text-base transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute left-[-14px] top-full mt-3.5 grid w-[306px] animate-ac-pop gap-0.5 rounded-2xl border border-ac-ink/10 bg-white p-2 shadow-[0_26px_60px_rgba(20,19,31,0.16)]">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services#${s.slug}`}
                      onClick={closeAll}
                      className="flex items-center gap-3 rounded-[9px] px-3 py-2.5 text-sm font-semibold text-ac-ink hover:bg-ac-mist hover:text-ac-indigo"
                    >
                      <i className={`ti ${s.icon} flex-shrink-0 text-lg text-ac-indigo`} />
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </span>
          ) : (
            <Link href="/services" className={linkColor(current === "services")}>
              Services
            </Link>
          )}

          <Link href="/equipe" className={linkColor(current === "team")}>
            Équipe
          </Link>
          <Link href="/blog" className={linkColor(current === "blog")}>
            Blog
          </Link>
          <Link
            href={variant === "home" ? "#contact" : "/contact"}
            className={linkColor(current === "contact")}
          >
            Contact
          </Link>
        </nav>

        <div className="flex-1" />

        {variant === "home" && (
          <a
            href={`tel:${CONTACT_INFO.phoneMain}`}
            className="hidden items-center gap-2 whitespace-nowrap text-[14.5px] font-semibold text-ac-ink hover:text-ac-indigo tel:flex"
          >
            <i className="ti ti-phone text-[17px]" /> {CONTACT_INFO.phoneMainDisplay}
          </a>
        )}

        <Link
          href={variant === "home" ? "#contact" : "/contact"}
          className="flex-shrink-0 whitespace-nowrap rounded-lg bg-ac-indigo px-3.5 py-[11px] text-[13.5px] font-bold text-white shadow-[0_10px_26px_rgba(70,65,149,0.3)] hover:bg-ac-gold sm:px-[22px] sm:text-[14.5px]"
        >
          <span className="hidden sm:inline">
            {variant === "home" ? "Prendre rendez-vous" : "Rendez-vous"}
          </span>
          <span className="sm:hidden">Rendez-vous</span>
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-ac-ink/[0.14] bg-transparent text-ac-ink ${
            deskBp === "nav-lg" ? "nav-lg:hidden" : "nav:hidden"
          }`}
        >
          <i className="ti ti-menu-2 text-xl" />
        </button>
      </div>

      {menuOpen && (
        <div className="grid max-h-[calc(100vh-68px)] gap-[13px] overflow-y-auto border-t border-ac-ink/[0.08] bg-white px-4 pb-[22px] pt-[14px] sm:px-5">
          <Link href={variant === "home" ? "#accueil" : "/"} onClick={closeAll} className="font-semibold text-ac-ink">
            Accueil
          </Link>
          <Link href="/a-propos" onClick={closeAll} className="font-semibold text-ac-ink">
            À propos
          </Link>
          {variant === "home" ? (
            <>
              <Link href="#expertises" onClick={closeAll} className="font-semibold text-ac-ink">
                Services
              </Link>
              <div className="grid gap-0.5 border-l-2 border-ac-indigo/20 pl-1.5">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services#${s.slug}`}
                    onClick={closeAll}
                    className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm font-semibold text-ac-ink/70 hover:bg-ac-mist hover:text-ac-indigo"
                  >
                    <i className={`ti ${s.icon} text-[17px] text-ac-indigo`} /> {s.label}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <Link href="/services" onClick={closeAll} className="font-semibold text-ac-ink">
              Services
            </Link>
          )}
          <Link href="/equipe" onClick={closeAll} className="font-semibold text-ac-ink">
            Équipe
          </Link>
          <Link href="/blog" onClick={closeAll} className="font-semibold text-ac-ink">
            Blog
          </Link>
          <Link
            href={variant === "home" ? "#contact" : "/contact"}
            onClick={closeAll}
            className="font-semibold text-ac-ink"
          >
            Contact
          </Link>
          {variant === "home" && (
            <a
              href={`tel:${CONTACT_INFO.phoneMain}`}
              className="flex items-center gap-[9px] text-[14.5px] font-semibold text-ac-ink"
            >
              <i className="ti ti-phone text-[17px] text-ac-indigo" /> {CONTACT_INFO.phones}
            </a>
          )}
          <Link
            href={variant === "home" ? "#contact" : "/contact"}
            onClick={closeAll}
            className="rounded-lg bg-ac-indigo py-[13px] text-center font-bold text-white"
          >
            Prendre rendez-vous
          </Link>
        </div>
      )}
    </header>
  );
}
