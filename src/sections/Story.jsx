import React from 'react';
import Section from '../components/ui/Section';
import { siteConfig } from '../data/siteConfig';

export function Story() {
    const { story } = siteConfig;

    return (
        <Section id="story" className="bg-brand-50/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                {/* Image Side */}
                <div className="relative order-2 md:order-1">
                    <div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={story.imageSrc}
                            alt={story.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    {/* Decor element */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-200 rounded-full -z-10 mix-blend-multiply opacity-50"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-100 rounded-full -z-10 mix-blend-multiply opacity-50"></div>
                </div>

                {/* Text Side */}
                <div className="order-1 md:order-2">
                    <h2 className="text-brand-600 font-medium tracking-wide uppercase mb-2 text-sm">{story.subtitle}</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-900 mb-6">{story.title}</h3>

                    <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                        {story.content.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="mt-8">
                        {/* Signature or something decorative could go here */}
                        <div className="h-1 w-20 bg-brand-500 rounded"></div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Story;
