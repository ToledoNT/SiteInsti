import { Lightbulb, Target, Zap } from "lucide-react";

export function HeroProcess() {
  return (
    <section className="mx-auto max-w-5xl px-6 text-center">
      {/* Badge decorativo */}
      <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 px-5 py-2.5 text-sm font-medium text-cyan-700 dark:from-cyan-900/30 dark:to-blue-900/30 dark:text-cyan-300">
        <Zap className="h-4 w-4" />
        <span>Metodologia comprovada</span>
      </div>

      {/* Título com gradiente */}
      <h1 className="mt-8 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
        Como transformamos{' '}
        <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
          ideias em resultados
        </span>
      </h1>

      {/* Descrição aprimorada */}
      <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
        Combinamos soluções prontas com desenvolvimento personalizado. 
        Cada projeto inicia com uma análise profunda para escolher o melhor caminho: 
        adaptar uma solução existente ou criar algo exclusivo para suas necessidades.
      </p>

      {/* Elementos visuais de destaque */}
      <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-indigo-100 to-cyan-100 p-3 dark:from-indigo-900/30 dark:to-cyan-900/30">
            <Lightbulb className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Análise Estratégica</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Entendemos seu negócio a fundo</p>
          </div>
        </div>

        <div className="hidden h-8 w-px bg-zinc-300 dark:bg-zinc-700 sm:block" />

        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 p-3 dark:from-emerald-900/30 dark:to-green-900/30">
            <Target className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Solução Ideal</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Customizada ou pronta</p>
          </div>
        </div>
      </div>

      {/* Linha decorativa */}
      <div className="mx-auto mt-12 h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
    </section>
  );
}