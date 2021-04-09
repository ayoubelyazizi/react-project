// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Flex} from '@chakra-ui/react'
import Overlay from './SliderItems'

import { Swiper, SwiperSlide } from 'swiper/react';
import {Image} from '@chakra-ui/react'



// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (

      <Swiper
        spaceBetween={0}
        slidesPerView={1}

        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide> <Image src='./slide1.jpg'/> <Overlay/> </SwiperSlide>

      </Swiper>

  );
};