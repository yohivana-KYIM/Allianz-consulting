interface ImageSlotProps {
  hint: string;
  icon?: string;
  tone?: "light" | "dark";
  className?: string;
}

export default function ImageSlot({
  hint,
  icon = "ti-building-skyscraper",
  tone = "light",
  className = "",
}: ImageSlotProps) {
  const isDark = tone === "dark";
  const patternColor = isDark ? "rgba(227,199,102,0.5)" : "rgba(70,65,149,0.55)";

  return (
    <div
      role="img"
      aria-label={hint}
      className={`absolute inset-0 flex items-center justify-center overflow-hidden ${
        isDark
          ? "bg-[linear-gradient(155deg,#1c1a33_0%,#14131f_55%,#232052_100%)]"
          : "bg-[linear-gradient(155deg,#f7f7fa_0%,#ece9f5_100%)]"
      } ${className}`}
    >
      <div
        className={`absolute -left-10 -top-10 h-56 w-56 rounded-full blur-3xl ${
          isDark ? "bg-ac-indigo/40" : "bg-ac-indigo/[0.12]"
        }`}
      />
      <div
        className={`absolute -bottom-14 -right-10 h-64 w-64 rounded-full blur-3xl ${
          isDark ? "bg-ac-gold/25" : "bg-ac-gold/[0.14]"
        }`}
      />

      {/* Motif géométrique en losanges, dans les tons de la charte */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, ${patternColor} 24%, transparent 24.5%, transparent 75.5%, ${patternColor} 76%),
            linear-gradient(-45deg, ${patternColor} 24%, transparent 24.5%, transparent 75.5%, ${patternColor} 76%)`,
          backgroundSize: "44px 44px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "radial-gradient(120% 100% at 50% 50%, transparent 40%, #14131f 100%)"
            : "radial-gradient(120% 100% at 50% 50%, transparent 45%, #f7f7fa 100%)",
        }}
      />

      {/* Médaillon central */}
      <div
        className={`relative flex h-[34%] w-[34%] max-h-32 max-w-32 items-center justify-center rounded-full border ${
          isDark ? "border-ac-gold-soft/35 bg-white/[0.04]" : "border-ac-indigo/25 bg-white/60"
        }`}
      >
        <div
          className={`flex h-[72%] w-[72%] items-center justify-center rounded-full border ${
            isDark ? "border-white/10" : "border-ac-ink/[0.08]"
          }`}
        >
          <i
            className={`ti ${icon} text-3xl sm:text-4xl ${
              isDark ? "text-ac-gold-soft/80" : "text-ac-indigo/70"
            }`}
          />
        </div>
      </div>

      <span
        className={`absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-lg backdrop-blur-sm ${
          isDark ? "bg-white/10 text-white/70" : "bg-white/70 text-ac-indigo/70"
        }`}
      >
        <i className={`ti ${icon} text-base`} />
      </span>
    </div>
  );
}
