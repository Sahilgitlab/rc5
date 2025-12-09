import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { galleryData } from '../data/galleryData';

export function GallerySection() {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...new Set(galleryData.map(item => item.category))];

    const filteredImages = filter === 'All'
        ? galleryData
        : galleryData.filter(item => item.category === filter);

    return (
        <Section id="gallery" className="bg-white">
            <div className="text-center mb-10">
                <h2 className="text-brand-600 font-medium tracking-wide uppercase mb-2 text-sm">Visuals</h2>
                <h3 className="text-4xl font-display font-bold text-gray-900">Gallery</h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center gap-4 mb-10">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`text-sm font-medium transition-colors ${filter === cat
                                ? 'text-brand-700 underline underline-offset-4 decoration-2'
                                : 'text-gray-500 hover:text-brand-600'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Masonry-ish Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in">
                {filteredImages.map((img) => (
                    <div key={img.id} className="relative group overflow-hidden rounded-lg aspect-square bg-gray-100">
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-medium tracking-wider">{img.alt}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default GallerySection;
