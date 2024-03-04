import {IconBox, ImageView, Logo, PhoneButton} from "@/components";
import Link from "next/link";

export function Footer() {
    return (
        <footer>
            <div className="container m-auto px-4 mt-32 lg:mt-64 relative">
                <div
                    className="max-w-6xl m-auto bg-primary-100 max-h-72 rounded-3xl lg:rounded-[40px] relative flex p-4 sm:py-7 md:p-9 lg:p-16">
                    <div className="basis-2/4">
                        <p className="w-full text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold text-white">
                            Have any question</p>
                        <p className="w-full text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold text-white lg:pt-2">
                            about us?</p>
                        <div className="flex pt-5 sm:pt-9 lg:pt-14 gap-2 lg:gap-4">
                            <PhoneButton buttonStyle={"bg-white"}/>
                            <button
                                className="text-[8px] sm:text-xs lg:text-base py-1 px-1.5 sm:px-3 lg:px-5 text-center rounded-lg border-2 border-White-200 text-White-200 font-medium">
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className="basis-2/4 relative">
                        <ImageView src={"/assets/images/bradley-dunn-qijkjkJm63c-unsplash11.jpg"} alt={'car'}
                                   width={300} height={450}
                                   classname={"w-full object-cover rounded-2xl lg:rounded-[49px] shadow-4xl absolute -top-14 sm:-top-24 md:-top-28 lg:md:-top-40 xl:md:-top-52 z-50"}/>
                    </div>
                </div>
                <ImageView src={"/assets/images/circleElement%20(1).svg"} alt={"circleElement"} width={90} height={90} classname={"w-10 md:w-14 lg:w-20 absolute left-[46%] top-[11%] lg:top-[18%]"}/>
                <div className="w-16 h-16 sm:w-28 sm:h-28 lg:w-44 lg:h-44 bg-orange-100 rounded-full absolute left-[45%] top-[82%] sm:top-[84%] md:top-[94%] lg:top-[79%] xl:top-[93%]"></div>
            </div>
            <div className="container mx-auto px-4 border-t-2 pt-14 mt-32 sm:mt-48 lg:mt-64">
                <div className="px-4 flex flex-wrap justify-around">
                    <div className="mb-10 w-full sm:basis-8/12 md:basis-1/2 xl:basis-2/6">
                        <Logo/>
                        <h3 className="font-bold my-3">
                            Best Car dealer in europe
                        </h3>
                        <p className="mb-3 text-secondary-100">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium blanditiis eaque
                            error eum
                            minus
                            nemo quae quia quibusdam voluptatem!
                        </p>
                        <ul className="flex gap-3">
                            <li>
                                <Link href="#">
                                    <IconBox icon={"icon-youtube text-Purple-50 hover:text-primary-100 active:text-primary-100"} size={18} />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <IconBox icon={"icon-linkedin text-Purple-50 hover:text-primary-100 active:text-primary-100"} size={18}/>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <IconBox icon={"icon-twitter text-Purple-50 hover:text-primary-100 active:text-primary-100"} size={18}/>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <IconBox icon={"icon-facebook text-Purple-50 hover:text-primary-100 active:text-primary-100"} size={18}/>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <IconBox icon={"icon-instagram text-Purple-50 hover:text-primary-100 active:text-primary-100"} size={18}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="mb-12 w-full text-center sm:basis-8/12 md:basis-1/2 xl:basis-2/6 xl:order-4 relative">
                        <h4 className="font-bold mb-5">
                            Contact
                        </h4>
                        <ul className="flex flex-col gap-3">
                            <li className="flex">
                                <div
                                    className="bg-primary-100 flex justify-center items-center w-12 h-12 rounded-full left-6 relative translate-y-1.5 lg:translate-y-2">
                                    <i className="fa-solid fa-building text-white text-2xl"></i></div>
                                <p className="text-sm lg:text-base bg-white-100 py-5 pl-12 text-left w-[87%] bg-primary-50 rounded-xl">
                                    77 Highfield Road London
                                    N36 7SB
                                </p>
                            </li>
                            <li className="flex">
                                <div
                                    className="bg-primary-100 flex justify-center items-center w-12 h-12 rounded-full left-6 relative translate-y-1.5 lg:translate-y-2">
                                    <IconBox icon={'icon-phone text-white'} size={24}/>
                                </div>
                                <Link className="text-sm lg:text-base bg-white-100 bg-primary-50 rounded-xl w-[87%] flex self-end py-5 pl-12"
                                   href="tel:+4124441124">412 444 1124</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="mb-10 basis-1/2 text-center xl:basis-1/6">
                        <h4 className="font-bold mb-5">Quick Links</h4>
                        <ul className="flex flex-col gap-3 text-secondary-100 text-sm lg:text-base">
                            <li><Link href="#">
                                About us
                            </Link></li>
                            <li><Link href="#">
                                Contact us
                            </Link></li>
                            <li><Link href="#">
                                Products
                            </Link></li>
                            <li><Link href="#">
                                Login
                            </Link></li>
                            <li><Link href="#">
                                Sign Up
                            </Link></li>
                        </ul>
                    </div>
                    <div className="mb-20 basis-1/2 text-center xl:basis-1/6">
                        <h4 className="font-bold mb-5">
                            Support
                        </h4>
                        <ul className="flex flex-col gap-3 text-secondary-100 text-sm lg:text-base">
                            <li><Link href="#">
                                Affiliates
                            </Link></li>
                            <li><Link href="#">
                                Sitemap
                            </Link></li>
                            <li><Link href="#">
                                Cancelation Policy
                            </Link></li>
                            <li><Link href="#">
                                Privacy Policy
                            </Link></li>
                            <li><Link href="#">
                                Legal Disclaimer
                            </Link></li>
                        </ul>
                    </div>
                </div>
                <p className="text-center text-secondary-50">
                    <span>Mobhil</span> &copy;2020 All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
