import {Autoplay, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {twMerge} from "tailwind-merge";

interface Props {
    sliderData: Array<string>
    sliderClass?: string
}

export function VerticalSlider({sliderData, sliderClass}: Props) {
    return (
        <>
            <Swiper
                className={twMerge('mySwiper rounded-bl-[100px]', sliderClass) }
                slidesPerView={1}
                modules={[Autoplay, Pagination]}
                autoplay={true}
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
            >
                {
                    sliderData.map((slideData, index)=>{
                        return(
                            <SwiperSlide key={index} className={'relative'}>
                                <img className="object-cover object-center h-full"
                                     src={slideData} alt=""/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}