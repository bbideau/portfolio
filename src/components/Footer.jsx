import React from 'react'
export default function Footer(){return <footer><span>© {new Date().getFullYear()} Benjamin Bideau</span><a href={`${import.meta.env.BASE_URL}mentionsLegales.html`}>Informations du site</a><a href="#accueil">Retour en haut</a></footer>}
