import { 
  Code2, 
  Bot, 
  Wrench, 
  Zap, 
  Layout,
  Cpu,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    description: "Sistemas web modernos, escaláveis e seguros com as tecnologias mais avançadas do mercado.",
    features: [
      "Aplicações React/Next.js",
      "E-commerce personalizado",
      "Dashboards empresariais",
      "APIs e sistemas de backend"
    ],
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-gradient-to-br from-indigo-500/10 to-purple-500/10",
    link: "/services/web-development"
  },
  {
    icon: Bot,
    title: "Automação de Processos",
    description: "Integrações inteligentes que otimizam operações e reduzem custos operacionais em até 70%.",
    features: [
      "RPA (Robotic Process Automation)",
      "Integração entre sistemas",
      "Workflows automatizados",
      "Relatórios automáticos"
    ],
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10",
    link: "/services/automation"
  },
  {
    icon: Wrench,
    title: "Soluções Sob Medida",
    description: "Software personalizado desenvolvido exclusivamente para atender suas necessidades específicas.",
    features: [
      "Análise de requisitos",
      "Prototipação interativa",
      "Desenvolvimento exclusivo",
      "Manutenção especializada"
    ],
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-gradient-to-br from-emerald-500/10 to-green-500/10",
    link: "/services/custom-solutions"
  },
  {
    icon: Zap,
    title: "Otimização de Performance",
    description: "Aceleramos seus sistemas existentes para máxima velocidade, estabilidade e eficiência técnica.",
    features: [
      "Otimização de banco de dados",
      "Cache e CDN avançado",
      "Análise de performance",
      "Migração para tecnologias modernas"
    ],
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-amber-500/10 to-orange-500/10",
    link: "/services/optimization"
  },
  {
    icon: Layout,
    title: "Design UX/UI",
    description: "Interfaces intuitivas e atraentes que melhoram a experiência do usuário e aumentam conversões.",
    features: [
      "Design de interfaces modernas",
      "Prototipação interativa",
      "Testes de usabilidade",
      "Design responsivo"
    ],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
    link: "/services/design"
  },
  {
    icon: Cpu,
    title: "Consultoria Tecnológica",
    description: "Apoio estratégico para decisões tecnológicas que impulsionam seu crescimento.",
    features: [
      "Análise de stack tecnológico",
      "Planejamento de arquitetura",
      "Roadmap de desenvolvimento",
      "Mentoria de equipes"
    ],
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-gradient-to-br from-violet-500/10 to-purple-500/10",
    link: "/services/consulting"
  }
];

export function Services() {
  return (
    <section className="mx-auto mt-40 max-w-7xl px-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:from-indigo-900/30 dark:to-cyan-900/30 dark:text-indigo-300">
          <Zap className="h-4 w-4" />
          <span>Serviços especializados</span>
        </div>
        
        <h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Soluções que{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            impulsionam
          </span>{' '}
          seu negócio
        </h2>
        
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Oferecemos um portfólio completo de serviços digitais, desde desenvolvimento
          até otimização, sempre focados em resultados mensuráveis.
        </p>
      </div>

      <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white/50 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              {/* Gradiente de fundo no hover */}
              <div className={`absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${service.bgColor}`} />
              
              {/* Ícone com gradiente */}
              <div className={`mb-8 inline-flex rounded-2xl bg-gradient-to-br ${service.color} p-4`}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                {service.title}
              </h3>
              
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
              
              {/* Lista de características */}
              <ul className="mt-6 space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Botão de ação */}
              <Link
                href={service.link}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-all hover:gap-3 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              {/* Efeito decorativo */}
              <div className="absolute bottom-0 left-0 right-0 h-1 w-0 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />
            </div>
          );
        })}
      </div>
    </section>
  );
}