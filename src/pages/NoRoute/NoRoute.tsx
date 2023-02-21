import React from "react";
import { Link } from "react-router-dom";
import './NoRoute.css';

function NoRoute() {
    return (
        <div>
            <h1>Oops!</h1>
            <h3>The page you are looking for doesn't seem to exist!</h3>
            <Link to="/">Click here</Link>
        </div>
    )
}
export default NoRoute;