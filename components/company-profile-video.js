import { CONTENT, ASSETS } from '../constants.js';
import { getCurrentLang } from '../i18n.js';

export function getCompanyProfileVideoHtml() {
    const tCompanyProfile = CONTENT[getCurrentLang()].companyProfile;
    const presentationUrl = ASSETS.presentations[getCurrentLang()];

    return `
        <section id="company-profile-video" class="py-24 bg-navy-900/50 relative border-t border-b border-navy-800">
            <!-- Decorative Background Glows -->
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.02),transparent_50%)] pointer-events-none"></div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-16">
                    <h4 class="text-gold-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3" data-i18n-key="companyProfile.subtitle">${tCompanyProfile.subtitle}</h4>
                    <h2 class="text-3xl md:text-5xl font-bold text-white font-serif" data-i18n-key="companyProfile.title">${tCompanyProfile.title}</h2>
                    <div class="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
                </div>

                <div class="max-w-4xl mx-auto bg-gradient-to-br from-navy-800 to-navy-950 border border-gold-500/20 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-gold-500/40 transition-all duration-500">
                    <!-- Decorative subtle gold radial glow -->
                    <div class="absolute -right-32 -bottom-32 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl group-hover:bg-gold-500/10 transition-all duration-500 pointer-events-none"></div>
                    <div class="absolute -left-32 -top-32 w-96 h-96 bg-navy-700/20 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <div class="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <!-- Booklet Visual Column -->
                        <div class="w-full md:w-1/3 flex justify-center">
                            <div class="relative w-48 h-64 bg-navy-900 border-2 border-gold-500/30 rounded-lg shadow-xl overflow-hidden transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500 flex flex-col justify-between p-6">
                                <!-- Golden spine line -->
                                <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-gold-400 to-gold-600"></div>
                                <!-- Abstract golden lines/logo inside brochure mock -->
                                <div class="flex justify-between items-start">
                                    <span class="text-[10px] text-gold-400 font-bold tracking-widest uppercase">NMC</span>
                                    <span class="text-[9px] text-slate-500 bg-navy-800 px-1.5 py-0.5 rounded border border-navy-700 font-mono">2026</span>
                                </div>
                                <div class="my-auto space-y-2">
                                    <div class="w-8 h-1 bg-gold-500/60 rounded"></div>
                                    <div class="h-4 w-full bg-slate-400/20 rounded"></div>
                                    <div class="h-2 w-3/4 bg-slate-400/10 rounded"></div>
                                </div>
                                <div class="flex justify-between items-end border-t border-navy-800 pt-3">
                                    <span class="text-[8px] text-slate-400 uppercase tracking-wider">Corporate Profile</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gold-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Details Column -->
                        <div class="w-full md:w-2/3 space-y-6 text-center md:text-left rtl:md:text-right">
                            <div class="space-y-2">
                                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/10 text-gold-400 border border-gold-500/20">
                                    <span class="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
                                    Interactive Corporate Brochure
                                </span>
                                <h3 class="text-2xl font-bold text-white font-serif">National Minerals Company Presentation</h3>
                            </div>
                            
                            <p class="text-slate-300 text-sm md:text-base leading-relaxed font-medium" data-i18n-key="companyProfile.intro">
                                ${tCompanyProfile.intro}
                            </p>
                            
                            <!-- Metadata pills -->
                            <div class="flex flex-wrap gap-3 justify-center md:justify-start">
                                <span class="px-3 py-1.5 bg-navy-900 border border-navy-700 rounded-lg text-xs text-slate-300 flex items-center gap-1.5">
                                    <strong class="text-gold-400">Format:</strong> PDF
                                </span>
                                <span class="px-3 py-1.5 bg-navy-900 border border-navy-700 rounded-lg text-xs text-slate-300 flex items-center gap-1.5">
                                    <strong class="text-gold-400">Size:</strong> ~4.8 MB
                                </span>
                                <span class="px-3 py-1.5 bg-navy-900 border border-navy-700 rounded-lg text-xs text-slate-300 flex items-center gap-1.5">
                                    <strong class="text-gold-400">Access:</strong> Official & Free
                                </span>
                            </div>
                            
                            <div class="pt-2 flex justify-center md:justify-start">
                                <a 
                                    href="${presentationUrl}"
                                    data-i18n-presentation-link
                                    download
                                    class="inline-flex items-center gap-3 bg-gradient-to-r from-gold-600 to-gold-400 text-navy-950 hover:from-gold-500 hover:to-gold-300 px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-gold-500/10 cursor-pointer w-full sm:w-auto justify-center"
                                    data-i18n-key="companyProfile.downloadBtn"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                    ${tCompanyProfile.downloadBtn}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}