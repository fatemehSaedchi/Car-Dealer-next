import Link from 'next/link';
import {CarsType, EntityType} from "@/types";

interface Props {
    data: EntityType<CarsType>
}

export function Breadcrumb({data}: Props) {
    return (
        <div className={'container mx-auto px-4 py-8'}>
            <ul className={'flex flex-row text-sm lg:text-lg'}>
                <li>
                    <Link className={'text-primary-100 font-bold'} href="/public">Home</Link>
                    <span className={'px-3 text-secondary-10'}>/</span>
                </li>
                <li>
                    <Link className={'text-primary-100 font-bold'} href="#">Services</Link>
                    <span className={'px-3 text-secondary-10'}>/</span>
                </li>
                <li className={'text-secondary-200'}>
                    {data.attributes.car_brand.data.attributes.title}
                </li>
                <li className={'text-secondary-200 ml-1'}>
                    {data.attributes.car_model.data.attributes.title}
                </li>
            </ul>
        </div>
    );
}