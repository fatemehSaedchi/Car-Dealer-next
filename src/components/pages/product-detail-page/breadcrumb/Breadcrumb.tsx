import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
    title?: string;
}
// Todo resolve the '/' issue. it doesn't displayed on ui
export function Breadcrumb({ title }: Props) {
    const router = useRouter();
    const pathSegments = router.asPath.split('/').filter(segment => segment.trim() !== '');

    return (
        <div className="container px-4 mx-auto">
            <nav aria-label="Breadcrumb">
                <ol className="flex flex-row gap-5">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    {pathSegments.map((segment, index) => {
                        const routeTo = `/${pathSegments.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathSegments.length - 1;
                        return (
                            <li key={segment}>
                                {title ? (
                                    isLast ? <span>{title}</span> : <Link href={routeTo}><a>{title}</a></Link>
                                ) : (
                                    isLast ? <span>{segment}</span> : <Link href={routeTo}><a>{segment}</a></Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
}
