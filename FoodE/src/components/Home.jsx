import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

const Home = () => {
    return (
    <div className="home">

        <div className="cocktail-categories">

    <h2 className='welcome-message'>Welcome to Boozy Coder</h2>
    <h3 className='welcome-message'>Where sloppy code is NOT a problem</h3>

        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)} >

        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>

        </div>


        <div className='featured-cocktails'>
    <h3 className='featured-message' id="fade">Featured</h3>
    <h2 className='featured-message'>Cocktails</h2>
                <div className='cocktail-list'>


                </div>

        </div>

    </div>
)}

export default Home

