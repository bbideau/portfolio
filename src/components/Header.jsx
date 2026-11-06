import React, { useEffect, useState } from 'react'
const links = [['projets', 'Projets'], ['a-propos', 'À propos'], ['competences', 'Compétences'], ['experience', 'Parcours'], ['contact', 'Contact']]
export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('accueil')
  const [dark, setDark] = useState(() => { try { return localStorage.getItem('theme') === 'dark' } catch { return false } })
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
  }, [dark])
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { rootMargin: '-10% 0px -60% 0px' })
    document.querySelectorAll('main > section').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    const close = event => { if (event.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [])
  return <header className="site-header"><div className="header-inner">
    <a className="wordmark" href="#accueil" onClick={() => setOpen(false)}><span className="name-mark" aria-hidden="true">B.</span>Benjamin Bideau</a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav">{open ? 'Fermer' : 'Menu'}</button>
    <nav id="main-nav" className={open ? 'navigation is-open' : 'navigation'} aria-label="Navigation principale">
      {links.map(([id, label]) => <a key={id} className={active === id ? 'current' : ''} aria-current={active === id ? 'location' : undefined} href={'#' + id} onClick={() => setOpen(false)}>{label}</a>)}
      <button className="theme-control" onClick={() => setDark(!dark)} aria-pressed={dark} title={dark ? 'Mode clair' : 'Mode sombre'} aria-label={dark ? 'Activer le mode jour' : 'Activer le mode nuit'}>{dark ? <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></svg> : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.1A8.4 8.4 0 0 1 9.9 3.5 8.5 8.5 0 1 0 20.5 14.1Z" /></svg>}</button>
    </nav>
  </div></header>
}
