import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide  } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import useResizeAware from 'react-resize-aware';
import "./AllCities.css";
import { Pagination } from "swiper";

import OneCity from "./OneCity";
import aot1 from '../../../stuff/images/aot1.jpg'
import op1 from '../../../stuff/images/op1.webp'
import op2 from '../../../stuff/images/op2.webp'



const cityInfos = [
  {
    id: 1,
    image: aot1,
    text: 'Shiganshina'
  },
  {
    id: 2,
    image: op1,
    text: 'Skypiea'
  },
  {
    id: 3,
    image: op2,
    text: 'Alabasta'
  },
  {
    id: 4,
    image: aot1,
    text: 'Shiganshina'
  },
  {
    id: 5,
    image: op1,
    text: 'Skypiea'
  },
  {
    id: 6,
    image: op2,
    text: 'Alabasta'
  },
]



const AllCities = () => {
  const [resizeListener, sizes] = useResizeAware();
  const [resizeWidth, setresizeWidth] = useState('vertical')
  useEffect(()=>{
    if(sizes.width===400) {
      setresizeWidth('horizontal')
    }
    if(sizes.width===240) {
      setresizeWidth('vertical')
    }
  },[sizes.width])
  return (
    <Swiper
        direction={resizeWidth}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {resizeListener}
          {
            cityInfos.map((cityInfo, i) => {
              return (
                <SwiperSlide key={i}>
                  <OneCity
                  key={i}
                  id={cityInfos[i].id}
                  image={cityInfos[i].image}
                  text={cityInfos[i].text}
                  />
                </SwiperSlide>
              );
            })
          }
    </Swiper>
  )
}

export default AllCities