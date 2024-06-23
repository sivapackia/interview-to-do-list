import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";


const Router=()=>{
    return(
        <>
        <BrowserRouter  basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Router