import React from "react";
import { Link } from "react-router-dom";
 
const Error = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex flex-column align-items-center">

                    <div>
                        <h1 className="fs-3 text-uppercase">Page Error 404</h1>
                        <Link className="btn btn-primary text-uppercase text-white" to="/">Back</Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Error;