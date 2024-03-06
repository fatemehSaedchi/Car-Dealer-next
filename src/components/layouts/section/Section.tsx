import React from "react";

interface Props {
    className?: string
    children: React.ReactNode
}

export function Section({className='', children}: Props) {
    return (
        <section className={`container mx-auto px-4 ${className}`}>
            {children}
        </section>
    );
}