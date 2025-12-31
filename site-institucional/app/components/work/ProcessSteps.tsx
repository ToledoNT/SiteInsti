import { Search, Target, Code, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Entendimento",
    description: "Analisamos o cenário, os desafios e os objetivos para compreender o problema real.",
    icon: Search,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    number: "02",
    title: "Planejamento",
    description: "Definimos a melhor abordagem, tecnologias e escopo com foco em eficiência.",
    icon: Target,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Construímos a solução com qualidade, transparência e acompanhamento constante.",
    icon: Code,
    gradient: "from-emerald-500 to-green-500",
  },
  {
    number: "04",
    title: "Evolução",
    description: "Após a entrega, seguimos ajustando e evoluindo conforme novas demandas surgem.",
    icon: TrendingUp,
    gradient: "from-amber-500 to-orange-500",
  },
];

export function ProcessSteps() {
  return (
    <section className="mx-auto mt-32 max-w-7xl px-6">
      {/* Linha conectora para desktop */}
      <div className="relative hidden md:block">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500" />
        <div className="relative z-10 grid grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex justify-center">
              <div className="relative">
                {/* Ponto na linha */}
                <div className="h-4 w-4 rounded-full bg-white ring-4 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-800" />
                {/* Anel colorido */}
                <div
                  className={`absolute inset-0 -z-10 h-4 w-4 rounded-full bg-gradient-to-r ${step.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-4 md:gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="group relative rounded-3xl border border-zinc-200 bg-white/50 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              {/* Número de fundo desbotado */}
              <div className="absolute -top-4 right-6 text-[120px] font-bold text-zinc-100/50 dark:text-zinc-800/50">
                {step.number}
              </div>

              <div className="relative z-10">
                {/* Ícone com gradiente */}
                <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${step.gradient} p-3`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-50">
                  {step.title}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>

                {/* Indicador de passo (mobile) */}
                <div className="mt-6 flex items-center justify-between md:hidden">
                  <div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
                    <span>Passo {step.number}</span>
                    {index < steps.length - 1 && (
                      <>
                        <ArrowRight className="h-4 w-4" />
                        <span className="text-xs">Próximo</span>
                      </>
                    )}
                  </div>
                  <div className={`h-2 w-8 rounded-full bg-gradient-to-r ${step.gradient}`} />
                </div>
              </div>

              {/* Linha decorativa inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />
            </div>
          );
        })}
      </div>

      {/* Rodapé do processo */}
      <div className="mt-16 rounded-2xl border border-zinc-200 bg-gradient-to-r from-zinc-50 to-white p-8 text-center dark:border-zinc-800 dark:from-zinc-900/50 dark:to-zinc-900">
        <div className="mx-auto max-w-2xl">
          <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Metodologia Ágil e Transparente
          </h4>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Cada etapa do processo é acompanhada com relatórios semanais, reuniões de alinhamento 
            e total transparência no desenvolvimento.
          </p>
        </div>
      </div>
    </section>
  );
}