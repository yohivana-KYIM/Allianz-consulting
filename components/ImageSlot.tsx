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
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)",
          color: isDark ? "#ffffff" : "#14131F",
        }}
      />
      <i
        className={`ti ${icon} relative text-[15%] ${
          isDark ? "text-white/[0.14]" : "text-ac-indigo/[0.16]"
        }`}
        style={{ fontSize: "min(30%, 120px)" }}
      />
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
