import React, { useState } from 'react';
import Section from '../components/ui/Section';
import MenuItemCard from '../components/MenuItemCard';
import { menuData } from '../data/menuData';

export function MenuSection() {
    const [activeCategory, setActiveCategory] = useState(menuData.categories[0]);

    const filteredItems = menuData.items.filter(
        (item) => item.category === activeCategory
    );

    return (
        <Section id="menu" className="bg-white">
            <div className="text-center mb-12">
                <h2 className="text-brand-600 font-medium tracking-wide uppercase mb-2 text-sm">Our Menu</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Taste the Difference</h3>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 sticky top-20 z-40 bg-white/80 backdrop-blur-sm p-4 rounded-full max-w-fit mx-auto shadow-sm border border-gray-100">
                {menuData.categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === category
                                ? 'bg-brand-600 text-white shadow-md transform scale-105'
                                : 'bg-transparent text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                {filteredItems.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                ))}
            </div>
        </Section>
    );
}

export default MenuSection;
