// Next.js
import Image from "next/image";

export default function Avatar({
  name,
  src,
  size = 296,
  className = "",
}: {
  name: string;
  src?: string;
  size?: number;
  className?: string;
}) {
  const base = `relative overflow-hidden rounded-full border border-line bg-subtle ${className}`;

  if (src) {
    return (
      <div className={base} style={{ width: size, height: size }}>
        <Image
          src={src}
          alt={name}
          fill
          sizes={`${size}px`}
          className="object-cover object-[72%_68%]"
          priority
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center ${base}`}
      style={{ width: size, height: size }}
      aria-label={name}
    >
      <span
        className="font-mono font-semibold text-muted"
        style={{ fontSize: size * 0.32 }}
      >
        {initials(name)}
      </span>
    </div>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
