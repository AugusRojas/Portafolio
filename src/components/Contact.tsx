import { FaInstagram,FaWhatsapp, FaGithub } from 'react-icons/fa';


const Contact = () => {
  return (
    <>
      <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Contacto</h5>
                <p className="grey-text text-lighten-4">Dirección: Argentina, San Miguél de Tucuman, Av Roca 158</p>
                <p className="grey-text text-lighten-4">Teléfono: +54 3816338435</p>
                <p className="grey-text text-lighten-4">Mails: augus32132@gmail.com</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/AugusRojas/Portafolio.git" target="_blanck"><FaGithub></FaGithub>Github</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/augus_rojas17/profilecard/?igsh=MXgyNm9pNGpoY3lkMw==" target="_blanck"><FaInstagram></FaInstagram>Instagram</a></li>
                  <li><a className="grey-text text-lighten-3"href="https://wa.me/543816338435?text=¡Hola%20Carlos!%20Quiero%20saber%20más%20sobre%20tu%20proyecto." target="_blanck"><FaWhatsapp></FaWhatsapp>Whathsapp</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
          </div>
        </footer>
            
    </>
  )
}

export default Contact