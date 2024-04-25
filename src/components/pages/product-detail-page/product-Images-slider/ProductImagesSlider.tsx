import {ProductImagesCard} from "@/components";
import {CarsType, EntityType} from "@/types";
import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import {useRef,useState} from "react";


interface Props {
    data: EntityType<CarsType>
}
export function ProductImagesSlider({data}: Props) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <div className="flex flex-wrap justify-center gap-y-3 lg:gap-y-7">
            <div className="w-11/12 mb-3">
                <Swiper
                    className="thumbnail-slider mySwiper2"
                    loop={true}
                    modules={[Navigation, Thumbs]}
                    navigation={true}
                    thumbs={{swiper: thumbsSwiper}}
                    slidesPerView={1}
                    spaceBetween={20}
                    autoplay={true}
                >
                    {data.attributes.gallery.data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ProductImagesCard
                                data={item}
                                index={index}
                                className="rounded-xl w-full h-full lg:max-h-[364px] object-cover object-center"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="w-11/12 h-40 overflow-x-scroll gap-3 lg:gap-7 py-4">
                <Swiper
                    onSwiper={(swiper) => {
                        if (swiper instanceof Swiper) {
                            setThumbsSwiper(swiper);
                        }
                    }}
                    className="main-slider mySwiper"
                    loop={true}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[Navigation, Thumbs]}
                    slidesPerView={4}
                    spaceBetween={20}
                    autoplay={true}
                >
                    {data.attributes.gallery.data.map((item, index) => (
                        <SwiperSlide key={index} className="opacity-70 active:opacity-100">
                            <ProductImagesCard
                                data={item}
                                index={index}
                                className="w-full h-full aspect-square rounded-xl object-cover object-center"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
}


