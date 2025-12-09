import React from 'react';

export function MenuItemCard({ item }) {
    return (
        <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 md:p-6 border border-gray-100 flex flex-col h-full">
            <div className="flex justify-between items-start mb-3">
                <div>
                    {item.badge && (
                        <span className="inline-block px-2 py-0.5 mb-2 text-xs font-bold tracking-wider uppercase bg-brand-100 text-brand-800 rounded-sm">
                            {item.badge}
                        </span>
                    )}
                    <h4 className="text-xl font-display font-bold text-gray-900 group-hover:text-brand-700 transition-colors">
                        {item.name}
                    </h4>
                </div>
                <span className="text-lg font-bold text-brand-600 shrink-0 ml-4">{item.price}</span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                {item.description}
            </p>

            {item.imageSrc && (
                <div className="rounded-lg overflow-hidden h-40 mt-auto">
                    <img
                        src={item.imageSrc}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                </div>
            )}
        </div>
    );
}

export default MenuItemCard;
