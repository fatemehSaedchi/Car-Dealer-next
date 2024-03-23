import {HeroSection, IconBox, OurTeam, Section} from "@/components";
import {TeamMembersMock} from "@/mock";

interface Props {

}

export default function About({}: Props) {
    return (
        <>


            <HeroSection title={'About Mobhil'}/>


            <Section>
                <div className="pt-7 sm:pt-14 md:pt-20 sm:flex sm:gap-10 lg:gap-14">
                    <div className="flex flex-col gap-1 sm:gap-3 md:gap-5 lg:gap-6 sm:basis-[40%]">
                        <h2 className="text-xs sm:text-sm md:text-lg text-primary-100 font-semibold tracking-[4px]">
                            PROCCESS
                        </h2>
                        <h3 className="font-bold text-xl md:text-2xl lg:text-[35px] xl:text-[45px]">
                            This is how we work
                        </h3>
                    </div>
                    <p className="sm:basis-6/12 lg:basis-7/12 max-w-2xl text-xs md:text-sm xl:text-base pt-2 md:pt-5 lg:pt-7 leading-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea.
                    </p>
                </div>
                <div className="flex flex-wrap pt-7 md:pt-11">
                    <div className="basis-1/2 md:basis-1/4 px-5 xl:px-9 py-6 xl:py-14">
                        <div className="w-[90%] h-[4px] mb-[30px] md:mb-[50px] xl:mb-[70px] relative bg-primary-400">
                            <div
                                className="absolute top-[-5px] right-[-15px] w-[15px] h-[15px] rounded-full bg-primary-400"></div>
                        </div>
                        <IconBox icon={'icon-star w-1/5 text-blue-700 text-2xl'}/>
                        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold pt-6 md:pt-9 lg:pt-12">
                            FIND
                        </h2>
                        <p className="text-[10px] sm:text-sm lg:text-base mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                    </div>
                    <div className="basis-1/2 md:basis-1/4 px-5 xl:px-9 py-6 xl:py-14">
                        <div className="w-[90%] h-[4px] mb-[30px] md:mb-[50px] xl:mb-[70px] relative bg-primary-300">
                            <div
                                className="absolute top-[-5px] right-[-15px] w-[15px] h-[15px] rounded-full bg-primary-300"></div>
                        </div>
                        <IconBox icon={'icon-Vector w-1/5 text-blue-700 text-2xl'}/>
                        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold pt-6 md:pt-9 lg:pt-12">
                            UPDATE
                        </h2>
                        <p className="text-[10px] sm:text-sm lg:text-base mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                    </div>
                    <div className="basis-1/2 md:basis-1/4 px-5 xl:px-9 py-6 xl:py-14">
                        <div
                            className="w-[90%] h-[4px] mb-[30px] md:mb-[50px] xl:mb-[70px] relative bg-primary-200">
                            <div
                                className="absolute top-[-5px] right-[-15px] w-[15px] h-[15px] rounded-full bg-primary-200"></div>
                        </div>
                        <IconBox icon={'icon-shield w-1/5 text-blue-700 text-2xl'}/>
                        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold pt-6 md:pt-9 lg:pt-12">
                            SECURE
                        </h2>
                        <p className="text-[10px] sm:text-sm lg:text-base mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                    </div>
                    <div className="basis-1/2 md:basis-1/4 px-5 xl:px-9 py-6 xl:py-14">
                        <div className="w-[90%] h-[4px] mb-[30px] md:mb-[50px] xl:mb-[70px] relative bg-primary-100">
                            <div
                                className="absolute top-[-5px] right-[-15px] w-[15px] h-[15px] rounded-full bg-primary-100"></div>
                        </div>
                        <IconBox icon={'icon-Vector w-1/5 text-blue-700 text-2xl'}/>
                        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold pt-6 md:pt-9 lg:pt-12">
                            We Deliver
                        </h2>
                        <p className="text-[10px] sm:text-sm lg:text-base mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                    </div>
                </div>
            </Section>


            {/* //todo replace section with ms.saedchi's component
                <section>
                <div className="container mx-auto px-4 pt-16 lg:pt-24">
                    <h3 className="font-bold text-xl md:text-2xl lg:text-[35px] xl:text-[45px] text-center">Our dealer
                        shops</h3>
                    <p className="sm:w-4/6 max-w-2xl m-auto pt-2 lg:pt-5 text-center text-xs md:text-sm xl:text-base leading-5">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                    <div className=" mt-5">
                        <div className="max-w-6xl mx-auto relative">
                            <img src="../assets/img/about/map.svg" alt=""/>
                            <div
                                className="w-[10%] h-1/6 max-w-[80px] max-h-[77px] absolute top-[15%] left-[8%] rounded-xl bg-white flex justify-center items-center shadow-xl">
                                <img className="w-[50%]" src="../assets/img/about/car-blue.png" alt=""/>
                            </div>
                            <div
                                className="w-[13%] h-[21%] max-w-[95px] max-h-[90px] absolute top-[35%] left-[40%] rounded-2xl  bg-primary-100 flex justify-center items-center">
                                <img className="w-[50%]" src="../assets/img/about/carVector.png" alt=""/>
                            </div>
                            <div
                                className="w-[15%] h-1/4 max-w-[110px] max-h-[108px] absolute top-[18%] right-[10%] rounded-2xl bg-white flex justify-center items-center shadow-xl">
                                <img className="w-[50%]" src="../assets/img/about/car-blue.png" alt=""/>
                            </div>
                            <div
                                className="w-[8%] h-[13%] max-w-[58px] max-h-[56px] absolute bottom-[20%] left-1/2 rounded-lg bg-white flex justify-center items-center shadow-xl">
                                <img className="w-[50%]" src="../assets/img/about/car-blue.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            */}


            <Section>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-24 lg:gap-48">
                    <h3 className="font-bold text-2xl md:text-4xl xl:text-5xl">
                        Our teams
                    </h3>
                    <p className="text-xs md:text-sm xl:text-base leading-5 sm:basis-3/5 lg:basis-1/2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                </div>

                <OurTeam data={TeamMembersMock}/>


            </Section>
        </>
    )
}