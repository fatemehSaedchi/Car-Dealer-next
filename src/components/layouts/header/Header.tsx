import {IconBox, Logo, Menu} from "@/components";
import Link from "next/link";

export function Header() {
    return (
        <header className="shadow-5xl">
            <div className="container mx-auto px-4 py-6 lg:py-0">
                <div className="flex justify-between lg:items-start">
                    <Logo/>
                    <nav className="order-3 lg:order-2 h-full">
                        <button id="navButt"
                                className="flex flex-col justify-between h-[43px] px-[10px] py-[11px] lg:hidden border-2 border-White-200 rounded-lg text-center hover:bg-White-200 hover:shadow-lg">
                            <span className="w-[24px] h-[1.5px] bg-black inline-block rounded"></span>
                            <span className="w-[24px] h-[1.5px] bg-black inline-block rounded"></span>
                            <span className="w-[24px] h-[1.5px] bg-black inline-block rounded"></span>
                        </button>
                        <Menu/>
                    </nav>
                    <div
                        className="order-2 text-xs xl:text-sm 2xl:text-base lg:flex xl:w-fit xl:h-fit lg:gap-3 lg:pt-6">
                        <IconBox icon={'icon-phone'} title={'224 000 22 11 33'} link={"tel:+224000221133"}
                                 linkClassName={"hidden lg:flex gap-2 bg-White-200 py-3 px-5 text-primary-100 font-bold rounded-lg hover:shadow-lg"}/>

                        <button
                            className="text-secondary-400 border-2 border-White-200 p-3 rounded-lg hover:bg-White-200 hover:shadow-lg font-semibold"> EN
                            <IconBox icon={'icon-chevron-down text-primary-100'}/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
