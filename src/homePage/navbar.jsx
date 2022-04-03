import Logo from './images/logo.svg';
import {Link } from "react-router-dom"

function navbar() {
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

export default navbar;