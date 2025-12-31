import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroProcess } from "../components/work/HeroProcess";
import { ProcessSteps } from "../components/work/ProcessSteps";
import { CTAProcess } from "../components/work/CTAprocess";

export default function ComoTrabalhamos() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-zinc-50 pt-32 dark:bg-black">
        {/* background decorativo */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-12%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/25 to-cyan-500/25 blur-3xl dark:from-indigo-500/10 dark:to-cyan-500/10" />
        </div>

        {/* Hero */}
        <section className="mb-32">
          <HeroProcess />
        </section>

        {/* Processo */}
        <section className="mb-32">
          <ProcessSteps />
        </section>

        {/* CTA */}
        <section className="pb-32">
          <CTAProcess />
        </section>

        <Footer />
      </main>
    </>
  );
}
