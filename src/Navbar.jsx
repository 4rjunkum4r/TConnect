
import './index.css';
function Navbar() {
    return (
        <div classname="container">
        <ul classname="nav nav-pills">
            <li classname="nav-item">
                <a classname="nav-link active" aria-current="page" href="#"><img src="images/CircularLogo.png" alt="Brand Logo" classname="src" /></a>
            </li>
            <li classname="nav-item dropdown">
                <a classname="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                    aria-expanded="false">More Features</a>
                <ul classname="dropdown-menu">
                    <li><a classname="dropdown-item" href="#">T-Connect</a></li>
                    <li><a classname="dropdown-item" href="#">Another action</a></li>
                    <li><a classname="dropdown-item" href="#">Something else here</a></li>
                    <li>
                        <hr classname="dropdown-divider" />
                    </li>
                    <li><a classname="dropdown-item" href="#">Separated link</a></li>
                </ul>
            </li>
            <li classname="nav-item">
                <a classname="nav-link" href="index.html">Login</a>
            </li>
            <li classname="nav-item">
                <form classname="form-inline my-2 my-lg-6">
                    <input classname="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button classname="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    <button classname="btn btn-outline-success my-2 my-sm-0">Log Out</button>
                </form>
            </li>
        </ul>

    </div>
    );
}

export default Navbar;