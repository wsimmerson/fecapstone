import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import OrderOnline from "../pages/OrderOnline";
import Menu from "../pages/Menu";
import Reservation from "../pages/Reservation";

function Main() {
    return (
        <main>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/menu"
                    element={<Menu />}
                />
                <Route
                    path="/order"
                    element={<OrderOnline />}
                />
                <Route
                    path="/reservation"
                    element={<Reservation />}
                />
            </Routes>
        </main>
    );
}

export default Main;
