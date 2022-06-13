import React from 'react';
import styles from './nav.module.css';
import {Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    let navigate = useNavigate();
    
    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <div className={styles.left_menu}>
                        <ul>
                            <li><em>웹툰/만화</em></li>
                            <li><em>웹소설</em></li>
                            <li><em>도서</em></li>
                            <li><em>셀렉트</em></li>
                        </ul>
                    </div>
                    <div className={styles.right_menu}>
                        <ul>
                            <li><em>회원가입</em></li>
                            <li><em>로그인</em></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;