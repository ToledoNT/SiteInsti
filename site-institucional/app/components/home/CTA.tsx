import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GradientButton } from "../ui/Button";

export function CTA() {
  return (
    <section className="mx-auto mt-40 max-w-7xl px-6 text-center">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-12 text-white shadow-2xl dark:from-zinc-900 dark:via-zinc-800 dark:to-black">
        
        {/* Fundos decorativos */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />

        <div className="relative z-10">
          <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1.5 text-sm font-medium text-white shadow-lg">
            Pronto para começar?
          </span>

          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Vamos transformar sua{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ideia em realidade
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-zinc-300">
            Entre em contato para uma consultoria gratuita e descubra como podemos
            levar seu projeto para o próximo nível.
          </p>

          {/* CTA → CONTACT */}
          <div className="mt-10 flex justify-center">
            <GradientButton
              href="/contact"
              colorFrom="cyan-500"
              colorTo="blue-500"
              rounded="full"
          >
           Conversar com um especialista
          </GradientButton>
          </div>

          {/* Benefícios */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Resposta em até 24h
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Orçamento sem compromisso
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Especialistas qualificados
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}