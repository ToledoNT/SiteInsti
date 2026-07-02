import { 
  Users, 
  Target, 
  TrendingUp, 
  Bot, 
  BarChart3,
  Code
} from "lucide-react";
import { GradientButton } from "../ui/Button";

export function Services() {
  const services = [
    {
      icon: Users,
      title: "Geração de Leads",
      description: "Encontramos pessoas realmente interessadas no seu serviço e conectamos sua empresa a novos clientes.",
      color: "blue"
    },
    {
      icon: Target,
      title: "Captação de Clientes",
      description: "Criamos estratégias para atrair pessoas que precisam exatamente do que sua empresa oferece.",
      color: "cyan"
    },
    {
      icon: TrendingUp,
      title: "Tráfego Pago",
      description: "Criamos e gerenciamos campanhas no Facebook, Instagram e Google para aumentar sua visibilidade e gerar novos clientes.",
      color: "indigo"
    },
    {
      icon: Code,
      title: "Desenvolvimento de Sistemas",
      description: "Criamos soluções personalizadas, desde sites e landing pages até sistemas completos para otimizar seus processos.",
      color: "violet"
    },
    {
      icon: BarChart3,
      title: "Estratégias Digitais",
      description: "Planejamento personalizado para fortalecer sua presença digital e aumentar suas vendas.",
      color: "purple"
    },
    {
      icon: Bot,
      title: "Automações e IA",
      description: "Implementamos soluções que automatizam processos, economizam tempo e tornam sua empresa mais eficiente.",
      color: "emerald"
    }
  ];

  const colorMap = {
    blue: {
      gradient: "from-blue-500 to-blue-600",
      bg: "bg-blue-50 dark:bg-blue-950/20",
      border: "hover:border-blue-300 dark:hover:border-blue-700",
      text: "text-blue-600 dark:text-blue-400"
    },
    cyan: {
      gradient: "from-cyan-500 to-cyan-600",
      bg: "bg-cyan-50 dark:bg-cyan-950/20",
      border: "hover:border-cyan-300 dark:hover:border-cyan-700",
      text: "text-cyan-600 dark:text-cyan-400"
    },
    indigo: {
      gradient: "from-indigo-500 to-indigo-600",
      bg: "bg-indigo-50 dark:bg-indigo-950/20",
      border: "hover:border-indigo-300 dark:hover:border-indigo-700",
      text: "text-indigo-600 dark:text-indigo-400"
    },
    violet: {
      gradient: "from-violet-500 to-violet-600",
      bg: "bg-violet-50 dark:bg-violet-950/20",
      border: "hover:border-violet-300 dark:hover:border-violet-700",
      text: "text-violet-600 dark:text-violet-400"
    },
    purple: {
      gradient: "from-purple-500 to-purple-600",
      bg: "bg-purple-50 dark:bg-purple-950/20",
      border: "hover:border-purple-300 dark:hover:border-purple-700",
      text: "text-purple-600 dark:text-purple-400"
    },
    emerald: {
      gradient: "from-emerald-500 to-emerald-600",
      bg: "bg-emerald-50 dark:bg-emerald-950/20",
      border: "hover:border-emerald-300 dark:hover:border-emerald-700",
      text: "text-emerald-600 dark:text-emerald-400"
    }
  };

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      {/* Título */}
      <div className="mb-16 text-center">
        <span className="mb-3 inline-block rounded-full border border-blue-200/50 bg-blue-50/50 px-4 py-1.5 text-xs font-medium text-blue-600 backdrop-blur-sm dark:border-blue-800/30 dark:bg-blue-950/30 dark:text-blue-400">
          NOSSOS SERVIÇOS
        </span>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-4xl lg:text-5xl">
          Estratégias digitais que{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            geram resultados
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          A GC Connect oferece soluções personalizadas para ajudar empresas a crescerem de forma consistente.
        </p>
      </div>

      {/* Grid de serviços */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          const colors = colorMap[service.color as keyof typeof colorMap];

          return (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-blue-100/50 bg-white/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-blue-900/30 dark:bg-zinc-900/80 ${colors.border}`}
            >
              {/* Ícone com fundo */}
              <div className={`mb-5 inline-flex rounded-2xl ${colors.bg} p-3.5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                <Icon className={`h-7 w-7 bg-gradient-to-br ${colors.gradient} bg-clip-text text-transparent`} />
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                {service.title}
              </h3>

              {/* Descrição */}
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>

              {/* Linha decorativa no hover */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${colors.gradient} transition-all duration-500 group-hover:w-full`} />
            </div>
          );
        })}
      </div>

      {/* CTA final */}
      <div className="mt-20 text-center">
        <div className="mx-auto max-w-2xl rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 p-8 backdrop-blur-sm dark:border-blue-800/30 dark:from-blue-950/30 dark:to-cyan-950/30">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Pronto para transformar sua presença digital?
          </h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Vamos criar estratégias que geram resultados reais para seu negócio.
          </p>
          <div className="mt-6">
            <GradientButton
              href="/contact"
              colorFrom="blue-600"
              colorTo="cyan-500"
              rounded="full"
            >
              Quero resultados agora
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}