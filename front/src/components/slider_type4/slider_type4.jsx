import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./slider_type4.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faAngleRight} from "@fortawesome/free-solid-svg-icons";

const Slider_type4 = (props) => {
    return (
        <div className='slider_type4'>
            <div className={styles.cotainer}>
                <h2>{props.title} <FontAwesomeIcon icon={faAngleRight} className={styles.icon} /></h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    slidesPerGroup={1}
                    breakpoints={{                
                        900: {
                            slidesPerView:3,
                            spaceBetween:10,
                            slidesPerGroup:1
                        },
                        600: {
                            slidesPerView:2,
                            spaceBetween:20,
                            slidesPerGroup:2
                        },
                        0: {
                            slidesPerView:1,
                            spaceBetween:20,
                            slidesPerGroup:1
                        },
                    }}
                    speed={1000}
                    loopAdditionalSlides={1}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                <SwiperSlide className={styles.slides}>
                    <div className={`${styles.slide}`}>
                        <div className={styles.item_img}>
                            <img src={`${process.env.PUBLIC_URL}/img/test1.png`} alt="" />
                            <div className={styles.img_bg}></div>
                        </div>
                        <div className={styles.item_text}>
                            <p>너를 생각하면 생각할수록</p>
                            <p>나는 고독하고 외로워져</p>
                            <em>상수리나무 아래</em>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slides}>
                    <div className={`${styles.slide}`}>
                        <div className={styles.item_img}>
                            <img src={`${process.env.PUBLIC_URL}/img/test2.png`} alt="" />
                            <div className={styles.img_bg}></div>
                        </div>
                        <div className={styles.item_text}>
                            <p>너를 생각하면 생각할수록</p>
                            <p>나는 고독하고 외로워져</p>
                            <em>상수리나무 아래</em>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide  className={styles.slides}>
                    <div className={`${styles.slide}`}>
                        <div className={styles.item_img}>
                            <img src={`${process.env.PUBLIC_URL}/img/test3.png`} alt="" />
                            <div className={styles.img_bg}></div>
                        </div>
                        <div className={styles.item_text}>
                            <p>너를 생각하면 생각할수록</p>
                            <p>나는 고독하고 외로워져</p>
                            <em>상수리나무 아래</em>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide  className={styles.slides}>
                    <div className={`${styles.slide}`}>
                        <div className={styles.item_img}>
                            <img src={`${process.env.PUBLIC_URL}/img/test1.png`} alt="" />
                            <div className={styles.img_bg}></div>
                        </div>
                        <div className={styles.item_text}>
                            <p>너를 생각하면 생각할수록</p>
                            <p>나는 고독하고 외로워져</p>
                            <em>상수리나무 아래</em>
                        </div>
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider_type4;