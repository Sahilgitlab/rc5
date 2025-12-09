import { useState } from 'react';
import { Send } from 'lucide-react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { themeConfig } from '../data/themeConfig';
import { contactConfig } from '../data/contactConfig';

function WhatsAppFormInner({
    businessName,
    defaultWhatsappNumber,
    locations = [],
    overrideWhatsappByLocation = false
}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // reCAPTCHA verification (if enabled)
        if (contactConfig.recaptcha.enabled) {
            if (!executeRecaptcha) {
                alert('reCAPTCHA not loaded. Please refresh and try again.');
                setIsSubmitting(false);
                return;
            }

            try {
                const token = await executeRecaptcha('contact_form');

                if (!token) {
                    alert('Verification failed. Please try again.');
                    setIsSubmitting(false);
                    return;
                }

                console.log('reCAPTCHA verification successful');
            } catch (error) {
                console.error('reCAPTCHA error:', error);
                alert('Verification failed. Please try again.');
                setIsSubmitting(false);
                return;
            }
        }

        // Determine WhatsApp number
        let targetNumber = defaultWhatsappNumber;
        if (overrideWhatsappByLocation && formData.location) {
            const selectedLocation = locations.find(loc => loc.id === formData.location);
            if (selectedLocation && selectedLocation.whatsappNumber) {
                targetNumber = selectedLocation.whatsappNumber;
            }
        }

        // Remove + sign and any spaces from phone number (required for wa.me)
        const cleanNumber = targetNumber.replace(/[\s+]/g, '');

        // Build message
        const message = `New booking/enquiry from ${businessName} website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Location: ${formData.location ? locations.find(loc => loc.id === formData.location)?.name : 'Not specified'}
Message: ${formData.message}

Source: ${window.location.href}`;

        // Open WhatsApp
        const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        // Reset form and show success
        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                location: '',
                message: ''
            });
        }, 500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                />
            </div>

            {/* Phone */}
            <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                />
            </div>

            {/* Preferred Location */}
            {locations.length > 0 && (
                <div>
                    <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Location
                    </label>
                    <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-white"
                    >
                        <option value="">Select a location</option>
                        {locations.map((loc) => (
                            <option key={loc.id} value={loc.id}>
                                {loc.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Table for 2 at 8 PM on Saturday..."
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 rounded-lg font-semibold text-base ${themeConfig.classes.btnWhatsApp} flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform`}
            >
                <Send size={20} />
                {isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
            </button>

            {/* reCAPTCHA Badge Info */}
            {contactConfig.recaptcha.enabled && (
                <p className="text-xs text-gray-500 text-center">
                    Protected by reCAPTCHA. This form is spam-protected.
                </p>
            )}

            <p className="text-xs text-gray-500 text-center">
                This will open WhatsApp with a pre-filled message. You'll need to tap Send in WhatsApp.
            </p>
        </form>
    );
}

// Wrapper component with conditional reCAPTCHA provider
export default function WhatsAppForm(props) {
    // If reCAPTCHA is enabled, wrap with provider
    if (contactConfig.recaptcha.enabled && contactConfig.recaptcha.siteKey !== "YOUR_RECAPTCHA_SITE_KEY_HERE") {
        return (
            <GoogleReCaptchaProvider reCaptchaKey={contactConfig.recaptcha.siteKey}>
                <WhatsAppFormInner {...props} />
            </GoogleReCaptchaProvider>
        );
    }

    // Otherwise, render form without reCAPTCHA
    return <WhatsAppFormInner {...props} />;
}
