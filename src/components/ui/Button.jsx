import React from 'react';

const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800",
    secondary: "bg-brand-100 text-brand-900 hover:bg-brand-200 active:bg-brand-300",
    outline: "border-2 border-brand-600 text-brand-600 hover:bg-brand-50 active:bg-brand-100",
    ghost: "text-brand-600 hover:bg-brand-50 hover:text-brand-700",
};

const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
};

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    type = 'button',
    ...props
}) {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2";

    return (
        <button
            type={type}
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
