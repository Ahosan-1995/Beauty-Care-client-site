import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules

const Slider = () => {
  return (
    <div className=" ">
 
        <div>
        <h1 className="font-bold text-4xl mb-5 text-center text-[#cb8d5c]">
          Take a look our setup
        </h1>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="mx-auto w-4/5 h-[500px] rounded-3xl "
              src="https://i.ibb.co/XVjbyx5/Banner1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="mx-auto w-4/5 h-[500px] rounded-3xl "
              src="https://i.ibb.co/bQTGft1/Banner2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="mx-auto w-4/5 h-[500px] rounded-3xl "
              src="https://i.ibb.co/LpJz3Bz/Banner3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="mx-auto w-4/5 h-[500px] rounded-3xl "
              src="https://i.ibb.co/K2sNjRx/Banner4.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        </div>
    </div>
  );
};

export default Slider;
