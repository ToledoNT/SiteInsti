"use client";

export function ContactWhatsApp() {
  return (
    <div
      className="
        relative flex flex-col justify-between
        rounded-2xl border border-zinc-200 bg-white p-10
        shadow-sm
        dark:border-zinc-800 dark:bg-zinc-900
      "
    >
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-20%] top-[-20%] h-64 w-64 rounded-full bg-gradient-to-br from-emerald-400/20 to-green-500/20 blur-3xl dark:from-emerald-400/10 dark:to-green-500/10" />
      </div>

      {/* Content */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Fale direto com a gente no WhatsApp
        </h3>

        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Preferimos uma conversa direta e sem burocracia.
          Conte sua ideia, mesmo que ainda esteja em fase inicial — ajudamos a
          estruturar o caminho certo.
        </p>

        <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
          <li>⚡ Resposta rápida</li>
          <li>🤝 Abordagem consultiva</li>
          <li>🧠 Planejamento antes da execução</li>
        </ul>
      </div>

      {/* Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-10 inline-flex items-center justify-center gap-3
          rounded-xl bg-emerald-500 px-6 py-4
          text-base font-semibold text-white
          transition
          hover:bg-emerald-600
          focus:outline-none focus:ring-2 focus:ring-emerald-500/40
        "
      >
        <span className="text-xl">💬</span>
        Iniciar conversa no WhatsApp
      </a>
    </div>
  );
}
