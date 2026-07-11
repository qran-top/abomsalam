import { CONTENT, ASSETS } from '../constants.js';
import { getCurrentLang } from '../i18n.js';

export function getPartnersHtml() {
    const tPartners = CONTENT[getCurrentLang()].partners;
    return `
        <section id="partners" class="py-24 bg-navy-900 border-t border-navy-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h4 class="text-gold-400 font-bold uppercase tracking-widest text-sm mb-2" data-i18n-key="partners.subtitle">${tPartners.subtitle}</h4>
                    <h2 class="text-3xl md:text-5xl font-bold text-white font-serif" data-i18n-key="partners.title">${tPartners.title}</h2>
                    <div class="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
                </div>

                <p class="text-center text-slate-300 text-lg leading-relaxed mb-16 max-w-4xl mx-auto font-medium" data-i18n-key="partners.intro">${tPartners.intro}</p>

                <!-- Single Partner Card -->
                <div class="max-w-2xl mx-auto bg-navy-800 p-8 md:p-10 rounded-xl border border-navy-700 shadow-xl text-center">
                    <!-- Partner Image (consistent with team members) -->
                    <div class="relative mx-auto w-48 h-48 rounded-2xl overflow-hidden border-4 border-gold-400 z-10 bg-navy-700 flex items-center justify-center shadow-lg mb-8">
                        <img
                            src="${ASSETS.partners.younesAboud}"
                            alt="${tPartners.younesAboud.name}"
                            class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            onerror="this.onerror=null; this.style.display='none'; this.parentElement.querySelector('.fallback-icon-inner').classList.remove('hidden');"
                        />
                        <div class="fallback-icon-inner absolute inset-0 flex items-center justify-center bg-navy-800 hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building w-20 h-20 text-slate-500 opacity-50"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M12 15h.01"/><path d="M12 9h.01"/></svg>
                        </div>
                    </div>

                    <!-- Partner Details -->
                    <h3 class="text-3xl md:text-4xl font-bold text-white mb-4 font-serif" data-i18n-key="partners.younesAboud.name">${tPartners.younesAboud.name}</h3>
                    <div class="w-16 h-1 bg-gold-500 mx-auto mb-6"></div>
                    <p class="text-slate-300 leading-relaxed text-md md:text-lg whitespace-pre-line" data-i18n-key="partners.younesAboud.desc">${tPartners.younesAboud.desc}</p>
                </div>
            </div>
        </section>
    `;
}