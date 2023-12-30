import React from "react";
import { useSwiper } from "swiper/react";
import "./swipe.css";
export default function SwiperNext({ img, action }) {
  function Image({direction}) {
    return (
      <div className={`${direction}-swipe`}>
        <img src={img} alt="" />
      </div>
    );
  }
  const swiper = useSwiper();
  if (action === "next")
    return (
      <div onClick={()=>swiper.slideNext()}>
        <Image direction="next"/>
      </div>
    );
  else
    return (
      <div onClick={() => swiper.slidePrev()}>
        <Image direction="prev"/>
      </div>
    );
}
