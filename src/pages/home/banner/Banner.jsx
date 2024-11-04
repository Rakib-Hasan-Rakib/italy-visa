import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "./banner.css";
import { Fade } from "react-awesome-reveal";



const Banner = () => {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper h-[95vh]"
      >
        <SwiperSlide>
          <img
            className="relative h-[100vh] w-full object-cover"
            src="https://i.ibb.co.com/BBNtrN0/canada-banner-one.jpg"
            alt="canada image"
          />
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overlay flex flex-col justify-center items-center text-white text-lg md:text-2xl">
            <Fade delay={100}>
              <h2 className="gradient-text text-center text-3xl md:text-4xl lg:text-6xl font-bold tracking-widest">
                Canada’s Hidden Treasures
              </h2>
            </Fade>
            <p>-Beyond the Tourist Trails</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative h-[100vh] w-full object-cover"
            src="https://i.ibb.co.com/3Ww9N0H/canada-banner-two.jpg"
            alt="canada image"
          />
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overlay flex flex-col justify-center items-center text-white text-lg md:text-2xl">
            <Fade delay={100}>
              <h2 className="gradient-text text-center text-3xl md:text-4xl lg:text-6xl font-bold tracking-widest">
                The Art Lover’s Canada
              </h2>
            </Fade>
            <p>-From Renaissance to Modern Masterpieces</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="relative h-[100vh] w-full object-cover"
            src="https://i.ibb.co.com/3YjXQQ2/canada-banner-three.jpg"
            alt="canada image"
          />
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 overlay flex flex-col justify-center items-center text-white text-lg md:text-2xl">
            <Fade delay={100}>
              <h2 className="gradient-text text-center text-3xl md:text-4xl lg:text-6xl font-bold tracking-widest">
                Family Travel in Canada
              </h2>
            </Fade>
            <p className="py-2">-Fun and Educational Experiences</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Banner;
