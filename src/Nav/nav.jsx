import React from "react";
import './nav.css';

const Nav=()=>{
    return(
        <nav>
            <div className="nav-first-row">
                <div>
                    <img alt="" src="./imgs/nav-ml.png" className="nav-ml-img"/>
                </div>
                <div className="nav-background-input">
                    <input type="text" class="nav-search-input" placeholder="    Busca productos, marcas y más..."/>
                    <button className="lupa-div">
                        <img alt="" src="./imgs/lupa.png" className="nav-lupa"/>
                    </button>
                </div>
                <img alt="" src="./imgs/descarga-nav.webp" className="nav-descarga"/>
            </div>

            <div className="nav-second-row">
                <div className="sr-fc">
                    <div className="enviar">
                        <img src="./imgs/place.png" alt="" className="place"/>
                        <div className="direccion">
                            <div className="enviar-a">Enviar a Juan</div>
                            <div>Montevideo, Uru...</div>
                        </div>
                    </div>
                    <div className="nav-opciones">
                        <div>Categorias </div>
                        <div>Ofertas</div>
                        <div>Historial </div>
                        <div>Moda</div>
                        <div>Vender</div>
                        <div>Ayuda</div>
                    </div>
                </div>


                <div className="nav-datos">
                    <img alt="" className="user-img" src="./imgs/user.png"/>
                    <div>Juan Ign...</div>
                    <div>Mis compras</div>
                    <div>Favoritos</div>
                    <img alt="" className="nots-cart" src="./imgs/notification.png"/>
                    <img alt="" className="nots-cart" src="./imgs/cart.png"/>
                </div>
            </div>
        </nav>
    )
}
export default Nav;