import {
    ProductAlbum,
    Section,
    SocialMediaShare,
    ProductSpecification, PaginatedSlider
} from "@/components";
import Link from "next/link";
import {TopDealsCarsMock} from "@/mock";
import {RatingCard} from "@/components";
import {ProductTexts} from "@/components/pages/product-detail-page/productTexts/productTexts";
import {useQuery} from "@tanstack/react-query";
import {getAllCarsApi} from "@/api";
import {ApiResponseType, CarsType} from "@/types";

export default function ProductDetail() {

    const {data: CarsData} = useQuery<ApiResponseType<CarsType>>({
        queryKey: [getAllCarsApi.name, 'carsAllData'],
        queryFn: () => getAllCarsApi({populate: ['*']}),
    });


    return (
        <>
            <Section className={"mb-10 lg:mb-12"}>
                <div className="text-secondary-50 text-sm pt-9 lg:pl-9 flex gap-2">
                    <Link className={"text-primary-100 font-bold"} href='/'>Home</Link>
                    <span className={"font-bold text-secondary-10"}>/</span>
                    <Link className={"text-primary-100 font-bold"} href='#'>Car Collections</Link>
                    <span className={"font-bold text-secondary-10"}>/</span>
                    <Link href='/'>SMART GT AA-211</Link>
                </div>
            </Section>

            <Section>
                <div className={"grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10"}>
                    {CarsData && <ProductAlbum data={CarsData.data[6]}/>}
                    <div>
                        {CarsData && <ProductSpecification data={CarsData.data[6]}/>}
                        <SocialMediaShare/>
                    </div>
                </div>
            </Section>

            <Section>
                <div
                    className="grid grid-cols-1 justify-items-stretch lg:grid-cols-2 lg:gap-11 mt-20 border-b-2 pb-10 relative h-fit">
                    { CarsData && <ProductTexts data={CarsData.data[6]}/>}
                    { CarsData && <RatingCard rate={CarsData.data[6].attributes.rate}/>}
                </div>
            </Section>

            <Section className={"flex flex-col 2xl:px-32"}>
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