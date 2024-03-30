import {Branches, HeroSection, Map, Section} from "@/components";
import {LocationMock} from "@/mock";

export default function Location() {

    return(
        <>
            <HeroSection title={"Dealer Locations"}/>
            <Section className={'pt-14 lg:pt-24'}>
                    <Map/>
                    <Branches data={LocationMock}/>
            </Section>
        </>
    )
}