import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroContact } from "../components/contact/HeroContact";
import { ContactInfo } from "../components/contact/ContactInfo";
import { ContactWhatsApp } from "../components/WhatsApp";

export default function Contato() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-zinc-50 pt-32 dark:bg-black">
        {/* Background decorativo */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-12%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/25 to-cyan-500/25 blur-3xl dark:from-indigo-500/10 dark:to-cyan-500/10" />
        </div>

        {/* Hero */}
        <section className="mb-24">
          <HeroContact />
        </section>

        {/* Conteúdo */}
        <section className="mb-40">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 md:grid-cols-2">
              <ContactInfo />
              <ContactWhatsApp />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
