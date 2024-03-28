import {IconBox} from "@/components";

interface Props {
    rate: number
}

export function Rating({rate}: Props) {

    const star = []
    const notStar = []
    for (let i = 0; i < rate; i++) {
        star.push(
            <li className="flex">
                <IconBox icon={"icon-star-full text-yellow-300"} size={12}/>
            </li>
        )
    }

    for (let i = rate; i < 5; i++) {
        notStar.push(
            <li className="flex">
                <IconBox icon={"icon-star-full text-gray-300"} size={12}/>
            </li>
        )
    }

    return (
        <>
            <ul className="flex gap-1">
                {star} {notStar}
            </ul>
            <div className="text-xsmall text-gray-500 font-lato">({rate})</div>
        </>
    );
}