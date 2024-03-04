import {IconBox, Logo, Menu} from "@/components";
import Link from "next/link";

export function Header() {
    return (
        <header className="shadow-5xl">
            <div className="container mx-auto px-4 py-6 lg:py-0">
                <div className="flex justify-between lg:items-start">
                   <Logo/>
                    <nav className="order-3 lg:order-2 h-full">
                        <button id="navButt" className="border-2 border-White-200 py-[5px] px-4 rounded-lg text-center hover:bg-White-200 hover:shadow-lg lg:hidden">
                            <IconBox icon={'icon-phone text-secondary-400'}/>
                        </button>
                        <Menu/>
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
