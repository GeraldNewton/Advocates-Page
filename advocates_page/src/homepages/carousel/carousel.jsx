import { Swiper, SwiperSlide } from "swiper/react";
import Swipe from "./swipe";
import "swiper/css";
import "swiper/css/free-mode";
import next from "../../assests/Nexticon.png";
import prev from "../../assests/Previcon.png";
import Photo1 from "../../assests/Photo1icon.png";
import Photo2 from "../../assests/Photo2icon.png";
import Photo3 from "../../assests/Photo3icon.png";
import "./carousel.css";
import { Navigation } from "swiper/modules";
import Card from "./card.jsx"
export default function Carousel() {
  let info=[
    {
      name:"Jane Cooper",
      img:Photo1
    },
    {
      name:"Devon Lane", 
      img:Photo2
    },
    {
      name:"Robert Fox", 
      img:Photo3
    },
    {
      name:"Jane Cooper",
      img:Photo1
    },
    {
      name:"Devon Lane", 
      img:Photo2
    }, 
    {
      name:"Robert Fox", 
      img:Photo3
    },
    {
      name:"Jane Cooper",
      img:Photo1
    },
    {
      name:"Devon Lane", 
      img:Photo2
    }, 
    {
      name:"Robert Fox", 
      img:Photo3
    }
  ]
  function content() {
    return (
      <div className="content-carousel">
        <div className="head-carousel">What says our happy clients</div>
        <div className="swipe-carousel">
          <Swipe img={prev} action="prev" />
          <Swipe img={next} action="next" />
        </div>
      </div>
    );
  }
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="Carousel-Carousel"
        initialSlide={0}
        modules={[Navigation]}
      >
        {/* TO UNDERSTAND WHY WE ARE USING USESWIPER IN EXTERNAL BUTTONS READ (STACKOVERFLOW How to use useSwiper outside a Swiper instance?) */}
        {[content()]}
        {info.map((val)=><SwiperSlide className="slide-carousel"><Card name={val.name} img={val.img}/></SwiperSlide>)}
      </Swiper>
    </>
  );
}
