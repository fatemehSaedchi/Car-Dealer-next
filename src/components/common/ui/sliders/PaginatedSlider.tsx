// todo creat card component

import {CarFeatures, ImageView} from "@/components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";


interface Props {
    sliderData: Array<any>
}


export function PaginatedSlider({sliderData}: Props) {

    return (
        <>

            <Swiper
                modules={[Pagination]}
                className="mySwiper rounded-[30px]"
                pagination={{
                    clickable: true
                }}
                slidesPerView={1}
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

                {sliderData.map((item, index: number)=>{
                    return(
                        <>
                            <SwiperSlide key={index} className={'relative rounded-[30px] overflow-hidden'}>
                            <ImageView height={1920} width={2880}
                                       classname="rounded-[30px] h-[435px] xl:h-[495px]"
                                       src={item.thumbnail} alt=""/>
                            <div className="absolute top-8 md:top-9 xl:top-11 left-6 xl:left-10 text-white flex flex-col items-start">
                                <p className="text-xs xl:text-sm font-medium tracking-[4px]">
                                    {item.car_type} CAR
                                </p>
                                <p className="text-2xl xl:text-3xl font-bold pt-40 xl:pt-44">
                                    {item.title}
                                </p>
                                <button
                                    className="px-4 py-2 bg-primary-100 rounded-[30px] text-base xl:text-lg font-semibold mt-8">
                                    $ {item.price}
                                </button>
                                <CarFeatures item={item}/>
                            </div>
                        </SwiperSlide>
                        </>
                    )
                })}
            </Swiper>
        </>
    )
}