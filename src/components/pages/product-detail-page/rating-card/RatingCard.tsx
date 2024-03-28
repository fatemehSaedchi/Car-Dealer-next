import {Rating} from "@/components/pages/product-detail-page/rating";

interface Props {
    rate?: number
}

export function RatingCard({rate=5}: Props) {
    return (
        <div className="bg-primary-100 text-white rounded-lg h-fit grid justify-items-center py-8">
            <h4 className="font-bold mb-5 text-6xl lg:text-7xl">{rate}<span
                className="text-sm text-secondary-10 font-medium">/ 5.0</span>
            </h4>
            <span className="font-bold flex gap-9"> Rating
                <Rating rate={rate}/>
            </span>
        </div>
    );
}