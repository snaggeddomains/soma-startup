"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { nav } from "@/lib/content";
import { cn } from "@/lib/cn";

function Wordmark() {
  return (
    <Link href="/" className="group flex items-center gap-2 font-semibold tracking-tight">
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-paper text-sm transition-colors group-hover:bg-accent">
        S
      </span>
      <span className="text-[15px]">
        SOMA<span className="text-accent">Startup</span>
      </span>
    </Link>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Wordmark />

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button href="/get-involved" variant="ghost" className="px-3">
            Get involved
          </Button>
          <Button href="/register">Register</Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-lg border border-line md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={cn("block h-0.5 w-5 bg-ink transition", open && "translate-y-2 rotate-45")} />
            <span className={cn("block h-0.5 w-5 bg-ink transition", open && "opacity-0")} />
            <span className={cn("block h-0.5 w-5 bg-ink transition", open && "-translate-y-2 -rotate-45")} />
          </div>
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm text-ink-soft hover:bg-cream hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <Button href="/get-involved" variant="secondary" className="flex-1" onClick={() => setOpen(false)}>
                Get involved
              </Button>
              <Button href="/register" className="flex-1" onClick={() => setOpen(false)}>
                Register
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
