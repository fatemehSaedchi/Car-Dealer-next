import Link from 'next/link';

interface Props {
    title?: string
}

export function Breadcrumb({title}: Props) {
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
                    {title}
                </li>
            </ul>
        </div>
    );
}