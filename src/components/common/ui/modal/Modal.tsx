import {ReactNode} from "react";
import {Portal} from "@/components";

interface Props {
    children: ReactNode
    title: string
    closeModal: () => void
}

export function Modal({title, children, closeModal}: Props) {

    return (
        <Portal onClose={closeModal}>
            <div className={'min-w-[100vw] md:min-w-[50vw] min-h-[100vh] md:min-h-[50vh] bg-white overflow-auto rounded '}>
                <div className={'flex flex-row justify-between bg-primary-100 text-white font-bold px-5 py-3'}>
                    {title}
                    <span className={'cursor-pointer'} onClick={closeModal}>X</span>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </Portal>
    )
}