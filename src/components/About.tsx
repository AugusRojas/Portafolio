import '../css/about.css';
import fotoPortada from '../assets/fotoPortada.jpg';

const About = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <img className="col circle responsive-img imagen" src={fotoPortada} alt="Foto de Rojas Carlos Augusto" />
        <h2 className="col">Rojas Carlos Augusto</h2>
      </div>
      <p className="texto">
        Soy un estudiante de programación de 23 años cursando mi última materia. Tengo conocimientos en lenguajes como:
        JavaScript, TypeScript, C#,Java Python,Sql(SQLserver,SQLlite,MySql).<br/>
        Entornos De desarrolo como :Visual Studio Code,Visual Studio, Pip y metodologías ágiles.<br/>
        Caracteristicas: Siempre me esmero en lo que hago, ganas de crecer, buen habla y entendimiento de problemas, y me gusta trabajar en equipo.
      </p>
      <p className="texto">Tengo experiencia y me desenvuelvo con facilidad en:</p>
      <ul>
        <li className='texto'><span className='material-icons'>done_outline</span> Stack Mern</li>  
        <li className='texto'><span className='material-icons'>done_outline</span> .NET Framework</li>  
        <li className='texto'><span className='material-icons'>done_outline</span> Scrum</li>  
      </ul>
      <p className='texto'>Aprendiendo:</p>
      <ul>
        <li className='texto'><span className="material-icons">arrow_right_alt</span> Aspanet</li>
        <li className='texto'><span className="material-icons">arrow_right_alt</span> WordPress</li>
        <li className='texto'><span className="material-icons">arrow_right_alt</span> Node.js</li>
        <li className='texto'><span className="material-icons">arrow_right_alt</span> Hostring</li>
        <li className='texto'><span className="material-icons">arrow_right_alt</span> NoSql</li>
      </ul>
      <h4>Educación</h4>
      <div >
          <ul>
            <li className="texto">
              <span className="material-icons">school</span> Asistente Contable - Universidad Tecnológica Nacional.
            </li>
            <li className="texto">
              <span className="material-icons">school</span> Educación Secundaria: Colegio San Cayetano - Titulo Bachillerato.
            </li>
            <li className="texto">
              <span className="material-icons">school</span> Tecnicatura Universitaria en Programación - Universidad
              Tecnológica Nacional.
            </li>
          </ul>
        </div>
        <br />
        <br />
    </div>
  );
};

export default About;
