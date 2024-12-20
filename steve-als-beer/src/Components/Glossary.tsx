import React from "react";
import home from "./Graphics/home.png";
import { Link } from "react-router-dom";

export function Glossary (): React.JSX.Element {
    return (
        <div className="App-header">
            <div className="home-logo">
                <Link to="/" ><img src={home} alt="Go Home" style={{height: "100px", width: "100px"}} /></Link>
            </div>
            <div className="center-content">
                <h1>This is where the Glossary will go.</h1>
            </div>
        </div>
    )
}

export default Glossary;