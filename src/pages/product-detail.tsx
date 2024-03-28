import {CarAlbum, CarFeatures, CarInformation, IconBox, PhoneButton, Section, SocialMediaShare} from "@/components";
import Link from "next/link";

export default function ProductDetail() {

    //Todo edit item of CarFeatures component
    //Todo add Linkedin Icon to icons
    //Todo add Api for CarAlbum component
    //Todo add Api for CarInformation component

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
                        <CarInformation/>
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
                        <div className="mb-5 pt-7">
                            <h4 className="text-secondary-400 text-sm sm:text-base lg:text-xl mb-3 font-bold">The
                                standard
                                Lorem Ipsum passage, used since the 1500s</h4>
                            <p className="text-secondary-100 text-sm lg:text-base text-justify">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div className="mb-5  pt-4">
                            <h4 className="text-secondary-400 text-sm sm:text-base lg:text-xl mb-3 font-bold">Section
                                1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h4>
                            <p className="text-secondary-100 text-sm lg:text-base text-justify">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                sit
                                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                amet,
                                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                                et
                                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                                nihil
                                molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            </p>
                        </div>
                    </div>
                    <div className="bg-primary-100 text-white rounded-lg h-fit grid justify-items-center py-8">
                        <h4 className="font-bold mb-5 text-6xl lg:text-7xl">
                            4.5 <span className="text-sm text-secondary-10 font-medium">/ 5.0</span>
                        </h4>
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