import React from 'react'
import pikachu from '../img/pikachu.png'

const Footer = () => {
  return (
    <article>
        <footer>
            <h2>Hecho con &nbsp;<i class="fa-solid fa-heart"></i> &nbsp;en Academlo</h2>
            <p><b>Web Developer &nbsp;<i class="fa-solid fa-terminal"></i> &nbsp;: </b>Alejandro Betancur</p>
            <img src={pikachu} alt="" />
        </footer>
    </article>
  )
}

export default Footer