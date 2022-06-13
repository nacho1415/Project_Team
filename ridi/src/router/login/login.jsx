import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './login.module.css';

const Login = () => {

    
    return (
        <div>
            <div className={styles.form_wrap}>
                <div className={styles.container}>
                    <form className={styles.form}>
                        <ul>
                            <li><input type="text" placeholder='아이디'/></li>
                            <li><input type="password" placeholder='비밀번호'/></li>
                        </ul>
                        <button>로그인</button>
                        <button>회원가입</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;