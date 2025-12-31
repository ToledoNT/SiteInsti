"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { label: "Início", href: "/" },
    { label: "Como Trabalhamos", href: "/work" },
    { label: "Contato", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-200/70 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/70">
      <div className="mx-auto flex h-20 md:h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          SuaEmpresa
        </Link>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-1 py-2 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-zinc-900 dark:text-zinc-50"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
          <nav className="flex flex-col gap-6 px-6 py-8 text-lg">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-medium text-zinc-800 transition hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-50"
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