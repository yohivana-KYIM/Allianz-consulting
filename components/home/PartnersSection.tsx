import Image from "next/image";
import { PARTNERS } from "@/lib/data/site";

export default function PartnersSection() {
  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto max-w-[900px] text-center">
        <h2 className="m-0 font-sora text-[clamp(22px,3vw,30px)] font-bold tracking-[-0.03em] text-ac-ink">
          Ils nous font confiance
        </h2>
        <p className="mx-auto mt-2.5 max-w-[480px] text-[15px] text-ac-ink/55">
          Des entreprises qui nous accordent leur confiance
        </p>

        <div className="mt-11 flex flex-wrap items-start justify-center gap-x-14 gap-y-9">
          {PARTNERS.map((p) => (
            <div key={p.name} className="flex w-[150px] flex-col items-center gap-3.5">
              <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border border-ac-ink/[0.09] bg-white p-4 shadow-[0_8px_22px_rgba(20,19,31,0.06)]">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={140}
                  height={140}
                  className="h-full w-full object-contain grayscale transition-[filter] duration-300 hover:grayscale-0"
                />
              </div>
              <span className="text-[13.5px] font-semibold leading-snug text-ac-ink/70">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
