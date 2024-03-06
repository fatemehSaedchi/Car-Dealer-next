import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

interface Props {
    sliderData: Array<any>
}

export function BannerSlider({sliderData}: Props) {
    return (


        <Swiper
            className={'rounded-bl-[100px]'}
            slidesPerView={1}
            modules={[Navigation,Autoplay]}
            navigation={true}
            autoplay={true}
        >
            {
                sliderData.map((slideData,index)=>{
                    return(
                        <SwiperSlide key={index} className={'relative'}>
                            <img className="rounded-bl-[100px] h-96 lg:h-[700px] w-full"
                                 src={slideData.image} alt=""/>
                            <div className="w-9/12 absolute mx-auto left-0 right-0 top-9 sm:top-12 ">
                                <div className="flex w-full justify-between">
                                    <p className="text-white text-xs sm:text-sm md:text-base xl:text-lg font-semibold">{slideData.class}</p>
                                    <p className="text-white text-xs sm:text-sm md:text-base xl:text-lg font-light">{slideData.title}</p>
                                </div>
                                <div className="flex w-full justify-between mt-2.5">
                                    <p className="text-white text-base sm:text-xl md:text-3xl xl:text-4xl font-light">
                                        {slideData.model}</p>
                                    <p className="text-white text-base sm:text-xl md:text-3xl xl:text-4xl font-bold">$
                                        {slideData.price}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}