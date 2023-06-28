import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

function Slider() {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)} >

        <SwiperSlide>Slide 1
            {/* <img src="" alt="" style={{width=100%}}/> */}
        </SwiperSlide>

        <SwiperSlide>Slide 2
            {/* <img src="" alt="" style={{width=100%}}/> */}
        </SwiperSlide>

        <SwiperSlide>Slide 3
            {/* <img src="" alt="" style={{width=100%}}/> */}
        </SwiperSlide>

        <SwiperSlide>Slide 4
            {/* <img src="" alt="" style={{width=100%}}/> */}
        </SwiperSlide>
        ...
      </Swiper>
    )
}

export default Slider