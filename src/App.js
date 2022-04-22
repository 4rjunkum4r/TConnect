import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Logo from './logo.svg';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/LogIn" element={<LogIn />} />
                    <Route path="/Profile" element={<YourProfile />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
function Home() {
    return <div>
        <Navbar />
        <Profile />
        <Footer />
    </div>

}
function Navbar() {
    return (
        <nav className="navbar navbar-custom navbar-expand-md">
            <div className="container-fluid">
            <a class="navbar-brand" href="#"><img src={Logo} className="nav-brand-img align-top rounded" alt="T Connect Logo" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa fa-angle-double-down"></span>
        </button>
            <div className="navbar-collapse collapse position-relative" id="navbar">
                <ul className="navbar-nav me-auto">
                    <li className="mx-1">
                        <Link to="/Home">
                            <button className="btn btn-success nav-item-custom active">Home</button>
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/ContactUs">
                            <button className="btn btn-success nav-item-custom">Contact Us</button>
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link to="/Profile">
                            <button className="btn btn-success nav-item-custom">Your Profile</button>
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item mx-1">
                        <form>
                            <input class="form-control " type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </li>
                    <li className="nav-item mx-1">
                        <button class="btn btn-success nav-item-custom" type="submit">Search</button>
                    </li>
                    <li className="nav-item mx-1">
                        <Link to="/LogIn"><button className="btn btn-success nav-item-custom">LogIn/Register</button></Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}
function Profile() {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <div className="card border-custom">
                        <div className="card">
                            <img className="card-img-top" src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Dummy Teacher 1</h5>
                                <p className="card-text">
                                    <ul>
                                        <li>
                                            Cyber Security
                                        </li>
                                        <li>
                                            Database
                                        </li>
                                        <li>
                                            Networking
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-2 btn-primary">Write E-mail</a>
                                    <a href="#" className="btn btn-2 my-2 mx-2 btn-primary">Book an appointment</a>
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card border-custom">
                            <div className="card" />
                            <img className="card-img-top" src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Dummy Teacher 1</h5>
                                <p className="card-text">
                                    <ul>
                                        <li>
                                            Cyber Security</li>
                                        <li>
                                            Database</li>
                                        <li>
                                            Networking
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary">Write E-mail</a>
                                    <a href="#" className="btn btn-2 btn-primary">Book an appointment</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card border-custom">
                            <div className="card" />
                            <img className="card-img-top" src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Dummy Teacher 1</h5>
                                <p className="card-text">
                                    <ul>
                                        <li>
                                            Cyber Security</li>
                                        <li>
                                            Database</li>
                                        <li>
                                            Networking
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary">Write E-mail</a>
                                    <a href="#" className="btn btn-2 btn-primary">Book an appointment</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card border-custom">
                            <div className="card" />
                            <img className="card-img-top" src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Dummy Teacher 1</h5>
                                <p className="card-text">
                                    <ul>
                                        <li>
                                            Cyber Security</li>
                                        <li>
                                            Database</li>
                                        <li>
                                            Networking
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary">Write E-mail</a>
                                    <a href="#" className="btn btn-2 btn-primary">Book an appointment</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
}

function Footer() {
    return (
            <div className="footer">
                <footer>
                    <p>T-Connect<strong>© 2022</strong></p>
                </footer>
            </div>
            );
}
            function LogIn() {
    return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="modal-box">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content clearfix">
                                    <div className="modal-body">
                                        <h3 className="title">Account Login/ Registration</h3>
                                        <p className="description">Login here using your Registration Number & Password</p>
                                        <div className="form-group">
                                            <span className="input-icon"><i className="fa fa-user"></i></span>
                                            <input type="text" className="form-control" placeholder="Enter registration number" />
                                        </div>
                                        <div className="form-group">
                                            <span className="input-icon"><i className="fas fa-key"></i></span>
                                            <input type="password" className="form-control" placeholder="Enter your password" />
                                        </div>
                                        <div className="form-group checkbox">
                                            <input type="checkbox" />
                                            <label>Remember Me</label>
                                        </div>
                                        <a href="#" className="forgot-pass">Forgot Password?</a>
                                        <button id="myButton" className="btn">Login/Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
}
            function ContactUs() {
    return (
            <div>
                <h1>You could reach us in given Contact</h1>
                <ul>
                    <li>
                        <strong>
                            Tel: +91 XXXXXXXXXX
                        </strong>
                    </li>
                    <li>
                        <strong>
                            Email:- tconnectcontactus@gmail.com
                        </strong>
                    </li>
                    <li>
                        <strong>
                            Facebook:- *Here will be facebook icon*
                        </strong>
                    </li>
                    <li>
                        <strong>
                            <a href="https://wa.me/917076279481">Whatsapp Me</a>
                        </strong>
                    </li>
                </ul>
            </div>
            );
}
            function YourProfile() {
    return (
            <div className="container">
                <img className="yp" src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"></img>
            </div>

            );
}

            export default App;