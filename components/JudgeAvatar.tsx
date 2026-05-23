"use client";

import Image from "next/image";
import { useState } from "react";

// Large square portrait that fills the card width; monogram fallback if the
// image is missing.
export function JudgeAvatar({
  src,
  initials,
  colorClass,
}: {
  src?: string;
  initials: string;
  colorClass: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative grid aspect-square w-full place-items-center overflow-hidden ${colorClass}`}>
      <span className="font-display text-6xl font-semibold text-paper">{initials}</span>
      {src && !failed && (
        <Image
          src={src}
          alt=""
          fill
          sizes="(min-width: 1024px) 230px, (min-width: 640px) 33vw, 50vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
