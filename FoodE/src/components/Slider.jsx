import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import slide_1_image from "../assets/Kiwi.jpeg"
import slide_2_image from "../assets/Bloody.jpeg"
import slide_3_image from "../assets/Amaretto-Sour.jpeg"
import slide_4_image from "../assets/Balmoral.jpeg"
import slide_5_image from "../assets/Aperol.jpeg"
import slide_6_image from "../assets/Espresso.jpeg"


function Slider() {
    return (
        <div className='slider-container'>
            <h2 className='swiper-heading'>Featured Booze</h2>
        
                <Swiper
                effect={ 'coverflow' }
                grabCursor={ true }
                centeredSlides= { true }
                loop = { true }
                modules={[EffectCoverflow, Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={ 'auto' }
                coverflowEffect = {
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5
                    } }

                
                navigation={ {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                } }
                pagination={ { el:'.swiper-pagination', clickable: true } }
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} 
                className='swiper-slider'>

                        <SwiperSlide className='swiper-slide'>
                            <img src={slide_1_image} alt="image of Kiwi" style={{width:300}}/>
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img src={slide_2_image} alt="image of Bloody" style={{width:300}}/>
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img src={slide_3_image} alt="image of a True Amaretto Sour" style={{width:300}}/>
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img src={slide_4_image} alt="image of a Balmoral" style={{width:300}}/>
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img src={slide_5_image} alt="image of a Aperol" style={{width:300}}/>
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img src={slide_6_image} alt="image of of a Espresso" style={{width:300}}/>
                        </SwiperSlide>

                     


                        <div className='slider-controller'>


                            <div className='swiper-button-prev slider-arrow'>
                                <ion-icon name ="arrow-back-outline"></ion-icon>
                            </div>


                            <div className='swiper-button-next slider-arrow'>
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>

                            <div className='swiper-pagination'></div>


                        </div>
                ...
            </Swiper>
      </div>
    )
}

export default Slider