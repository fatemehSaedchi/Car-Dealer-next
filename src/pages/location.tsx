import {Branches, HeroSection, Map, Section} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {getLocationApiCall} from "@/api";
import {ApiResponseType, LocationType} from "@/types";

export default function Location() {
    const {data: locationData} = useQuery<ApiResponseType<LocationType>>(
        {
            queryKey: [getLocationApiCall.name],
            queryFn: getLocationApiCall,
        })
    return (
        //Todo fix z-index
        <>
            <HeroSection title={"Dealer Locations"} backGround={'bg-location-banner'}/>
            <Section className={'pt-14 lg:pt-24'}>
                <Map/>
                {locationData && <Branches data={locationData.data}/>}
            </Section>
        </>
    )
}