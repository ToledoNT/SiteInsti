export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-4 dark:border-zinc-800">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          <span className="font-semibold text-zinc-900 dark:text-white">
            GCConnect
          </span>{" "}
          • © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}