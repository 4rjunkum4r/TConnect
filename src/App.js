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
            className="navbar-brand nav-brand-img align-top"
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
          <span className="fa-solid fa-grip-lines"></span>
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
      <div className="row my-1">
        <div className="col mx-1 my-1">
          <div className="card">
            <img
              className="card-img-top"
              src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
              alt=""
            />
            <div className="card-body">
              <h1 className="card-title">Priyanka Athia</h1>

              <p className="card-text">
                <strong>
                  Experienced in DBMS, Expert in BACKEND handling.
                </strong>
              </p>

              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="tel:8665562570"
                      role="button"
                    >
                      Call the Teacher
                    </a>
                  </div>
                  <div className="col-auto ms-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="https://wa.me/917076279481"
                      role="button"
                    >
                      Whatsapp the Teacher
                    </a>
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
              <h1 className="card-title">Shukanta Ghosh</h1>

              <p className="card-text">
                <strong>
                  Experienced in GAME DEVELOPMENT, Expert in UNITY.
                </strong>
              </p>

              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="tel:8665562570"
                      role="button"
                    >
                      Call the Teacher
                    </a>
                  </div>
                  <div className="col-auto ms-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="https://wa.me/917076279481"
                      role="button"
                    >
                      Whatsapp the Teacher
                    </a>
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
              <h1 className="card-title">Pranjal Prem Jain</h1>

              <p className="card-text">
                <strong>
                  Experienced in Data science, Expert in Data manipulation
                </strong>
              </p>

              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="tel:8665562570"
                      role="button"
                    >
                      Call the Teacher
                    </a>
                  </div>
                  <div className="col-auto ms-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="https://wa.me/917076279481"
                      role="button"
                    >
                      Whatsapp the Teacher
                    </a>
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
              <h1 className="card-title">Anindita Malik</h1>

              <p className="card-text">
                <strong>
                  Experienced in Forensic science, Expert in Evidence Analysis
                </strong>
              </p>

              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="tel:8665562570"
                      role="button"
                    >
                      Call the Teacher
                    </a>
                  </div>
                  <div className="col-auto ms-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="https://wa.me/917076279481"
                      role="button"
                    >
                      Whatsapp the Teacher
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-1">
        <div className="col mx-1 my-1">
          <div className="card">
            <img
              className="card-img-top"
              src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
              alt=""
            />
            <div className="card-body">
              <h1 className="card-title">Dr. Jyoti Dalal</h1>

              <p className="card-text">
                <strong>Experienced in C++, Expert in Programming.</strong>
              </p>

              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="tel:8665562570"
                      role="button"
                    >
                      Call the Teacher
                    </a>
                  </div>
                  <div className="col-auto ms-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="https://wa.me/917076279481"
                      role="button"
                    >
                      Whatsapp the Teacher
                    </a>
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
              <h1 className="card-title">Mirja rashid</h1>

              <p className="card-text">
                <strong>
                  Experienced in CyberForensic, Expert in Hacking.
                </strong>
              </p>

              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="tel:8665562570"
                      role="button"
                    >
                      Call the Teacher
                    </a>
                  </div>
                  <div className="col-auto ms-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="https://wa.me/917076279481"
                      role="button"
                    >
                      Whatsapp the Teacher
                    </a>
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
              <h1 className="card-title">Manik Mehra</h1>

              <p className="card-text">
                <strong>
                  Experienced in Graphic Design, Expert in Blender
                </strong>
              </p>

              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="tel:8665562570"
                      role="button"
                    >
                      Call the Teacher
                    </a>
                  </div>
                  <div className="col-auto ms-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="https://wa.me/917076279481"
                      role="button"
                    >
                      Whatsapp the Teacher
                    </a>
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
              <h1 className="card-title">Dr. Yasir Afaq</h1>

              <p className="card-text">
                <strong>
                  Experienced in CyberSecurity, Expert in Digital security
                </strong>
              </p>

              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="tel:8665562570"
                      role="button"
                    >
                      Call the Teacher
                    </a>
                  </div>
                  <div className="col-auto ms-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="https://wa.me/917076279481"
                      role="button"
                    >
                      Whatsapp the Teacher
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-1">
        <div className="col mx-1 my-1">
          <div className="card">
            <img
              className="card-img-top"
              src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
              alt=""
            />
            <div className="card-body">
              <h1 className="card-title">Dr. Sakshi Dua</h1>

              <p className="card-text">
                <strong>
                  Experienced in DBMS, Expert in Back-end Knowledge
                </strong>
              </p>

              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="tel:8665562570"
                      role="button"
                    >
                      Call the Teacher
                    </a>
                  </div>
                  <div className="col-auto ms-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="https://wa.me/917076279481"
                      role="button"
                    >
                      Whatsapp the Teacher
                    </a>
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
              <h1 className="card-title">Dr. Ashok Mittal</h1>

              <p className="card-text">
                <strong>
                  Experienced in Digital Marketing, Expert in market stocks
                </strong>
              </p>

              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="tel:8665562570"
                      role="button"
                    >
                      Call the Teacher
                    </a>
                  </div>
                  <div className="col-auto ms-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="https://wa.me/917076279481"
                      role="button"
                    >
                      Whatsapp the Teacher
                    </a>
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
              <h1 className="card-title">Dr. Arjun Kumar</h1>

              <p className="card-text">
                <strong>Experienced in WEB-DEVOPS, Expert in NodeJS</strong>
              </p>

              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="tel:8665562570"
                      role="button"
                    >
                      Call the Teacher
                    </a>
                  </div>
                  <div className="col-auto ms-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="https://wa.me/917076279481"
                      role="button"
                    >
                      Whatsapp the Teacher
                    </a>
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
              <h1 className="card-title">Dr. Joshi Puran</h1>

              <p className="card-text">
                <strong>
                  Experienced in DBMS, Expert in Back-end Knowledge
                </strong>
              </p>

              <div className="container">
                <div className="row ">
                  <div className="col-auto me-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="tel:8665562570"
                      role="button"
                    >
                      Call the Teacher
                    </a>
                  </div>
                  <div className="col-auto ms-auto my-1">
                    <a
                      className="btn btn-profile btn-primary"
                      href="https://wa.me/917076279481"
                      role="button"
                    >
                      Whatsapp the Teacher
                    </a>
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
      alert(
        "You've logged In successfully. After clicking OK you will be redirected to Dashboard"
      );
      navigate("/Home");
    } else {
      alert("Invalid Credentials or Student is not registered yet. If not Register kindly click on second button.");
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
                        required
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
                        required
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
      alert(
        "You've successfully create an account. After clicking OK you will be redirected to Log In page"
      );
      navigate("/");
    } else {
      alert(
        "The user with same REGISTRATION NUMBER or EMAIL is already registered to our database"
      );
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
                        minLength={8}
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
      <h1 className="con-head">You could reach us in given Contact</h1>
      <div className="position-relative ">
        <ul className="con-ul">

          <li className="mx-4 my-4">

            <strong><a href="tel:+91 7076279481">
              <i className="fa-solid fa-square-phone">
                {" "}</i>
            </a> TEL: +91 7076279481</strong>

          </li>
          <li className="mx-4 my-4">

            <strong><a href="tel:+91 9646579230">
              <i className="fa-solid fa-square-phone">
                {" "}</i>
            </a> TEL: +91 9646579230</strong>

          </li><li className="mx-4 my-4">

            <strong><a href="tel:+91 9641234123">
              <i className="fa-solid fa-square-phone">
                {" "}</i>
            </a> TEL: +91 9641234123</strong>

          </li>
          <li className="mx-4 my-4">

            <strong><a href="tel:+91 7865342345">
              <i className="fa-solid fa-square-phone">
                {" "}</i>
            </a> TEL: +91 7865342345</strong>

          </li>
          <li className="mx-4 my-4">

            <strong><a href="https://wa.me/917076279481">
              <i className="fa-brands fa-whatsapp-square">
                {" "}</i>
            </a> WHATSAPP US</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default App;
