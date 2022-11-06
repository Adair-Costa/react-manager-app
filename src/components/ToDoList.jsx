import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // importacao do fontAwesomeIcon
import { faCirclePlus, faTrash } from '@fortawesome/free-solid-svg-icons'; // importacao dos icones
import { v4 as idFunction } from "uuid";
import "./ToDoList.css";


const ToDoList = () => {

    // hook useState
    const [toDoList, setToDoList] = useState(() => {
        return "";
    });

    const [listToDoList, setListToDoList] = useState(() => {
        return [];
    });

    // hook useRef
    const focusRef = useRef();

    // functions
    function addToDoList() {
        // vericar campo vazio
        if (toDoList === "") {
            focusRef.current.focus();
            return;
        }

        // adicionar tarefa
        setListToDoList((oldToDoList) => {
            return [...oldToDoList, { id: idFunction(), body: toDoList }];
        });

        // limpar input
        setToDoList(() => {
            return "";
        });
    }

    // remove uma tarefa
    function removeToDoList(id) {
        let removedToDoList = listToDoList.filter((oldList) => {
            return oldList.id !== id;
        })

        setListToDoList(removedToDoList);
    }

    // limpar toda a tarefa
    function cleanToDoList() {
        setListToDoList(() => {
            return [];
        });
    }

    // useEffect
    // carregar lista de tarefas no localStorage
    useEffect(() => {
        if (localStorage.getItem("minhas_tarefas") !== null) {
            setListToDoList(JSON.parse(localStorage.getItem("minhas_tarefas")));
        }
    }, []);

    // atualizar a lista de tarefas no localStorage
    useEffect(() => {
        localStorage.setItem("minhas_tarefas", JSON.stringify(listToDoList));
    }, [listToDoList]);


    // icons
    const addIcon = <FontAwesomeIcon icon={faCirclePlus} className="me-2 hidden-icons" />
    const clearIcon = <FontAwesomeIcon icon={faTrash} className="me-2 hidden-icons" />

    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex flex-column align-items-center">

                    <div className="mb-2">
                        <h1 className="fs-3 text-uppercase title-list">Lista de tarefas</h1>
                    </div>

                    <div className="w-50 col-size">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label text-uppercase">Tarefas</label>
                                <input ref={focusRef} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={toDoList} onChange={(event) => { setToDoList(event.target.value) }} />
                            </div>

                            <div className="d-flex justify-content-around">
                                <button onClick={addToDoList} type="button" className="btn btn-outline-success button-size">
                                    {addIcon}Adicionar
                                </button>
                                <button onClick={cleanToDoList} type="button" className="btn btn-outline-danger button-size">
                                    {clearIcon}Limpar
                                </button>
                            </div>
                        </form>
                        <hr />

                        {listToDoList.map((oldList) => {
                            return <p key={idFunction()}>{oldList.body}<button className="btn btn-outline-danger remove-size button-size" onClick={() => { removeToDoList(oldList.id) }}>Remover</button></p>
                        })}
                        <hr />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ToDoList;