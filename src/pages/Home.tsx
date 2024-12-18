import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Home = () => {
  return (
  <div className="">
  <Router>
  <nav>
    <div className="nav-wrapper" style={{ 
        backgroundColor: '#4CAF50', 
        color: 'white', 
        padding: '20px' 
      }}>
      <ul id="nav-mobile" className="right hide-on-med-and-down color ">
        <li><Link to="/About">Sobre mí</Link></li>
        <li><Link to="/Projects">Proyectos</Link></li>
        <li><Link to="/Contact">Contactos</Link></li>
      </ul>

      <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>


    </div>
  </nav>
  </Router>

  <br />
  <About/>
  <Projects/>
  <Contact/>
  </div>
  )
}

export default Home