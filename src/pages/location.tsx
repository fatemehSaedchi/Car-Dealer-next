import {BranchesCard, Map, Section} from "@/components";
import {LocationMock} from "@/mock/location";

export default function Location() {
    //Todo replace banner component with first section
    return(
        <>
            <Section className={"mb-2 lg:mb-[30px]"}>
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
                    <Map/>
                    <div className="grid grid-cols-2 lg:grid-cols-4 sm:w-4/5 lg:w-full max-w-7xl mx-auto gap-x-5 sm:gap-x-8 justify-center items-center">
                        {
                            LocationMock.map((item,index)=>{
                                let branchesCard;
                                if (index % 2 === 0) {
                                    branchesCard = <BranchesCard cardData={item} index={index} margin={"mt-10 sm:mt-16"}/>

                                } else {
                                    branchesCard = <BranchesCard cardData={item} index={index} margin={"lg:-mt-32"}/>
                                }
                                return branchesCard;
                            })
                        }
                    </div>
                </div>
            </Section>
        </>
    )
}