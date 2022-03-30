import Logo from './images/logo.svg';

function navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><img className="logo" src={Logo} alt="Logo" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a href="#"><strong>Home</strong></a>
                    </li>
                    <li className="nav-item">
                        <a href="#"><strong>Profile</strong></a>
                    </li>
                </ul>
            </div>
            <div className="d-flex">
                <form classname="d-flex">
                    <input classname="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button classname="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    <button classname="btn btn-outline-success my-2 my-sm-0">LogIn/Register</button>
                </form>
            </div>
        </nav>
    );
}

export default navbar;