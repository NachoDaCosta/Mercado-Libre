import React from "react";
import './products.css';

const Products=()=>{
    return(
        <div className="products-container-big"> {/**DIV PARA LOS METODOS DE <PAGO></PAGO> */}
            <div className="container-ppay">
                <div className="products-payment">
                        <div className="payment-div">
                            <img alt="" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg" className="payment-image"/>
                            <div className="text-start">
                                <div>Hasta 14 cuotas din interés</div>
                                <div className="see-more">Ver más</div>
                            </div>
                        </div>
                        <div className="payment-div">
                            <img alt="" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg" className="payment-image"/>
                            <div className="text-start">
                                <div>Tarjeta de débito</div>
                                <div className="see-more">Ver más</div>
                            </div>
                        </div>
                        <div className="payment-div">
                            <img alt="" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg" className="payment-image"/>
                            <div className="text-start">
                                <div>Efectivo en redes de cobranza</div>
                                <div className="see-more">Ver más</div>
                            </div>
                        </div>
                        <div className="payment-div">
                            <img alt="" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg" className="payment-image"/>
                            <div className="text-start">
                                <div>Más medios de pago</div>
                                <div className="see-more">Ver más</div>
                            </div>
                        </div>
                </div>
            </div>


            <div className="products-with-pictures">
                <div className="visita-text">
                    <div>Basado en tu ultima visita</div>
                    <div className="see-more-history">Ver más</div>
                </div>

                <div className="products-history">
                    <div className="individual-product-history">
                        
                        <img alt="" src="https://http2.mlstatic.com/D_Q_NP_626789-MLU51824281692_102022-AB.webp" className="product-image"/>
                        
                        <div className="prices">
                            <div className="price">$300</div>
                            <div className="green-taxes">10x $30 sin interés</div>
                        </div>
                    </div>

                    <div className="individual-product-history">
                        
                            <img alt="" src="https://http2.mlstatic.com/D_Q_NP_695307-MLU31698123822_082019-AB.webp" className="product-image"/>
                        
                        <div className="prices">
                            <div className="price">$300</div>
                            <div className="green-taxes">10x $30 sin interés</div>
                        </div>
                    </div>

                    <div className="individual-product-history">
                        
                            <img alt="" src="https://http2.mlstatic.com/D_Q_NP_803818-MLU31241430495_062019-AB.webp" className="product-image"/>
                        
                        <div className="prices">
                            <div className="price">$300</div>
                            <div className="green-taxes">10x $30 sin interés</div>
                        </div>
                    </div>

                    <div className="individual-product-history">
                        
                            <img alt="" src="https://http2.mlstatic.com/D_Q_NP_698793-MLU31244308516_062019-AB.webp" className="product-image"/>
                        
                        <div className="prices">
                            <div className="price">$1200</div>
                            <div className="green-taxes">10x $120 sin interés</div>
                        </div>
                    </div>

                    <div className="individual-product-history">
                        
                            <img alt="" src="https://http2.mlstatic.com/D_Q_NP_640932-MLU49855811548_052022-AB.webp" className="product-image"/>
                        
                        <div className="prices">
                            <div className="price">$600</div>
                            <div className="green-taxes">10x $60 sin interés</div>
                        </div>
                    </div>
                </div>

                <div className="visita-text martop">
                    <div>Ofertas</div>
                    <div className="see-more-history">Ver más</div>
                </div>

                <div className="products-history">
                    <div className="individual-product-history">
                        
                            <img alt="" src="https://http2.mlstatic.com/D_Q_NP_938303-MLA52149491470_102022-AB.webp" className="product-image"/>
                        
                        <div className="prices">
                            <div className="price">U$S 769
                                <p className="green-taxes">20% off</p>
                            </div>
                            <div className="green-taxes">Envío gratis</div>
                        </div>
                    </div>

                    <div className="individual-product-history">
                        
                            <img alt="" src="	https://http2.mlstatic.com/D_Q_NP_991491-MLU49459341521_032022-AB.webp" className="product-image"/>
                        
                        <div className="prices">
                            <div className="price">$1900 
                                <p className="green-taxes">25% off</p>
                            </div>
                            <div className="green-taxes">Envios gratis</div>
                        </div>
                    </div>

                    <div className="individual-product-history">
                        
                            <img alt="" src="https://http2.mlstatic.com/D_Q_NP_736292-MLU49159816564_022022-AB.webp" className="product-image"/>
                        
                        <div className="prices">
                            <div className="price">$873 
                                <p className="green-taxes">15% off</p>
                            </div>
                        </div>
                    </div>

                    <div className="individual-product-history">
                        <div>
                            <img alt="" src="https://http2.mlstatic.com/D_Q_NP_723939-MLU49840936069_052022-AB.webp" className="product-image"/>
                        </div>
                        <div className="prices">
                            <div className="price">$3.953  
                                <p className="green-taxes">15% off</p>
                            </div>
                            <div className="green-taxes">Envío gratis</div>
                        </div>
                    </div>

                    <div className="individual-product-history">
                            <img alt="" src="https://http2.mlstatic.com/D_Q_NP_931769-MLU52086338987_102022-AB.webp" className="product-image"/>
                        <div className="prices">
                            <div className="price">$600
                                <p className="green-taxes">35% off</p>
                            </div>
                            <div className="green-taxes">10x $60 sin interés</div>
                        </div>
                    </div>
                </div>



                {/*Aca termina la primera parte de productos */}
                <div className="imagen-oferta">
                   <img alt="" src="https://http2.mlstatic.com/D_NQ_953195-MLA51812475835_102022-OO.jpg" className="product-image"/>
                    <div className="ofertas-negra">
                            <div>OFERTAS DEL DIA</div>
                            <div>
                                 <div className="aprovecha">APROVECHA LAS</div>
                                 <div className="aprovecha">MEJORES OFERTAS</div>
                            </div>
                            <div>Ver más {'>'}</div>
                    </div>
                </div>


                <div className="visita-text martop">
                    <div>Las mejores tiendas te esperan</div>
                    <div className="see-more-history">Ver tiendas</div>
                </div>

                <div className="container-tiendas">

                    <div className="tienda-individual ">
                            <img src="	https://http2.mlstatic.com/storage/official-stores-images/lg/background_home201712191154.jpg" alt="" className="img-bg-sore"/>
                        <div className="second-row-ind-store">
                            <img alt="" src="	https://http2.mlstatic.com/D_Q_NP_984708-MLA25722192765_072017-AE.webp" className="logo-store"/>
                            <div className="bolder">LG</div>
                            <div className="images-store-sr">
                                <img alt="" src="https://http2.mlstatic.com/D_Q_NP_864788-MLU48532970811_122021-R.webp" className="products-store"/>
                                <img alt="" src="https://http2.mlstatic.com/D_Q_NP_889609-MLU52731162578_122022-R.webp" className="products-store"/>
                                <img alt="" src="https://http2.mlstatic.com/D_Q_NP_956501-MLU49853864804_052022-R.webp" className="products-store"/>
                            </div>
                            <div className="see-store">Ver tienda</div>
                        </div>
                    </div>
                

                    <div className="tienda-individual ">
                            <img src="	https://http2.mlstatic.com/storage/official-stores-images/stadium/background_home201712270650.jpg" alt="" className="img-bg-sore"/>
                        <div className="second-row-ind-store">
                            <img alt="" src="https://http2.mlstatic.com/D_Q_NP_731418-MLA27180536377_042018-AE.webp" className="logo-store"/>
                            <div className="bolder">Stadium</div>
                            <div className="images-store-sr">
                                <img alt="" src="https://http2.mlstatic.com/D_Q_NP_601227-MLU43346087540_092020-R.webp" className="products-store"/>
                                <img alt="" src="https://http2.mlstatic.com/D_Q_NP_874572-MLU45172840071_032021-R.webp" className="products-store"/>
                                <img alt="" src="https://http2.mlstatic.com/D_Q_NP_793177-MLU47779526231_102021-R.webp" className="products-store"/>
                            </div>
                            <div className="see-store">Ver tienda</div>
                        </div>
                    </div>

                    <div className="tienda-individual ">
                            <img src="	https://http2.mlstatic.com/storage/official-stores-images/disney/background_home202005131052.jpg" alt="" className="img-bg-sore"/>
                        <div className="second-row-ind-store">
                            <img alt="" src="	https://http2.mlstatic.com/D_Q_NP_713283-MLA41808168368_052020-AE.webp" className="logo-store"/>
                            <div className="bolder">Disney</div>
                            <div className="images-store-sr">
                                <img alt="" src="https://http2.mlstatic.com/D_Q_NP_811727-MLU47139960639_082021-R.webp" className="products-store"/>
                                <img alt="" src="https://http2.mlstatic.com/D_Q_NP_710630-MLU43763256351_102020-R.webp" className="products-store"/>
                                <img alt="" src="https://http2.mlstatic.com/D_Q_NP_704137-MLU48955893092_012022-R.webp" className="products-store"/>
                            </div>
                            <div className="see-store">Ver tienda</div>
                        </div>
                    </div>

                    <div className="tienda-individual  ">
                            <img src="https://http2.mlstatic.com/storage/official-stores-images/infanti/background_home201801030821.jpg" alt="" className="img-bg-sore"/>
                        <div className="second-row-ind-store">
                            <img alt="" src="	https://http2.mlstatic.com/D_Q_NP_612791-MLA30087018356_042019-AE.webp" className="logo-store"/>
                            <div className="bolder">Infantil</div>
                            <div className="images-store-sr">
                                <img alt="" src="https://http2.mlstatic.com/D_Q_NP_809421-MLU51754989733_092022-R.webp" className="products-store"/>
                                <img alt="" src="https://http2.mlstatic.com/D_Q_NP_840907-MLU48066285124_102021-R.webp" className="products-store"/>
                                <img alt="" src="https://http2.mlstatic.com/D_Q_NP_858762-MLU47856764341_102021-R.webp" className="products-store"/>
                            </div>
                            <div className="see-store">Ver tienda</div>
                        </div>
                    </div>
                </div>


                <div className="container-full-categorias">
                    <div className="visita-text">
                        <div>Categorias populares</div>
                    </div>
                    <div className="container-categorias-imagenes">
                        <div className="row-categorias">
                            <div className="categoria-individual">
                                <img alt="" src="./imgs/car.jpeg" className="image-categoria"/>
                                <div className="title-categoria">Autos</div>
                            </div>
                            
                            <div className="categoria-individual">
                            <img alt="" src="./imgs/phone.png" className="image-categoria"/>
                                <div className="title-categoria">Celulares</div>
                            </div>

                            <div className="categoria-individual">
                                <img alt="" src="./imgs/rpa.png" className="image-categoria"/>
                                <div className="title-categoria">Ropa</div>
                            </div>

                            <div className="categoria-individual">
                            <img alt="" src="./imgs/pc.png" className="image-categoria"/>
                                <div className="title-categoria">Computacion</div>
                            </div>

                            <div className="categoria-individual">
                                <img alt="" src="./imgs/casa.png" className="image-categoria"/>
                                <div className="title-categoria">Inmuebles</div>
                            </div>

                        </div>
                        
                        <div className="row-categorias">
                            <div className="categoria-individual">
                                <img alt=""  className="image-categoria" src="./imgs/perro.png"/>
                                <div className="title-categoria">Mascotas</div>
                            </div>
                            
                            <div className="categoria-individual">
                                <img alt=""  className="image-categoria" src="./imgs/lentes.png"/>
                                <div className="title-categoria">Lentes</div>
                            </div>
 
                            <div className="categoria-individual">
                                <img alt=""  className="image-categoria" src="./imgs/labial.png"/>
                                <div className="title-categoria">Maquillaje</div>
                            </div>

                            <div className="categoria-individual">
                                <img alt=""  className="image-categoria" src="./imgs/ball.png"/>
                                <div className="title-categoria">Deportes</div>
                            </div>

                            <div className="categoria-individual"> 
                                <img alt=""  className="image-categoria" src="./imgs/micro.png"/>
                                <div className="title-categoria">Audio y Video</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Products;