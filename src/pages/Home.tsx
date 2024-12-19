import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const Home = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper" style={{ 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            padding: '20px' 
          }}>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contactos</a></li>
          </ul>
        </div>
      </nav>

      <div id="about" style={{ padding: '0px 0' }}>
        <About />
      </div>

      <div id="projects" style={{ padding: '0px 0' }}>
        <Projects />
      </div>

      <div id="contact" style={{ padding: '0 0' }}>
        <Contact />
      </div>
    </div>
  )
}

export default Home
