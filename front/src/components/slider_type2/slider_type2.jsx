import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./slider_type2.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faAngleRight} from "@fortawesome/free-solid-svg-icons";

const Slider_type2 = (props) => {
    return (
        <div className='slider_type2'>
            <div className={styles.cotainer}>
                <h2>{props.title} <FontAwesomeIcon icon={faAngleRight} className={styles.icon} /></h2>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={20}
                    slidesPerGroup={6}
                    breakpoints={{
                        1180: {
                          slidesPerView:6,
                          spaceBetween:20
                        },
                        780: {
                            slidesPerView:4,
                            spaceBetween:20,
                            slidesPerGroup:4
                        },
                        0: {
                            slidesPerView:3,
                            spaceBetween:20,
                            slidesPerGroup:3
                        },
                    }}
                    speed={1000}
                    loopAdditionalSlides={1}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"

                >
                <SwiperSlide>
                    <div className={`${styles.slide}`}>
                        <div className={styles.img_box}>
                            <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                            <div className={styles.img_text}>
                                <ul>
                                    <li><img src={`${process.env.PUBLIC_URL}/img/today_time_icon.png`} alt="" /></li>
                                    <li><em>10??????</em></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.slide_text}>
                        <h2>?????????:????????? ???</h2>
                        <p>?????????, ?????????, ????????????</p>
                        <em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.slide}`}>
                        <div className={styles.img_box}>
                            <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                            <div className={styles.img_text}>
                                <ul>
                                    <li><img src={`${process.env.PUBLIC_URL}/img/today_time_icon.png`} alt="" /></li>
                                    <li><em>10??????</em></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.slide_text}>
                        <h2>?????????:????????? ???</h2>
                        <p>?????????, ?????????, ????????????</p>
                        <em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.slide}`}>
                        <div className={styles.img_box}>
                            <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                            <div className={styles.img_text}>
                                <ul>
                                    <li><img src={`${process.env.PUBLIC_URL}/img/today_time_icon.png`} alt="" /></li>
                                    <li><em>10??????</em></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.slide_text}>
                        <h2>?????????:????????? ???</h2>
                        <p>?????????, ?????????, ????????????</p>
                        <em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.slide}`}>
                        <div className={styles.img_box}>
                            <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                            <div className={styles.img_text}>
                                <ul>
                                    <li><img src={`${process.env.PUBLIC_URL}/img/today_time_icon.png`} alt="" /></li>
                                    <li><em>10??????</em></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.slide_text}>
                        <h2>?????????:????????? ???</h2>
                        <p>?????????, ?????????, ????????????</p>
                        <em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.slide}`}>
                        <div className={styles.img_box}>
                            <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                            <div className={styles.img_text}>
                                <ul>
                                    <li><img src={`${process.env.PUBLIC_URL}/img/today_time_icon.png`} alt="" /></li>
                                    <li><em>10??????</em></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.slide_text}>
                        <h2>?????????:????????? ???</h2>
                        <p>?????????, ?????????, ????????????</p>
                        <em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.slide}`}>
                        <div className={styles.img_box}>
                            <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                            <div className={styles.img_text}>
                                <ul>
                                    <li><img src={`${process.env.PUBLIC_URL}/img/today_time_icon.png`} alt="" /></li>
                                    <li><em>10??????</em></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.slide_text}>
                        <h2>?????????:????????? ???</h2>
                        <p>?????????, ?????????, ????????????</p>
                        <em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.slide}`}>
                        <div className={styles.img_box}>
                            <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                            <div className={styles.img_text}>
                                <ul>
                                    <li><img src={`${process.env.PUBLIC_URL}/img/today_time_icon.png`} alt="" /></li>
                                    <li><em>10??????</em></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.slide_text}>
                        <h2>?????????:????????? ???</h2>
                        <p>?????????, ?????????, ????????????</p>
                        <em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.slide}`}>
                        <div className={styles.img_box}>
                            <img src={`${process.env.PUBLIC_URL}/img/today_test.jpg`} alt="" />
                            <div className={styles.img_text}>
                                <ul>
                                    <li><img src={`${process.env.PUBLIC_URL}/img/today_time_icon.png`} alt="" /></li>
                                    <li><em>10??????</em></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.slide_text}>
                        <h2>?????????:????????? ???</h2>
                        <p>?????????, ?????????, ????????????</p>
                        <em><FontAwesomeIcon icon={faStar} className={styles.star_icon}/> 4.7<strong>(433)</strong></em>
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider_type2;