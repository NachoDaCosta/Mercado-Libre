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



            <div>2</div>
        </div>
    )
}

export default Products;