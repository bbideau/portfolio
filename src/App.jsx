import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/StageTBMCore'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ReadingProgress from './components/ReadingProgress'
export default function App() {
  return <div className="app-root"><a className="skip-link" href="#main">Aller au contenu</a><Header /><ReadingProgress />
    <main id="main"><Hero /><Projects /><About /><Skills /><Experience /><Contact /></main>
    <Footer /><BackToTop />
  </div>
}
