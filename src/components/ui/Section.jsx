import React from 'react';

export function Section({
    id,
    className = '',
    children,
    containerClass = ''
}) {
    return (
        <section id={id} className={`py-16 md:py-24 relative ${className}`}>
            <div className={`container mx-auto px-4 md:px-6 max-w-7xl ${containerClass}`}>
                {children}
            </div>
        </section>
    );
}

export default Section;
