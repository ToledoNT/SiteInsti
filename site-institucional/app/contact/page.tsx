import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroContact } from "../components/contact/HeroContact";
import { ContactInfo } from "../components/contact/ContactInfo";
import { ContactWhatsApp } from "../components/contact/WhatsApp";

export default function Contato() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-blue-50/30 pt-32 dark:from-blue-950 dark:via-zinc-900 dark:to-blue-950/50">
        {/* Background com tons de azul - GC Connect */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/* Bolha azul principal - superior direita */}
          <div className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-3xl dark:from-blue-500/30 dark:to-cyan-400/30" />
          
          {/* Bolha azul secundária - inferior esquerda */}
          <div className="absolute -left-20 bottom-1/3 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 blur-3xl dark:from-indigo-500/30 dark:to-blue-500/30" />
          
          {/* Bolha azul terciária - centro */}
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-600/10 blur-3xl dark:from-cyan-400/20 dark:to-blue-600/20" />

          {/* Grid sutil de fundo */}
          <div 
            className="absolute inset-0 opacity-30 dark:opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Hero */}
        <section className="mb-20">
          <HeroContact />
        </section>

        {/* Conteúdo principal */}
        <section className="mb-40">
          <div className="mx-auto max-w-6xl px-6">
            {/* Introdução */}
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Converse diretamente com nossos especialistas
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                Para uma resposta mais rápida e direta, utilize o WhatsApp. 
                Nossa equipe está pronta para entender seu projeto e tirar todas as dúvidas.
              </p>
            </div>

            {/* WhatsApp em destaque */}
            <div className="mb-20">
              <ContactWhatsApp />
            </div>

            {/* Outras informações */}
            <div className="grid gap-12 md:grid-cols-2">
              <ContactInfo />
              
              <div className="rounded-3xl border border-zinc-200 bg-white/50 p-8 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                <h3 className="mb-6 text-xl font-bold text-zinc-900 dark:text-zinc-50">
                  Horário de atendimento
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Segunda a sexta, das 9h às 18h.
                </p>
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                  Fora do horário comercial, você pode enviar uma mensagem e retornaremos no próximo dia útil.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}