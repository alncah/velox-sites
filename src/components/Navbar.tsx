import { useState, useEffect } from 'react'
import Logo from '../assets/logo.svg'
import Menu from '../assets/hamburguer.svg'
import Close from '../assets/close.svg'
import Button from './Button'
import '../styles/header.css'

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Soluções', href: '#solution' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Preços', href: '#pricing' },
  { label: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    const html = document.querySelector('html')
    if (html) {
      html.style.overflow = showMobileMenu ? 'hidden' : 'auto'
    }
  }, [showMobileMenu])

  return (
    <header className="header-wrapper">
      <div className="container">
        <nav className="flex items-center justify-between py-sm">
          <img src={Logo} alt="VeloxSites" width={160} height={38} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="#">Login</a>
              <Button text="Quero meu site" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    {navLinks.map(link => (
                      <li key={link.href}>
                        <a href={link.href} onClick={() => setShowMobileMenu(false)}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a className="reverse-color" href="#" onClick={() => setShowMobileMenu(false)}>
                        Login
                      </a>
                    </li>
                  </ul>
                  <span onClick={() => setShowMobileMenu(false)} className="btn-wrapper">
                    <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                  </span>
                </div>
              </div>
            ) : (
              <span onClick={() => setShowMobileMenu(true)} className="btn-wrapper">
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
