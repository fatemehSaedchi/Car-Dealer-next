import Link from "next/link";

interface Props {
    searchData:Array<any>
}

export function SearchList({searchData}: Props) {
    return (
        <ul className={'absolute hidden w-fit lg:min-w-[120px] 2xl:min-w-[150px] text-[10px] sm:text-xs xl:text-base shadow-2xl bg-searchBg bg-white left-0 right-0 top-[34px] rounded-md text-secondary-100 px-2 py-1 md:px-4'}>
            {
                searchData.map((searchItem, index)=>{
                    return (
                        <li key={index} className={'py-1 border-b border-White-100 hover:text-secondary-400'}>
                            <Link href={'#'}>{searchItem}</Link>
                        </li>
                    )
                })
            }
        </ul>
    );
}