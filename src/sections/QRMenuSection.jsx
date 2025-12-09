import React, { useState } from 'react';
import Section from '../components/ui/Section';
import QRCodeDisplay from '../components/QRCodeDisplay';
import { qrMenuConfig } from '../data/qrMenuConfig';
import { Smartphone, Utensils, Zap } from 'lucide-react';

export function QRMenuSection() {
    const { title, description, baseMenuUrl } = qrMenuConfig;

    // Demo table param
    const [table, setTable] = useState('12');
    const finalUrl = `${baseMenuUrl}?table=${table}`;

    return (
        <Section id="qr-menu" className="bg-stone-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text / Explainer */}
                <div className="order-2 md:order-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-bold mb-4">
                        <Zap size={16} /> Contactless Menu
                    </div>
                    <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">{title}</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {description}
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center shrink-0 text-brand-600">
                                <Smartphone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">1. Scan the Code</h4>
                                <p className="text-sm text-gray-600">Point your camera at the QR code. No app download needed.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center shrink-0 text-brand-600">
                                <Utensils size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">2. Browse Our Menu</h4>
                                <p className="text-sm text-gray-600">View our full menu with prices and descriptions right on your phone.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual / QR Demo */}
                <div className="order-1 md:order-2 flex flex-col items-center justify-center bg-white p-8 rounded-3xl shadow-xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Scan to View Menu</h3>
                    <QRCodeDisplay url={finalUrl} size={250} />

                    <div className="mt-8 pt-6 border-t border-dashed border-gray-200 w-full text-center">
                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Demo</p>
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-sm text-gray-600">Table Number:</span>
                            <input
                                type="number"
                                value={table}
                                onChange={(e) => setTable(e.target.value)}
                                className="w-16 px-2 py-1 border rounded text-center font-bold text-brand-600"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </Section>
    );
}

export default QRMenuSection;
