import { useState } from 'react'
import Button from './Button'
import '../styles/contact.css'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [fields, setFields] = useState({ email: '', message: '' })
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({})
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFields(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors: typeof errors = {}
    if (!fields.email.trim()) newErrors.email = 'E-mail é obrigatório'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) newErrors.email = 'E-mail inválido'
    if (!fields.message.trim()) newErrors.message = 'Mensagem é obrigatória'
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }

    setStatus('loading')
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setFields({ email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <header>
        <p className="desktop-only">Entre em contato</p>
        <h2>Vamos criar seu site!</h2>
        <p>Preencha o formulário e receba um orçamento em até 2 horas.</p>
      </header>

      {status === 'success' && (
        <div className="alert-success">
          Mensagem enviada! Entraremos em contato em até 2 horas.
        </div>
      )}
      {status === 'error' && (
        <div className="alert-error">
          Erro ao enviar. Tente novamente ou nos chame no WhatsApp.
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className={`input ${errors.email ? 'input-error' : ''}`}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>
        <div className="field">
          <textarea
            name="message"
            value={fields.message}
            onChange={handleChange}
            placeholder="Conte sobre seu negócio e o que você precisa..."
            rows={4}
            className={`input ${errors.message ? 'input-error' : ''}`}
          />
          {errors.message && <span className="error-msg">{errors.message}</span>}
        </div>
        <Button text={status === 'loading' ? 'Enviando...' : 'Enviar mensagem'} />
      </form>
    </section>
  )
}
