import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroContact } from "../components/contact/HeroContact";
import { ContactInfo } from "../components/contact/ContactInfo";
import { ContactWhatsApp } from "../components/WhatsApp";

export default function Contato() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-zinc-50 to-white pt-32 dark:from-black dark:to-zinc-950">
        {/* Background simplificado */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl" />
          <div className="absolute -left-20 bottom-1/3 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl" />
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