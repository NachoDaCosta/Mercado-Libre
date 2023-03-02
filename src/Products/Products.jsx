import React from "react";
import './products.css';

const Products=()=>{
    return(
        <div className="products-container-big"> {/**DIV PARA LOS METODOS DE <PAGO></PAGO> */}
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



            <div className="products-with-pictures">
                <div className="visita-text">
                    <div>Basado en tu ultima visita</div>
                    <div className="see-more-history">Ver más</div>
                </div>

                <div className="products-history">
                    <div className="individual-product-history">
                        <div>
                            <img alt="" src="https://http2.mlstatic.com/D_Q_NP_626789-MLU51824281692_102022-AB.webp"/>
                        </div>
                        <div className="prices">
                            <div className="price">$300</div>
                            <div className="green-taxes">10x $30 sin interés</div>
                        </div>
                    </div>

                    <div className="individual-product-history">
                        <div>
                            <img alt="" src="https://http2.mlstatic.com/D_Q_NP_695307-MLU31698123822_082019-AB.webp"/>
                        </div>
                        <div className="prices">
                            <div className="price">$300</div>
                            <div className="green-taxes">10x $30 sin interés</div>
                        </div>
                    </div>

                    <div className="individual-product-history">
                        <div>
                            <img alt="" src="https://http2.mlstatic.com/D_Q_NP_803818-MLU31241430495_062019-AB.webp"/>
                        </div>
                        <div className="prices">
                            <div className="price">$300</div>
                            <div className="green-taxes">10x $30 sin interés</div>
                        </div>
                    </div>

                    <div className="individual-product-history">
                        <div>
                            <img alt="" src="https://http2.mlstatic.com/D_Q_NP_698793-MLU31244308516_062019-AB.webp"/>
                        </div>
                        <div className="prices">
                            <div className="price">$1200</div>
                            <div className="green-taxes">10x $120 sin interés</div>
                        </div>
                    </div>

                    <div className="individual-product-history">
                        <div>
                            <img alt="" src="https://http2.mlstatic.com/D_Q_NP_640932-MLU49855811548_052022-AB.webp"/>
                        </div>
                        <div className="prices">
                            <div className="price">$600</div>
                            <div className="green-taxes">10x $60 sin interés</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Products;