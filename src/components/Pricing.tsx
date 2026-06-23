import Button from './Button'
import '../styles/pricing.css'

const plans = [
  {
    name: 'Básico',
    description: 'Ideal para quem quer marcar presença online sem gastar nada.',
    price: 'Grátis',
    period: null as string | null,
    badge: null as string | null,
    highlight: false,
    ctaText: 'Começar agora',
    features: [
      'Template pronto para usar',
      '1 página responsiva',
      'Subdomínio VeloxSites',
      'Suporte por e-mail',
    ],
  },
  {
    name: 'Pro',
    description: 'Para quem quer um site profissional criado do zero pela nossa equipe.',
    price: 'R$ 97',
    period: '/mês' as string | null,
    badge: '1º MÊS GRÁTIS' as string | null,
    highlight: true,
    ctaText: 'Experimentar grátis',
    features: [
      'Site criado do zero pela equipe',
      'Até 5 páginas responsivas',
      'Domínio próprio incluso',
      'Formulário de contato',
      'Suporte prioritário',
    ],
  },
  {
    name: 'Empresarial',
    description: 'Solução completa para empresas que precisam de mais.',
    price: 'R$ 197',
    period: '/mês' as string | null,
    badge: null as string | null,
    highlight: false,
    ctaText: 'Falar com a equipe',
    features: [
      'Páginas ilimitadas',
      'Loja virtual integrada',
      'SEO avançado mensal',
      'Painel administrativo',
      'Suporte 24/7',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="container">
      <header>
        <p className="desktop-only">Planos e preços</p>
        <h2>Nossos planos</h2>
      </header>

      <section className="even-columns gap-1\.5">
        {plans.map((plan, i) => (
          <div key={i} className={`pricing-card ${plan.highlight ? 'premium' : ''}`}>
            {plan.badge && (
              <span className="bonus">
                <p>{plan.badge}</p>
              </span>
            )}
            <span className="plan">
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
            </span>
            <span className="price">
              <h2>{plan.price}</h2>
              {plan.period && <p>{plan.period}</p>}
            </span>
            <a href="#contact">
              <Button text={plan.ctaText} secondary={!plan.highlight} />
            </a>
            <span className="hr" />
            {plan.features.map((feature, j) => (
              <span key={j} className="features">
                <span className="check-icon">✓</span>
                <p>{feature}</p>
              </span>
            ))}
          </div>
        ))}
      </section>
    </section>
  )
}
