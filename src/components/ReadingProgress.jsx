import React, { useEffect, useRef } from 'react'
export default function ReadingProgress() {
  const bar = useRef(null)
  useEffect(() => {
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const height = document.documentElement.scrollHeight - window.innerHeight
        const progress = height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0
        if (bar.current) bar.current.style.transform = `scaleX(${progress})`
      })
    }
    const observer = new ResizeObserver(update)
    observer.observe(document.body)
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])
  return <div className="reading-progress" aria-hidden="true"><span ref={bar} /></div>
}
