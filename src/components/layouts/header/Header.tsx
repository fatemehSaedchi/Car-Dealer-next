import {IconBox, ImageView} from "@/components";
import Link from "next/link";

export function Header() {
    return (
        <header className="shadow-5xl">
            <div className="container mx-auto px-4 py-6 lg:py-0">
                <div className="flex justify-between lg:items-start">
                    <Link className="order-1 lg:pt-7 basis-3/5 sm:basis-4/5 lg:basis-auto" href="/">
                        <ImageView src={"/assets/images/logo.png"} alt={"LOGO"} width={181} height={37}/>
                    </Link>
                    <nav className="order-3 lg:order-2 h-full">
                        <button id="navButt" className="border-2 border-White-200 py-[5px] px-4 rounded-lg text-center hover:bg-White-200 hover:shadow-lg lg:hidden">
                            <IconBox icon={'icon-phone text-secondary-400'}/>
                        </button>
                        <ul id="navList"
                            className="absolute bg-White-200 text-secondary-300 font-semibold z-[9999] left-0 top-0 w-full h-screen py-5 px-4 -translate-x-full sm:w-8/12
                           lg:translate-x-0 lg:relative lg:flex lg:bg-transparent lg:w-fit lg:gap-4 lg:p-0 lg:h-fit
                           2xl:gap-7">
                            <li className="lg:hidden">
                                <button id="closeNavList"
                                        className="px-3 py-1 rounded-md relative -top-2 -left-2 border hover:shadow-lg">X
                                </button>
                            </li>
                            <li className="border-b-4 border-transparent lg:text-sm 2xl:text-base lg:hover:border-primary-100  pt-10 lg:pt-9 lg:pb-7 hover:text-primary-100">
                                <Link href="">HOME</Link>
                            </li>
                            <li className="border-b-4 border-transparent lg:text-sm 2xl:text-base lg:hover:border-primary-100 pt-3 lg:pt-9 hover:text-primary-100">
                                <Link href="">ABOUT</Link>
                            </li>
                            <li className="border-b-4 border-transparent lg:text-sm 2xl:text-base lg:hover:border-primary-100 pt-3 lg:pt-9 hover:text-primary-100">
                                <Link href="">SERVICES</Link>
                            </li>
                            <li className="border-b-4 border-transparent lg:text-sm 2xl:text-base lg:hover:border-primary-100 pt-3 lg:pt-9 hover:text-primary-100">
                                <Link href="">CAR COLLECTION <i className="fa-solid fa-chevron-down pl-1"></i></Link>
                            </li>
                            <li className="border-b-4 border-transparent lg:text-sm 2xl:text-base lg:hover:border-primary-100 pt-3 lg:pt-9 hover:text-primary-100">
                                <Link href="">LOCATION</Link>
                            </li>
                            <li className="border-b-4 border-transparent lg:text-sm 2xl:text-base lg:hover:border-primary-100 pt-3 lg:pt-9 hover:text-primary-100">
                                <Link href="">CONTACT</Link>
                            </li>
                        </ul>
                    </nav>
                    <div
                        className="order-2 text-xs xl:text-sm 2xl:text-base lg:flex xl:w-fit xl:h-fit lg:gap-3 lg:pt-6">
                        <Link className="hidden lg:flex gap-2 bg-White-200 py-3 px-5 text-primary-100 font-bold rounded-lg hover:shadow-lg"
                           href="tel:+224000221133"><span><i className="fa fa-solid fa-phone"></i></span> 224
                            000 22 11 33</Link>
                        <button
                            className="text-secondary-400 border-2 border-White-200 p-3 rounded-lg hover:bg-White-200 hover:shadow-lg font-semibold">
                            EN <i className="fa-solid fa-chevron-down text-primary-100"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
