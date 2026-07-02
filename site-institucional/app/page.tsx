import { CTA } from "./components/home/CTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/home/Hero";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/home/Services";
import { Differentials } from "./components/home/Diferentials";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50/50 pt-4 dark:from-blue-950 dark:via-zinc-900 dark:to-blue-950/80">
        
        {/* Efeito de fundo com mais azul */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* Gradiente principal azul */}
          <div className="absolute left-1/2 top-[-10%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-400/20 blur-3xl dark:from-blue-500/30 dark:to-cyan-400/30" />
          
          {/* Bolha azul secundária */}
          <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-3xl dark:from-blue-400/20 dark:to-indigo-400/20" />
          
          {/* Bolha azul terciária */}
          <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-600/10 blur-3xl dark:from-cyan-300/20 dark:to-blue-500/20" />
          
          {/* Grid sutil de fundo */}
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Linha decorativa superior */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

        <Hero />
        <Services />
        <Differentials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}