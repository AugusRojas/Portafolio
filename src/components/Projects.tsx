import userPhoto from '../assets/user.jpeg'
import Polirubro from '../assets/Polirubro.jpg'
//import Csharp from '../assets/Csharp.png'
import react from '../assets/React.png'
import StreamLit from '../assets/Streamlit.png'
import Python from '../assets/Python.jpg'

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
                            <img src={userPhoto} alt="User Photo" className='responsive-img' />
                        </div>
                        <div className="card-content">
                            <p>Aplicación de Clima, con consumo de API</p>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <img src={userPhoto} alt="User Photo" className='responsive-img' />
                        </div>
                        <div className="card-content">
                            <p>Aplicacación de reservas de bar Vaca's Food</p>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <img src={userPhoto} alt="User Photo" className='responsive-img' />
                        </div>
                        <div className="card-content">
                            <p>Alta, baja, modificación Vaca's Food (Bar)</p>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <img src={userPhoto} alt="User Photo" className='responsive-img' />
                        </div>
                        <div className="card-content">
                            <p>Esperanza (Centro Psiquiátrico)</p>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <img src={Python} alt="User Photo" className='responsive-img' />
                        </div>
                        <div className="card-content">
                            <p>Proyectos Python</p>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="card small">
                        <div className="card-image" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                            <img src={react} alt="User Photo" className='responsive-img' />
                        </div>
                        <div className="card-content">
                            <p>Proyectos React</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects