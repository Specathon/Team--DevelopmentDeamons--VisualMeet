import React from 'react';
import './Header.scss';
import { Link } from 'react-scroll';
import icon from "../assets/icon.png";
import './Header.scss';
import '../scrollLogin/scrollLogin.scss';

const Header = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={icon} width="40" height="40" alt="" style={{ borderRadius: '10px' }}></img>
                    </a>
                    <a className="navbar-brand" href="#">Virtual Meet</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-3">
                            <li class="nav-item">
                                <Link className="ml-auto mr-3" to="login-center" smooth={true} style={{ color: "#fff" }}><button className="signin">Sign in</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="ml-auto mr-3" to="login-center" smooth={true} style={{ color: "#fff" }}>
                                    <button type="button" className="btn btn-outline-warning ml-2"><span>Register</span></button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* <a className="navbar-brand" href="#">
                        <img src={icon} width="40" height="40" alt="" style={{ borderRadius: '10px' }}></img>
                    </a>
                    <a className="navbar-brand" href="/mainblog">Virtual Meet</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <Link className=" signin ml-auto mr-3 text-white" to="login-center" smooth={true}>Sign in</Link>
                        <button type="button" className="btn btn-outline-warning ml-2">Register</button>
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default Header;

