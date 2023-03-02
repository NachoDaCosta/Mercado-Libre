import React from "react";
import './footer.css'

const Footer=()=>{
    return(
        <footer>
            <div className="footer-us f-align">
                <a href="#">Trabaja con nosotros</a>
                <a href="#">Términos y condiciones</a>
                <a href="#">Cómo cuidamos tu privacidad</a>
                <a href="#">Accesibilidad</a>
                <a href="#">Ayuda</a>
            </div>
            <div className="footer-gray-text f-align">Copyright © 1999-2023 DeRemate.com de Uruguay S.R.L.</div>
            <div className="footer-gray-text f-align">Tel: +598 2624 0238</div>
        </footer>
    )
}

export default Footer;
