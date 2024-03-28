import {Autoplay, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {twMerge} from "tailwind-merge";
import {VerticalSliderCard} from "@/components";

interface Props {
    sliderData: Array<string>
    sliderClass?: string
}

export function VerticalSlider({sliderData, sliderClass}: Props) {


    return (
        <>
            <Swiper
                direction={'vertical'}
                className={twMerge('swiper mySwiper rounded-bl-[100px]', sliderClass) }
                slidesPerView={1}
                modules={[Autoplay, Pagination]}
                autoplay={true}
                pagination={{
                    clickable: true,
                }}
            >
                {
                    sliderData.map((value, index)=>{
                        return(
                            <SwiperSlide key={index} className={'relative'}>
                                <VerticalSliderCard data={value}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}