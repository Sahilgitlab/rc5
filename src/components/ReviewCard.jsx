import React from 'react';
import { Star } from 'lucide-react';

export function ReviewCard({ review }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-shrink-0 w-80 md:w-96 snap-center">
            <div className="flex items-center gap-1 mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} strokeWidth={i < review.rating ? 0 : 2} />
                ))}
            </div>
            <p className="text-gray-700 italic mb-4 line-clamp-4">"{review.text}"</p>

            <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-gray-900">{review.reviewerName}</span>
                <span className="text-gray-400">{review.date} via {review.source}</span>
            </div>
        </div>
    );
}

export default ReviewCard;
