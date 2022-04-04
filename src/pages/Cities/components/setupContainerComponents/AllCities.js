import React, { useEffect, useState, Fragment } from "react";
import "swiper/css";
import "swiper/css/pagination";
import useResizeAware from 'react-resize-aware';
import "./AllCities.css";
import SwiperVer from "./allcities.components/SwiperVer";
import SwiperHor from './allcities.components/SwiperHor'


const AllCities = () => {
  const [resizeListener, sizes] = useResizeAware();
  const [resizeWidth, setresizeWidth] = useState('vertical')
  useEffect(()=>{
    if(sizes.width===400) {
      setresizeWidth(true)
    }
    if(sizes.width===240) {
      setresizeWidth(false)
    }
  },[sizes.width])
  return (
    <Fragment>
     {resizeWidth && <SwiperHor onResizeListener={resizeListener}/>}
     {!resizeWidth && <SwiperVer onResizeListener={resizeListener}/>}
    </Fragment>
  )
}

export default AllCities