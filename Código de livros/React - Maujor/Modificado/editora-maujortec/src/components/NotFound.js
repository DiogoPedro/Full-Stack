import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return(
        <main className="principal">
            <h2>404!</h2>
            <p>
                Pagina nao encontrada. <Link to='/'>Ir para home Page</Link>
            </p>
        </main>
    );
};

export default NotFound;
