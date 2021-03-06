import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './login.css';

const Login = () => {

    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState({
        userId: '',
        password: '',
    })
    const onClick = () => {
        // LoginAPI(loginData);
        dispatch({
            type: 'LOG_IN_REQUEST',
            data: { loginData },
        });
    }
    const onChangeId = (e) => {
        setLoginData({
            ...loginData,
            userId: e.target.value,
        })
    }
    const onChangePw = (e) => {
        setLoginData({
            ...loginData,
            password: e.target.value,
        })
    }

    return(
        <>
            <div className="login-page">
                <div className="form">
                <div className="login-form">
                    <input type="text" name="userId" placeholder="아이디" onChange={onChangeId} />
                    <input type="password" name="password" placeholder="비밀번호" onChange={onChangePw}/>
                    <input type="button" className="button loginBtn" onClick={onClick} value="로그인"/>
                    <p className="message">아직 계정이 없으신가요? <Link to="/Registart">회원가입</Link></p>
                </div>
                </div>
            </div>
        </>
    )
}

export default Login;