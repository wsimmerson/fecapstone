import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import OrderOnline from "../pages/OrderOnline";
import Menu from "../pages/Menu";
import Reservation from "../pages/Reservation";

const updateTimes = (state, action) => {
    console.log(state);
    return state;
};

const initializeTimes = () => {
    return [17, 18, 19, 20, 21, 22];
};

function Main() {
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        initializeTimes,
        initializeTimes
    );

    return (
        <main className="">
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
                    element={
                        <Reservation
                            availableTimes={availableTimes}
                            dispatch={dispatch}
                        />
                    }
                />
            </Routes>
        </main>
    );
}

export default Main;
export { updateTimes, initializeTimes };
