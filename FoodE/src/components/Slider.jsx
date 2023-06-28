import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import example from "../assets/Logo.png"


function Slider() {
    return (
        <div className='slider-container'>
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

                        <SwiperSlide className='swiper-slide'>Slide 1
                            <img src={example} alt="example" style={{width:300}}/>
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>Slide 2
                            {/* <img src="" alt="" style={{width=100%}}/> */}
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>Slide 3
                            {/* <img src="" alt="" style={{width=100%}}/> */}
                        </SwiperSlide>

                        <SwiperSlide className='swiper-slide'>Slide 4
                            {/* <img src="" alt="" style={{width=100%}}/> */}
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