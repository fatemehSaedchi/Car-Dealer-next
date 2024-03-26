import {HeroSection, IconBox, OurTeam, Section, Map, ServicesCard} from "@/components";
import {TeamMembersMock} from "@/mock";
import {ProccessCardMock} from "@/mock/proccessCard";

interface Props {

}

export default function About({}: Props) {
    return (
        <>
            <HeroSection title={'About Mobhil'}/>
            <Section>
                <div className="pt-7 sm:pt-14 md:pt-20 sm:flex sm:gap-10 lg:gap-14">
                    <div className="flex flex-col gap-1 sm:gap-3 md:gap-5 lg:gap-6 sm:basis-[40%]">
                        <h2 className="text-xs sm:text-sm md:text-lg text-primary-100 font-semibold tracking-[4px]">PROCCESS</h2>
                        <h3 className="font-bold text-xl md:text-2xl lg:text-[35px] xl:text-[45px]">This is how we work</h3>
                    </div>
                    <p className="sm:basis-6/12 lg:basis-7/12 max-w-2xl text-xs md:text-sm xl:text-base pt-2 md:pt-5 lg:pt-7 leading-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea.
                    </p>
                </div>
                <div className="flex flex-wrap pt-7 md:pt-11">
                    {
                        ProccessCardMock.map((item,inde)=>{
                            return (
                                <div className="basis-1/2 md:basis-1/4 px-5 xl:px-9 py-6 xl:py-14">
                                    <div
                                        className="w-[90%] h-[4px] mb-[30px] md:mb-[50px] xl:mb-[70px] relative bg-primary-400">
                                        <div
                                            className="absolute top-[-5px] right-[-15px] w-[15px] h-[15px] rounded-full bg-primary-400"></div>
                                    </div>
                                    <ServicesCard data={item}/>
                                </div>
                            )
                        })
                    }
                </div>
            </Section>

            <Map className={'mb-10 lg:mb-28'}/>

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