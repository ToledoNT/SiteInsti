import Link from "next/link";

export function CTA() {
  return (
    <section className="mx-auto mt-40 max-w-7xl px-6 text-center">
      <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
        Vamos tirar sua ideia do papel?
      </h2>

      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Entre em contato e fale diretamente com um especialista.
      </p>

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-zinc-900 px-10 py-4 text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black"
      >
        Entrar em contato
      </Link>
    </section>
  );
}