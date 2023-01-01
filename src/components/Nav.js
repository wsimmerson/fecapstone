import React from "react";

function Nav() {
    return (
        <nav>
            <img
                className="brand"
                src="/assets/logo.png"
                alt=""
            />
            <ul>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>Menu</a>
                </li>
                <li>
                    <a>Reservations</a>
                </li>
                <li>
                    <a>Order Online</a>
                </li>
                <li>
                    <a>Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
