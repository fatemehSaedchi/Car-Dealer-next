
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {TrendingSliderCard} from "@/components";
import {ApiResponseType, CarsType} from "@/types";

interface Props {
    sliderData: ApiResponseType<CarsType>,
    nextEl?: string,
    prevEl?: string

}

export function TrendingSlider({sliderData, nextEl, prevEl}: Props) {
    return (

        <Swiper
            className={'rounded-bl-[100px] trendingSlider'}
            slidesPerView={1}
            modules={[Navigation,Autoplay]}
            navigation={{
                nextEl:nextEl,
                prevEl:prevEl
            }}
            autoplay={true}
        >
            {
                sliderData.data.map((value, index)=>{
                    return(
                        <SwiperSlide key={index} className={'relative'}>
                            <TrendingSliderCard data={value}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}