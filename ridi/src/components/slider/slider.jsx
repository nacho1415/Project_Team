import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from './slider.module.css';


const Slider = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                speed={1000}
                loop={true}
                loopAdditionalSlides={1}
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
            <SwiperSlide>
                <div className={`${styles.slide} slide`}>
                    <img src={`${process.env.PUBLIC_URL}/img/slide1.jpg`} alt="" />
                    <div className={`${styles.text_box} text_box`}>
                        <ul>
                            <li><em>NEW</em></li>
                            <li><em>리다무</em></li>
                        </ul>
                        <h2>저항할 수 없어 네가 내게 닿을 때마다</h2>
                        <em>&#60;토템의 영역&#62; 무료이용권 2장</em>
                        <p>◎ 스르륵코믹스</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.slide} slide`}>
                    <img src={`${process.env.PUBLIC_URL}/img/slide2.jpg`} alt="" />
                    <div className={`${styles.text_box} text_box`}>
                        <ul>
                            <li><em>NEW</em></li>
                            <li><em>리다무</em></li>
                        </ul>
                        <h2>저항할 수 없어 네가 내게 닿을 때마다</h2>
                        <em>&#60;토템의 영역&#62; 무료이용권 2장</em>
                        <p>◎ 스르륵코믹스</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.slide} slide`}>
                    <img src={`${process.env.PUBLIC_URL}/img/slide3.jpg`} alt="" />
                    <div className={`${styles.text_box} text_box`}>
                        <ul>
                            <li><em>NEW</em></li>
                            <li><em>리다무</em></li>
                        </ul>
                        <h2>저항할 수 없어 네가 내게 닿을 때마다</h2>
                        <em>&#60;토템의 영역&#62; 무료이용권 2장</em>
                        <p>◎ 스르륵코믹스</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${styles.slide} slide`}>
                    <img src={`${process.env.PUBLIC_URL}/img/slide4.jpg`} alt="" />
                    <div className={`${styles.text_box} text_box`}>
                        <ul>
                            <li><em>NEW</em></li>
                            <li><em>리다무</em></li>
                        </ul>
                        <h2>저항할 수 없어 네가 내게 닿을 때마다</h2>
                        <em>&#60;토템의 영역&#62; 무료이용권 2장</em>
                        <p>◎ 스르륵코믹스</p>
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;