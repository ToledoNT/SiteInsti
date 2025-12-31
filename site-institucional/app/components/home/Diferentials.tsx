import { 
  Code2, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Clock,
  Headphones, // Alterado de TrendingUp para Headphones
  Users,
  CheckCircle2
} from "lucide-react";

const differentials = [
  {
    icon: Code2,
    title: "Código de Alta Qualidade",
    description: "Desenvolvimento com padrões modernos, clean code e arquitetura escalável para crescimento futuro.",
    features: ["Testes automatizados", "Documentação completa", "Revisão de código"]
  },
  {
    icon: MessageSquare,
    title: "Comunicação Transparente",
    description: "Atualizações regulares e canais diretos para acompanhar cada etapa do projeto.",
    features: ["Reuniões semanais", "Relatórios detalhados", "Feedback contínuo"]
  },
  {
    icon: ShieldCheck,
    title: "Segurança Garantida",
    description: "Implementamos as melhores práticas de segurança desde o primeiro commit até a produção.",
    features: ["Auditoria de código", "Proteção de dados", "Backups automáticos"]
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Sites otimizados para velocidade, SEO e conversão com as tecnologias mais eficientes.",
    features: ["Otimização Core Web Vitals", "SEO técnico", "Cache inteligente"]
  },
  {
    icon: Clock,
    title: "Entrega Ágil",
    description: "Metodologias ágeis que garantem entregas rápidas sem comprometer a qualidade.",
    features: ["Sprints semanais", "MVP em 30 dias", "Deploy contínuo"]
  },
  {
    icon: Headphones, // Ícone alterado
    title: "Suporte e Evolução Contínua", // Título alterado
    description: "Oferecemos suporte técnico e evolução do sistema para acompanhar o crescimento do seu negócio.", // Descrição alterada
    features: ["Suporte técnico ágil", "Atualizações regulares", "Evolução do sistema"] // Features alteradas
  }
];

export function Differentials() {
  return (
    <section className="mx-auto mt-40 max-w-7xl px-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-1.5 text-sm font-medium text-cyan-700 dark:from-cyan-900/30 dark:to-blue-900/30 dark:text-cyan-300">
          <CheckCircle2 className="h-4 w-4" />
          <span>Diferenciais exclusivos</span>
        </div>
        
        <h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Por que somos a{' '}
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            escolha certa
          </span>{' '}
          para seu projeto
        </h2>
        
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Combinamos expertise técnica com processos eficientes para entregar soluções 
          que realmente fazem a diferença no seu negócio.
        </p>
      </div>

      <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {differentials.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-500/10 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-cyan-800/50"
            >
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-zinc-900 dark:via-zinc-900" />
              
              {/* Ícone com gradiente */}
              <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 p-3">
                <Icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </h3>
              
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
              
              <ul className="mt-6 space-y-2">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-500" />
                    <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Linha decorativa */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
            </div>
          );
        })}
      </div>

     <div className="mt-20 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 dark:from-cyan-500/5 dark:to-blue-500/5">
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    <div className="text-center">
      <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
        <Users className="h-8 w-8 text-white" />
      </div>
      <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Clientes Satisfeitos
      </h4>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Projetos entregues com excelência e acompanhamento próximo
      </p>
    </div>

    <div className="text-center">
      <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500">
        <div className="h-8 w-8 text-white font-bold flex items-center justify-center">
          ✓
        </div>
      </div>
      <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Qualidade Garantida
      </h4>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Padrões de desenvolvimento que garantem resultados sólidos
      </p>
    </div>

    <div className="text-center">
      <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="h-8 w-8 text-white font-bold flex items-center justify-center">
          ⚡
        </div>
      </div>
      <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Entregas Ágeis
      </h4>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Metodologia que prioriza velocidade e eficiência
      </p>
    </div>

    <div className="text-center">
      <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="h-8 w-8 text-white font-bold flex items-center justify-center">
          ♥
        </div>
      </div>
      <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Parceria Duradoura
      </h4>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Relacionamento baseado em confiança e resultados
      </p>
    </div>
  </div>
</div>
    </section>
  );
}