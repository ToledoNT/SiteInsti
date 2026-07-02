import { Search, Target, Code, TrendingUp, ArrowRight, Users, CheckCircle2, Sparkles, Rocket, Zap, Shield } from "lucide-react";
import { GradientButton } from "../ui/Button";

// Processo de Captação de Clientes
const clientSteps = [
  {
    number: "01",
    title: "Cliente entra em contato",
    description: "Através dos nossos anúncios e campanhas digitais, o cliente chega até a GC Connect.",
    icon: Search,
    color: "blue"
  },
  {
    number: "02",
    title: "Fazemos a qualificação",
    description: "Coletamos as principais informações do cliente para entender sua necessidade e perfil.",
    icon: Target,
    color: "cyan"
  },
  {
    number: "03",
    title: "Encaminhamos ao parceiro",
    description: "Selecionamos a empresa parceira mais adequada para realizar o atendimento.",
    icon: Users,
    color: "violet"
  },
  {
    number: "04",
    title: "A empresa atende",
    description: "O parceiro entra em contato com o cliente e realiza o orçamento.",
    icon: TrendingUp,
    color: "emerald"
  }
];

// Processo de Desenvolvimento de Sistemas
const devSteps = [
  {
    number: "01",
    title: "Entendimento",
    description: "Analisamos o cenário, os desafios e os objetivos para compreender o problema real.",
    icon: Search,
    color: "blue"
  },
  {
    number: "02",
    title: "Planejamento",
    description: "Definimos a melhor abordagem, tecnologias e escopo com foco em eficiência.",
    icon: Target,
    color: "cyan"
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Construímos a solução com qualidade, transparência e acompanhamento constante.",
    icon: Code,
    color: "violet"
  },
  {
    number: "04",
    title: "Evolução",
    description: "Após a entrega, seguimos ajustando e evoluindo conforme novas demandas surgem.",
    icon: Rocket,
    color: "emerald"
  }
];

const colorMap = {
  blue: {
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-50 dark:bg-blue-950/20",
    border: "hover:border-blue-300 dark:hover:border-blue-700",
    text: "text-blue-600 dark:text-blue-400",
    shadow: "shadow-blue-500/10",
    bar: "from-blue-500 to-cyan-500"
  },
  cyan: {
    gradient: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50 dark:bg-cyan-950/20",
    border: "hover:border-cyan-300 dark:hover:border-cyan-700",
    text: "text-cyan-600 dark:text-cyan-400",
    shadow: "shadow-cyan-500/10",
    bar: "from-cyan-500 to-blue-500"
  },
  violet: {
    gradient: "from-violet-500 to-violet-600",
    bg: "bg-violet-50 dark:bg-violet-950/20",
    border: "hover:border-violet-300 dark:hover:border-violet-700",
    text: "text-violet-600 dark:text-violet-400",
    shadow: "shadow-violet-500/10",
    bar: "from-violet-500 to-indigo-500"
  },
  emerald: {
    gradient: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    border: "hover:border-emerald-300 dark:hover:border-emerald-700",
    text: "text-emerald-600 dark:text-emerald-400",
    shadow: "shadow-emerald-500/10",
    bar: "from-emerald-500 to-teal-500"
  }
};

