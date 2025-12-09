import { MapPin, Phone, ExternalLink } from 'lucide-react';

export default function LocationCard({ location, isActive, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 ${isActive
                    ? 'border-brand-500 bg-brand-50 shadow-lg scale-[1.02]'
                    : 'border-gray-200 bg-white hover:border-brand-300 hover:shadow-md'
                }`}
        >
            {/* Active Indicator */}
            {isActive && (
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-brand-700 uppercase tracking-wide">Selected</span>
                </div>
            )}

            {/* Location Name */}
            <h3 className="text-lg font-bold mb-1 text-brand-800">
                {location.name}
            </h3>
            <p className="text-sm text-gray-500 mb-3">{location.area}</p>

            {/* Address */}
            <div className="flex items-start gap-2 mb-3">
                <MapPin size={16} className="text-brand-500 mt-1 flex-shrink-0" />
                <div>
                    <p className="text-sm text-gray-600">{location.address}</p>
                    <p className="text-sm text-gray-500">{location.city}</p>
                </div>
            </div>

            {/* Hours */}
            <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Open</span>
                {location.hours}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-2">
                <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition-colors"
                >
                    <ExternalLink size={14} />
                    Directions
                </a>
                <a
                    href={`tel:${location.contactNumber}`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                    <Phone size={14} />
                    Call
                </a>
            </div>
        </div>
    );
}
