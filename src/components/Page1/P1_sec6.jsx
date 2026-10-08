import { Photos } from "../../Photos"
import "../Page1/P1_sec6.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
export default function P1_sec6(){
    return(
        <>
            <section className="Brigada">
                <div className="Centr">
                    <h1>Our customers say</h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Navigation]}
                    className="mySwiper"
                   >
                    <SwiperSlide>
                        <div className="Girl">
                        <img className="pys" src={Photos.W1}></img>
                        <h1>Starla Virgoun</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img className="pys" src={Photos.W2}></img>
                        <h1>Starla Virgoun</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img className="pys" src={Photos.W3}></img>
                        <h1>Starla Virgoun</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img className="pys" src={Photos.W4}></img>
                        <h1>Starla Virgoun</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img className="pys" src={Photos.W5}></img>
                        <h1>Starla Virgoun</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img className="pys" src={Photos.W6}></img>
                        <h1>Starla Virgoun</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Girl">
                        <img className="pys" src={Photos.W7}></img>
                        <h1>Starla Virgoun</h1>
                        <p>Financial advisor</p>
                        <div className="text">
                            <p>“</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className="text1">
                            <p>„</p>
                        </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                    <div className="agusha">
                        <img src={Photos.W1}></img>
                        <img src={Photos.W2}></img>
                        <img src={Photos.W3}></img>
                        <img src={Photos.W4}></img>
                        <img src={Photos.W5}></img>
                        <img src={Photos.W6}></img>
                        <img src={Photos.W7}></img>
                    </div>
                </div>
            </section>
        </>
    )
}