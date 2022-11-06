import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // importacao do fontAwesomeIcon
import { faCopyright } from '@fortawesome/free-solid-svg-icons'; // importacao dos icones
import "./Footer.css";

const Footer = () => {

    // icons
    const copyRightIcon = <FontAwesomeIcon icon={faCopyright} className="me-1" />

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">

                    <div className="bg-white p-5 border border-1 shadow rounded mt-5 footer-father">
                        <p className="text-dark">Desenvolvido por <span className="text-muted text-uppercase">Adair Costa</span></p>
                        <p className="text-dark">
                            {copyRightIcon}CopyRight 2022. Todos os direitos reservados
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;