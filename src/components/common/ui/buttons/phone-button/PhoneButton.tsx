import {IconBox} from "@/components";

interface Props {
    buttonStyle?: string
}

export function PhoneButton({buttonStyle=''}: Props) {
    return (
        <IconBox icon={'icon-phone text-xs lg:text-base'} title={'224 000 22 11 33'} link={"tel:+224000221133"}
                 linkClassName={`${buttonStyle} "py-1 lg:py-2 px-1.5 sm:px-3 lg:px-5 text-center rounded-lg text-primary-100 font-bold w-fit"`}
                 titleClassName={'text-[8px] sm:text-sm lg:text-base'}/>
)
    ;
}