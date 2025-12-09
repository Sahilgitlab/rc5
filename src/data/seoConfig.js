export const seoConfig = {
    // ========================================
    // MASTER SEO TOGGLE
    // ========================================
    enabled: true,  // ← Set to false to disable ALL SEO features

    // ========================================
    // BASIC SEO (Meta Tags)
    // ========================================
    basicSEO: {
        enabled: true,  // ← Title, description, keywords
        title: "Urban Brew Co. | Best Coffee & Fresh Pastries in Metropolis | Artisan Café",
        description: "Experience the finest artisanal coffee, fresh pastries, and cozy ambiance at Urban Brew Co. 3 locations across Metropolis. Book a table via WhatsApp.",
        keywords: "coffee shop, café, artisan coffee, fresh pastries, bakery, breakfast, lunch, Metropolis café, specialty coffee, espresso, latte, cappuccino, brunch, food delivery",
        author: "Urban Brew Co.",
        canonicalUrl: "https://yourwebsite.com/",
    },

    // ========================================
    // SOCIAL MEDIA PREVIEWS
    // ========================================
    openGraph: {
        enabled: true,  // ← Facebook, LinkedIn previews
        siteName: "Urban Brew Co.",
        title: "Urban Brew Co. | Best Coffee & Fresh Pastries in Metropolis",
        description: "Your neighborhood coffee house serving artisanal blends and fresh pastries. Visit us at 3 locations across Metropolis.",
        image: "https://yourwebsite.com/og-image.jpg",
        url: "https://yourwebsite.com/",
        type: "website",
        locale: "en_US",
    },

    twitterCard: {
        enabled: true,  // ← Twitter/X previews
        card: "summary_large_image",
        site: "@yourhandle",
        creator: "@yourhandle",
        title: "Urban Brew Co. | Best Coffee & Fresh Pastries in Metropolis",
        description: "Your neighborhood coffee house serving artisanal blends and fresh pastries.",
        image: "https://yourwebsite.com/twitter-image.jpg",
    },

    // ========================================
    // STRUCTURED DATA (Schema.org)
    // ========================================
    structuredData: {
        enabled: true,  // ← Google rich snippets

        restaurant: {
            enabled: true,
            name: "Urban Brew Co.",
            image: [
                "https://yourwebsite.com/images/hero/cafe-interior.jpg",
                "https://yourwebsite.com/images/gallery/coffee-1.jpg"
            ],
            priceRange: "$$",
            servesCuisine: ["Coffee", "Breakfast", "Pastries", "American"],
            telephone: "+918779667606",
            email: "hello@urbanbrew.com",
            url: "https://yourwebsite.com",
            address: {
                streetAddress: "123 Main Street",
                addressLocality: "Metropolis",
                addressRegion: "IN",
                postalCode: "10012",
                addressCountry: "IN"
            },
            geo: {
                latitude: "40.7589",
                longitude: "-73.9873"
            },
            openingHours: [
                {
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    opens: "07:00",
                    closes: "21:00"
                }
            ],
            aggregateRating: {
                ratingValue: "4.8",
                reviewCount: "1248"
            }
        },

        localBusiness: {
            enabled: true,
            name: "Urban Brew Co.",
            description: "Your neighborhood coffee house serving artisanal blends and fresh pastries.",
            telephone: "+918779667606",
            priceRange: "$$",
            paymentAccepted: "Cash, Credit Card, UPI",
            hasMap: "https://goo.gl/maps/example1"
        },

        breadcrumb: {
            enabled: true,
            items: [
                { name: "Home", url: "https://yourwebsite.com/" },
                { name: "Menu", url: "https://yourwebsite.com/#menu" },
                { name: "Locations", url: "https://yourwebsite.com/#locations" },
                { name: "Contact", url: "https://yourwebsite.com/#contact" }
            ]
        }
    },

    // ========================================
    // AI CRAWLER ACCESS
    // ========================================
    aiCrawlers: {
        enabled: true,  // ← Allow ChatGPT, Claude, etc.
        allowedBots: [
            "GPTBot",           // ChatGPT
            "ChatGPT-User",     // ChatGPT
            "Claude-Web",       // Claude
            "anthropic-ai",     // Anthropic
            "CCBot",            // Common Crawl (used by many AI)
            "Google-Extended",  // Google Bard/Gemini
            "PerplexityBot"     // Perplexity AI
        ]
    },

    // ========================================
    // ADVANCED SEO
    // ========================================
    advanced: {
        geoTagging: {
            enabled: true,
            region: "IN",
            placename: "Metropolis"
        },

        languageAlternates: {
            enabled: false,  // Enable if you have multi-language site
            languages: [
                { lang: "en", url: "https://yourwebsite.com/" },
                { lang: "hi", url: "https://yourwebsite.com/hi/" }
            ]
        },

        analytics: {
            googleAnalytics: {
                enabled: false,  // Set to true when you have GA ID
                measurementId: "G-XXXXXXXXXX"
            },
            googleTagManager: {
                enabled: false,
                containerId: "GTM-XXXXXXX"
            }
        }
    }
};
