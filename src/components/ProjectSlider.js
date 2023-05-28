import React, { forwardRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper';
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import './ProjectSlider.css'
import { projectsData } from './ProjectsData';



function ProjectSlider({ }, ref) {
  return (
    <div ref={ref} style={{ scrollMargin: "68px" }}>
      <Swiper
        pagination={true}
        navigation={true}
        freeMode={true}
        loop={true}
        autoplay={true}
        grabCursor={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="project-swiper"
      >
        {projectsData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <a target={"_blank"} href={item.link} rel="noopener noreferrer" className='swiper-title'>{item.title}</a>
              <img /*style={{ height: "500px", width: "100%" }}*/ className='swiper-image' src={item.img} alt={item.img} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className='fullscreen-project-swiper'>
        <Swiper
          speed={600}
          parallax={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          loop={true}
          autoplay={true}
          slidesPerView="2"
          spaceBetween={10}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className='fullscreen-swiper'
        >
          {projectsData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <a
                  target={"_blank"}
                  href={item.link}
                  rel="noopener noreferrer"
                  className='swiper-title'
                  data-swiper-parallax="-300"
                >{item.title}</a>
                <img /*style={{ height: "500px", width: "100%" }}*/ data-swiper-parallax="-200" className='swiper-image' src={item.img} alt={item.img} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default forwardRef(ProjectSlider);