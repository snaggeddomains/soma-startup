"use client";

import Image from "next/image";
import { useState } from "react";

// Shows a headshot if the file exists in /public, otherwise a colored monogram.
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
    <div
      className={`relative grid h-28 w-28 place-items-center overflow-hidden rounded-full ${colorClass}`}
    >
      <span className="font-display text-3xl font-semibold text-paper">{initials}</span>
      {src && !failed && (
        <Image
          src={src}
          alt=""
          fill
          sizes="112px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
