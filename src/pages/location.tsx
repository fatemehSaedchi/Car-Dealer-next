import {Branches, HeroSection, Map, Section} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {getLocationApiCall} from "@/api";
import {ApiResponseType, LocationType} from "@/types";
import {Loading} from "@/components/common/ui/loading/Loading";

export default function Location() {
    const {data: locationData, isPending} = useQuery<ApiResponseType<LocationType>>(
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
                {isPending ? <Loading/> : locationData && <Branches data={locationData.data}/>}
            </Section>
        </>
    )
}

