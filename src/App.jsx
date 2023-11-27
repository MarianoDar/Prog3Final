import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Registro from './components/registro/Registro'
import Galeria from './components/galeria/Galeria'
import Miembros from './components/miembros/Miembros'

function App() {

  return (
    <BrowserRouter>
    
      <Routes>

        <Route exact path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/galeria' element={<Galeria/>} />
        <Route path='/miembros' element={<Miembros/>} />

      </Routes>

    </BrowserRouter>
  )
}

export default App