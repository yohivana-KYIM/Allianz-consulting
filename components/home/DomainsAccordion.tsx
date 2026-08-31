"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/data/services";

export default function DomainsAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-2.5">
      {SERVICES.map((d, i) => {
        const isOpen = open === i;
        return (
          <div
            key={d.slug}
            className={`rounded-2xl border ${
              isOpen ? "border-ac-indigo/25 bg-ac-mist" : "border-ac-ink/[0.09] bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center gap-4 bg-transparent px-6 py-[22px] text-left"
            >
              <span
                className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${
                  isOpen ? "bg-ac-indigo text-white" : "bg-ac-mist text-ac-indigo"
                }`}
              >
                <i className={`ti ${d.icon} text-[23px]`} />
              </span>
              <span className="grid min-w-0 flex-1 gap-1">
                <span className="flex items-baseline gap-2.5">
                  <span className="font-sora text-xs font-bold text-ac-ink/35">{d.num}</span>
                  <span className="font-sora text-[clamp(17px,2.2vw,22px)] font-bold tracking-[-0.02em] text-ac-ink">
                    {d.title}
                  </span>
                </span>
                <span className="text-[14.5px] leading-relaxed text-ac-ink/60">{d.intro}</span>
              </span>
              <span
                className={`flex-shrink-0 text-ac-ink/40 transition-transform duration-300 ${
                  isOpen ? "rotate-45 text-ac-indigo" : ""
                }`}
              >
                <i className="ti ti-plus text-lg" />
              </span>
            </button>
            {isOpen && (
              <div className="animate-ac-pop px-6 pb-6">
                <div className="mb-[18px] h-px bg-ac-ink/[0.09]" />
                <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-6 gap-y-2.5">
                  {d.items.map((it) => (
                    <div
                      key={it}
                      className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-ac-ink/75"
                    >
                      <i className="ti ti-check mt-0.5 flex-shrink-0 text-[17px] text-ac-gold" />
                      {it}
                    </div>
                  ))}
                </div>
                {d.note && (
                  <p className="mt-[18px] border-l-2 border-ac-gold pl-3.5 text-[13.5px] leading-relaxed text-ac-ink/55">
                    {d.note}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
