import React from 'react';
import Nav from '../../components/nav/nav';
import styles from './main.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Main = () => {
    let [tabActive,setTabActive] = useState(0);

    return (
        <div>
            <Nav></Nav>
            <div className={styles.container}>
                <section className={styles.section1}>
                    <div className={styles.top_menu}>
                        <div className={styles.tab}>
                            <ul>
                                <li className={tabActive == 0 ? `${styles.active}`:null}><em onClick={()=>{setTabActive(0)}}>웹툰</em></li>
                                <li className={tabActive == 1 ? `${styles.active}`:null}><em onClick={()=>{setTabActive(1)}}>만화</em></li>
                            </ul>
                        </div>
                        <div className={styles.category}>
                            <ul>
                                <li><FontAwesomeIcon icon={faBars} /></li>
                                <li><em>전체 카테고리</em></li>
                            </ul>
                        </div>
                    </div>
                    {
                        tabActive == 0 ?
                        <article className={styles.tab_article1}>
                            <div className={styles.tow_tab}>
                                <ul>
                                    <li><em>추천</em></li>
                                    <li><em>로맨스</em></li>
                                    <li><em>BL</em></li>
                                </ul>
                            </div>
                        </article>
                        :null
                    }
                                        {
                        tabActive == 1 ?
                        <div>탭2</div>
                        :null
                    }
                </section>
            </div>
        </div>
    );
};

export default Main;