import { CONTENT, ASSETS } from '../constants.js';
import { getCurrentLang } from '../i18n.js';

export function getAboutHtml() {
    const tAbout = CONTENT[getCurrentLang()].about;
    return `
        <section id="about" class="py-24 bg-navy-900 relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Main Info -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <!-- Image Grid -->
                    <div class="relative order-2 lg:order-1">
                        <div class="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-400 opacity-50 z-20"></div>
                        <div class="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-400 opacity-50 z-20"></div>
                        
                        <div class="relative w-full overflow-hidden rounded-lg shadow-2xl filter brightness-90 border border-navy-700">
                            <img
                                src="${ASSETS.about}"
                                alt="Industrial Mining Operations"
                                class="w-full h-full object-cover object-center"
                                style="aspect-ratio: 16/9;"
                            />
                        </div>
                    </div>

                    <!-- Text Content -->
                    <div class="order-1 lg:order-2">
                        <h4 class="text-gold-400 font-bold uppercase tracking-widest text-sm mb-2" data-i18n-key="about.subtitle">${tAbout.subtitle}</h4>
                        <h2 class="text-3xl md:text-5xl font-bold text-white mb-8 font-serif" data-i18n-key="about.title">${tAbout.title}</h2>
                        <div class="w-20 h-1 bg-gold-500 mb-8"></div>
                        <p class="text-slate-300 text-lg leading-relaxed mb-6 font-medium" data-i18n-key="about.text">${tAbout.text}</p>
                    </div>
                </div>

                <!-- Vision & Mission Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-navy-800 p-10 rounded-xl border-l-4 border-gold-400 shadow-xl hover:bg-navy-750 transition-colors">
                        <h3 class="text-2xl font-bold text-white mb-4 font-serif" data-i18n-key="about.vision.title">${tAbout.vision.title}</h3>
                        <p class="text-slate-300 leading-relaxed text-lg" data-i18n-key="about.vision.text">${tAbout.vision.text}</p>
                    </div>
                    <div class="bg-navy-800 p-10 rounded-xl border-l-4 border-gold-400 shadow-xl hover:bg-navy-750 transition-colors">
                        <h3 class="text-2xl font-bold text-white mb-4 font-serif" data-i18n-key="about.mission.title">${tAbout.mission.title}</h3>
                        <p class="text-slate-300 leading-relaxed text-lg" data-i18n-key="about.mission.text">${tAbout.mission.text}</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}