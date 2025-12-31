const steps = [
  {
    number: "01",
    title: "Entendimento",
    description:
      "Analisamos o cenário, os desafios e os objetivos para compreender o problema real."
  },
  {
    number: "02",
    title: "Planejamento",
    description:
      "Definimos a melhor abordagem, tecnologias e escopo com foco em eficiência."
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Construímos a solução com qualidade, transparência e acompanhamento constante."
  },
  {
    number: "04",
    title: "Evolução",
    description:
      "Após a entrega, seguimos ajustando e evoluindo conforme novas demandas surgem."
  }
];

export function ProcessSteps() {
  return (
    <section className="mx-auto mt-24 grid max-w-6xl gap-12 px-6 md:grid-cols-4">
      {steps.map((step) => (
        <div key={step.number} className="space-y-4">
          <span className="text-sm font-semibold text-zinc-400">
            {step.number}
          </span>

          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {step.title}
          </h3>

          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {step.description}
          </p>
        </div>
      ))}
    </section>
  );
}
