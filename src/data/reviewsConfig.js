export const reviewsConfig = {
    enableGoogleApi: false, // Set to true if linking a real backend
    googlePlaceId: "ChIJ...", // Real Place ID
    overallRating: 4.8,
    totalReviews: 1248,
    fallbackReviews: [
        {
            id: "r1",
            reviewerName: "Sarah M.",
            rating: 5,
            text: "The best coffee in the city! The ambiance is perfect for working or catching up with friends.",
            date: "2 months ago",
            source: "Google"
        },
        {
            id: "r2",
            reviewerName: "James L.",
            rating: 5,
            text: "Love their avocado toast. Friendly staff and great music.",
            date: "1 month ago",
            source: "Google"
        },
        {
            id: "r3",
            reviewerName: "Emily R.",
            rating: 4,
            text: "Great coffee, but can get a bit crowded on weekends. Worth the wait though!",
            date: "3 weeks ago",
            source: "Google"
        },
        {
            id: "r4",
            reviewerName: "Michael K.",
            rating: 5,
            text: "A hidden gem. The cold brew is to die for.",
            date: "Yesterday",
            source: "Google"
        }
    ]
};
