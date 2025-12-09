export const contactConfig = {
    email: "hello@urbanbrew.com",
    phone: "+91 8779667606",
    defaultWhatsappNumber: "918779667606", // Without + or spaces for wa.me links
    address: "123 Main Street, Metropolis, NY 10012",
    socialLinks: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        whatsapp: "https://wa.me/918779667606"
    },
    formTitle: "Book a Table",
    formSubtitle: "Reserve your table or send us an inquiry via WhatsApp!",
    successMessage: "Thanks for reaching out! We'll get back to you shortly.",

    // reCAPTCHA Settings - Toggle spam protection
    recaptcha: {
        enabled: true,  // ← Set to true to enable spam protection
        siteKey: "6LdVWCYsAAAAABN9CCw2CyCD26pUrzP8nxGgu0uc",  // ← Get from Google reCAPTCHA console
    }
};
