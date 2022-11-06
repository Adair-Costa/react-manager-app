import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // importacao do fontAwesomeIcon
import { faCirclePlus, faTrash } from '@fortawesome/free-solid-svg-icons'; // importacao dos icones
import { v4 as idFunction } from "uuid";
import "./Form.css";

const Form = () => {

    // hook useState
    const [name, setName] = useState(() => {
        return "";
    });

    const [email, setEmail] = useState(() => {
        return ""
    });

    const [password, setPassword] = useState(() => {
        return "";
    });

    const [listDatas, setListDatas] = useState(() => {
        return [];
    });

    // hook useRef
    const focusName = useRef();
    const focusEmail = useRef();
    const focusPassword = useRef();

    // functions
    function addDatas() {
        // verificar se os campos estao vazios
        if (name === "") {
            focusName.current.focus();
            return;
        } else if (email === "") {
            focusEmail.current.focus();
            return;
        } else if (password === "") {
            focusPassword.current.focus();
            return;
        }

        // adicionar dados
        setListDatas((oldListDatas) => {
            return [...oldListDatas, {name, email, password}];
        });

        // limpar os campos 
        setName(() => {
            return "";
        });

        setEmail(() => {
            return "";
        });

        setPassword(() => {
            return "";
        });
    }

    // limpar os dados
    function cleanDatas() {
        setListDatas(() => {
            return [];
        })
    }

    // pegar a tecla enter
    function keyEnter(event) {
        if (event.code === "Enter") {
            addDatas();
        }
    }

    // icons
    const addIcon = <FontAwesomeIcon icon={faCirclePlus} className="me-2 hidden-icons" />
    const clearIcon = <FontAwesomeIcon icon={faTrash} className="me-2 hidden-icons" />

    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex flex-column align-items-center">

                    <div className="mb-2">
                        <h1 className="fs-3 text-uppercase title-form">Formulário</h1>
                    </div>


                    <div className="w-50 col-size">
                        <form className="mb-5">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
                                <input ref={ focusName } type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(event) => { setName(event.target.value) }} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail2" className="form-label">Email</label>
                                <input ref={ focusEmail } type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input ref={ focusPassword } type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(event) => { setPassword(event.target.value) }} onKeyUp={keyEnter} />
                            </div>

                            <div className="d-flex justify-content-around">
                                <button onClick={addDatas} type="button" className="btn btn-outline-success size-button">
                                    {addIcon}Adicionar
                                </button>
                                <button onClick={cleanDatas} type="button" className="btn btn-outline-danger size-button">
                                    {clearIcon}Limpar
                                </button>
                            </div>
                        </form>
                        <hr />
                        {listDatas.map((oldListDatas) => {
                            return <div key={ idFunction() }>
                                        <label htmlFor="exampleInputEmail2" className="form-label">Nome: {oldListDatas.name}</label> <br />
                                        <label htmlFor="exampleInputEmail2" className="form-label">Email: {oldListDatas.email}</label> <br />
                                        <label htmlFor="exampleInputEmail2" className="form-label">Password: {oldListDatas.password}</label>
                                        <hr />
                                   </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;