import Polirubro from '../assets/Polirubro.jpg'
import Csharp from '../assets/Csharp.png'
import React from '../assets/React.png'
import StreamLit from '../assets/Streamlit.png'
import Python from '../assets/Python.jpg'
import Clima from '../assets/Clima.png'

const Projects = () => {
    return (
        <>
        <div className="container">
        <h3>Proyectos</h3>
            <div className="row">
                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <a href="https://github.com/AugusRojas/PolirubroNuevo" target='_blank'><img src={Polirubro} alt="Polirubro" className='responsive-img' /></a>
                        </div>
                        <div className="card-content">
                            <p>Polirubro</p>

                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <a href="https://augusrojas-parcial-2-lab-tp8ejercicio-dp3hjm.streamlit.app/" target='_blank'><img src={StreamLit} alt="User Photo" className='responsive-img' /></a>
                        </div>
                        <div className="card-content">
                            <p>Calculador de metricas,cantidad,precio promedio de productos mediante CSV y streamlit</p>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <a href="https://proyectoclimaapi.netlify.app/" target='_blank'><img src={Clima} alt="Clima App" className='responsive-img' /></a>
                        </div>
                        <div className="card-content">
                            <p>Aplicación de Clima, con consumo de API</p>
                        </div>
                    </div>
                </div>

                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <a href="https://github.com/AugusRojas/Python.git" target='_blank'><img src={Python} alt="Python" className='responsive-img' /></a>
                        </div>
                        <div className="card-content">
                            <p>Proyectos Python</p>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <a href="https://github.com/AugusRojas/React.git" target='_blank'><img src={React} alt="React" className='responsive-img' /></a>
                        </div>
                        <div className="card-content">
                             <p>Proyectos React</p>
                        </div>
                    </div>
                </div>

                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                           <a href="" target='_blank'><img src={Csharp} alt="C#" className='responsive-img' /></a>
                        </div>
                        <div className="card-content">
                            <p>Proyectos C#</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects