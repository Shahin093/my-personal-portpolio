import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (

        <nav hrep='home' className="navbar navbar-expand-lg navbar-red navbar-dark">
            <div className="wrapper">


            </div>
            <div className="container all-show">
                <a className="navbar-brand" href="/">Shidul Islam <i className="fa fa-codepen"></i></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="#">About us</a> */}
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="projects">Projects</a> */}
                            <Link className="nav-link" to='/projects'>Projects</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/contact'>Contact me</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                    </ul>

                </div>
                <div className="text-justify resume ">

                    {/* <a className=" mr-2 btn btn-outline-info btn-md mt-3 btn-primary" href="https://drive.google.com/file/d/1ghCV5owvQRrFXSEy-YV-IGAPg5rBCyGj/view?usp=sharing" target="blank"><span>DownLoad Resume</span></a> */}

                </div>
            </div>
        </nav >
    );
};

export default Navbar;