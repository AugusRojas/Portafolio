import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const Home = () => {
  return (
  <div className="">
    <div className="nav-wrapper">
      <ul id="nav-mobile" className="right hide-on-med-and-down color ">
        <li><a>Sobre mí</a></li>
        <li><a>Proyectos</a></li>
        <li><a>Contacto</a></li>
      </ul>
    </div>
  <br />
  <About/>
  <Projects/>
  <Contact/>
  </div>
  )
}

export default Home