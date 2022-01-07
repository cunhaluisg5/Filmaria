import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

function Header(){
    return(
        <div className="header">
            <Link className="logo" to="/">Filmaria</Link>
            <Link className="favoritos" to="/">Salvos</Link>
        </div>
    );
};

export default Header;