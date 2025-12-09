import { useState } from 'react';
import { locationsData } from '../data/locationsData';
import LocationCard from '../components/LocationCard';

export default function LocationsSection() {
    const [activeLocation, setActiveLocation] = useState(locationsData[0]);

    return (
        <section id="locations" className="py-16 md:py-24 bg-stone-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Our Locations
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Visit us at any of our café locations across India. Same great coffee, same warm hospitality.
                    </p>
                </div>

                {/* Locations Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Locations List with Custom Scrollbar */}
                    <div className="lg:col-span-1 space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-brand-400 scrollbar-track-gray-100 hover:scrollbar-thumb-brand-600">
                        {locationsData.map((location) => (
                            <LocationCard
                                key={location.id}
                                location={location}
                                isActive={activeLocation.id === location.id}
                                onClick={() => setActiveLocation(location)}
                            />
                        ))}
                    </div>

                    {/* Map */}
                    <div className="lg:col-span-2">
                        <div className="sticky top-24 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white h-[500px]">
                            <iframe
                                src={activeLocation.googleMapsEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Map of ${activeLocation.name}`}
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
