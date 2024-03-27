import {ImageView} from "@/components";

interface Props {
    
}

export function CarAlbum({}: Props) {
    return (
        <div className="flex flex-wrap justify-center gap-y-3 lg:gap-y-7">
            <div className="w-11/12 mb-3">
                <ImageView src={"/assets/images/serjan-midili--tMDG1xRhnQ-unsplash.jpg"} alt={"product"} width={900} height={450} classname={"rounded-xl w-full lg:min-h-[364px] object-cover object-center"}/>
            </div>
            <div className="w-11/12 grid grid-cols-4 grid-rows-1 overflow-x-scroll gap-3 lg:gap-7 py-4">
                <ImageView src={"/assets/images/serjan-midili--tMDG1xRhnQ-unsplash.jpg"} alt={"product"} width={150} height={70} classname={"w-full aspect-square rounded-xl object-cover object-center"}/>
                <ImageView src={"/assets/images/serjan-midili--tMDG1xRhnQ-unsplash.jpg"} alt={"product"} width={150} height={70} classname={"w-full aspect-square rounded-xl object-cover object-center"}/>
            </div>
        </div>
    );
}