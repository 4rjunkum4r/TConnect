import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Logo from "./logo.svg";
import { Link } from "react-router-dom";
import "./index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function Home() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}
function Navbar() {
  return (
    <nav className="navbar navbar-custom navbar-expand-md">
      <div className="container-fluid">
        <Link to="/Home">
          <img
            src={Logo}
            className="navbar-brand nav-brand-img align-top rounded"
            alt="T Connect Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa fa-angle-double-down"></span>
        </button>
        <div className="navbar-collapse collapse position-relative" id="navbar">
          <ul className="navbar-nav me-auto">
            <li className="mx-1">
              <Link to="/Home">
                <button className="btn btn-success nav-item-custom active">
                  Home
                </button>
              </Link>
            </li>
            <li className="mx-1">
              <Link to="/ContactUs">
                <button className="btn btn-success nav-item-custom">
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item mx-1">
            <Link to="/">
                <button className="btn btn-success nav-item-custom">
                  LogOut
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
function Profile() {
  return (
    <div className="container-fluid my-4">
      <div className="row">
        <div className="col mx-1 my-1">
          <div className="card">
            <img
              className="card-img-top"
              src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Priyanka</h5>
              <p className="card-text">
                <ul>
                  <li>DBMS</li>
                  <li>SQL</li>
                  <li>BACKEND</li>
                </ul>
              </p>
              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="emailButton"
                    >
                      Write E-mail
                    </button>
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="bookAnAppointment"
                    >
                      Whatsapp the Teacher
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col mx-1 my-1">
          <div className="card">
            <img
              className="card-img-top"
              src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Dummy Teacher 1</h5>
              <p className="card-text">
                <ul>
                  <li>Cyber Security</li>
                  <li>Database</li>
                  <li>Networking</li>
                </ul>
              </p>
              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="emailButton"
                    >
                      Write E-mail
                    </button>
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="bookAnAppointment"
                    >
                      Whatsapp the Teacher
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col mx-1 my-1">
          <div className="card">
            <img
              className="card-img-top"
              src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Dummy Teacher 1</h5>
              <p className="card-text">
                <ul>
                  <li>Cyber Security</li>
                  <li>Database</li>
                  <li>Networking</li>
                </ul>
              </p>
              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="emailButton"
                    >
                      Write E-mail
                    </button>
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="bookAnAppointment"
                    >
                      Whatsapp the Teacher
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col mx-1 my-1">
          <div className="card">
            <img
              className="card-img-top"
              src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Dummy Teacher 1</h5>
              <p className="card-text">
                <ul>
                  <li>Cyber Security</li>
                  <li>Database</li>
                  <li>Networking</li>
                </ul>
              </p>
              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="emailButton"
                    >
                      Write E-mail
                    </button>
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="bookAnAppointment"
                    >
                      Whatsapp the Teacher
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col mx-1 my-1">
          <div className="card">
            <img
              className="card-img-top"
              src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Dummy Teacher 1</h5>
              <p className="card-text">
                <ul>
                  <li>Cyber Security</li>
                  <li>Database</li>
                  <li>Networking</li>
                </ul>
              </p>
              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="emailButton"
                    >
                      Write E-mail
                    </button>
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="bookAnAppointment"
                    >
                      Whatsapp the Teacher
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col mx-1 my-1">
          <div className="card">
            <img
              className="card-img-top"
              src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Dummy Teacher 1</h5>
              <p className="card-text">
                <ul>
                  <li>Cyber Security</li>
                  <li>Database</li>
                  <li>Networking</li>
                </ul>
              </p>
              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="emailButton"
                    >
                      Write E-mail
                    </button>
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="bookAnAppointment"
                    >
                      Whatsapp the Teacher
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col mx-1 my-1">
          <div className="card">
            <img
              className="card-img-top"
              src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Dummy Teacher 1</h5>
              <p className="card-text">
                <ul>
                  <li>Cyber Security</li>
                  <li>Database</li>
                  <li>Networking</li>
                </ul>
              </p>
              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="emailButton"
                    >
                      Write E-mail
                    </button>
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="bookAnAppointment"
                    >
                      Whatsapp the Teacher
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col mx-1 my-1">
          <div className="card">
            <img
              className="card-img-top"
              src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Dummy Teacher 1</h5>
              <p className="card-text">
                <ul>
                  <li>Cyber Security</li>
                  <li>Database</li>
                  <li>Networking</li>
                </ul>
              </p>
              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="emailButton"
                    >
                      Write E-mail
                    </button>
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="bookAnAppointment"
                    >
                      Whatsapp the Teacher
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col mx-1 my-1">
          <div className="card">
            <img
              className="card-img-top"
              src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Dummy Teacher 1</h5>
              <p className="card-text">
                <ul>
                  <li>Cyber Security</li>
                  <li>Database</li>
                  <li>Networking</li>
                </ul>
              </p>
              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="emailButton"
                    >
                      Write E-mail
                    </button>
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-profile btn-primary"
                      id="bookAnAppointment"
                    >
                      Whatsapp the Teacher
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <footer className="footer">
      T-Connect<strong>© 2022</strong>
    </footer>
  );
}
function LogIn() {
  const [credentials, setCredentials] = useState({
    registrationNumber: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/student/studentLogin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          registrationNumber: credentials.registrationNumber,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      alert("You've logged In successfully. After clicking OK you will be redirected to Dashboard")
      navigate("/Home");
    } else {
      alert("False creds");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container modal-container">
      <div className="row">
        <div className="col-md-12">
          <div className="modal-box">
            <div className="modal-dialog" role="document">
              <div className="modal-content clearfix">
                <div className="modal-body">
                  <h3 className="title">T-Connect</h3>
                  <p className="description">
                    Login here using your Registration Number & Password
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <span className="input-icon">
                        <i className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="registrationNumber"
                        className="form-control"
                        placeholder="Enter registration number"
                        value={credentials.registrationNumber}
                        onChange={onChange}
                      />
                    </div>
                    <div className="form-group">
                      <span className="input-icon">
                        <i className="fas fa-key"></i>
                      </span>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={credentials.password}
                        onChange={onChange}
                      />
                    </div>
                    <button type="submit" className="btn mx-2 my-2">
                      LogIn
                    </button>
                    <Link to="/Register">
                      <button className="btn mx-2 my-2">
                        Click here to Register
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Register() {
  const [credentials, setCredentials] = useState({
    name: "",
    degree: "",
    registrationNumber: "",
    email: "",
    password: "",
    cpasswaord: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/student/createStudent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          degree: credentials.degree,
          registrationNumber: credentials.registrationNumber,
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      alert("You've successfully create an account. After clicking OK you will be redirected to Log In page");
      navigate("/");
    } else {
      alert("The user with same REGISTRATION NUMBER or EMAIL is already registered to our database");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container modal-container">
      <div className="row">
        <div className="col-md-12">
          <div className="modal-box">
            <div className="modal-dialog" role="document">
              <div className="modal-content clearfix">
                <div className="modal-body">
                  <h3 className="title">T-Connect</h3>
                  <p className="description">
                    Register with your Registration Number & Password
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <span className="input-icon">
                        <i className="fa-solid fa-user"></i>
                      </span>
                      <input
                        name="name"
                        id="name"
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <span className="input-icon">
                        <i className="fa-solid fa-graduation-cap"></i>
                      </span>
                      <input
                        name="degree"
                        id="degree"
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        placeholder="Enter Your degree"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <span className="input-icon">
                        <i className="fa-solid fa-id-card"></i>
                      </span>
                      <input
                        name="registrationNumber"
                        id="registrationNumber"
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        placeholder="Enter Your  Registration number"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <span className="input-icon">
                        <i className="fa-solid fa-at"></i>
                      </span>
                      <input
                        name="email"
                        id="email"
                        onChange={onChange}
                        type="email"
                        className="form-control"
                        placeholder="Enter Your Email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <span className="input-icon">
                        <i className="fa-solid fa-key"></i>
                      </span>
                      <input
                        name="password"
                        id="password"
                        onChange={onChange}
                        type="password"
                        className="form-control"
                        placeholder="Enter Your password"
                        minLength={8}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <span className="input-icon">
                        <i className="fa-solid fa-key"></i>
                      </span>
                      <input
                        name="cpassword"
                        id="cpassword"
                        onChange={onChange}
                        type="password"
                        className="form-control"
                        placeholder="Confirm Your Password"
                        minLength={8}
                        required
                      />
                    </div>
                    <button type="submit" className="btn mx-2 my-2">
                      Register
                    </button>
                    <Link to="/">
                      <button className="btn mx-2 my-2">
                        Click here to LogIn
                      </button>
                    </Link>
                  </form>
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
      <nav className="navbar navbar-custom navbar-expand-md">
        <div className="container-fluid">
          <Link to="/Home">
            <img
              src={Logo}
              className="navbar-brand nav-brand-img align-top rounded"
              alt="T Connect Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-angle-double-down"></span>
          </button>
          <div
            className="navbar-collapse collapse position-relative"
            id="navbar"
          >
            <ul className="navbar-nav me-auto">
              <li className="mx-1">
                <Link to="/Home">
                  <button className="btn btn-success nav-item-custom">
                    Home
                  </button>
                </Link>
              </li>
              <li className="mx-1">
                <Link to="/ContactUs">
                  <button className="btn btn-success nav-item-custom active">
                    Contact Us
                  </button>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item mx-1">
                <button
                  className="btn btn-success nav-item-custom"
                  type="submit"
                >
                  LogOut
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1 className="con-head">You could reach us in given Contact</h1>
      <div className="position-relative ">
        <ul className="con-ul">
          <li className="mx-4 my-4">
            <i className="fa-solid fa-square-phone">
              {" "}
              <strong>Tel: +91 7076279481</strong>
            </i>
          </li>
          <li className="mx-4 my-4">
            <i className="fa-solid fa-square-phone">
              {" "}
              <strong>Tel: +91 9755914445</strong>
            </i>
          </li>
          <li className="mx-4 my-4">
            <i className="fa-solid fa-square-phone">
              {" "}
              <strong>Tel: +91 9646579230</strong>
            </i>
          </li>
          <li className="mx-4 my-4">
            <i className="fa-solid fa-square-phone">
              {" "}
              <strong>Tel: +91 8979561347</strong>
            </i>
          </li>
          <li className="mx-4 my-4">
            <i className="fa-solid fa-envelope">
              {"    "}
              <strong>
                <a href="mailto:tconnectcontactus@gmail.com">
                  Send us an email
                </a>
              </strong>
            </i>
          </li>
          <li className="mx-4 my-4">
            <i className="fa-brands fa-whatsapp-square">
              {" "}
              <a href="https://wa.me/917076279481">WHATSAPP US</a>
            </i>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default App;
