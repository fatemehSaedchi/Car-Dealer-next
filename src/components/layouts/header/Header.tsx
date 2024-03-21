import {IconBox, Logo, Menu, PhoneButton} from "@/components";

export function Header() {
    return (
        <header className="shadow-5xl">
            <div className="container mx-auto px-4 py-6 lg:py-0">
                <div className="flex justify-between lg:items-start">
                    <Logo/>

                    <nav className="order-3 lg:order-2 h-full">
                        <button id="navButt"
                                className="flex flex-col justify-between h-[43px] px-[10px] py-[11px] lg:hidden border-2 border-White-200 rounded-lg text-center hover:bg-White-200 hover:shadow-lg">
                            <span className="w-[24px] h-[1.5px] bg-secondary-400 inline-block rounded"></span>
                            <span className="w-[24px] h-[1.5px] bg-secondary-400 inline-block rounded"></span>
                            <span className="w-[24px] h-[1.5px] bg-secondary-400 inline-block rounded"></span>
                        </button>
                        <Menu/>

                    </nav>
                    <div className="order-2 text-xs xl:text-sm 2xl:text-base lg:flex xl:w-fit xl:h-fit lg:gap-3 lg:pt-6">
                        <PhoneButton buttonStyle={"hidden lg:flex bg-White-200 hover:shadow-lg border border-White-200 hover:border-primary-100"}/>

                        <button
                            className="text-secondary-400 border border-White-200 p-3 rounded-lg hover:border-primary-100 hover:shadow-lg font-semibold">
                            EN
                            <IconBox icon={'icon-angleDown text-sm ml-1'}/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
