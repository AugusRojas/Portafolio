import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Home = () => {
  return (
    <Router> 
      <div className="">
        <nav>
          <div className="nav-wrapper" style={{ 
              backgroundColor: '#4CAF50', 
              color: 'white', 
              padding: '20px' 
            }}>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/About">Sobre mí</Link></li>
              <li><Link to="/Projects">Proyectos</Link></li>
              <li><Link to="/Contact">Contactos</Link></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<About />} />  {/* Ruta inicial (/) */}
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Home
