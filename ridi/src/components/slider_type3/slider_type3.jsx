import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./slider_type3.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faAngleRight} from "@fortawesome/free-solid-svg-icons";

const Slider_type3 = (props) => {
    return (
        <div className='slider_type3'>
            <div className={styles.cotainer}>
                <h2>{props.title} <FontAwesomeIcon icon={faAngleRight} className={styles.icon} /></h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    slidesPerGroup={1}
                    speed={1000}
                    loopAdditionalSlides={1}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"

                >
                <SwiperSlide>
                    <div className={`${styles.slide}`}>
                        <ul>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={`${styles.slide}`}>
                        <ul>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.item}>
                                    <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                                    <div className={styles.top_num}>
                                        <em>1</em>
                                    </div>
                                    <div className={styles.item_text}>
                                        <ul>
                                            <li><h2>상수리나무 아래</h2></li>
                                            <li><em>서말 외 3명, 10화 무료</em></li>
                                            <li><em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider_type3;