import Button from './Button'

interface PricingCardProps {
  name: string
  description: string
  price: string
  period: string | null
  badge: string | null
  highlight: boolean
  ctaText: string
  features: string[]
}

export default function PricingCard({ name, description, price, period, badge, highlight, ctaText, features }: PricingCardProps) {
  return (
    <div className={`pricing-card ${highlight ? 'premium' : ''}`}>
      {badge && (
        <span className="bonus">
          <p>{badge}</p>
        </span>
      )}
      <span className="plan">
        <h3>{name}</h3>
        <p>{description}</p>
      </span>
      <span className="price">
        <h2>{price}</h2>
        {period && <p>{period}</p>}
      </span>
      <a href="#contact">
        <Button text={ctaText} secondary={!highlight} />
      </a>
      <span className="hr" />
      {features.map((feature, i) => (
        <span key={i} className="features">
          <span className="check-icon">✓</span>
          <p>{feature}</p>
        </span>
      ))}
    </div>
  )
}
