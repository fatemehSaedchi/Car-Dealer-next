import {IconBox} from "@/components";

interface Props {
    cardData:{
        city: string,
        country: string,
        address: string,
        link: string,
        tel : string
    }
    index: number
    margin: string
}

export function BranchesCard({cardData ,index, margin}: Props) {
    return (
        <div>
            <div key={index}
                 className={`bg-primary-100 z-50 rounded-xl text-white px-4 md:px-9 lg:px-5 xl:px-12 py-7 sm:py-11 ${margin}`}>
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl xl:text-4xl">{cardData.city},</h2>
                <h3 className="uppercase font-light text-sm sm:text-base md:text-lg sm:mt-1 xl:mt-2">{cardData.country}</h3>
                <p className="font-medium text-xs sm:text-sm xl:text-base mt-3 md:mt-5 xl:mt-7 h-20 lg:h-24 mb-3 lg:mb-7 sm:pr-9 pr-7">{cardData.address}</p>
                <IconBox icon={'icon-phone'} title={cardData.tel} link={`tel:${cardData.link}`}
                         linkClassName={"py-1 lg:py-2 px-1.5 sm:px-3 lg:px-5 text-center rounded-lg text-primary-100 font-bold w-fit bg-white"}
                         titleClassName={'text-[8px] sm:text-xs xl:text-sm'}/>
            </div>
        </div>
    );
}