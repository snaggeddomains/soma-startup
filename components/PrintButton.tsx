"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-cream"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <path d="M6 9V3h12v6M6 18H4v-6h16v6h-2M8 14h8v7H8z" strokeLinejoin="round" />
      </svg>
      Print / Save as PDF
    </button>
  );
}
