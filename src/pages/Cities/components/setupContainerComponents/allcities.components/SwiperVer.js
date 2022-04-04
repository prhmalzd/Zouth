import React from "react";
import { Swiper,SwiperSlide  } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import OneCity from "../OneCity";
import { cityInfos } from './CityInfos'


const SwiperVer = props => {
  return (
    <Swiper
        direction={"vertical"}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
    >
      {props.onResizeListener}
      {
            cityInfos.map((cityInfo, i) => {
              return (
                <SwiperSlide key={i}>
                  <OneCity
                  key={i}
                  id={cityInfo.id}
                  image={cityInfo.image}
                  text={cityInfo.text}
                  />
                </SwiperSlide>
              );
            })
          }
    </Swiper>
  )
}

export default SwiperVer