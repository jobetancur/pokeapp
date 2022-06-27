import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import RouteFather from './components/RouteFather'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import PokeInfo from './components/PokeInfo'
import pokenav from './img/pokemon_pokeball_logo.png'
import Footer from './components/Footer'


function App() {

  return (
    <div className="App">
      <nav className='NavBar'>
        <img src={pokenav} alt="poke nav" />
        <ul>
          <li><Link className='navtext' to='/'><i class="fa-solid fa-house"></i></Link></li>
        </ul>
      </nav>
      <Routes>
          <Route element={ <RouteFather/> }>
            <Route path='/' element={ <Home/> } />
            <Route path='/pokedex' element={ <Pokedex/> } />
            <Route path='/pokedex/:id' element={ <PokeInfo/> } />
          </Route>
      </Routes>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  )
}

export default App
