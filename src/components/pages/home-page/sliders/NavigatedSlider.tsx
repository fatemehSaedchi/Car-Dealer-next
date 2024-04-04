
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import {NavigatedSliderCard} from "@/components";
import {ApiResponseType, CarsType} from "@/types";

interface Props {
    sliderData: ApiResponseType<CarsType>,
    nextEl?: string,
    prevEl?: string

}

export function NavigatedSlider({sliderData, nextEl, prevEl}: Props) {
    return (

        <Swiper
            className={'rounded-bl-[100px]'}
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
                            <NavigatedSliderCard data={value}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}