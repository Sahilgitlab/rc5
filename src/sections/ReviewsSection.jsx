import React from 'react';
import Section from '../components/ui/Section';
import ReviewCard from '../components/ReviewCard';
import { reviewsConfig } from '../data/reviewsConfig';
import { Star } from 'lucide-react';
import Button from '../components/ui/Button';

export function ReviewsSection() {
    const { overallRating, totalReviews, fallbackReviews } = reviewsConfig;

    return (
        <Section id="reviews" className="bg-brand-900 text-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">

                {/* Header / Summary */}
                <div className="lg:col-span-1 text-center lg:text-left">
                    <h2 className="text-brand-300 font-medium tracking-wide uppercase mb-2 text-sm">Testimonials</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">What They Say</h3>

                    <div className="flex flex-col items-center lg:items-start gap-2 mb-8">
                        <div className="flex items-center gap-2 text-yellow-400">
                            <span className="text-5xl font-bold text-white">{overallRating}</span>
                            <div className="flex flex-col">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                                </div>
                                <span className="text-sm text-brand-200">based on {totalReviews} reviews</span>
                            </div>
                        </div>
                    </div>

                    <Button variant="outline" className="border-brand-300 text-brand-100 hover:bg-brand-800 hover:text-white" onClick={() => window.open(`https://search.google.com/local/reviews?placeid=${reviewsConfig.googlePlaceId}`, '_blank')}>
                        Write a Review
                    </Button>
                </div>

                {/* Reviews Carousel */}
                <div className="lg:col-span-3">
                    <div className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide">
                        {fallbackReviews.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                        {/* Fake spacer at end */}
                        <div className="w-1 shrink-0"></div>
                    </div>
                </div>

            </div>
        </Section>
    );
}

export default ReviewsSection;
