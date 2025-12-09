import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import Button from '../components/ui/Button';

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const safeNavClasses = `fixed top-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm py-3`;

    return (
        <nav className={safeNavClasses}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-2xl font-display font-bold text-brand-800">
                    {siteConfig.name}
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {siteConfig.navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 hover:text-brand-600 font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        size="sm"
                    >
                        {siteConfig.cta.label}
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t p-4 flex flex-col space-y-4 shadow-lg h-screen">
                    {siteConfig.navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xl font-medium text-gray-800 py-2 border-b border-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button
                        className="w-full mt-4"
                        onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            setIsOpen(false);
                        }}
                    >
                        {siteConfig.cta.label}
                    </Button>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
