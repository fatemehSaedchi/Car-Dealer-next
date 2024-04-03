import {Branches, HeroSection, Map, Section} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {getLocationApiCall} from "@/api/location";
import {ApiResponseType} from "@/types/Response";
import {LocationType} from "@/types/Location";

const {data:locationData} = useQuery<ApiResponseType<LocationType>>({queryKey:[getLocationApiCall.name], queryFn:()=> getLocationApiCall()})

export default function Location() {

    return(
        <>
            <HeroSection title={"Dealer Locations"}/>
            <Section className={'pt-14 lg:pt-24'}>
                    <Map/>
                {locationData && <Branches data={locationData.data}/>}
            </Section>
        </>
    )
}