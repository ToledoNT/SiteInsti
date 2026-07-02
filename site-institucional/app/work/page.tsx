import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroProcess } from "../components/work/HeroProcess";
import { ProcessSteps } from "../components/work/ProcessSteps";
import { CTAProcess } from "../components/work/CTAprocess";

export default function ComoTrabalhamos() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-blue-50/30 pt-32 space-y-16 dark:from-blue-950 dark:via-zinc-900 dark:to-blue-950/50">
        
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          
          <div className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-3xl dark:from-blue-500/30 dark:to-cyan-400/30" />
          
          <div className="absolute -left-20 bottom-1/3 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 blur-3xl dark:from-indigo-500/30 dark:to-blue-500/30" />
          
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-600/10 blur-3xl dark:from-cyan-400/20 dark:to-blue-600/20" />

          <div
            className="absolute inset-0 opacity-30 dark:opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <section>
          <HeroProcess />
        </section>

        <section>
          <ProcessSteps />
        </section>

        <section className="pb-16">
          <CTAProcess />
        </section>

        <Footer />
      </main>
    </>
  );
}