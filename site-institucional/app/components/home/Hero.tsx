export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 text-center sm:text-left">
      {/* Badge */}
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-4 py-1 text-sm text-zinc-600 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-400">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Software • Sistemas • Automação
      </span>

      {/* Headline */}
      <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
        Construímos{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
          soluções digitais
        </span>{" "}
        que escalam negócios
      </h1>

      {/* Descrição */}
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        Desenvolvemos sistemas, plataformas web e automações sob medida, focadas
        em performance, segurança e crescimento sustentável.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-8 py-4 font-medium text-white transition hover:scale-[1.02] hover:shadow-lg">
          Solicitar orçamento
        </button>

        <button className="rounded-full border border-zinc-300 px-8 py-4 font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900">
          Ver serviços
        </button>
      </div>
    </section>
  );
}
