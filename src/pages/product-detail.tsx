import {
    ProductAlbum,
    IconBox,
    Section,
    SocialMediaShare,
    ProductSpecification, ProductDescription
} from "@/components";
import Link from "next/link";

export default function ProductDetail() {

    //Todo edit item of CarFeatures component
    //Todo add Linkedin Icon to icons
    //Todo add Api for ProductAlbum component
    //Todo add Api for CarInformation component
    //Todo add Api for ProductDescription component

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
                    <ProductAlbum/>
                    <div>
                        <ProductSpecification/>
                        <SocialMediaShare/>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 justify-items-stretch lg:grid-cols-2 lg:gap-11 mt-20">
                    <div>
                        <ul className="flex gap-3 text-secondary-10 mb-5 lg:text-xl">
                            <li className="active:font-bold active:text-secondary-400"><Link href="">Description</Link></li>
                            <li>|</li>
                            <li className="active:font-bold active:text-secondary-400"><Link href="">Discussion</Link></li>
                            <li>|</li>
                            <li className="active:font-bold active:text-secondary-400"><Link href="">Reviews</Link></li>
                        </ul>
                        <ProductDescription/>
                    </div>
                    <div className="bg-primary-100 text-white rounded-lg h-fit grid justify-items-center py-8">
                        <h4 className="font-bold mb-5 text-6xl lg:text-7xl">4.5 <span className="text-sm text-secondary-10 font-medium">/ 5.0</span></h4>
                        <p className="font-bold flex gap-9"> Rating
                            <span className="flex gap-1 text-sm">
                                <IconBox icon={"icon-star text-yellow-300"}/>
                                <IconBox icon={"icon-star text-yellow-300"}/>
                                <IconBox icon={"icon-star text-yellow-300"}/>
                                <IconBox icon={"icon-star text-yellow-300"}/>
                                <IconBox icon={"icon-star text-yellow-300"}/>
                            </span>
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}