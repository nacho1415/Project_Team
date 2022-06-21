import React from 'react';
import Nav from '../../components/nav/nav';
import styles from "./detail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faAngleRight} from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
    return (
        <div>
            <Nav></Nav>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.book_detail}>
                        <div className={styles.book_img}></div>
                        <div className={styles.book_inpo}>
                            <div className={styles.book_title}>
                                <div className={styles.book_nav}>
                                    <ul>
                                        <li><em>웹툰</em></li>
                                        <li><em>국내 순정</em></li>
                                    </ul>
                                </div>
                                <h2>상수리나무 아래</h2>
                                <em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em>
                                <div className={styles.book_content}>
                                    <ul>
                                        <li><em><strong>서말,나무</strong> 글</em></li>
                                        <li><em><strong>P</strong> 그림</em></li>
                                        <li><em><strong>김수지</strong> 원작</em></li>
                                    </ul>
                                    <p><strong>리디</strong> 출판</p>
                                    <ul>
                                        <li><em>총 46화</em></li>
                                        <li><em>미완결</em></li>
                                    </ul>
                                </div>
                                <div className={styles.book_notice}>
                                    <ul>
                                        <li>
                                            <em>연재</em>
                                            <p>매월 10,20,30일 연재/정기 휴재 안내(4회 연재+1회 휴재)</p>
                                        </li>
                                        <li>
                                            <em>공지</em>
                                            <p>47화 업데이트 일정 안내</p>
                                        </li>
                                        <li>
                                            <em>이벤트</em>
                                            <p>[전원 증정] &#60;상수리나무 아래&#62;에 한 번 빠지면 출구는 없어</p>
                                        </li>
                                        <li>
                                            <em>리다무</em>
                                            <p>1일 마다 1편 기다리면 무료</p>
                                        </li>
                                        <li>
                                            <em>추천</em>
                                            <p>웹소설로 보기</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Detail;