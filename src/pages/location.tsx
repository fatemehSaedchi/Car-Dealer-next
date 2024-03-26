import {IconBox, PhoneButton, Section} from "@/components";
import {LocationMock} from "@/mock/location";

export default function Location() {
    return(
        <>
            <Section className={'mt-[30px]'}>
                <div className="relative h-36 sm:h-56 lg:h-80">
                    <div className="absolute inset-0 gradient-black"></div>
                    <div className="relative z-50 h-full flex flex-col justify-center items-center gap-3 sm:gap-5 lg:gap-9">
                        <h1 className="text-white text-xl sm:text-3xl lg:text-6xl font-bold">About Mobhil</h1>
                        <div className="w-10 h-1 sm:w-14 sm:h-1.4 lg:w-24 lg:h-2 bg-white rounded-2xl"></div>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="container mx-auto px-4 pt-14 lg:pt-24">
                    <h3 className="font-bold text-2xl md:text-4xl xl:text-5xl text-center">Our dealer
                        shops</h3>
                    <p className="sm:w-3/5 mx-auto pt-3 lg:pt-5 text-center text-xs md:text-sm xl:text-base leading-5">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                    <div className=" mt-5">
                        <div className="max-w-6xl mx-auto relative">
                            <img src="/assets/images/about/map.svg" alt=""/>
                            <div
                                className="w-[10%] h-1/6 max-w-[80px] max-h-[77px] absolute top-[15%] left-[8%] rounded-xl bg-white flex justify-center items-center shadow-xl">
                                <img className="w-[50%]" src="/assets/images/about/car-blue.png" alt=""/>
                            </div>
                            <div
                                className="w-[13%] h-[21%] max-w-[95px] max-h-[90px] absolute top-[35%] left-[40%] rounded-2xl  bg-primary-100 flex justify-center items-center">
                                <img className="w-[50%]" src="/assets/images/about/carVector.png" alt=""/>
                            </div>
                            <div
                                className="w-[15%] h-1/4 max-w-[110px] max-h-[108px] absolute top-[18%] right-[10%] rounded-2xl bg-white flex justify-center items-center shadow-xl">
                                <img className="w-[50%]" src="/assets/images/about/car-blue.png" alt=""/>
                            </div>
                            <div
                                className="w-[8%] h-[13%] max-w-[58px] max-h-[56px] absolute bottom-[20%] left-1/2 rounded-lg bg-white flex justify-center items-center shadow-xl">
                                <img className="w-[50%]" src="/assets/images/about/car-blue.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 sm:w-4/5 lg:w-full max-w-7xl mx-auto gap-x-5 sm:gap-x-8 justify-center items-center">

                        {
                            LocationMock.map((item,index)=>{
                                let locationComponent;
                                if (index % 2 === 0) {
                                    locationComponent = (
                                        <div key={index} className="bg-primary-100 z-50 rounded-xl text-white px-4 md:px-9 lg:px-5 xl:px-12 py-7 sm:py-11 mt-10 sm:mt-16">
                                            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl">{item.city},</h2>
                                            <h3 className="uppercase font-light text-sm sm:text-base md:text-lg sm:mt-1 xl:mt-2">{item.country}</h3>
                                            <p className="font-medium text-xs sm:text-sm xl:text-base mt-3 md:mt-5 xl:mt-7 h-20 lg:h-24 mb-3 lg:mb-7 sm:pr-9 pr-7">{item.address}</p>
                                            <IconBox icon={'icon-phone'} title={item.tel} link={`tel:${item.link}`} linkClassName={"py-1 lg:py-2 px-1.5 sm:px-3 lg:px-5 text-center rounded-lg text-primary-100 font-bold w-fit bg-white"} titleClassName={'text-[8px] sm:text-xs xl:text-sm'}/>
                                        </div>
                                    );
                                } else {
                                    locationComponent = (
                                        <div key={index} className="bg-primary-100 z-50 rounded-xl text-white px-4 md:px-9 lg:px-5 xl:px-12 py-7 sm:py-11 lg:-mt-32">
                                            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl">{item.city},</h2>
                                            <h3 className="uppercase font-light text-sm sm:text-base md:text-lg sm:mt-1 xl:mt-2">{item.country}</h3>
                                            <p className="font-medium text-xs sm:text-sm xl:text-base mt-3 md:mt-5 xl:mt-7 h-20 lg:h-24 mb-3 lg:mb-7 sm:pr-9 pr-7">{item.address}</p>
                                            <IconBox icon={'icon-phone'} title={item.tel} link={`tel:${item.link}`} linkClassName={"py-1 lg:py-2 px-1.5 sm:px-3 lg:px-5 text-center rounded-lg text-primary-100 font-bold w-fit bg-white"} titleClassName={'text-[8px] sm:text-xs xl:text-sm'}/>
                                        </div>
                                    );
                                }
                                return locationComponent;
                            })
                        }
                    </div>
                </div>
            </Section>

            {/*<section>*/}
            {/*    <div className="container m-auto px-4 mt-32 lg:mt-64 relative">*/}
            {/*        <div*/}
            {/*            className="max-w-6xl m-auto bg-primary-100 max-h-72 rounded-3xl lg:rounded-[40px] relative flex p-4 sm:py-7 md:p-9 lg:p-16">*/}
            {/*            <div className="basis-2/4">*/}
            {/*                <p className="w-full text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold text-white">*/}
            {/*                    Have any question</p>*/}
            {/*                <p className="w-full text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold text-white lg:pt-2">*/}
            {/*                    about us?</p>*/}
            {/*                <div className="flex pt-5 sm:pt-9 lg:pt-14 gap-2 lg:gap-4">*/}
            {/*                    <button*/}
            {/*                        className="text-[8px] sm:text-sm lg:text-base py-1 lg:py-2 px-1.5 sm:px-3 lg:px-5 text-center rounded-lg bg-White-200 text-primary-100 font-bold">*/}
            {/*                        <i className="fa-solid fa-phone pr-2 lg:pr-4"></i>224 000 22 11 33*/}
            {/*                    </button>*/}
            {/*                    <button*/}
            {/*                        className="text-[8px] sm:text-xs lg:text-base py-1 px-1.5 sm:px-3 lg:px-5 text-center rounded-lg border-2 border-White-200 text-White-200 font-medium">*/}
            {/*                        Contact Us*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="basis-2/4 relative">*/}
            {/*                <img*/}
            {/*                    className="w-full object-cover rounded-2xl lg:rounded-[49px] shadow-4xl absolute -top-14 sm:-top-24 md:-top-28 lg:md:-top-40 xl:md:-top-52 z-50"*/}
            {/*                    src="../assets/img/bradley-dunn-qijkjkJm63c-unsplash11.jpg" alt=""/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <img className="w-10 md:w-14 lg:w-20 absolute left-[46%] top-[11%] lg:top-[18%]"*/}
            {/*             src="../assets/icons/circleElement%20(1).svg" alt=""/>*/}
            {/*        <div*/}
            {/*            className="w-16 h-16 sm:w-28 sm:h-28 lg:w-44 lg:h-44 bg-orange-100 rounded-full absolute left-[45%] top-[82%] sm:top-[84%] md:top-[94%] lg:top-[79%] xl:top-[93%]"></div>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </>
    )
}