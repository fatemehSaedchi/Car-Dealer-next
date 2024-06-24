import {ReactNode} from "react";
import {Portal} from "@/components";
import {useModal} from "@/store/ModalContext";

interface Props {
    children: ReactNode
    title: string
}

export function Modal({title, children}: Props) {

    const {closeModal} = useModal()

    return (
        <Portal onClose={closeModal}>
            <div className={'min-w-[100vw] md:min-w-[50vw] min-h-[100vh] md:min-h-[50vh] bg-white overflow-auto md:rounded-xl'}>
                <div className={'flex flex-row justify-between bg-primary-100 text-white font-bold p-5'}>
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