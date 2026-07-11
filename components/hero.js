import { CONTENT, ASSETS } from '../constants.js';
import { getCurrentLang } from '../i18n.js';

export function getHeroHtml() {
    const tHero = CONTENT[getCurrentLang()].hero;
    const currentVideoUrl = ASSETS.hero.video[getCurrentLang()]; 
    const presentationUrl = ASSETS.presentations[getCurrentLang()];

    return `
        <section id="hero" class="relative h-screen w-full overflow-hidden flex items-center justify-center">
            <!-- Background Media -->
            <div class="absolute inset-0 z-0">
                <iframe
                    src="${currentVideoUrl}"
                    data-i18n-video-hero
                    frameborder="0"
                    allow="autoplay; modestbranding; encrypted-media"
                    allowfullscreen
                    class="absolute inset-0 w-full h-full object-cover"
                    title="National Minerals Company Background Video"
                ></iframe>
                <!-- Dark Overlay -->
                <div class="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/60 to-navy-900"></div>
                <!-- Pattern Overlay -->
                <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </div>

            <!-- Content -->
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div class="animate-fade-in-up">
                    <div class="inline-block mb-6 px-4 py-1 border border-gold-400/30 rounded-full bg-navy-900/50 backdrop-blur-sm">
                        <span class="text-gold-400 text-sm tracking-[0.2em] uppercase font-semibold" data-i18n-key="hero.estDate">${tHero.estDate}</span>
                    </div>
                    <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-serif tracking-tight">
                        <span class="block text-gold-400 drop-shadow-lg" data-i18n-key="hero.title">${tHero.title}</span>
                    </h1>
                    <p class="mt-4 max-w-2xl mx-auto text-xl text-slate-300 leading-relaxed font-light" data-i18n-key="hero.subtitle">${tHero.subtitle}</p>
                    
                    <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <a 
                            href="#about"
                            class="bg-gold-500 text-navy-900 px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-gold-400 transition-all duration-300 shadow-lg hover:shadow-gold-500/20"
                            data-i18n-key="hero.cta"
                        >${tHero.cta}</a>
                        
                        <a 
                            href="${presentationUrl}"
                            data-i18n-presentation-link
                            download
                            class="bg-transparent border border-gold-400 text-gold-400 px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-gold-400/10 transition-all duration-300 flex items-center justify-center gap-2"
                            data-i18n-key="hero.downloadProfile"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                            ${tHero.downloadProfile}
                        </a>
                    </div>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <span class="text-gold-400 w-8 h-8 opacity-70"><!-- ChevronDown icon SVG -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                </span>
            </div>
        </section>
    `;
}