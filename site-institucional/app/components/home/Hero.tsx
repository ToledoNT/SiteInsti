import Link from "next/link";
import { ArrowRight, Sparkles, Rocket, ChevronDown } from "lucide-react";
import { GradientButton } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-20 sm:pt-32">
      {/* Fundos decorativos */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />

      <div className="relative z-10">
        {/* Título */}
        <h1 className="max-w-5xl text-5xl font-bold leading-[1.1] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl lg:text-8xl">
          Do{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            conceito
          </span>{" "}
          à{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
            realidade
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 max-w-3xl text-2xl leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-3xl">
          Construímos{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            soluções digitais escaláveis
          </span>{" "}
          que transformam ideias em negócios rentáveis.
        </p>

        {/* Diferenciais */}
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200/50 bg-white/60 p-6 backdrop-blur dark:border-zinc-800/50 dark:bg-zinc-900/60">
            <Rocket className="mb-4 h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              MVP em 30 dias
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Produto mínimo viável rápido para validar seu negócio.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/50 bg-white/60 p-6 backdrop-blur dark:border-zinc-800/50 dark:bg-zinc-900/60">
            <Sparkles className="mb-4 h-8 w-8 text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Tecnologia Moderna
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Next.js, React, TypeScript, Tailwind e stack atualizada.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/50 bg-white/60 p-6 backdrop-blur dark:border-zinc-800/50 dark:bg-zinc-900/60">
            <div className="mb-4 h-8 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Alta Performance
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              SEO, velocidade e conversão otimizados desde o início.
            </p>
          </div>
        </div>

        {/* CTA → CONTACT usando GradientButton */}
        <div className="mt-14 flex flex-col sm:flex-row sm:items-center">
          <GradientButton
            href="/contact"
            colorFrom="indigo-600"
            colorTo="cyan-600"
            rounded="full"
          >
            Solicitar orçamento sem compromisso
          </GradientButton>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute -bottom-10 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block">
        <ChevronDown className="h-6 w-6 text-zinc-400" />
      </div>
    </section>
  );
}