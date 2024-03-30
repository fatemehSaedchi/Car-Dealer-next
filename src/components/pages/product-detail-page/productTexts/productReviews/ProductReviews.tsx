interface Props {
    data?: string | null
}

export function ProductReviews({data}: Props) {

    return (
        <>
                <p className="text-secondary-100 text-sm lg:text-base text-justify">
                    {data}
                </p>
        </>
    );
}