function StepCard({ step, index, total }: { step: any; index: number; total: number }) {
  const Icon = step.icon;
  const colors = colorMap[step.color as keyof typeof colorMap];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-blue-100/50 bg-white/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-blue-900/30 dark:bg-zinc-900/80 ${colors.border}`}
    >
      {/* Número de fundo */}
      <div className="absolute -right-2 -top-2 text-7xl font-bold text-blue-100/30 transition-opacity duration-300 group-hover:opacity-0 dark:text-blue-900/30">
        {step.number}
      </div>

      <div className="relative z-10">
        {/* Ícone com gradiente */}
        <div className={`mb-4 inline-flex rounded-2xl ${colors.bg} p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
          <Icon className={`h-6 w-6 bg-gradient-to-br ${colors.gradient} bg-clip-text text-transparent`} />
        </div>

        {/* Título com número */}
        <div className="flex items-center gap-2">
          <span className={`text-sm font-bold ${colors.text}`}>
            {step.number}
          </span>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
            {step.title}
          </h3>
        </div>

        <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {step.description}
        </p>

        {/* Seta de conexão (mobile) */}
        {index < total - 1 && (
          <div className="mt-4 flex justify-center md:hidden">
            <ArrowRight className={`h-5 w-5 ${colors.text} animate-pulse`} />
          </div>
        )}
      </div>

      {/* Linha decorativa inferior */}
      <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${colors.bar} transition-all duration-500 group-hover:w-full`} />
    </div>
  );
}

export function ProcessSteps() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      {/* Título */}
      <div className="mb-16 text-center">
        <span className="mb-3 inline-block rounded-full border border-blue-200/50 bg-blue-50/50 px-4 py-1.5 text-xs font-medium text-blue-600 backdrop-blur-sm dark:border-blue-800/30 dark:bg-blue-950/30 dark:text-blue-400">
          COMO FUNCIONA
        </span>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-4xl lg:text-5xl">
          Processos simples e{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            eficientes
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Da captação de clientes ao desenvolvimento de sistemas, temos um processo para cada necessidade.
        </p>
      </div>

      {/* Seção 1: Captação de Clientes */}
      <div className="mb-20">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-2.5">
            <Users className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Captação de Clientes
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Conectamos sua empresa a novos clientes
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {clientSteps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} total={clientSteps.length} />
          ))}
        </div>

        {/* Conector entre passos (desktop) */}
        <div className="relative hidden md:block">
          <div className="absolute left-[12.5%] right-[12.5%] top-0 h-0.5 -translate-y-1/2 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500" />
        </div>

        {/* Rodapê - Todos ganham */}
        <div className="mt-8 rounded-2xl border border-blue-100/50 bg-white/50 p-6 text-center backdrop-blur-sm dark:border-blue-900/30 dark:bg-zinc-900/50">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold text-blue-600 dark:text-blue-400">Cliente</span>
                <br />
                Encontra uma empresa confiável
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">Empresa</span>
                <br />
                Recebe uma oportunidade real
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold text-violet-600 dark:text-violet-400">GC Connect</span>
                <br />
                Acompanha todo o processo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção 2: Desenvolvimento de Sistemas */}
      <div className="mb-20">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 p-2.5">
            <Code className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Desenvolvimento de Sistemas
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Soluções personalizadas para seu negócio
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {devSteps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} total={devSteps.length} />
          ))}
        </div>

        {/* Conector entre passos (desktop) */}
        <div className="relative hidden md:block">
          <div className="absolute left-[12.5%] right-[12.5%] top-0 h-0.5 -translate-y-1/2 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500" />
        </div>

        {/* Rodapé - Metodologia */}
        <div className="mt-8 rounded-2xl border border-blue-100/50 bg-white/50 p-6 text-center backdrop-blur-sm dark:border-blue-900/30 dark:bg-zinc-900/50">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-500" />
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Metodologia Ágil</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-500" />
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Qualidade Garantida</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Transparência Total</span>
            </div>
          </div>
        </div>
      </div>

      {/* Benefícios para Empresas */}
      <div className="mt-8 overflow-hidden rounded-3xl border border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 p-8 backdrop-blur-sm dark:border-blue-800/30 dark:from-blue-950/30 dark:to-cyan-950/30">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Lado esquerdo */}
          <div>
            <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Para Empresas
            </h3>
            <p className="mt-3 text-lg font-semibold text-blue-600 dark:text-blue-400">
              Quer receber mais clientes?
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Se sua empresa busca aumentar as vendas sem precisar investir tempo procurando clientes diariamente, a GC Connect pode ajudar.
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Receba contatos qualificados de pessoas realmente interessadas nos seus serviços.
            </p>
          </div>

          {/* Lado direito - Benefícios */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-zinc-900 dark:text-zinc-50">
              <Sparkles className="h-5 w-5 text-blue-500" />
              Benefícios
            </h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Clientes qualificados",
                "Atendimento personalizado",
                "Mais oportunidades de negócio",
                "Crescimento previsível",
                "Parceria de longo prazo",
                "Resultados mensuráveis"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  <span className="text-zinc-700 dark:text-zinc-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <GradientButton
            href="/contact"
            colorFrom="blue-600"
            colorTo="cyan-500"
            rounded="full"
          >
            Quero receber clientes qualificados
          </GradientButton>
        </div>
      </div>
    </section>
  );
}