"use client";

import { useState } from "react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 1500);
      }}
      className="
        space-y-8 rounded-2xl border border-zinc-200 bg-white p-10
        shadow-sm
        dark:border-zinc-800 dark:bg-zinc-900
      "
    >
      {/* Header */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Fale com a gente
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Responderemos o mais rápido possível.
        </p>
      </div>

      {/* Nome */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Nome
        </label>
        <input
          required
          placeholder="Seu nome"
          className="
            w-full rounded-xl border border-zinc-200 bg-transparent
            px-4 py-3 text-sm
            outline-none transition
            focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10
            dark:border-zinc-700 dark:focus:border-zinc-50 dark:focus:ring-zinc-50/10
          "
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Email
        </label>
        <input
          type="email"
          required
          placeholder="seu@email.com"
          className="
            w-full rounded-xl border border-zinc-200 bg-transparent
            px-4 py-3 text-sm
            outline-none transition
            focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10
            dark:border-zinc-700 dark:focus:border-zinc-50 dark:focus:ring-zinc-50/10
          "
        />
      </div>

      {/* Telefone */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Telefone <span className="text-zinc-400">(opcional)</span>
        </label>
        <input
          type="tel"
          placeholder="(11) 99999-9999"
          className="
            w-full rounded-xl border border-zinc-200 bg-transparent
            px-4 py-3 text-sm
            outline-none transition
            focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10
            dark:border-zinc-700 dark:focus:border-zinc-50 dark:focus:ring-zinc-50/10
          "
        />
      </div>

      {/* Mensagem */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Mensagem
        </label>
        <textarea
          required
          rows={4}
          placeholder="Conte um pouco sobre sua ideia ou desafio"
          className="
            w-full resize-none rounded-xl border border-zinc-200 bg-transparent
            px-4 py-3 text-sm
            outline-none transition
            focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10
            dark:border-zinc-700 dark:focus:border-zinc-50 dark:focus:ring-zinc-50/10
          "
        />
      </div>

      {/* Button */}
      <button
        disabled={loading}
        className="
          w-full rounded-xl bg-zinc-900 py-3 text-sm font-medium text-white
          transition
          hover:bg-zinc-800
          disabled:cursor-not-allowed disabled:opacity-60
          dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200
        "
      >
        {loading ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  );
}