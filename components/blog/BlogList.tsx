"use client";

import { useState } from "react";
import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import { POSTS, BLOG_TAGS } from "@/lib/data/blog";

export default function BlogList() {
  const [tag, setTag] = useState("Tous");
  const visible = POSTS.filter((p) => tag === "Tous" || p.tag === tag);

  return (
    <div className="grid min-w-0 gap-[22px]">
      <div className="flex flex-wrap items-center gap-2">
        {BLOG_TAGS.map((label) => {
          const active = tag === label;
          return (
            <button
              key={label}
              type="button"
              onClick={() => setTag(label)}
              className={`cursor-pointer rounded-full border px-4 py-2 text-[13px] font-bold transition-colors duration-200 ${
                active
                  ? "border-ac-indigo bg-ac-indigo text-white"
                  : "border-ac-ink/[0.14] bg-white text-ac-ink"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-[18px]">
        {visible.map((p) => (
          <Link
            key={p.slug}
            href={`/blog#${p.slug}`}
            data-lift
            className="grid content-start overflow-hidden rounded-2xl border border-ac-ink/[0.08] bg-white text-ac-ink hover:border-ac-indigo"
          >
            <div className="relative h-[190px]">
              <ImageSlot hint={p.hint} />
            </div>
            <div className="grid gap-2.5 p-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-md bg-ac-indigo/[0.09] px-2.5 py-1 text-[10.5px] font-extrabold uppercase tracking-[0.1em] text-ac-indigo">
                  {p.tag}
                </span>
                <span className="text-xs text-ac-ink/50">
                  {p.date} · {p.read}
                </span>
              </div>
              <h3 className="m-0 font-sora text-[17.5px] font-bold leading-[1.3] tracking-[-0.02em]">
                {p.title}
              </h3>
              <p className="m-0 text-sm leading-relaxed text-ac-ink/62">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      {visible.length === 0 && (
        <div className="rounded-2xl border border-dashed border-ac-ink/[0.18] p-10 text-center text-[15px] text-ac-ink/55">
          Aucun article dans cette rubrique pour le moment.
        </div>
      )}

      <button
        type="button"
        className="flex items-center justify-self-center gap-2.5 rounded-[9px] border border-ac-indigo/24 bg-white px-7 py-3.5 text-[14.5px] font-bold text-ac-indigo hover:bg-ac-indigo hover:text-white"
      >
        Charger plus d&apos;articles <i className="ti ti-chevron-down text-lg" />
      </button>
    </div>
  );
}
