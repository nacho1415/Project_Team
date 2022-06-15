import React from 'react';
import styles from "./joindetail.module.css";
import {useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Joindetail = () => {

    let navigate = useNavigate();
    let [genderCheck,setGenderCheck] = useState();
    let [userId,setUserId] = useState(``); //input 아이디 값
    let [idWarning,setIdWarning] = useState(``);
    let [userPw,setUserPw] = useState(``); //input 비밀번호 값
    let [pwWarning,setPwWarning] = useState(``);
    let [checkPw,setCheckPw] = useState(``); //input 비밀번호 확인 값
    let [checkWarning,setCheckWarning] = useState(``);
    let [checkPws,setCheckPws] = useState(false);
    let [userEmail,setUserEmail] = useState(``); //input 이메일 값
    let [emailWarning,setEmailWarning] = useState(``);
    let [userName,setUserName] = useState(); //input 이름 값
    let [nameWarning,setNameWarning] = useState(``);
    let [userAge,setUserAge] = useState(``); //input 생년월일 값
    let [ageWarning,setAgeWarning] = useState(``);
    
    function onChangeId(e){
        setUserId(e.target.value);
        let userIdLength = e.target.value.length;
        if(userIdLength < 5){
            setIdWarning(`5~20자의 영문 소문자와 숫자로만 입력해주세요.`)
        }else{
            setIdWarning(``)
        }
    }

    function onChangePw(e){
        setUserPw(e.target.value);
        let userPwLength = e.target.value.length;
        if(userPwLength < 8){
            setPwWarning(`8자 이상, 영문/숫자/특수문자 중 2가지 이상 입력해주세요.`)
        }else{
            setPwWarning(``)
        }
    }

    function onCheckPw(e){
        setCheckPw(e.target.value);
    }

    useEffect(()=>{
        if(userPw !== checkPw){
            setCheckWarning(`비밀번호를 확인해주세요.`)
            setCheckPws(false);
        }else{
            setCheckWarning(``);
            setCheckPws(true);
        }
    },[onChangePw])

    function onChangeEmail(e){
        setUserEmail(e.target.value);
        let userEmailLength = e.target.value.length;
        if(userEmailLength < 4){
            setEmailWarning(`이메일을 입력해주세요.`)
        }else{
            setEmailWarning(``)
        }
    }

    function onChangeName(e){
        setUserName(e.target.value);
        let userNameLength = e.target.value.length;
        if(userNameLength < 2){
            setNameWarning(`이름을 입력해주세요.`)
        }else{
            setNameWarning(``)
        }
    }

    function onChangeAge(e){
        setUserAge(e.target.value);
        let userAgeLength = e.target.value.length;
        if(userAgeLength < 4){
            setAgeWarning(`예:1921`)
        }else{
            setAgeWarning(``)
        }
    }

    //서버로 가입 테이터 전송
    function onJoin(){
        fetch('http://localhost:8080/join', {
            method: 'post',
            headers: {
            "Content-Type": "application/json; charset=utf-8"	
            },
            body: JSON.stringify({userId:userId,userPw:userPw,userEmail:userEmail,userName:userName,userAge:userAge,genderCheck:genderCheck})
        })
        .then(res => res.json())
        .then(data => {
            if(data.done == true){
                navigate('/')
            }else if(data.comment == "아이디 중복됐습니다."){
                alert("아이디 중복 확인 되었습니다.아이디를 변경 해주세요.")
            }else if(data.comment == "비밀번호 유효성 검사 통과 실패"){
                alert("비밀번호를 확인해주세요.")
            }else if(data.comment == "x 출생년도 형식이 잘못됐습니다"){
                alert("출생년도를 형식이 잘못됐습니다.")
            }else if(data.comment == "올바른 이메일 형식이 아닙니다."){
                alert("이메일 주소를 확인 해주세요.")
            }else{
                alert("입력정보를 확인 해주세요.")
            }
        })
        .catch(error => {
            console.log("에러",error)
        })
        
    }

    return (
        <div>
            <section className={styles.section}>
                <div className={styles.header}>
                    <h2 onClick={()=>{navigate('/')}}>RIDI</h2>
                </div>
                <form className={styles.form}>
                    <div className={styles.user_id}>
                        <input type="text" placeholder='아이디' onChange={(e)=>{onChangeId(e);}} />
                        <p>{idWarning}</p>
                    </div>
                    <div className={styles.user_pw}>
                        <input type="password" placeholder='비밀번호' onChange={(e)=>{onChangePw(e);}}/>
                        <input type="password" placeholder='비밀번호 확인' onChange={(e)=>{onCheckPw(e);}}/>
                        <p>{pwWarning}</p>
                        <p>{checkWarning}</p>
                    </div>
                    <div className={styles.user_email}>
                        <input type="text" placeholder='이메일 주소' onChange={(e)=>{onChangeEmail(e);}}/>
                        <p>{emailWarning}</p>
                    </div>
                    <div className={styles.user_name}>
                        <input type="text" placeholder='이름' maxLength="3" onChange={(e)=>{onChangeName(e);}}/>
                        <p>{nameWarning}</p>
                    </div>
                    <div className={styles.user_age}>
                        <div>
                            <input type="text" placeholder='출생년도' maxLength="4" onChange={(e)=>{onChangeAge(e);}}/>
                            <p>{ageWarning}</p>
                        </div>
                        <div className={styles.gender}>
                            <ul>
                                <li className={genderCheck == 0 ? `${styles.active}`:null}  onClick={()=>{setGenderCheck(0)}}><em>남</em></li>
                                <li className={genderCheck == 1 ? `${styles.active}`:null}  onClick={()=>{setGenderCheck(1)}}><em>여</em></li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={(e)=>{
                        e.preventDefault(); userId.length >= 5 && userPw.length >=8 && userEmail.length >=4 && userName.length >=2 && userAge.length >=4 && genderCheck >= 0 && checkPws == true ?  onJoin() : alert("입력정보를 확인해주세요.");
                    }}>회원 가입 완료</button>
                </form>
            </section>
        </div>
    );
};

export default Joindetail;