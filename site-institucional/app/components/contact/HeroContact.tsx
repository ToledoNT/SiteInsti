import { MessageSquare, Sparkles, Target } from "lucide-react";

export function HeroContact() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24 text-center">
      {/* Elementos decorativos de fundo */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl" />
      
      <div className="relative z-10">
        {/* Badge */}
        <div className="mb-8 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-blue-200/50 bg-white/80 px-6 py-3 text-sm font-medium text-zinc-700 backdrop-blur-xl dark:border-blue-800/30 dark:bg-zinc-900/80 dark:text-zinc-300">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-blue-500" />
            <span className="font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Atendimento via WhatsApp
            </span>
          </div>
          <div className="hidden h-4 w-px bg-zinc-300 dark:bg-zinc-700 sm:block" />
          <span>Resposta rápida</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl">
          Fale conosco{' '}
          <span className="whitespace-nowrap">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                agora mesmo
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl" />
            </span>
          </span>
        </h1>

        <div className="mx-auto mt-8 max-w-3xl">
          <p className="text-xl leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-2xl">
            Tire suas dúvidas, solicite um orçamento ou agende uma reunião. 
            Estamos prontos para ajudar você no que precisar.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="group rounded-2xl border border-blue-100/50 bg-white/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-blue-900/30 dark:bg-zinc-900/50 dark:hover:border-blue-700/50">
            <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-3 transition group-hover:scale-110">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Atendimento Rápido
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Respostas em poucos minutos, sem burocracia
            </p>
          </div>

          <div className="group rounded-2xl border border-blue-100/50 bg-white/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-blue-900/30 dark:bg-zinc-900/50 dark:hover:border-blue-700/50">
            <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 p-3 transition group-hover:scale-110">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Conversa Direta
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Fale diretamente com nossos especialistas
            </p>
          </div>

          <div className="group rounded-2xl border border-blue-100/50 bg-white/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-blue-900/30 dark:bg-zinc-900/50 dark:hover:border-blue-700/50">
            <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 transition group-hover:scale-110">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Sem Compromisso
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              A primeira conversa é gratuita e sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}