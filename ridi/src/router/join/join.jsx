import React from 'react';
import styles from "./join.module.css";
import {useNavigate } from 'react-router-dom';

const Join = () => {
    let navigate = useNavigate();

    return (
        <div>
            <section className={styles.section}>
                <div className={styles.header}>
                    <h2 onClick={()=>{navigate('/')}}>RIDI</h2>
                </div>
                <div className={styles.content}>
                    <img src={`${process.env.PUBLIC_URL}/img/login.png`} alt="" />
                    <h2>지금 가입하면 누구나</h2>
                    <p>10% 할인쿠폰 1장, 웹소설·웹툰 무료이용권 각 2장</p>
                    <strong>상수리나무 아래 1화만 봐도 1,000P!</strong>
                    <button onClick={()=>{navigate('/joindetail')}}>회원가입</button>
                    <ul>
                        <li><em>14세 미만 회원가입</em></li>
                        <li><em>이미 회원이신가요?</em></li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Join;