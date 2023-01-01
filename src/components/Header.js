import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean Restaurant, focused on
                    trationalal recipes served with a modern twist
                </p>
                <Link
                    to="/reservation"
                    className="btn"
                >
                    Reserve a table
                </Link>
            </div>
        </header>
    );
}

export default Header;
