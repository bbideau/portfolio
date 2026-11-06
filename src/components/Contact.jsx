import React, { useEffect, useRef, useState } from 'react'
const email = 'ben.bideau33@gmail.com'
export default function Contact() {
  const [status, setStatus] = useState('')
  const timer = useRef(null)
  useEffect(() => () => clearTimeout(timer.current), [])
  async function copyEmail() {
    clearTimeout(timer.current)
    try {
      await navigator.clipboard.writeText(email)
      setStatus('Adresse copiée !')
    } catch {
      setStatus('Copie indisponible. Vous pouvez sélectionner l’adresse ci-dessus.')
    }
    timer.current = setTimeout(() => setStatus(''), 4000)
  }
  return <section id="contact" className="contact"><h2>Contact</h2>
    <p>Pour une proposition de stage ou une question, vous pouvez m’écrire :</p>
    <div className="email-actions"><a className="contact-email" href={'mailto:' + email}>{email}</a><button className="copy-email" onClick={copyEmail}>Copier l’adresse</button></div>
    <p className="copy-status" role="status">{status}</p>
    <p className="contact-location">Gironde · Mobilité en Île-de-France</p>
  </section>
}
