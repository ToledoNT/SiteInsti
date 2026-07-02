"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { label: "Início", href: "/" },
    { label: "Como Trabalhamos", href: "/work" },
    { label: "Contato", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-blue-100/50 bg-white/80 backdrop-blur-md dark:border-blue-900/30 dark:bg-zinc-900/80">
      <div className="flex h-20 items-center justify-between px-6 md:h-16 md:pl-8">
        {/* Logo - mais à esquerda */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-zinc-900 transition hover:text-blue-600 dark:text-zinc-50 dark:hover:text-blue-400"
        >
          <Zap className="h-6 w-6 text-blue-600 transition group-hover:rotate-12 dark:text-blue-400" />
          <span>
            GC<span className="text-blue-600 dark:text-blue-400">Connect</span>
          </span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-1 md:flex">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-blue-50 hover:text-blue-600 dark:text-zinc-400 dark:hover:bg-blue-950/30 dark:hover:text-blue-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-zinc-900 transition hover:bg-blue-50 dark:text-zinc-50 dark:hover:bg-blue-950/30 md:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-blue-100/50 bg-white/95 backdrop-blur-md dark:border-blue-900/30 dark:bg-zinc-900/95 md:hidden">
          <nav className="flex flex-col gap-2 px-6 py-6">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-zinc-800 transition hover:bg-blue-50 hover:text-blue-600 dark:text-zinc-200 dark:hover:bg-blue-950/30 dark:hover:text-blue-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}