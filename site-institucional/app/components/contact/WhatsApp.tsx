"use client";

import { MessageSquare, ArrowRight } from "lucide-react";

export function ContactWhatsApp() {
  return (
    <div
      className="
        relative flex flex-col
        rounded-2xl border border-zinc-200 bg-white p-8
        shadow-sm
        dark:border-zinc-800 dark:bg-zinc-900
      "
    >
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-400/20 to-green-500/20 blur-3xl dark:from-emerald-400/10 dark:to-green-500/10" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-300/10 to-green-400/10 blur-3xl dark:from-emerald-900/10 dark:to-green-900/10" />
      </div>

      {/* Content */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 p-3">
            <MessageSquare className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              WhatsApp Direto
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Resposta em até 2 horas
            </p>
          </div>
        </div>

        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Conte sua ideia, tire dúvidas ou solicite um orçamento. É a forma mais rápida 
          e direta de conversarmos sobre seu projeto.
        </p>

        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <li className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Resposta rápida (4 horas)</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Conversa direta com especialistas</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Primeira consulta gratuita</span>
          </li>
        </ul>
      </div>

      {/* Botão com o mesmo estilo do outro componente */}
      <a
  href="https://wa.me/5554992048029?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20GC%20Connect."
  target="_blank"
  rel="noopener noreferrer"
  className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-600/30 focus:outline-none focus:ring-4 focus:ring-green-500/50 active:scale-95 sm:w-auto"
>
        Conversar no WhatsApp
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
}