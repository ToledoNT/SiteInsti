import { Rocket, Sparkles, ChevronDown, Target, TrendingUp, Users } from "lucide-react";
import { GradientButton } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-20 sm:pt-32">
      {/* Fundos com tons de azul - GC Connect */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/30" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-400/30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/20" />

      <div className="relative z-10">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 px-4 py-2 text-sm text-blue-700 backdrop-blur-sm dark:border-blue-800/30 dark:bg-blue-950/30 dark:text-blue-300">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          Conectando empresas ao futuro
        </div>

        {/* Título */}
        <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            GC Connect
          </span>
          <br />
          <span className="text-4xl sm:text-5xl lg:text-6xl">
            Conectamos empresas a novos clientes.
          </span>
        </h1>

        {/* Descrição */}
        <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300 sm:text-xl">
          A GC Connect nasceu para transformar estratégias digitais em oportunidades reais de crescimento para empresas.
        </p>

        <p className="mt-4 max-w-2xl text-base text-zinc-500 dark:text-zinc-400">
          Utilizamos tecnologia, análise e criatividade para conectar empresas aos clientes certos, gerando resultados mensuráveis e crescimento contínuo.
        </p>

        {/* Objetivo em destaque */}
        <div className="mt-8 rounded-2xl border border-blue-200/50 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 p-6 backdrop-blur-sm dark:border-blue-800/30 dark:from-blue-950/30 dark:to-cyan-950/30">
          <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Nosso objetivo é simples:
          </p>
          <p className="mt-2 text-xl font-bold text-blue-600 dark:text-blue-400">
            Gerar mais clientes, mais vendas e mais resultados para o seu negócio.
          </p>
        </div>

        {/* Cards de diferenciais */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="group rounded-2xl border border-blue-100/50 bg-white/60 p-6 backdrop-blur-sm transition hover:border-blue-300 hover:shadow-lg dark:border-blue-900/30 dark:bg-zinc-900/60 dark:hover:border-blue-700/50">
            <Target className="mb-3 h-7 w-7 text-blue-600 transition group-hover:scale-110 dark:text-blue-400" />
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Estratégia Digital</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Transformamos estratégias em oportunidades reais de crescimento.
            </p>
          </div>

          <div className="group rounded-2xl border border-blue-100/50 bg-white/60 p-6 backdrop-blur-sm transition hover:border-blue-300 hover:shadow-lg dark:border-blue-900/30 dark:bg-zinc-900/60 dark:hover:border-blue-700/50">
            <Users className="mb-3 h-7 w-7 text-cyan-600 transition group-hover:scale-110 dark:text-cyan-400" />
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Conexão com Clientes</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Conectamos empresas aos clientes certos de forma inteligente.
            </p>
          </div>

          <div className="group rounded-2xl border border-blue-100/50 bg-white/60 p-6 backdrop-blur-sm transition hover:border-blue-300 hover:shadow-lg dark:border-blue-900/30 dark:bg-zinc-900/60 dark:hover:border-blue-700/50">
            <TrendingUp className="mb-3 h-7 w-7 text-indigo-600 transition group-hover:scale-110 dark:text-indigo-400" />
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Resultados Mensuráveis</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Resultados reais, mensuráveis e crescimento contínuo.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap gap-4">
          <GradientButton
            href="/contact"
            colorFrom="blue-600"
            colorTo="cyan-500"
            rounded="full"
          >
            Conectar agora
          </GradientButton>
          <GradientButton
            href="/work"
            colorFrom="transparent"
            colorTo="transparent"
            rounded="full"
            className="border-2 border-blue-600 bg-transparent text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/30"
          >
            Como trabalhamos
          </GradientButton>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute -bottom-10 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block">
        <ChevronDown className="h-6 w-6 text-blue-400 dark:text-blue-500" />
      </div>
    </section>
  );
}