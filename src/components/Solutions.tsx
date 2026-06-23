import '../styles/solution.css'

const solutions = [
  {
    icon: '⚡',
    title: 'Entrega em 24 Horas',
    description: 'Nada de semanas esperando. Após a aprovação do briefing, seu site fica pronto e no ar em menos de 24 horas úteis.',
  },
  {
    icon: '💰',
    title: 'Preço Fixo e Transparente',
    description: 'Sem surpresas no final. Você sabe exatamente quanto vai pagar antes de começar. Nenhuma taxa escondida.',
  },
  {
    icon: '🛡️',
    title: 'Suporte Pós-Entrega',
    description: 'Não sumimos após a entrega. Ficamos disponíveis para ajustes e dúvidas para garantir que tudo funcione perfeitamente.',
  },
]

export default function Solutions() {
  return (
    <section className="container" id="solution">
      <header>
        <span>
          <h2>Soluções</h2>
          <span className="desktop-only">
            <h2>Sob medida para você</h2>
          </span>
        </span>
        <p>
          Inovação é com a gente! A <strong>VeloxSites</strong> já conquistou
          diversos clientes, seja você mais um deles, veja tudo que pode ganhar
          com nossos serviços.
        </p>
      </header>

      <section className="even-columns">
        {solutions.map((s, i) => (
          <div key={i} className="card">
            <span>
              <div className="card-icon">{s.icon}</div>
            </span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <hr />
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}
