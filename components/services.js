import { CONTENT } from '../constants.js';
import { getCurrentLang } from '../i18n.js';

export function getServicesHtml() {
    const tServices = CONTENT[getCurrentLang()].services;
    return `
        <section id="services" class="py-24 bg-navy-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h4 class="text-gold-400 font-bold uppercase tracking-widest text-sm mb-2" data-i18n-key="services.subtitle">${tServices.subtitle}</h4>
                    <h2 class="text-3xl md:text-5xl font-bold text-white font-serif" data-i18n-key="services.title">${tServices.title}</h2>
                    <div class="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="services-items">
                    <!-- Services items will be rendered here by JS -->
                </div>
            </div>
        </section>
    `;
}

export function renderServices() {
    const tServices = CONTENT[getCurrentLang()].services;
    const container = document.getElementById('services-items');
    if (container) {
        container.innerHTML = ''; // Clear previous content

        tServices.items.forEach(item => {
            const div = document.createElement('div');
            div.className = "group p-6 bg-navy-900 border border-navy-700 hover:border-gold-500/50 transition-all duration-300 rounded-lg text-center";
            div.innerHTML = `
                <div class="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-gold-500 transition-colors duration-300">
                    ${item.iconSvg}
                </div>
                <h3 class="text-lg font-bold text-white mb-3">${item.title}</h3>
                <p class="text-slate-400 text-sm leading-relaxed">
                    ${item.desc}
                </p>
            `;
            container.appendChild(div);
        });
    }
}