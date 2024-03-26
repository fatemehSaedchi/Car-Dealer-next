import {ImageView} from "@/components";

interface Props {
    data: Array<any>
}

export function OurTeam({data}: Props) {
    return (
        <>


            <div className="md:w-5/6 mx-auto grid grid-cols-3 sm:grid-cols-4 gap-3 lg:gap-x-9 gap-y-9 pt-16 lg:pt-24 ">
                {
                    data.map((item, index) => {
                        return (
                            <div className={`h-fit px-1 lg:px-3 2xl:px-6 relative ${index === data.length - 1 ? "col-end-4 sm:col-end-5" : ""}`}>

                                {
                                    index === 0 &&
                                    <ImageView height={66} width={50} src="/assets/images/circleElement.svg" alt=""
                                               classname="w-10 lg:w-16 absolute -left-2.5 -top-3 lg:-top-5"/>
                                }

                                {
                                    index === (data.length - 1) &&
                                    <ImageView height={66} width={50} src="/assets/images/circleElement.svg" alt=""
                                               classname="w-10 lg:w-16 absolute -left-2.5 bottom-16 lg:bottom-20"/>
                                }

                                <ImageView height={640} width={931} src={item.thumbNail}
                                           alt=""
                                           classname="w-full max-h-72 object-cover object-center rounded-xl"/>
                                <h4 className="text-center font-bold text-xs lg:text-base pt-4">
                                    {item.title}
                                </h4>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}