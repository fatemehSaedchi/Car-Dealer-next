import {PaginatedSliderCard} from "@/components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import {ApiResponseType, CarsType, EntityType} from "@/types";
import {useQuery} from "@tanstack/react-query";
import {getAllCarsApi} from "@/api";

export function PaginatedSlider() {

    const {data: topDealsProduct} = useQuery<ApiResponseType<CarsType>>({queryKey:[getAllCarsApi.name], queryFn:()=>getAllCarsApi({
            populate: ['*'],
            filters:{dealCount: {$notNull: true}}
        })})

    return (
        <>
            <Swiper
                modules={[Pagination,Autoplay]}
                className="mySwiper rounded-[30px]"
                pagination={{
                    clickable: true
                }}
                loop={true}
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
                {
                    topDealsProduct &&
                    topDealsProduct.data.map((value: EntityType<CarsType>, index: number)=>{
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