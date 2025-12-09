export const siteConfig = {
    name: "Urban Brew Co.",
    description: "Your neighborhood coffee house serving artisanal blends and fresh pastries.",
    metaTitle: "Urban Brew Co. | Best Coffee & Pastries in the City",
    metaDescription: "Experience the finest artisanal coffee and freshly baked pastries at Urban Brew Co. Visit us at our multiple locations.",

    // Navigation Links
    navLinks: [
        { name: "Home", href: "#hero" },
        { name: "Our Story", href: "#story" },
        { name: "Menu", href: "#menu" },
        { name: "Locations", href: "#locations" },
        { name: "Reviews", href: "#reviews" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" },
    ],

    // Call to Action in Navbar - WhatsApp Booking
    cta: {
        label: "Book a Table",
        href: "https://wa.me/919664511115?text=Hi!%20I'd%20like%20to%20book%20a%20table",
    },

    // Hero Section Configuration
    hero: {
        headline: "Your Daily Ritual, Elevated.",
        subheadline: "Hand-crafted coffee, warm ambience, and a community that feels like home.",
        primaryCta: "View Menu",
        secondaryCta: "Find a Location",
        backgroundImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=2000",
        highlights: ["Freshly Roasted", "Free WiFi", "Pet Friendly"]
    },

    // Story Section
    story: {
        title: "Our Story",
        subtitle: "More than just a cup of coffee.",
        content: [
            "Founded in 2024, Urban Brew Co. started with a simple mission: to create a space where people can slow down and savor the moment. sourced from sustainable farms and roasted in small batches, our coffee tells a story of craftsmanship and passion.",
            "We believe in the power of community. That's why every one of our locations is designed to be a haven for creators, dreamers, and friends to connect over great food and drink."
        ],
        imageSrc: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000",
    },

    // Floating WhatsApp Button
    floatingWhatsApp: {
        enabled: true,
        actionType: "whatsapp", // 'whatsapp' or 'scroll-to-contact'
        message: "Hi! I'd like to know more about your cafe."
    },

    footer: {
        copyright: "© 2025 Urban Brew Co. All rights reserved.",
        socialLinks: [
            { platform: "Instagram", url: "#", icon: "instagram" },
            { platform: "Facebook", url: "#", icon: "facebook" },
            { platform: "Twitter", url: "#", icon: "twitter" },
        ]
    }
};
