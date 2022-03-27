import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Hello } from "../views/Hello";
import { Home } from "../views/Home";

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/hello-world' element={<Hello/>}/>
            </Routes>
        </BrowserRouter>
    );
}
