import React, { useEffect, useState } from 'react'
export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 650)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return visible ? <a href="#accueil" className="back-to-top" aria-label="Retour en haut de la page">↑</a> : null
}
