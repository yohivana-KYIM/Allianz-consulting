interface ImageSlotProps {
  hint: string;
  className?: string;
}

export default function ImageSlot({ hint, className = "" }: ImageSlotProps) {
  return (
    <div
      role="img"
      aria-label={hint}
      className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br from-ac-mist to-[#ece9f5] ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #14131F 0, #14131F 1px, transparent 1px, transparent 14px)",
        }}
      />
      <i className="ti ti-photo relative text-3xl text-ac-indigo/30" />
    </div>
  );
}
