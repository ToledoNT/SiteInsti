import { CTA } from "./components/home/CTA";
import { Differentials } from "./components/home/Diferentials";
import { Footer } from "./components/Footer";
import { Hero } from "./components/home/Hero";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/home/Services";

export default function Home() {
  return (
    <>
      <Navbar />

<main className="relative overflow-hidden bg-zinc-50 pt-32 dark:bg-black">
  {/* background decorativo */}
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div className="absolute left-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-3xl dark:from-indigo-500/10 dark:to-cyan-500/10" />
  </div>

  <Hero />
  <Services />
  <Differentials />
  <CTA />
  <Footer />
</main>

    </>
  );
}