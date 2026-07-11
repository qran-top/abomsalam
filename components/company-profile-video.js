import { CONTENT, ASSETS } from '../constants.js';
import { getCurrentLang } from '../i18n.js';

export function getCompanyProfileVideoHtml() {
    const tCompanyProfile = CONTENT[getCurrentLang()].companyProfile;
    const currentVideoUrl = ASSETS.companyProfileVideo[getCurrentLang()]; 
    const presentationUrl = ASSETS.presentations[getCurrentLang()];

    return `
        <section id="company-profile-video" class="py-24 bg-navy-800 relative border-t border-navy-700">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h4 class="text-gold-400 font-bold uppercase tracking-widest text-sm mb-2" data-i18n-key="companyProfile.subtitle">${tCompanyProfile.subtitle}</h4>
                    <h2 class="text-3xl md:text-5xl font-bold text-white font-serif" data-i18n-key="companyProfile.title">${tCompanyProfile.title}</h2>
                    <div class="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
                </div>

                <p class="text-center text-slate-300 text-lg leading-relaxed mb-12 max-w-4xl mx-auto font-medium" data-i18n-key="companyProfile.intro">${tCompanyProfile.intro}</p>

                <div class="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-navy-700 mx-auto max-w-5xl mb-12">
                    <iframe
                        src="${currentVideoUrl}"
                        data-i18n-video-profile
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        class="absolute inset-0 w-full h-full object-cover"
                        title="National Minerals Company Profile Video"
                    ></iframe>
                </div>

                <div class="flex justify-center">
                    <a 
                        href="${presentationUrl}"
                        data-i18n-presentation-link
                        download
                        class="inline-flex items-center gap-3 bg-navy-900 border border-gold-500/30 text-gold-400 px-10 py-5 rounded-lg font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 shadow-xl"
                        data-i18n-key="companyProfile.downloadBtn"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                        ${tCompanyProfile.downloadBtn}
                    </a>
                </div>
            </div>
        </section>
    `;
}