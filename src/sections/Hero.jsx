import React from 'react';
import { siteConfig } from '../data/siteConfig';
import Button from '../components/ui/Button';

export function Hero() {
    const { hero } = siteConfig;

    return (
        <section id="hero" className="relative h-screen min-h-[600px] flex items-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={hero.backgroundImage}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-white pt-20">
                <div className="max-w-3xl">
                    {/* Highlights */}
                    <div className="mb-6 flex flex-wrap gap-2 animate-fade-in-up">
                        {hero.highlights.map((tag, index) => (
                            <span key={index} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight drop-shadow-lg">
                        {hero.headline}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-xl font-light leading-relaxed">
                        {hero.subheadline}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}>
                            {hero.primaryCta}
                        </Button>
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-900 border-2" onClick={() => document.getElementById('locations').scrollIntoView({ behavior: 'smooth' })}>
                            {hero.secondaryCta}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
