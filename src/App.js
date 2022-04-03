import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Logo from './logo.svg';
import {Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/LogIn" element={<LogIn />} />
                    <Route path="/StudentProfile" element={<StudentProfile/>}/>
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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand " href="#"><img src={Logo} width="100" height="100" class="d-inline-block align-top rounded" alt="T Connect Logo" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#"><strong><Link to="/">Home</Link></strong><span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><strong><Link to="/ContactUs">Contact Us</Link></strong></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><strong><Link to="/StudentProfile">Profile</Link></strong></a>
                    </li>
                </ul>
                <div>
                    <form class="form-inline my-2 my-lg-0 d-flex">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        <button class="btn btn-outline-success my-2 my-sm-0"><Link to="/LogIn">LogIn/Register</Link></button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
function Profile() {
    return (
        <Container>
            <Row>
                <Col sm><div class="card border-primary mb-3">
                    <Card>
                        <Card.Img variant="top" src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" />
                        <Card.Body>
                            <Card.Title>Dummy Teacher 1</Card.Title>
                            <Card.Text>
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
                                <a href="#" class="btn btn-primary">Write E-mail</a>
                                <a href="#" class="btn btn-primary">Book an appointment</a>
                            </Card.Text>
                        </Card.Body>
                    </Card></div>
                </Col>

                <Col sm><div class="card border-primary mb-3">
                    <Card>
                        <Card.Img variant="top" src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" />
                        <Card.Body>
                            <Card.Title>Dummy Teacher 1</Card.Title>
                            <Card.Text>
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
                                <a href="#" class="btn btn-primary">Write E-mail</a>
                                <a href="#" class="btn btn-primary">Book an appointment</a>
                            </Card.Text>
                        </Card.Body>
                    </Card></div>
                </Col>

                <Col sm><div class="card border-primary mb-3">
                    <Card>
                        <Card.Img variant="top" src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" />
                        <Card.Body>
                            <Card.Title>Dummy Teacher 1</Card.Title>
                            <Card.Text>
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
                                <a href="#" class="btn btn-primary">Write E-mail</a>
                                <a href="#" class="btn btn-primary">Book an appointment</a>
                            </Card.Text>
                        </Card.Body>
                    </Card></div>
                </Col>
            </Row>
            <Row>
                <Col sm><div class="card border-primary mb-3">
                    <Card>
                        <Card.Img variant="top" src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" />
                        <Card.Body>
                            <Card.Title>Dummy Teacher 1</Card.Title>
                            <Card.Text>
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
                                <a href="#" class="btn btn-primary">Write E-mail</a>
                                <a href="#" class="btn btn-primary">Book an appointment</a>
                            </Card.Text>
                        </Card.Body>
                    </Card></div>
                </Col>

                <Col sm><div class="card border-primary mb-3">
                    <Card>
                        <Card.Img variant="top" src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" />
                        <Card.Body>
                            <Card.Title>Dummy Teacher 1</Card.Title>
                            <Card.Text>
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
                                <a href="#" class="btn btn-primary">Write E-mail</a>
                                <a href="#" class="btn btn-primary">Book an appointment</a>
                            </Card.Text>
                        </Card.Body>
                    </Card></div>
                </Col>

                <Col sm><div class="card border-primary mb-3">
                    <Card>
                        <Card.Img variant="top" src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" />
                        <Card.Body>
                            <Card.Title>Dummy Teacher 1</Card.Title>
                            <Card.Text>
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
                                <a href="#" class="btn btn-primary">Write E-mail</a>
                                <a href="#" class="btn btn-primary">Book an appointment</a>
                            </Card.Text>
                        </Card.Body>
                    </Card></div>
                </Col>
            </Row>
            <Row>
                <Col sm><div class="card border-primary mb-3">
                    <Card>
                        <Card.Img variant="top" src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" />
                        <Card.Body>
                            <Card.Title>Dummy Teacher 1</Card.Title>
                            <Card.Text>
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
                                <a href="#" class="btn btn-primary">Write E-mail</a>
                                <a href="#" class="btn btn-primary">Book an appointment</a>
                            </Card.Text>
                        </Card.Body>
                    </Card></div>
                </Col>

                <Col sm><div class="card border-primary mb-3">
                    <Card>
                        <Card.Img variant="top" src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" />
                        <Card.Body>
                            <Card.Title>Dummy Teacher 1</Card.Title>
                            <Card.Text>
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
                                <a href="#" class="btn btn-primary">Write E-mail</a>
                                <a href="#" class="btn btn-primary">Book an appointment</a>
                            </Card.Text>
                        </Card.Body>
                    </Card></div>
                </Col>

                <Col sm><div class="card border-primary mb-3">
                    <Card>
                        <Card.Img variant="top" src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" />
                        <Card.Body>
                            <Card.Title>Dummy Teacher 1</Card.Title>
                            <Card.Text>
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
                                <a href="#" class="btn btn-primary">Write E-mail</a>
                                <a href="#" class="btn btn-primary">Book an appointment</a>
                            </Card.Text>
                        </Card.Body>
                    </Card></div>
                </Col>
            </Row>
        </Container>
    );
}
function Footer() {
    return (
        <div>
            <footer>
                <p>T-Connect<strong>© 2022</strong></p>
            </footer>
        </div>
    );
}
function LogIn() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="modal-box">
                    <div class="modal-dialog" role="document">
                                <div class="modal-content clearfix">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                        aria-hidden="true">×</span></button>
                                    <div class="modal-body">
                                        <h3 class="title">Account Login/ Registration</h3>
                                        <p class="description">Login here using your Registration Number & Password</p>
                                        <div class="form-group">
                                            <span class="input-icon"><i class="fa fa-user"></i></span>
                                            <input type="text" class="form-control" placeholder="Enter registration number" />
                                        </div>
                                        <div class="form-group">
                                            <span class="input-icon"><i class="fas fa-key"></i></span>
                                            <input type="password" class="form-control" placeholder="Enter your password" />
                                        </div>
                                        <div class="form-group checkbox">
                                            <input type="checkbox" />
                                            <label>Remember Me</label>
                                        </div>
                                        <a href="#" class="forgot-pass">Forgot Password?</a>
                                        <button id="myButton" class="btn">Login/Register</button>
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
function StudentProfile(){
    return(
        <h1 className="Student"> This must be Student Profile</h1>
        
    );
}

export default App;