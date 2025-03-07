// Import Swiper React components
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import 'swiper/css';
import "swiper/swiper-bundle.css";

export default function CardCarousel() {
  return (
    <div className="">
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            style={{ height: 160, width: 300, objectFit: "cover" }}
            src="https://a0.muscache.com/im/pictures/33f7ae09-072e-43f6-b0fd-74f3e9fded09.jpg?im_w=720&im_format=avif"
            alt="1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ height: 160, width: 300, objectFit: "cover" }}
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-1365948386019884976/original/6988367f-3ba9-47f3-b3ca-35a8ca49701c.jpeg?im_w=720&im_format=avif"
            alt="1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ height: 160, width: 300, objectFit: "cover" }}
            src="https://a0.muscache.com/im/pictures/61dc3b0e-8f36-4009-b549-d738ad259773.jpg?im_w=720&im_format=avif"
            alt="1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ height: 160, width: 300, objectFit: "cover" }}
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM0MDIwOTEyMzAzNDQwNjAzNA==/original/48152715-aec9-4868-a880-4097ccec3ff3.jpeg?im_w=720&im_format=avif"
            alt="1"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
