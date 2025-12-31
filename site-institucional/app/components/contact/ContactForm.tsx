"use client";

import { useState } from "react";
import { Send, Mail, User, Phone, MessageSquare, CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulando envio
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative">
      {/* Elementos decorativos */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl" />

      <form
        onSubmit={handleSubmit}
        className="relative space-y-8 rounded-3xl border border-zinc-200 bg-white/80 p-10 shadow-xl backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80"
      >
        {/* Header aprimorado */}
        <div className="space-y-4">
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 p-3">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                Fale conosco
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Vamos transformar sua ideia em realidade
              </p>
            </div>
          </div>

          {success && (
            <div className="rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 p-4 dark:from-emerald-900/20 dark:to-green-900/20">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <p className="font-medium text-emerald-700 dark:text-emerald-300">
                    Mensagem enviada com sucesso!
                  </p>
                  <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80">
                    Entraremos em contato em até 24 horas.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Grid de inputs */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Nome */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              <User className="h-4 w-4" />
              Nome completo
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Como você se chama?"
              className="w-full rounded-xl border border-zinc-200 bg-white/50 px-5 py-3.5 text-zinc-900 placeholder-zinc-400 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-indigo-400"
            />
          </div>

          {/* Email */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              <Mail className="h-4 w-4" />
              Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
              className="w-full rounded-xl border border-zinc-200 bg-white/50 px-5 py-3.5 text-zinc-900 placeholder-zinc-400 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-indigo-400"
            />
          </div>

          {/* Telefone */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              <Phone className="h-4 w-4" />
              Telefone
            </label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(11) 99999-9999"
              className="w-full rounded-xl border border-zinc-200 bg-white/50 px-5 py-3.5 text-zinc-900 placeholder-zinc-400 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-indigo-400"
            />
          </div>

          {/* Assunto (novo campo) */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              <MessageSquare className="h-4 w-4" />
              Tipo de projeto
            </label>
            <select
              className="w-full rounded-xl border border-zinc-200 bg-white/50 px-5 py-3.5 text-zinc-900 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-50 dark:focus:border-indigo-400"
              defaultValue=""
            >
              <option value="" disabled>Selecione uma opção</option>
              <option value="web">Site / Sistema Web</option>
              <option value="automation">Automação de Processos</option>
              <option value="consulting">Consultoria</option>
              <option value="other">Outro</option>
            </select>
          </div>
        </div>

        {/* Mensagem */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <MessageSquare className="h-4 w-4" />
            Conte sobre seu projeto
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Descreva sua ideia, objetivos, prazos e qualquer informação relevante..."
            className="w-full resize-none rounded-xl border border-zinc-200 bg-white/50 px-5 py-3.5 text-zinc-900 placeholder-zinc-400 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-indigo-400"
          />
        </div>

        {/* Botão com efeitos */}
        <button
          type="submit"
          disabled={loading}
          className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <div className="relative z-10 flex items-center justify-center gap-3">
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Enviando mensagem...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                <span>Enviar mensagem</span>
              </>
            )}
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-700 to-cyan-700 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </button>

        {/* Informações adicionais */}
        <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
          <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            <span className="font-semibold text-zinc-900 dark:text-zinc-300">Privacidade garantida:</span> 
            {" "}Seus dados estão seguros. Responderemos em até 24 horas úteis.
          </p>
        </div>
      </form>
    </div>
  );
}