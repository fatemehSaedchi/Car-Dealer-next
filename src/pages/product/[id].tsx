import {
    ProductAlbum,
    Section,
    SocialMediaShare,
    ProductSpecification, PaginatedSlider, Tabs, Breadcrumb
} from "@/components";
import {RatingCard} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {ApiResponseType, ApiSingleResponseType, CarsType} from "@/types";
import {getOneCarApi} from "@/api/car";
import {getAllCarsApi} from "@/api";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Id() {

    const router = useRouter()

    const {id} = router.query

    const {data: CarData, refetch } = useQuery<ApiSingleResponseType<CarsType>>({
        queryKey: [getOneCarApi.name, 'singleData'],
        queryFn: () => getOneCarApi({populate: ['*'], id: id }),
    });

    const {data: topDealsProduct} = useQuery<ApiResponseType<CarsType>>({queryKey:[getAllCarsApi.name], queryFn:()=>getAllCarsApi({
            populate: ['*'],
            filters:{dealCount: {$notNull: true}}
        })})


    useEffect(
    ()=>{
        refetch()
    },[{id}])


            const tabsData = [
                {title: 'Description', content: CarData?.data.attributes.description},
                {title: 'Discussion', content: CarData?.data.attributes.discussion},
                {title: 'Reviews', content: CarData?.data.attributes.reviews},
            ]



    return (
        <>
            {CarData && <Breadcrumb data={CarData.data}/>}

            <Section>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
                    {CarData && <ProductAlbum data={CarData.data}/>}
                    <div>
                        {CarData && <ProductSpecification data={CarData.data}/>}
                        <SocialMediaShare/>
                    </div>
                </div>
            </Section>

            <Section>
                <div
                    className="grid grid-cols-1 justify-items-stretch lg:grid-cols-2 lg:gap-11 mt-20 border-b-2 pb-10 relative h-fit">
                    {CarData && <Tabs tabs={tabsData}/>}
                    {CarData && <RatingCard rate={CarData.data.attributes.rate}/>}
                </div>
            </Section>

            <Section className="flex flex-col 2xl:px-32">
                <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl pb-3">
                    Top deals of the week
                </h2>
                <p className="max-w-lg lg:max-w-2xl text-sm lg:text-lg leading-6 xl:leading-8 pt-2 md:pt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="h-fit w-4/5 sm:w-full pt-10 self-center">
                    { topDealsProduct && <PaginatedSlider sliderData={topDealsProduct}/>}
                </div>
            </Section>
        </>
    );
}
