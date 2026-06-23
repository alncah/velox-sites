import Button from './Button'
import RectangleOne from '../assets/images/rectangleOne.png'
import RectangleTwo from '../assets/images/rectangleTwo.png'
import '../styles/hero.css'

export default function Hero() {
  return (
    <section id="hero">
      <span className="desktop-only">
        <img src={RectangleTwo} alt="Retangulo dois tela inicial" />
      </span>
      <img src={RectangleOne} alt="Retangulo um tela inicial" />

      <div className="container content">
        <p className="desktop-only">Sites em 24 horas</p>
        <h1>Seu site no ar em<br />menos de 24 horas</h1>
        <p>
          Do briefing à entrega em tempo recorde. Sites profissionais,
          responsivos e por um preço fixo que cabe no seu bolso.
        </p>
        <div className="flex gap-1">
          <a href="#contact"><Button text="Quero meu site" /></a>
          <a className="desktop-only" href="#pricing">
            <Button text="Ver planos →" secondary />
          </a>
        </div>
      </div>
    </section>
  )
}
