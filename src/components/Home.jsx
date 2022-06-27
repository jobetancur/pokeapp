import React from 'react'
import home from '../img/home.png'
import pokeball from '../img/pokeball.png'
import InputHome from './InputHome'

const Home = () => {
  return (
    <div className='home'>
       <img src={home} alt="home image" />
       <h2>Hello trainer!</h2> 
       <p>Write your name before you start.</p>
       <div className='form'>
          <InputHome />
       </div>
    </div>
  )
}

export default Home