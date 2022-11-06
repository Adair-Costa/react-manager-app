import React, { useState } from "react";
import { v4 as idFunction } from "uuid";
import "./Calculator.css";

const Calculator = () => {

    // hook useState
    const [number, setNumber] = useState(() => {
        return 0;
    });

    // functions
    function calculator() {
        if (isNaN(number) || number === "") {
            return [];
        }

        let myArray = [];

        for (let i = 0; i <= 12; i++) {
            myArray.push(`${number} x ${i} = ${number * i}`);
        }

        return myArray;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex flex-column align-items-center">

                    <div className="mb-2">
                        <h1 className="fs-3 title-calc">Calculadora</h1>
                    </div>

                    <div className="w-50">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Adicionar Número</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={number} onChange={(event) => { setNumber(event.target.value) }} />
                            </div>

                            {calculator().map((oldNumber) => {
                                return <p key={idFunction()}>{oldNumber}</p>
                            })}
                        </form>

                        <hr />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Calculator