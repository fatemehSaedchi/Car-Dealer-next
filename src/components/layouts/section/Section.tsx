import React from "react";

interface Props {
    className?: string
    children: React.ReactNode
}

export function Section({className='', children}: Props) {
    return (
        <section className={`container mx-auto px-4 mb-28 lg:mb-52 ${className}`}>
            {children}
        </section>
    )
}