import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const iconMap = {
    instagram: Instagram,
    facebook: Facebook,
    twitter: Twitter,
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-900 text-brand-100 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-2xl font-display font-bold text-white mb-4">{siteConfig.name}</h3>
                    <p className="text-brand-300 text-sm leading-relaxed max-w-xs">
                        {siteConfig.description}
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-bold text-white mb-4">Explore</h4>
                    <ul className="space-y-2">
                        {siteConfig.navLinks.slice(0, 5).map(link => (
                            <li key={link.name}>
                                <a href={link.href} className="text-brand-300 hover:text-white transition-colors">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact (Short) */}
                <div>
                    <h4 className="font-bold text-white mb-4">Visit Us</h4>
                    <ul className="space-y-2 text-brand-300">
                        <li>Check Locations</li>
                        <li><a href="#contact" className="hover:text-white">Get in Touch</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h4 className="font-bold text-white mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        {siteConfig.footer.socialLinks.map((social) => {
                            const Icon = iconMap[social.icon.toLowerCase()] || Twitter;
                            return (
                                <a key={social.platform} href={social.url} className="text-brand-300 hover:text-white transition-colors">
                                    <Icon size={24} />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-brand-800 text-center text-brand-400 text-sm">
                <p>{siteConfig.footer.copyright}</p>
            </div>
        </footer>
    );
}

export default Footer;
