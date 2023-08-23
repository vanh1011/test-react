// import { logDOM } from "@testing-library/react"
import './Login.scss';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../apiService/apiService";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { dologin } from "../../redux/action/userAction";
import { ImSpinner10 } from "react-icons/im";
const Login = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsloading] = useState(false);
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleLogin = async () => {
        //validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error("Invalid email ")
            return;
        }
        if (!password) {
            toast.error('invalid password');
            return;
        }
        setIsloading(true);
        // submit api
        let data = await postLogin(email, password);
        if (data && data.EC === 0) {
            dispatch(dologin(data))
            toast.success(data.EM);
            setIsloading(false);
            // navigate('/')
        }
        // them dau + de chuyen stirng sang number 
        if (data && +data.EC !== 0) {
            toast.error(data.EM);
            setIsloading(false);

        }
    }
    return (
        <div className="login-container">
            <div className="header ">
                <span>Don't have account yet ?</span>
                <button onClick={() => navigate('/register')}>Sign up</button>
            </div>
            <div className="title col-4 mx-auto">
                ho viet anh iu em seng
            </div>
            <div className="welcome col-4 mx-auto">
                where is ove ?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type={"email"}
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>password</label>
                    <input
                        type={"password"}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                </div>
                <span>forgot password</span>
                <div>
                    <button
                        className="btn-submit"
                        onClick={() => handleLogin()}
                        disabled={isLoading}
                    >
                        {isLoading === true && <ImSpinner10 className="loader-icon" />}                        <span> Login </span>
                    </button>

                </div>
                <div className=" text-center">
                    <span className="back" onClick={() => {
                        navigate('/')
                    }}>
                        &#60;&#60; Go to Homepage</span >
                </div>
            </div>
        </div >
    )
}
export default Login;