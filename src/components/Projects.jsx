import React, { useEffect, useState } from 'react'
import { projectsData } from '../data/projectsData'
import ProjectModal from './ProjectModal'
const categories = ['Tous', 'Web', 'Java', 'Python', 'Système']
const category = p => /Java,|JavaFX/.test(p.tech) ? 'Java' : /Python/.test(p.tech) ? 'Python' : /HTML|Symfony/.test(p.tech) ? 'Web' : 'Système'
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
function savedPreferences() {
  try {
    const saved = JSON.parse(sessionStorage.getItem('portfolio-projects') || '{}')
    return { query: typeof saved.query === 'string' ? saved.query : '', filter: categories.includes(saved.filter) ? saved.filter : 'Tous' }
  } catch { return { query: '', filter: 'Tous' } }
}
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [saved] = useState(savedPreferences)
  const [filter, setFilter] = useState(saved.filter)
  const [query, setQuery] = useState(saved.query)
  useEffect(() => {
    try { sessionStorage.setItem('portfolio-projects', JSON.stringify({ filter, query })) } catch {}
  }, [filter, query])
  const reset = () => { setQuery(''); setFilter('Tous') }
  const ordered = [...projectsData].sort((a, b) => (b.id === 'robot-league') - (a.id === 'robot-league'))
  const shown = ordered.filter(p => (filter === 'Tous' || category(p) === filter) && normalize(`${p.title} ${p.desc} ${p.tech}`).includes(normalize(query.trim())))
  return <section id="projets" className="projects"><h2>Mes projets</h2>
    <p className="section-description">Quelques projets réalisés pendant ma formation et sur mon temps personnel.</p>
    <div className="project-search"><label htmlFor="project-query">Rechercher un projet</label><div className="search-field"><input id="project-query" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Nom, technologie…" />{query && <button onClick={() => setQuery('')} aria-label="Effacer la recherche">×</button>}</div></div>
    <div className="project-filters" role="group" aria-label="Filtrer les projets">{categories.map(c => <button aria-pressed={filter === c} onClick={() => setFilter(c)} key={c}>{c}<span>{c === 'Tous' ? projectsData.length : ordered.filter(p => category(p) === c).length}</span></button>)}</div>
    <div className="project-toolbar"><span className="project-results" role="status">{shown.length} projet{shown.length > 1 ? 's' : ''}{query.trim() ? ` pour « ${query.trim()} »` : ''}</span>{(query || filter !== 'Tous') && <button className="reset-filters" onClick={reset}>Réinitialiser</button>}</div>
    {shown.length === 0 ? <div className="empty-projects"><p>Aucun projet ne correspond à cette recherche.</p><button onClick={reset}>Afficher tous les projets</button></div> : <div className="project-list">{shown.map(p => <button className="work-row" key={p.id} onClick={() => setSelectedProject(p)} aria-label={'Ouvrir les détails de ' + p.title}><div className="work-preview"><img src={p.image} alt={p.title} loading="lazy" /></div><div className="work-body"><span className="work-category">{category(p)} / {p.tech.split(',').slice(0, 2).join(' + ')}</span><h3>{p.title}</h3><p>{p.desc}</p><div className="work-bottom"><span>En savoir plus</span><span aria-hidden="true">→</span></div></div></button>)}</div>}
    {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
  </section>
}
