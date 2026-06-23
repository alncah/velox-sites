import Logo from '../assets/logo.svg'
import '../styles/footer.css'

const footerColumns = [
  { title: 'Empresa', links: ['Quem somos', 'Como funciona', 'Portfólio', 'Blog'] },
  { title: 'Serviços', links: ['Landing Page', 'Site Institucional', 'Loja Virtual', 'Manutenção Mensal'] },
  { title: 'Suporte', links: ['FAQ', 'Fale conosco', 'WhatsApp', 'Política de privacidade'] },
]

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={Logo} alt="VeloxSites" width={140}  />
          <p>
            Sites profissionais entregues em 24 horas por um preço fixo.
            Do briefing à entrega, do jeito certo.
          </p>
        </div>
        {footerColumns.map(col => (
          <div key={col.title} className="footer-column">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map(link => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} VeloxSites. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
