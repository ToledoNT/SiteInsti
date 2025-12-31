import { 
  MessageSquare, 
  Clock, 
  Handshake, 
  Sparkles,
  CheckCircle2,
  Lightbulb
} from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-12">
      {/* Header aprimorado */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:from-indigo-900/30 dark:to-cyan-900/30 dark:text-indigo-300">
          <Lightbulb className="h-4 w-4" />
          <span>Conversa inicial gratuita</span>
        </div>
        
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Por que conversar primeiro?
        </h2>

        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          Acreditamos que uma boa conversa é o ponto de partida para soluções eficientes. 
          Antes de qualquer proposta, queremos entender seu contexto e necessidades.
        </p>
      </div>

      {/* Benefícios com ícones */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 p-3 dark:from-indigo-900/30 dark:to-purple-900/30">
            <MessageSquare className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Atendimento Personalizado
            </h4>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Cada projeto é único e merece atenção especial.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 p-3 dark:from-cyan-900/30 dark:to-blue-900/30">
            <Clock className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Resposta Rápida
            </h4>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Compromisso com agilidade no primeiro contato.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 p-3 dark:from-emerald-900/30 dark:to-green-900/30">
            <Handshake className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Abordagem Consultiva
            </h4>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Mais do que desenvolvimento, oferecemos orientação estratégica.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-3 dark:from-amber-900/30 dark:to-orange-900/30">
            <Sparkles className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Soluções Sob Medida
            </h4>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Desenvolvemos a solução ideal para o seu negócio.
            </p>
          </div>
        </div>
      </div>

      {/* Nota final */}
      <div className="rounded-2xl border border-zinc-200 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 dark:border-zinc-800 dark:from-amber-900/20 dark:to-yellow-900/20">
        <div className="flex items-start gap-4">
          <Lightbulb className="mt-1 h-5 w-5 text-amber-600 dark:text-amber-400" />
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Sem compromisso inicial
            </h4>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              A primeira conversa serve apenas para entendermos se faz sentido trabalharmos juntos. 
              Só seguimos com proposta quando temos certeza de que podemos agregar valor real ao seu negócio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );  
}