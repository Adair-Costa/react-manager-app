import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // importacao do react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // importacao do fontAwesomeIcon
import { faPeopleRoof, faHouseUser, faListCheck, faCalculator, faRectangleList } from '@fortawesome/free-solid-svg-icons'; // importacao dos icones
import "./App.css";

// importacao dos componentes
import Home from "./components/Home";
import ToDoList from "./components/ToDoList";
import Calculator from "./components/Calculator";
import Form from "./components/Form";
import Error from "./components/Error";

const App = () => {

    // icons
    const managerAppIcon = <FontAwesomeIcon icon={faPeopleRoof} className="me-2" />
    const homeIcon = <FontAwesomeIcon icon={faHouseUser} className="me-2 hidden-icons" />
    const listIcon = <FontAwesomeIcon icon={faListCheck} className="me-2 hidden-icons" />
    const calcIcon = <FontAwesomeIcon icon={faCalculator} className="me-2 hidden-icons" />
    const formIcon = <FontAwesomeIcon icon={faRectangleList} className="me-2 hidden-icons" />

    return (
        <Router>
            <div className="container bg-app">

                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-uppercase pt-5">
                            <h1 className="fs-3 pb-5 text-center title-app">
                                {managerAppIcon}Gerenciador de Apps
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-sm-12 text-center mb-5 p-3 bg-white shadow-lg border border-1 rounded border-dark">
                        <Link className="btn btn-primary text-uppercase me-2 shadow button-size" to="/">
                            {homeIcon}Home
                        </Link>
                        <Link className="btn btn-primary text-uppercase me-2 shadow button-size" to="/list">
                            {listIcon}To-do-list
                        </Link>
                        <Link className="btn btn-primary text-uppercase me-2 shadow button-size" to="/calculator">
                            {calcIcon}Calculadora
                        </Link>
                        <Link className="btn btn-primary text-uppercase me-2 shadow button-size form-button" to="/form">
                            {formIcon}Formulário
                        </Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/list" element={<ToDoList />} />
                            <Route path="/calculator" element={<Calculator />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;