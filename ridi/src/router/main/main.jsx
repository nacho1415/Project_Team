import React from 'react';
import Nav from '../../components/nav/nav';
import styles from './main.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Slider from '../../components/slider/slider';
import Slider_type2 from '../../components/slider_type2/slider_type2';
import Slider_type3 from '../../components/slider_type3/slider_type3';
import Slider_type4 from '../../components/slider_type4/slider_type4';

const Main = (props) => {
    let [tabActive,setTabActive] = useState(0);
    let [towTabActive,setTowTabActive] = useState(0);

    return (
        <div>
            <Nav title={props.title} setTilte={props.setTilte}></Nav>
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
                                            <div className={styles.tab_icon}>
                                                <ul>
                                                    <li>
                                                        <img src={`${process.env.PUBLIC_URL}/img/sub_icon1.png`} alt="" />
                                                        <h3>#출구는없어</h3>
                                                    </li>
                                                    <li>
                                                        <img src={`${process.env.PUBLIC_URL}/img/sub_icon2.png`} alt="" />
                                                        <h3>신간</h3>
                                                    </li>
                                                    <li>
                                                        <img src={`${process.env.PUBLIC_URL}/img/sub_icon3.png`} alt="" />
                                                        <h3>이벤트</h3>
                                                    </li>
                                                    <li>
                                                        <img src={`${process.env.PUBLIC_URL}/img/sub_icon4.png`} alt="" />
                                                        <h3>독점</h3>
                                                    </li>
                                                    <li>
                                                        <img src={`${process.env.PUBLIC_URL}/img/sub_icon5.png`} alt="" />
                                                        <h3>리다무</h3>
                                                    </li>
                                                    <li>
                                                        <img src={`${process.env.PUBLIC_URL}/img/sub_icon6.png`} alt="" />
                                                        <h3>요일 연재</h3>
                                                    </li>
                                                    <li>
                                                        <img src={`${process.env.PUBLIC_URL}/img/sub_icon7.png`} alt="" />
                                                        <h3>19+</h3>
                                                    </li>
                                                    <li>
                                                        <img src={`${process.env.PUBLIC_URL}/img/sub_icon8.png`} alt="" />
                                                        <h3>이달의 신작</h3>
                                                    </li>
                                                </ul>
                                            </div>
                                            <Slider_type2 title={"오늘,리디의 발견"}></Slider_type2>
                                            <Slider_type3 title={"실시간 랭킹"}></Slider_type3>
                                            <Slider_type2 title={"기다리면 무료로 시작해!"}></Slider_type2>
                                            <Slider_type3 title={"베스트 셀러"}></Slider_type3>
                                            <div className={styles.keyword_serch}>
                                                <h2>키워드로 검색하기 <FontAwesomeIcon icon={faAngleRight} className={styles.icon} /></h2>
                                                <ul>
                                                    <li><em>#로맨스판타지</em></li>
                                                    <li><em>#삼각로맨스</em></li>
                                                    <li><em>#학원물</em></li>
                                                    <li><em>#로맨스</em></li>
                                                    <li><em>#성장물</em></li>
                                                    <li><em>#사내연애</em></li>
                                                    <li><em>#완결</em></li>
                                                </ul>
                                            </div>
                                            <Slider_type2 title={"목요일 연재"}></Slider_type2>
                                            <Slider_type2 title={"금요일 연재"}></Slider_type2>
                                            <Slider_type2 title={"웃고 싶으면? 츄라이!"}></Slider_type2>
                                            <Slider_type2 title={"넥스트 레벨 #로맨스판타지"}></Slider_type2>
                                            <Slider_type2 title={"잘생기면 다야? 응 다야 #나쁜남자"}></Slider_type2>
                                            <Slider_type2 title={"왜 너는 나를 만나서 #복수/배신"}></Slider_type2>
                                            <Slider_type2 title={"널 위해 모든 걸 바칠 #순정남"}></Slider_type2>
                                            <Slider_type2 title={"곤란한가요? #연하남 이 고백하면"}></Slider_type2>
                                            <Slider_type4 title={"오직 리디에서만!"}></Slider_type4>
                                            <Slider_type2 title={"저 세계에서 만나 #차원이동/타임슬립"}></Slider_type2>
                                            <Slider_type2 title={"감히 사모하게 된 #시대극"}></Slider_type2>
                                            <Slider_type2 title={"농밀하고 격정적인 #19금"}></Slider_type2>
                                            <Slider_type2 title={"심심할 땐 리디 PICK!"}></Slider_type2>
                                            <Slider_type2 title={"늘 짜릿한 신작! #BL"}></Slider_type2>
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