import React from 'react';
import Section from '../components/ui/Section';
import WhatsAppForm from '../components/WhatsAppForm';
import { contactConfig } from '../data/contactConfig';
import { siteConfig } from '../data/siteConfig';
import { locationsData } from '../data/locationsData';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
    const { formTitle, formSubtitle } = contactConfig;

    return (
        <Section id="contact" className="bg-brand-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

                {/* Info Side */}
                <div>
                    <h2 className="text-brand-600 font-medium tracking-wide uppercase mb-2 text-sm">Contact</h2>
                    <h3 className="text-4xl font-display font-bold text-gray-900 mb-6">{formTitle}</h3>
                    <p className="text-gray-600 mb-10 text-lg">{formSubtitle}</p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-600 shrink-0">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Email Us</h4>
                                <a href={`mailto:${contactConfig.email}`} className="text-gray-600 hover:text-brand-600">{contactConfig.email}</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-600 shrink-0">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Call Us</h4>
                                <a href={`tel:${contactConfig.phone}`} className="text-gray-600 hover:text-brand-600">{contactConfig.phone}</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-600 shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Main Office</h4>
                                <p className="text-gray-600">{contactConfig.address}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* WhatsApp Form Side */}
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <WhatsAppForm
                        businessName={siteConfig.name}
                        defaultWhatsappNumber={contactConfig.defaultWhatsappNumber}
                        locations={locationsData}
                        overrideWhatsappByLocation={false}
                    />
                </div>

            </div>
        </Section>
    );
}

export default ContactSection;
