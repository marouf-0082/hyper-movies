import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

export default function HeaderSlider({ setBg }) {
  function getImage(number) {
    return `http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider${number}.jpg`;
  }

  return (
    <div className="mt-8">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        speed={1500}
      >
        {[1, 2, 3, 4, 5].map((number) => (
          <SwiperSlide key={number}>
            <img
              onMouseOver={() => setBg(getImage(number))}
              className="w-full rounded"
              src={getImage(number)}
              alt="movie"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
