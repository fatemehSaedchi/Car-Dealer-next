// todo replace mockData whit api response

import Link from "next/link";

import {
    NavigatedSlider,
    SearchBox,
    Section,
    ImageView,
    IconBox,
    ServicesCard,
    VerticalSlider,
    PaginatedSlider
} from "@/components";
import {BannerSliderMock, ServicesMock, CarBrandsMock, VerticalSliderMock, TopDealsCarsMock} from "@/mock";

export default function Home() {
    return (

        <>
            <Section>
                <div className="flex flex-col lg:flex-row container mx-auto px-4">
                    <ImageView src="/assets/images/circleElement.svg" alt=""
                               classname="absolute w-14 top-[60px] right-[85%] lg:right-[52%]" height={66} width={50}/>
                    <div className="absolute right-0 lg:order-2 self-end lg:self-start w-10/12 lg:w-2/4">
                        <NavigatedSlider sliderData={BannerSliderMock} nextEl={".swiper-button-next"}
                                         prevEl={".swiper-button-prev"}/>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                    <div className="w-full lg:w-2/4 lg:order-1 pt-[400px] lg:pt-28 xl:pt-20">
                        <div className="w-full sm:w-96 h-12 text-xs sm:text-sm bg-White-300 rounded-[44px] relative">
                            <button
                                className="h-4/5 absolute left-2.5 my-auto top-0 bottom-0 px-6 bg-orange-100 rounded-[44px] text-white font-bold">
                                TRENDING
                            </button>
                            <label>
                                <input type="text" className="w-full h-full pl-44 bg-transparent outline-none pr-8"
                                       placeholder="2020 FORT MUSTANG"/>
                            </label>
                        </div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl xl:text-6xl pr-2 sm:w-[500px] xl:w-[620px] font-bold sm:leading-[58px] xl:leading-[70px] pt-7 lg:pt-11">
                                Say hello to best car dealer platform</h1>
                            <p className="text-sm md:w-10/12 leading-6 sm:leading-7 mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>

                        <SearchBox className={'mb-10'}/>

                        <Link href={'#'}
                              className="text-primary-100 text-sm sm:text-base md:text-lg pt-7">
                            Try advanced search
                            <IconBox icon={"icon-rightArrow pl-6"}/>
                        </Link>
                        <div>
                            <h3 className="text-xs md:text-base text-secondary-100 pt-8 2xl:pt-14">
                                Popular Brands
                            </h3>
                            <ul className="flex gap-[20px] sm:gap-[30px] lg:gap-[21px] mt-3.5">
                                {
                                    CarBrandsMock.data.slice(0, 3).map((item, index) => {
                                        return (
                                            <li key={index}
                                                className="text-xs xs:text-sm sm:text-xl xl:text-2xl font-bold hover:text-blue-600">
                                                {item.attributes.title}
                                            </li>
                                        )
                                    })
                                }
                                <li className="text-xs xs:text-sm sm:text-xl xl:text-2xl font-bold text-White-100 cursor-pointer hover:text-blue-600">
                                    24+ more
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <ImageView height={2134} width={1600}
                           classname={"w-10/12 lg:w-2/5 h-[400px] lg:h-[790px] absolute left-0 -z-10 rounded-br-[100px] rounded-tr-[100px] object-cover object-center"}
                           src="/assets/images/robin-vet-q6LFMQ6wVZ0-unsplash1.jpg" alt="classNameic car"/>
                <div className="flex flex-col lg:items-end gap-9 2xl:gap-16">
                    <div
                        className="sm:w-11/12 lg:w-[70%] order-1 lg:order-2 flex flex-row pt-80 lg:pt-0 gap-2.5 sm:gap-5 justify-between self-end 2xl:pr-24">
                        {
                            ServicesMock.map((service, index) => {
                                return (
                                    <div
                                        className="basis-1/3 flex flex-col justify-center items-center shadow-Xl rounded-2xl bg-white">
                                        <div className="w-4/5 py-5 lg:py-8">
                                            <ServicesCard key={index} data={service}/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="w-full lg:w-3/5 order-2 lg:order-1 lg:pl-16">
                        <h2 className="text-base md:text-lg text-primary-100 font-semibold tracking-[9px] md:pt-8 lg:pt-16">
                            ABOUT
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold pt-3 md:pt-5">
                            About the Mobhil
                        </h3>
                        <p className="text-xs md:text-base xl:text-lg pr-5 leading-[21px] xl:leading-8 pt-6 md:pt-8 xl:pt-10 lg:w-4/5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-9 items-center">
                    <ImageView src="/assets/images/circleElement.svg" alt="" width={66} height={50}
                               classname="w-[50px] absolute left-0 md:left-16 lg:left-2/4 xl:left-[51%] 2xl:left-[53%] lg:top-80 top-40 z-50"/>

                    <div className="w-full lg:basis-1/2 order-2 lg:order-1 pt-9">
                        <h3 className="text-xs lg:text-sm xl:text-xl text-secondary-200 font-semibold">
                            We Bring You to The Future
                        </h3>
                        <h3 className="font-bold text-[30px] lg:text-[40px] xl:text-[45px] 2xl:text-[48px] mt-3 md:mt-[14px]">
                            Don’t worries, <br/>
                            we check all of unit
                        </h3>
                        <p className="text-xs sm:text-sm lg:text-base 2xl:text-lg 2xl:w-[90%] lg:leading-8 mt-3 md:mt-[14px] lg:mt-[20px] xl:mt-[30px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                        </p>
                        <Link href={'#'}
                              className="inline-block px-4 xl:px-9 py-[12px] xl:py-[18px] text-sm md:text-base xl:text-lg font-medium rounded-[7px] bg-primary-100 text-white mt-6 lg:mt-9">
                            Discover More
                        </Link>
                    </div>
                    <div className="w-full lg:basis-1/2 order-1 lg:order-2 h-72 lg:h-96 2xl:pr-12">
                        <VerticalSlider sliderData={VerticalSliderMock}
                                        sliderClass={'max-w-xl lg:w-full rounded-[60px]'}/>
                    </div>
                </div>
            </Section>

            <Section className={"flex flex-col items-center"}>
                <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
                    Top deals of the week
                </h2>
                <p className="max-w-xl lg:max-w-2xl text-sm lg:text-lg leading-6 xl:leading-8 text-center pt-2 md:pt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="h-fit w-4/5 sm:w-full 2xl:max-w-7xl pt-10">

                    <PaginatedSlider sliderData={TopDealsCarsMock}/>

                </div>
            </Section>

            <Section>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-9 items-center">
                    <ImageView height={66} width={50} src="/assets/images/circleElement.svg" alt=""
                               classname="w-[50px] absolute left-0 md:left-16 2xl:left-[70px] lg:left-0 top-32 lg:top-60 z-50"/>
                    <div className="w-full lg:basis-1/2 h-72 lg:h-96">

                        <VerticalSlider sliderData={VerticalSliderMock}
                                        sliderClass={'max-w-xl lg:w-full rounded-[60px]'}/>

                    </div>
                    <div className="w-full lg:basis-1/2 pt-9">
                        <h2 className="text-xs lg:text-sm xl:text-xl text-secondary-200 font-semibold">
                            We Bring You to The Future
                        </h2>
                        <h3 className="font-bold text-[30px] lg:text-[40px] xl:text-[45px] 2xl:text-[48px] mt-3 md:mt-[14px]">
                            Don’t worries, <br/>
                            we check all of unit
                        </h3>
                        <p className="text-xs sm:text-sm lg:text-base 2xl:text-lg 2xl:w-[90%] lg:leading-8 mt-3 md:mt-[14px] lg:mt-[20px] xl:mt-[30px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea.
                        </p>
                        <Link href={""}
                              className="inline-block px-4 xl:px-9 py-[12px] xl:py-[18px] text-sm md:text-base xl:text-lg font-medium rounded-[7px] bg-primary-100 text-white mt-6 lg:mt-9">
                            Discover More
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
}
