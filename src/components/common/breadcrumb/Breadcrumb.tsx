import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
    title?: string;
}
export function Breadcrumb({ title }: Props) {
    const router = useRouter();
    const pathSegments = router.asPath.split('/').filter(segment => segment.trim() !== '');

    return (
        <div className="container pl-11 mx-auto py-5">
            <nav aria-label="Breadcrumb">
                <ol className="flex flex-row gap-5">
                    <li>
                        <Link href="/">Home /</Link>
                    </li>
                    {pathSegments.map((segment, index) => {
                        const routeTo =` ${pathSegments.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathSegments.length - 1;
                        return (
                            <>
                                <li key={segment}>
                                    {title ? (
                                        isLast ? <span className={'text-secondary-50'}>{title}</span> :
                                            <Link href={routeTo}>{title} / </Link>
                                    ) : (
                                        isLast ? <span className={'text-secondary-50'}>{segment}</span> :
                                            <Link href={routeTo}>{segment}</Link>
                                    )}
                                </li>
                            </>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
}
