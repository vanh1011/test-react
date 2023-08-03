import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../apiService/apiService";
import { toast } from "react-toastify";
import { VscEye, VscEyeClosed } from "react-icons/vsc"
import { BiHide, BiShow } from "react-icons/bi"
import './Register.scss';
const Register = (props) => {
    const [useName, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [isShowpassword, setIsshowpassword] = useState(false);


    const handleRegister = async () => { // xu ly api de regis

        let data = await postRegister(useName, email, password)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/login')
        }
        // them dau + de chuyen stirng sang number 
        if (data && +data.EC !== 0) {
            toast.error(data.EM);
        }
        console.log("check res", data)
    }
    return (
        <div className="login-container">
            <div className="header ">
                <span>Already have an account  ?</span>
                <button onClick={() => navigate('/login')}>Log in </button>
            </div>
            <div className="title col-4 mx-auto">
                Quizz courses
            </div>
            <div className="welcome col-4 mx-auto">
                Register
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>User name</label>
                    <input
                        type={"useName"}
                        className="form-control"
                        value={useName}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Email (*) </label>
                    <input
                        type={"email"}
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group pass-group">
                    <label>password (*)</label>
                    <input
                        type={isShowpassword ? "text" : "password"}
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}

                    />
                    {isShowpassword ?
                        <span className="icons-eye"
                            onClick={() => setIsshowpassword(false)}>
                            <BiShow />
                        </span> :
                        <span className="icons-eye"
                            onClick={() => setIsshowpassword(true)}>
                            <BiHide />
                        </span>

                    }


                </div>
                <div>
                    <button
                        className="btn-submit"
                        onClick={() => handleRegister()}
                    >Register</button>

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
export default Register