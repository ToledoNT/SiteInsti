import {
  Code2,
  MessageSquare,
  ShieldCheck,
  Zap,
  Clock,
  Headphones,
  Users,
  CheckCircle2,
} from "lucide-react";

const differentials = [
  {
    icon: Code2,
    title: "Código bem feito",
    description: "Criamos sistemas organizados, fáceis de manter e prontos para crescer.",
    features: ["Organização", "Boas práticas", "Código limpo"],
    color: "blue"
  },
  {
    icon: MessageSquare,
    title: "Comunicação clara",
    description: "Você acompanha tudo o que está acontecendo no projeto.",
    features: ["Atualizações", "Contato direto", "Transparência"],
    color: "cyan"
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description: "Seu sistema sempre protegido e estável.",
    features: ["Proteção", "Backup", "Boas práticas"],
    color: "indigo"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Sites rápidos e bem otimizados.",
    features: ["Velocidade", "SEO", "Eficiência"],
    color: "violet"
  },
  {
    icon: Clock,
    title: "Entrega rápida",
    description: "Trabalhamos com prazos bem definidos.",
    features: ["Organização", "Foco", "Entrega no prazo"],
    color: "purple"
  },
  {
    icon: Headphones,
    title: "Suporte",
    description: "Te ajudamos mesmo depois da entrega.",
    features: ["Ajustes", "Suporte", "Evolução"],
    color: "emerald"
  },
];

const colorMap = {
  blue: {
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-50 dark:bg-blue-950/20",
    border: "hover:border-blue-300 dark:hover:border-blue-700",
    text: "text-blue-600 dark:text-blue-400",
    icon: "text-blue-500",
    badge: "from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30",
    badgeText: "text-blue-700 dark:text-blue-300",
    shadow: "shadow-blue-500/10",
    bar: "from-blue-500 to-cyan-500"
  },
  cyan: {
    gradient: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50 dark:bg-cyan-950/20",
    border: "hover:border-cyan-300 dark:hover:border-cyan-700",
    text: "text-cyan-600 dark:text-cyan-400",
    icon: "text-cyan-500",
    badge: "from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30",
    badgeText: "text-cyan-700 dark:text-cyan-300",
    shadow: "shadow-cyan-500/10",
    bar: "from-cyan-500 to-blue-500"
  },
  indigo: {
    gradient: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50 dark:bg-indigo-950/20",
    border: "hover:border-indigo-300 dark:hover:border-indigo-700",
    text: "text-indigo-600 dark:text-indigo-400",
    icon: "text-indigo-500",
    badge: "from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30",
    badgeText: "text-indigo-700 dark:text-indigo-300",
    shadow: "shadow-indigo-500/10",
    bar: "from-indigo-500 to-blue-500"
  },
  violet: {
    gradient: "from-violet-500 to-violet-600",
    bg: "bg-violet-50 dark:bg-violet-950/20",
    border: "hover:border-violet-300 dark:hover:border-violet-700",
    text: "text-violet-600 dark:text-violet-400",
    icon: "text-violet-500",
    badge: "from-violet-50 to-indigo-50 dark:from-violet-900/30 dark:to-indigo-900/30",
    badgeText: "text-violet-700 dark:text-violet-300",
    shadow: "shadow-violet-500/10",
    bar: "from-violet-500 to-indigo-500"
  },
  purple: {
    gradient: "from-purple-500 to-purple-600",
    bg: "bg-purple-50 dark:bg-purple-950/20",
    border: "hover:border-purple-300 dark:hover:border-purple-700",
    text: "text-purple-600 dark:text-purple-400",
    icon: "text-purple-500",
    badge: "from-purple-50 to-violet-50 dark:from-purple-900/30 dark:to-violet-900/30",
    badgeText: "text-purple-700 dark:text-purple-300",
    shadow: "shadow-purple-500/10",
    bar: "from-purple-500 to-violet-500"
  },
  emerald: {
    gradient: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    border: "hover:border-emerald-300 dark:hover:border-emerald-700",
    text: "text-emerald-600 dark:text-emerald-400",
    icon: "text-emerald-500",
    badge: "from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30",
    badgeText: "text-emerald-700 dark:text-emerald-300",
    shadow: "shadow-emerald-500/10",
    bar: "from-emerald-500 to-teal-500"
  }
};

export function Differentials() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      {/* Título */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 px-4 py-1.5 text-sm font-medium text-blue-700 backdrop-blur-sm dark:border-blue-800/30 dark:bg-blue-950/30 dark:text-blue-300">
          <CheckCircle2 className="h-4 w-4" />
          <span>Diferenciais exclusivos</span>
        </div>

        <h2 className="mt-6 text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Por que escolher a{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            GC Connect
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Entregamos soluções simples, rápidas e bem feitas com tecnologia de ponta.
        </p>
      </div>

      {/* Grid de diferenciais */}
      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {differentials.map((item, index) => {
          const Icon = item.icon;
          const colors = colorMap[item.color as keyof typeof colorMap];

          return (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-blue-100/50 bg-white/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-blue-900/30 dark:bg-zinc-900/80 ${colors.border}`}
            >
              {/* Ícone com gradiente */}
              <div className={`mb-5 inline-flex rounded-2xl ${colors.bg} p-3.5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                <Icon className={`h-7 w-7 bg-gradient-to-br ${colors.gradient} bg-clip-text text-transparent`} />
              </div>

              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 className={`h-4 w-4 ${colors.text}`} />
                    <span className="text-zinc-700 dark:text-zinc-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Linha inferior animada */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${colors.bar} transition-all duration-500 group-hover:w-full`} />
            </div>
          );
        })}
      </div>

      {/* Bloco final com métricas */}
      <div className="mt-20 rounded-3xl border border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 p-8 backdrop-blur-sm dark:border-blue-800/30 dark:from-blue-950/30 dark:to-cyan-950/30">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center transition hover:scale-105">
            <div className="mx-auto mb-3 inline-flex rounded-2xl bg-blue-100 p-3 dark:bg-blue-900/30">
              <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">+50</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Clientes satisfeitos</p>
          </div>

          <div className="text-center transition hover:scale-105">
            <div className="mx-auto mb-3 inline-flex rounded-2xl bg-emerald-100 p-3 dark:bg-emerald-900/30">
              <CheckCircle2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">100%</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Qualidade garantida</p>
          </div>

          <div className="text-center transition hover:scale-105">
            <div className="mx-auto mb-3 inline-flex rounded-2xl bg-amber-100 p-3 dark:bg-amber-900/30">
              <Zap className="h-8 w-8 text-amber-600 dark:text-amber-400" />
            </div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Rápido</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Entregas ágeis</p>
          </div>

          <div className="text-center transition hover:scale-105">
            <div className="mx-auto mb-3 inline-flex rounded-2xl bg-purple-100 p-3 dark:bg-purple-900/30">
              <Headphones className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">24/7</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Suporte contínuo</p>
          </div>
        </div>
      </div>
    </section>
  );
}