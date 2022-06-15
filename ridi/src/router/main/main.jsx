import React from 'react';
import Nav from '../../components/nav/nav';
import styles from './main.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Slider from '../../components/slider/slider';

const Main = () => {
    let [tabActive,setTabActive] = useState(0);
    let [towTabActive,setTowTabActive] = useState(0);

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
                                    <li className={towTabActive == 0 ? `${styles.active}`:null}><em onClick={()=>{setTowTabActive(0)}}>추천</em></li>
                                    <li className={towTabActive == 1 ? `${styles.active}`:null}><em onClick={()=>{setTowTabActive(1)}}>로맨스</em></li>
                                    <li className={towTabActive == 2 ? `${styles.active}`:null}><em onClick={()=>{setTowTabActive(2)}}>BL</em></li>
                                </ul>
                            </div>
                            <div className={styles.content}>
                                <ul>
                                    {
                                        towTabActive == 0 ? 
                                        <li>
                                            <Slider></Slider>
                                        </li>
                                        :null
                                    }
                                    {
                                        towTabActive == 1 ? 
                                        <li>탭2</li>
                                        :null
                                    }
                                    {
                                        towTabActive == 2 ? 
                                        <li>탭3</li>
                                        :null
                                    }
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