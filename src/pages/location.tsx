import {BranchesCard, HeroSection, Map, Section} from "@/components";
import {LocationMock} from "@/mock";

export default function Location() {

    return(
        <>
            <HeroSection title={"About Mobhil"}/>
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