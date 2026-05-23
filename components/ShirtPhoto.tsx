"use client";

import Image from "next/image";
import { useState } from "react";

export function ShirtPhoto({ src }: { src: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="grid aspect-[5/4] w-full place-items-center rounded-xl2 bg-accent text-paper">
        <span className="font-display text-3xl font-semibold lowercase tracking-tight">
          soma<span className="font-light">/</span>startup 2026
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt="The SOMA / Startup 2026 event shirt — front and back"
      width={1043}
      height={868}
      className="h-auto w-full rounded-xl2"
      onError={() => setFailed(true)}
    />
  );
}
