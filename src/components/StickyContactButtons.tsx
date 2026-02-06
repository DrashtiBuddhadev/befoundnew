import { useState } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

interface ContactButton {
    icon: React.ReactNode;
    label: string;
    href: string;
    ariaLabel: string;
}

const StickyContactButtons = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const contactButtons: ContactButton[] = [
        {
            icon: <Mail className="w-5 h-5" />,
            label: 'info@befound.dev',
            href: 'mailto:info@befound.dev',
            ariaLabel: 'Send email to info@befound.dev',
        },
        {
            icon: <MessageCircle className="w-5 h-5" />,
            label: 'WhatsApp',
            href: 'https://wa.me/919016611872?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.',
            ariaLabel: 'Chat on WhatsApp',
        },
        {
            icon: <Phone className="w-5 h-5" />,
            label: 'Call Us',
            href: 'tel:+919016611872',
            ariaLabel: 'Call +91 90166 11872',
        },
    ];

    return (
        <div className="fixed right-0 bottom-6 z-50 hidden md:block">
            <div className="flex flex-col gap-3">
                {contactButtons.map((button, index) => (
                    <div key={index} className="relative group">
                        {/* Tooltip */}
                        <div
                            className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2
                bg-[#7C7AFF] backdrop-blur-md border border-[#7C7AFF]
                text-white text-sm font-medium whitespace-nowrap
                transition-all duration-300 pointer-events-none shadow-lg
                ${hoveredIndex === index
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 translate-x-2'
                                }`}
                        >
                            {button.label}
                            {/* Arrow */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-[#7C7AFF]" />
                            </div>
                        </div>

                        {/* Button */}
                        <a
                            href={button.href}
                            target={button.href.startsWith('http') ? '_blank' : undefined}
                            rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            aria-label={button.ariaLabel}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`
                flex items-center justify-center w-14 h-14
                bg-[#7C7AFF] backdrop-blur-md border border-[#7C7AFF]
                text-white transition-all duration-300 shadow-lg
                hover:bg-[#6B69EE] hover:border-[#6B69EE] hover:scale-110
                hover:shadow-xl hover:shadow-[#7C7AFF]/40
                ${hoveredIndex === index ? 'contact-button-glow' : ''}
              `}
                        >
                            {button.icon}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StickyContactButtons;
