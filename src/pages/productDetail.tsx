import {
    ProductAlbum,
    Section,
    SocialMediaShare,
    ProductSpecification, PaginatedSlider, Tabs, Breadcrumb
} from "@/components";
import {TopDealsCarsMock} from "@/mock";
import {RatingCard} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {ApiSingleResponseType, CarsType} from "@/types";
import {getOneCarApi} from "@/api/car";

export default function ProductDetail() {

    const {data: CarData} = useQuery<ApiSingleResponseType<CarsType>>({
        queryKey: [getOneCarApi.name, 'carsAllData'],
        queryFn: () => getOneCarApi({populate: ['*'], id: 2 }),
    });

    console.log('CarData:::', CarData)

    const tabsData = [
        {title: 'Description', content: CarData?.data.attributes.description},
        {title: 'Discussion', content: CarData?.data.attributes.discussion},
        {title: 'Reviews', content: CarData?.data.attributes.reviews},
    ];

    return (
        <>
            {CarData && <Breadcrumb title={CarData.data.attributes.car_model.data.attributes.title}/>}

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
                    <PaginatedSlider sliderData={TopDealsCarsMock}/>
                </div>
            </Section>
        </>
    );
}
