import TestimonialCard from './TestimonialCard'
import '../styles/testimonials.css'

const testimonials = [
  {
    name: 'João Mendes',
    role: 'Dono de Barbearia',
    photo: 'https://i.pravatar.cc/80?img=11',
    text: 'A VeloxSites entregou meu site em menos de 12 horas! Ficou lindo e o preço foi honesto. Recomendo demais!',
    stars: 5,
  },
  {
    name: 'Ana Carvalho',
    role: 'Empreendedora Digital',
    photo: 'https://i.pravatar.cc/80?img=25',
    text: 'Em 24 horas meu negócio já estava na internet. Atendimento incrível e resultado acima do esperado!',
    stars: 5,
  },
  {
    name: 'Carlos Souza',
    role: 'Advogado',
    photo: 'https://i.pravatar.cc/80?img=33',
    text: 'Precisava de um site urgente e a VeloxSites resolveu. Profissional, rápido e com ótimo custo-benefício.',
    stars: 5,
  },
  {
    name: 'Mariana Lima',
    role: 'Nutricionista',
    photo: 'https://i.pravatar.cc/80?img=47',
    text: 'Meu site ficou lindo e responsivo. Os pacientes elogiam toda vez. Valeu muito o investimento!',
    stars: 4,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <header>
        <span>
          <p className="desktop-only">Conselho de quem conhece</p>
          <h2>Cada cliente importa!</h2>
        </span>
        <p>
          Mais de 200 negócios já saíram do papel com a nossa ajuda.
          Acompanhe os depoimentos de quem já contratou e aprovou.
        </p>
      </header>

      <section className="carousel">
        <div className="carousel-content">
          {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
        </div>
        <div className="carousel-content">
          {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
        </div>
      </section>
    </section>
  )
}
