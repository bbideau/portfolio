import React, { useRef, useState } from 'react'
const skills = [
  ['Développement web', ['HTML / CSS', 'JavaScript', 'PHP', 'Vue.js', 'Symfony']],
  ['Développement logiciel', ['Java', 'Python', 'C', 'C#', 'Bash']],
  ['Outils', ['Visual Studio Code', 'GitLab', 'NetBeans', 'SQL Server']]
]
function SkillGroup({ title, items }) {
  const [active, setActive] = useState(null)
  const card = useRef(null)
  function followPointer(event) {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    card.current.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
    card.current.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
    card.current.dataset.hover = 'true'
  }
  function leaveCard() {
    if (card.current) card.current.dataset.hover = 'false'
    setActive(null)
  }
  return <div className="skill-card" ref={card} onPointerMove={followPointer} onPointerLeave={leaveCard}>
    <h3>{title}</h3><ul>{items.map(item => <li key={item}>
      <button className={active === item ? 'skill-tag is-highlighted' : 'skill-tag'} onPointerEnter={() => setActive(item)} onPointerLeave={() => setActive(null)} onFocus={() => setActive(item)} onBlur={() => setActive(null)} onClick={() => setActive(item)}>{item}</button>
    </li>)}</ul>
  </div>
}
export default function Skills() {
  return <section id="competences"><h2>Compétences</h2><div className="skills-grid">{skills.map(([title, items]) => <SkillGroup key={title} title={title} items={items} />)}</div></section>
}
