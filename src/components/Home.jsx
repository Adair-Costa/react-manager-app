import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // importacao do fontAwesomeIcon
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'; // importacao dos icones
import Footer from "./Footer";
import "./Home.css";

const Home = () => {

    // icons
    const angleLeftIcon = <FontAwesomeIcon icon={faAngleLeft} />
    const angleRightcon = <FontAwesomeIcon icon={faAngleRight} />

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col mb-5">

                    <div className="mb-5 text-size">
                        <h1 className="fs-3">
                            {angleLeftIcon}Home{angleRightcon}
                        </h1>
                        <p>Aqui na nossa homePage podemos encontrar uma pequena descrição de cada app,
                            como <span className="text-muted text-uppercase">To-do-list</span>, <span className="text-muted text-uppercase">Calculadora</span> e o nosso pequeno <span className="text-muted text-uppercase">Formulário</span>.
                        </p>
                    </div>

                    <div className="mb-5 text-size">
                        <h1 className="fs-3">To-do-list</h1>
                        <p>Na app <span className="text-muted text-uppercase">To-do-list</span>, podemos adicionar uma ou mais listas para nos ajudar a organizar as nossas
                            pequenas tarefas do dia a dia.
                        </p>
                    </div>

                    <div className="mb-5 text-size">
                        <h1 className="fs-3">Calculadora</h1>
                        <p>Na app <span className="text-muted text-uppercase">Calculadora</span>, podemos fazer um pequeno calculo
                            assim que adicionarmos o número desejado.
                        </p>
                    </div>

                    <div className="mb-5 text-size">
                        <h1 className="fs-3">Formulário</h1>
                        <p>Na app <span className="text-muted text-uppercase">Formulário</span>, podemos encontrar um pequeno
                        formulário de login, que nos permite adiciona um nome, email e password.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;