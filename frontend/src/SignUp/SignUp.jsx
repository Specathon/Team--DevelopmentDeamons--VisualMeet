import React, {useState} from 'react';
import "./SignUp.scss";
import signUp from "../assets/signUp.svg";
import Avatar from "./Avatar/Avatar";
import wave from "../assets/wave.png";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
const SignUp = () =>{
    const [gender, setgender] = useState(1);
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState('');
    const [isActivePass, setIsActivePass] = useState(false);
    const [valuePass, setValuePass] = useState('');
    const [isActiveEmail, setIsActiveEmail] = useState(false);
    const [valueEmail, setValueEmail] = useState('');
    const H= useHistory();
    const handleTextChange = (text) => {
        setValue(text);
        if (text !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }
    const handleTextChangePass = (text) => {
        setValuePass(text);

        if (text !== '') {
            setIsActivePass(true);
        } else {
            setIsActivePass(false);
        }
    }
    const handleTextChangeEmail = (text) => {
        setValueEmail(text);

        if (text !== '') {
            setIsActiveEmail(true);
        } else {
            setIsActiveEmail(false);
        }
    }

    const changeGender = () => {
        if(gender === 1){
            setgender(0);
            console.log(gender);
        }
        else{
            setgender(1);
            console.log(gender);
        }
    }
    const submitMember = async (event) => {
        event.preventDefault(); 
        console.log(`${gender} ${value} ${valueEmail} ${valuePass}`);
        const info = {"gender":gender,"username":value,"rollno":value,"email":valueEmail,"password":valuePass}
        try{
            console.log("hiii");
            let data = await axios({
                method: 'post',
                url:'http://127.0.0.1:8000/studentStore/',
                headers:{'Authorization':"Token de5fca1fb449f586b63136af9a12ab5afc96602e"},
                data:info,
                responseType: 'json'
            });
            console.log(data);
            const fun = () => H.push("/mainblog");
            fun();
        }
        catch{
            console.log("error");
        }
    }
    return(
        <div className="signUpPage wholesignup">
            <img className="wave" src={wave} alt="wallpaper"></img>
            <div className="container">
                <img src={signUp} alt="sigup" className="img"></img>
                <div className="login-content">
                    <form className="form">
                        <h2 className="title">SignUP</h2>
                        <Avatar gender={gender}></Avatar>
                        <div className="input-div one">
                            <div className="i">
                                    <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                    <h5 className={isActive ? "Active" : ""}>RollNumber</h5>
                                    <input type="text" className="input" value={value}
                                    onChange={(e) => handleTextChange(e.target.value)} required></input>
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                    <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                    <h5 className={isActiveEmail ? "Active" : ""}>Email</h5>
                                    <input type="email" class="input" value={valueEmail}
                                    onChange={(e) => handleTextChangeEmail(e.target.value)} required></input>
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i"> 
                                    <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                    <h5 className={isActivePass ? "Active" : ""}>Password</h5>
                                    <input type="password" class="input" value={valuePass}
                                    onChange={(e) => handleTextChangePass(e.target.value)} required></input>
                            </div>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                {gender === 1? "Male" : "Female"}
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" onClick = {changeGender} href="#">Male</a></li>
                                <li><a className="dropdown-item" onClick = {changeGender} href="#">Female</a></li>
                            </ul>
                        </div>
                        <br/>
                        <a href="/SignIn" className="have" m-auto>Already a Member?</a>
                        <input type="submit" className="btn" onClick={submitMember} value="SignUp"></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;