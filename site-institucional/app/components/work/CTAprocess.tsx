export function CTAProcess() {
  return (
    <section className="mx-auto mt-32 max-w-5xl px-6">
      <div className="rounded-2xl border border-zinc-200 bg-white p-10 text-center dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Vamos conversar?
        </h2>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Cada projeto começa com uma boa conversa. Conte sua ideia e vamos
          desenhar a solução juntos.
        </p>

        <a
          href="#contato"
          className="mt-8 inline-block rounded-xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Entrar em contato
        </a>
      </div>
    </section>
  );
}
