import {IconBox, ImageView, LoginModal, Logo, Menu, PhoneButton, RegisterModal} from "@/components";
import {useState, MouseEvent} from "react";
import {useOverlay} from "@/hooks";
import {useUser} from "@/store/AuthContext";
import {useModal} from "@/store/ModalContext";

export function Header() {
    const [showMobileMenu,setShowMobileMenu] = useState(false)

    useOverlay({
        onClick: () => {
            setShowMobileMenu(false)
        }
    })

    const {isLogin, onLogout} = useUser()
    const {openModal, currentModal} = useModal()

    const showMobileMenuHandler =(e: MouseEvent)=>{
        e.stopPropagation()
        setShowMobileMenu((prevState)=> !prevState)
    }

    const accountHandler = ()=>{
        if (isLogin){
            onLogout()
        }else {
            openModal('login')
        }
    }

    return (
        <header className="shadow-5xl">
            {currentModal === 'login' && <LoginModal/>}
            {currentModal === 'register' && <RegisterModal/>}
            <div className="container mx-auto px-4 py-6 lg:py-0">
                <div className="flex flex-wrap justify-between lg:items-start">
                    <Logo/>
                    <nav className="order-3 lg:order-2 h-full">
                        <button onClick={showMobileMenuHandler}
                                className="flex flex-col justify-between h-[43px] px-[10px] py-[11px] lg:hidden border-2 border-White-200 rounded-lg text-center hover:bg-White-200 hover:shadow-lg">
                            <span className="w-[24px] h-[1.5px] bg-secondary-400 inline-block rounded"></span>
                            <span className="w-[24px] h-[1.5px] bg-secondary-400 inline-block rounded"></span>
                            <span className="w-[24px] h-[1.5px] bg-secondary-400 inline-block rounded"></span>
                        </button>
                        <Menu showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu}/>
                    </nav>
                    <div className="order-2 lg:order-3 text-xs lg:text-sm 2xl:text-base lg:flex lg:items-center xl:w-fit xl:h-fit lg:gap-3 lg:pt-6">
                        <div className={'hidden cursor-pointer text-secondary-400 font-semibold lg:flex items-center gap-2'} onClick={accountHandler}>
                            <ImageView src={'/assets/images/logout.svg'} alt={'logoutIcon'} width={22} height={22}/>
                            {
                                isLogin ? 'Logout' : 'Login / Register'
                            }
                        </div>
                        <button
                            className="text-sm 2xl:text-base border-2 border-White-200 p-2 rounded-lg hover:bg-White-200 hover:shadow-lg font-semibold">
                            EN
                            <IconBox icon={'icon-angleDown text-sm ml-1'} size={10}/>
                        </button>
                        {/*<PhoneButton buttonStyle={"hidden lg:flex bg-White-200 hover:shadow-lg border border-White-200 hover:border-primary-100"}/>*/}
                    </div>
                </div>
            </div>
        </header>
    );
}
