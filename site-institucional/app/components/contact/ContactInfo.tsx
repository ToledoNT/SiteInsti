export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Vamos conversar
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400">
          Preferimos entender o contexto antes de qualquer proposta. Fique à
          vontade para explicar sua ideia, mesmo que ainda não esteja totalmente
          definida.
        </p>
      </div>

      {/* Highlights */}
      <ul className="space-y-4">
        <li className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-sm dark:bg-zinc-800">
            📍
          </span>
          <span className="text-sm text-zinc-700 dark:text-zinc-300">
            Atendimento remoto
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-sm dark:bg-zinc-800">
            💬
          </span>
          <span className="text-sm text-zinc-700 dark:text-zinc-300">
            Resposta rápida
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-sm dark:bg-zinc-800">
            🤝
          </span>
          <span className="text-sm text-zinc-700 dark:text-zinc-300">
            Abordagem consultiva
          </span>
        </li>
      </ul>

      {/* Footer note */}
      <p className="text-sm text-zinc-500 dark:text-zinc-500">
        O primeiro contato não gera compromisso. Serve apenas para entendermos
        se faz sentido seguir com o projeto.
      </p>
    </div>
  );
}
