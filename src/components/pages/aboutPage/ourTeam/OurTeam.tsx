
import {TeamCard} from "@/components";

interface Props {
    data: Array<any>
}

export function OurTeam({data}: Props) {
    return (
        <>


            <div className="md:w-5/6 mx-auto grid grid-cols-3 sm:grid-cols-4 gap-3 lg:gap-x-9 gap-y-9 pt-16 lg:pt-24 ">
                {
                    data.map((value, index) => {
                        return (
                            <TeamCard data={value} key={index} first={index === 0 } last={index === (data.length - 1)}/>
                        )
                    })
                }
            </div>
        </>
    )
}