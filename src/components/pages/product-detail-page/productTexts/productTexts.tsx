import {ProductDescription} from "@/components";
import {ProductDiscussion} from "@/components/pages/product-detail-page/productTexts/productDiscussion";
import {ProductReviews} from "@/components/pages/product-detail-page/productTexts/productReviews";
import {useState} from "react";
import {CarsType, EntityType} from "@/types";

interface Props {
    data: EntityType<CarsType>
}

export function ProductTexts({data}: Props) {

    const [description, setDescription] = useState(true)
    const [discussion, setDiscussion] = useState(false)
    const [reviews, setReviews] = useState(false)

    const setter = (e: string) => {
      if (e.includes('Description')){
          setDescription(true)
          setDiscussion(false)
          setReviews(false)
      }else if (e.includes('Discussion')){
          setDescription(false)
          setDiscussion(true)
          setReviews(false)
      }else if (e.includes('Reviews')){
          setDescription(false)
          setDiscussion(false)
          setReviews(true)
      }
    }

    return (
        <div className={'h-fit'}>
            <ul className="flex gap-3 text-secondary-10 mb-5 lg:text-xl">

                {
                    data.attributes.description &&
                    <li className={`${description ? 'font-bold text-secondary-400' : 'font-medium text-secondary-10'}  cursor-pointer`} onClick={()=>setter('Description')}>
                        Description
                    </li>
                }
                {
                    data.attributes &&
                    <>
                        <li>|</li>
                        <li className={`${discussion? 'font-bold text-secondary-400' : 'font-medium text-secondary-10'} cursor-pointer`} onClick={()=>setter('Discussion')}>
                            Discussion
                        </li>
                    </>

                }
                {
                    data.attributes &&
                    <>
                        <li>|</li>
                        <li className={`${reviews? 'font-bold text-secondary-400' : 'font-medium text-secondary-10'} cursor-pointer`} onClick={()=>setter('Reviews')}>
                            Reviews
                        </li>
                    </>
                }
            </ul>
            <div className={'max-h-[250px] mb-10 overflow-y-scroll'}>
                {
                    description &&
                    <ProductDescription data={data.attributes.description}/>
                }
                {
                    discussion &&
                    <ProductDiscussion data={data.discussion}/>
                }
                {
                    reviews &&
                    <ProductReviews data={data.reviews}/>
                }
            </div>
        </div>
    )
}