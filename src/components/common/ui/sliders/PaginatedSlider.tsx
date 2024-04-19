import {PaginatedSliderCard} from "@/components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import {CarsType, EntityType} from "@/types";

interface Props {
    sliderData: {
        data: Array<EntityType<CarsType>>
    }
}

export function PaginatedSlider({sliderData}: Props) {

    return (
        <>

            <Swiper
                modules={[Pagination,Autoplay]}
                className="mySwiper rounded-[30px]"
                pagination={{
                    clickable: true
                }}
                slidesPerView={1}
                autoplay={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                }}
            >

                {sliderData.data.map((value: EntityType<CarsType>, index: number)=>{
                    return(
                        <>
                        <SwiperSlide key={index} className={'relative rounded-[30px] overflow-hidden'}>
                        <PaginatedSliderCard key={index} data={value}/>
                        </SwiperSlide>
                        </>
                    )
                })}
            </Swiper>
        </>
    )
}