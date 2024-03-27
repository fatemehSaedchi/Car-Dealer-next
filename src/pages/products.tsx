import {CarAlbum, CarFeatures, IconBox, PhoneButton, Section} from "@/components";
import Link from "next/link";

export default function Products() {

    //Todo edit item of CarFeatures component
    //Todo add Linkedin Icon to icons
    //Todo add Api for CarAlbum component

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
                    <CarAlbum/>
                    <div>
                        <h1 className="font-bold text-xl lg:text-3xl mb-3">SMART GT AA-211</h1>
                        <h4 className="text-sm text-secondary-50 mb-3 tracking-[3px] text-secondary-200">SPORT CAR</h4>
                        <p className="w-10/12 max-w-md text-sm text-secondary-100 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div className={"flex flex-col mb-5 lg:mb-10"}>
                            <CarFeatures item={"/"}/>
                        </div>
                        <div className="mb-5 flex gap-3">
                            <span className="bg-primary-100 text-white font-bold text-xs md:text-sm lg:text-base rounded-md px-5 py-2">$ 34,500</span>
                            <PhoneButton buttonStyle={"bg-White-200 hover:shadow-lg border border-White-200 hover:border-primary-100"}/>
                        </div>
                        <ul className="flex gap-5 text-primary-100">
                            <li>
                                <Link href={"#"} className={"text-secondary-400"}>
                                    Share
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <IconBox icon={"icon-linkedin text-primary-400"} size={18}/>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <IconBox icon={"icon-twitterLogo text-cyan-500"} size={18}/>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <IconBox icon={"icon-facebookLogo text-blue-600"} size={18}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>
        </>
    );
}