export function Services() {
  const services = [
    {
      title: "Desenvolvimento Web",
      desc: "Sistemas web modernos, escaláveis e seguros.",
    },
    {
      title: "Automação de Processos",
      desc: "Integrações e automações para reduzir custos.",
    },
    {
      title: "Soluções sob Medida",
      desc: "Software personalizado para sua realidade.",
    },
  ];

  return (
    <section className="mx-auto mt-40 max-w-7xl px-6">
      <h2 className="mb-12 text-center text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
        Nossos serviços
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-zinc-200 bg-white p-8 transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
          >
            <h3 className="mb-3 text-xl font-medium text-zinc-900 dark:text-zinc-50">
              {service.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
