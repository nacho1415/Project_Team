import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

const Login = () => {
    let navigate = useNavigate();
    let [id,setId] = useState(null); //input 아이디 값 저장
    let [paw,setPaw] = useState(null); //input 비밀번호 값 저장

    //아이디 비밀번호 빈값 체크
    function idCheck(){
        if(id == null || paw == null){
            alert("아이디와 비밀번호를 입력해주세요")
        }
    }

    //서버로 로그인 데이터 보내기
    function onLogin(){
        fetch('http://localhost:8080/login', {
            method: 'post',
            headers: {
            "Content-Type": "application/json; charset=utf-8"	
            },
            body: JSON.stringify({id:id,paw:paw})
        })
        .then(res => res.json())
        .then(data => {
            if(data.done == true){
                sessionStorage.setItem("user",JSON.stringify(data));
                navigate('/');
            }else if(data.done == false){
                alert("아이디와 비밀번호를 확인해주세요.")
            }
        })
        .catch(error => {
            console.log("에러",error);
        });
    }
    
    return (
        <div>
            <div className={styles.form_wrap}>
                <div className={styles.header}>
                    <h2 onClick={()=>{navigate('/')}}>RIDI</h2>
                </div>
                <div className={styles.container}>
                    <form className={styles.form}>
                        <div className={styles.login_wrap}>
                            <div className={styles.login}>
                                <ul>
                                    <li><input type="text" placeholder='아이디' onChange={(e)=>{setId(e.target.value)}}/></li>
                                    <li><input type="password" placeholder='비밀번호' onChange={(e)=>{setPaw(e.target.value)}}/></li>
                                </ul>
                            </div>
                            <div className={styles.sub_login}>
                                <ul>
                                    <li>
                                        <input type="checkbox" id='checkbox' className={styles.checkbox}/>
                                        <label htmlFor="checkbox">로그인 상태 유지</label>
                                    </li>
                                </ul>
                                <div className={styles.find}>
                                    <p>아이디 찾기</p>
                                    <p>비밀번호 재설정</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.btt}>
                            <button className={styles.login_btt} onClick={(e)=>{e.preventDefault();idCheck(); onLogin();}}>로그인</button>
                            <button className={styles.join_btt} onClick={()=>{navigate('/join')}}>회원가입</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;