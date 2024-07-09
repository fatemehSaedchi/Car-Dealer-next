import {Branches, HeroSection, Map, Section} from "@/components";
import {getLocationApiCall} from "@/api";
import {ApiResponseType, LocationType} from "@/types";

interface props {
    locationData: ApiResponseType<LocationType>
}
export default function Location({locationData}: props) {
    return (
        <>
            <HeroSection title={"Dealer Locations"} backGround={'bg-location-banner'}/>
            <Section className={'pt-14 lg:pt-24'}>
                <Map/>
                {locationData && <Branches data={locationData.data}/>}
            </Section>
        </>
    )
}

export async function getStaticProps() {
    const locationData = await getLocationApiCall()
    return{ props: {locationData}}
} 

