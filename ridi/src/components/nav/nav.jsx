import React, { useState } from 'react';
import styles from './nav.module.css';
import {Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faTimesCircle,faBell,faShoppingCart,faBook,faUser} from "@fortawesome/free-solid-svg-icons";
import { useRef } from 'react';
import { useEffect } from 'react';

const Nav = (props) => {
    let navigate = useNavigate();
    let [active,setActive] = useState(0);
    let [searchInput,setSearchInput] = useState(``);
    let getItem = sessionStorage.getItem("user");
    getItem = JSON.parse(getItem);
    let [logout,setLogout] = useState(false);

    //서버로 검색창 입력 값 데이터 보내기
    function onSearch(){
        fetch('http://localhost:8080/', {
            method: 'post',
            headers: {
            "Content-Type": "application/json; charset=utf-8"	
            },
            body: JSON.stringify(searchInput)
        })
    }

    useEffect(()=>{
        navigate('/')

        return () => {
            setLogout(false)
        } 
    },[logout])

    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <div className={styles.menu}>
                        <div className={styles.left_menu}>
                            <ul>
                                <li className={active == 0 ? `${styles.active}`:null}><em onClick={()=>{setActive(0);navigate('/');props.setTilte(`WEBTOON`)}}>웹툰/만화</em></li>
                                <li className={active == 1 ? `${styles.active}`:null}><em onClick={()=>{setActive(1);props.setTilte(`NOVEL`);}}>웹소설</em></li>
                                <li className={active == 2 ? `${styles.active}`:null}><em onClick={()=>{setActive(2);props.setTilte(`BOOKS`);}}>도서</em></li>
                                <li className={active == 3 ? `${styles.active}`:null}><em onClick={()=>{setActive(3);props.setTilte(``);}}>셀렉트</em></li>
                            </ul>
                        </div>
                        <div className={styles.right_menu}>
                                {
                                    sessionStorage.getItem("user") ?
                                    <ul>
                                        <li><em>{getItem.username} 님</em></li>
                                        <li><em onClick={()=>{sessionStorage.removeItem("user");setLogout(true)}}>로그아웃</em></li>
                                    </ul>
                                    :
                                    <ul>
                                        <li><em onClick={()=>{navigate('/join')}}>회원가입</em></li>
                                        <li><em onClick={()=>{navigate('/login')}}>로그인</em></li>
                                    </ul>
                                }
                        </div>
                    </div>
                </div>
            </nav>
            <div className={styles.sub_menu}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <p>RIDI</p>
                        <p>{props.title}</p>
                    </div>
                    <div className={styles.icon}>
                        <div className={styles.search}>
                            <form>
                                <input type="text" value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}}/>
                                <FontAwesomeIcon icon={faSearch} className={styles.search_icon1}/>
                                {
                                    searchInput != `` ?
                                    <FontAwesomeIcon icon={faTimesCircle} className={styles.search_icon2} onClick={()=>{setSearchInput(``)}} />
                                    : null
                                }
                                <button onClick={(e)=>{e.preventDefault();onSearch();}}></button>
                            </form>
                        </div>
                        <div className={styles.sub_icon}>
                            <ul>
                                <li><FontAwesomeIcon icon={faBell} /></li>
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li><FontAwesomeIcon icon={faBook} /></li>
                                <li><FontAwesomeIcon icon={faUser} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;