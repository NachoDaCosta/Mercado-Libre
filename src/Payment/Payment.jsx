import React from "react";
import './payment.css'


const Payment=()=>{
    return(
        <div className="payment">
            <div className="pdiv border">
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg" alt="" />
                <div className="bolder">
                    Paga con mercado pago
                </div>
                <div className="text-payment">Es la solucion mas sencilla y segura para tus compras online a traves de la web de mercadolibre</div>
                <div>
                    <a href="">Mas informacion de como comprar</a>
                </div>
            </div>
            <div className=" pdiv border">
                <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg" alt="" />
                <div className="bolder">
                    Envios gratis con $200 en compras
                </div>
                <div className="text-payment">Con mercado envios tenes tu pedido en menos de 24 horas</div>
                <div>
                    <a href="">Mas informacion sobre envios</a>
                </div>
            </div>
            <div className="pdiv div-payment">
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg" alt="" />
                <div className="bolder">
                    Seguridad en tus compras
                </div>
                <div className="text-payment">
                    Tus compras estan protegidas bajo el sistema de MercadoLibre
                </div>
                <div>
                    <a href="">Mas informacion sobre Seguridad</a>
                </div>
            </div>
        </div>

    )
}

export default Payment;