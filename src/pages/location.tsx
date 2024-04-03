import {Branches, HeroSection, Map, Section} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {InView} from "react-intersection-observer";
import {getLocationApiCall} from "@/api";
import {ApiResponseType, LocationType} from "@/types";

export default function Location() {

    const {data: locationData, refetch} = useQuery<ApiResponseType<LocationType>>(
        {
            queryKey: [getLocationApiCall.name],
            queryFn: getLocationApiCall,
            enabled: false
        })


    return (
        <>
            <HeroSection title={"Dealer Locations"}/>
            <Section className={'pt-14 lg:pt-24'}>
                <Map/>
                <InView onChange={(InView)=>{InView ? refetch(): ''}}>
                    {(locationData && InView) &&
                        <Branches data={locationData.data}/>}
                </InView>
            </Section>
        </>
    )
}