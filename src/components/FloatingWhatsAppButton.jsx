import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { contactConfig } from '../data/contactConfig';
import { themeConfig } from '../data/themeConfig';

export default function FloatingWhatsAppButton() {
    const handleClick = () => {
        if (siteConfig.floatingWhatsApp.actionType === 'whatsapp') {
            const message = encodeURIComponent(siteConfig.floatingWhatsApp.message);
            window.open(`https://wa.me/${contactConfig.defaultWhatsappNumber}?text=${message}`, '_blank');
        } else {
            // Scroll to contact section
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    if (!siteConfig.floatingWhatsApp.enabled) {
        return null;
    }

    return (
        <button
            onClick={handleClick}
            className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl ${themeConfig.classes.btnWhatsApp} hover:scale-110 transition-transform`}
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle size={28} />
        </button>
    );
}
