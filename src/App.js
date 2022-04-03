import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./homePage/home";
import ContactUs from './contactUsPage/contactUs';
import Login from './logInAndRegistrationPage/logIn';

function app() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/LogIn" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default app;