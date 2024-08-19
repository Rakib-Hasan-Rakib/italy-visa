import ClientCard from "./ClientCard";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle";

const Clients = () => {
  const [activeButton, setActiveButton] = useState("next");

  const slides = [
    "https://i.ibb.co/94x29fT/student-one.webp",
    "https://i.ibb.co/VLxymkq/student-two.jpg",
    "https://i.ibb.co/S6tQfp6/student-three.jpg",
    "https://i.ibb.co/BGH76HY/student-five.jpg",
    "https://i.ibb.co/pnRQnx3/student-four.webp",
    "https://i.ibb.co/RSM27kZ/student-six.jpg",
  ];
  return (
    <>
      <div>
        <SectionTitle>Our Valuable clients</SectionTitle>

        <section className="">
          <div className="w-full mx-auto">
            <div className="relative">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                cssMode={true}
                loop={true}
                navigation={{
                  nextEl: ".swiper-team-button-next",
                  prevEl: ".swiper-team-button-prev",
                }}
                modules={[Navigation]}
                className="mySwiper gap-4"
                style={{ overflow: "visible" }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
              >
                {slides.map((slideItem, index) => (
                  <SwiperSlide key={index}>
                    <ClientCard image={slideItem} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div
                style={{ zIndex: 100 }}
                className="absolute -bottom-12 md:-bottom-16 xl:-bottom-20 left-1/2 -translate-x-1/2"
              >
                <button
                  style={{
                    color: "black",
                    backgroundColor: "white",
                  }}
                  className="swiper-team-button-prev p-2 rounded-md"
                  onClick={() => setActiveButton("prev")}
                >
                  <MdArrowBackIos size={28} />
                </button>
                <button
                  style={{
                    color: "black",
                    backgroundColor: "white",
                  }}
                  className="swiper-team-button-next p-2 ml-4 rounded-md"
                  onClick={() => setActiveButton("next")}
                >
                  <MdArrowForwardIos size={28} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Clients;
