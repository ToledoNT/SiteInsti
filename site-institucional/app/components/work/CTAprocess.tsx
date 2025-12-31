import Link from "next/link";
import {
  MessageSquare,
  Calendar,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
  Clock,
} from "lucide-react";

export function CTAProcess() {
  return (
    <section className="mx-auto mt-32 max-w-6xl px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-black p-12 text-white shadow-2xl">
        {/* Fundos decorativos */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl" />

        {/* Partículas */}
        <Sparkles className="absolute right-10 top-10 h-8 w-8 text-cyan-400/30" />
        <Sparkles className="absolute bottom-10 left-10 h-6 w-6 text-indigo-400/30" />

        <div className="relative z-10 flex flex-col gap-12 lg:flex-row">
          {/* Conteúdo principal */}
          <div className="lg:w-2/3">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-5 py-2">
              <MessageSquare className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-200">
                Primeiro passo
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Pronto para transformar sua{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ideia em realidade
              </span>
              ?
            </h2>

            <p className="mt-6 text-xl text-zinc-300">
              Cada grande projeto começa com uma conversa. Conte sua visão e vamos
              desenhar juntos a solução ideal para seu negócio.
            </p>

            {/* Etapas do processo */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <Step
                number="1"
                title="Conversa Estratégica"
                text="Entendemos suas necessidades e objetivos"
                gradient="from-cyan-500 to-blue-500"
              />
              <Step
                number="2"
                title="Proposta Personalizada"
                text="Criamos uma solução sob medida"
                gradient="from-indigo-500 to-purple-500"
              />
              <Step
                number="3"
                title="Desenvolvimento"
                text="Transformamos a ideia em produto real"
                gradient="from-emerald-500 to-green-500"
              />
            </div>

            {/* Benefícios */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm">
              <Benefit 
                icon={CheckCircle2} 
                text="Consulta gratuita de 30min" 
                color="text-emerald-400" 
              />
              <Benefit 
                icon={Clock} 
                text="Resposta em até 4h" 
                color="text-amber-400" 
              />
              <Benefit 
                icon={Users} 
                text="Atendimento personalizado" 
                color="text-cyan-400" 
              />
            </div>
          </div>

          {/* Card lateral com CTA */}
          <div className="lg:w-1/3">
            <div className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-black/80 p-8 backdrop-blur">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-2">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Agende sua consulta</h3>
              </div>

              <p className="mb-8 text-sm text-zinc-400">
                Reserve um horário para conversar com nossos especialistas.
                Sem compromisso.
              </p>

              {/* Espaço flexível para empurrar o botão para baixo */}
              <div className="flex-grow"></div>

              {/* BOTÃO AGENDAR - Agora posicionado mais abaixo */}
              <div className="mt-auto pt-8">
                <Link
                  href="/contact"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95"
                >
                  <span>Agendar agora</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="mt-12 border-t border-zinc-800 pt-8 text-sm text-zinc-500">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex gap-4">
              <Dot text="Sem custo inicial" />
              <Dot text="Proposta detalhada" />
              <Dot text="Sem compromisso" />
            </div>
            <div className="flex gap-4">
              <span>Atendimento personalizado</span>
              <span>Projetos sob medida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Componentes auxiliares */

function Step({
  number,
  title,
  text,
  gradient,
}: {
  number: string;
  title: string;
  text: string;
  gradient: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${gradient}`}
      >
        <span className="text-lg font-bold">{number}</span>
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-zinc-400">{text}</p>
    </div>
  );
}

function Benefit({
  icon: Icon,
  text,
  color,
}: {
  icon: any;
  text: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className={`h-4 w-4 ${color}`} />
      <span className="text-zinc-300">{text}</span>
    </div>
  );
}

function Dot({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-emerald-500" />
      <span>{text}</span>
    </div>
  );
}