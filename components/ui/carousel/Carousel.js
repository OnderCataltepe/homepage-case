import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from "../cards/sliderCard/SliderCard";

const Carousel = ({ items }) => {
  return (
    <Swiper
      pagination={true}
      className="MySwiper"
      autoplay={{
        delay: 3000,
      }}
      style={{
        "--swiper-pagination-color": "#fff",
      }}
      loop={true}
      slidesPerView={1}
      modules={[Autoplay, Pagination]}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <SliderCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
