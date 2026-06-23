interface TestimonialCardProps {
  name: string
  role: string
  photo: string
  text: string
  stars: number
}

export default function TestimonialCard({ name, role, photo, text, stars }: TestimonialCardProps) {
  return (
    <div className="carousel-card">
      <img src={photo} alt={`Foto de ${name}`} />
      <span className="testimony">
        <p>"{text}"</p>
      </span>
      <span className="rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < stars ? 'star-filled' : 'star-empty'}>
            {i < stars ? '★' : '☆'}
          </span>
        ))}
      </span>
      <span className="names">
        <p>{name}</p>
        <p>{role}</p>
      </span>
    </div>
  )
}
