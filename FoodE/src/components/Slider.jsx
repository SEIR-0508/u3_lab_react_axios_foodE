import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import slide_1_image from "../assets/Logo.png"


function Slider() {
    return (
        <div className='slider-container'>
            <h1 className='swiper-heading'>Featured Booze</h1>
        
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
                            <img src={slide_1_image} alt="example" style={{width:300}}/>
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img src={slide_1_image} alt="image of" style={{width:300}}/>
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img src={slide_1_image} alt="image of" style={{width:300}}/>
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img src={slide_1_image} alt="image of" style={{width:300}}/>
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img src={slide_1_image} alt="image of" style={{width:300}}/>
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>
                            <img src={slide_1_image} alt="image of" style={{width:300}}/>
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