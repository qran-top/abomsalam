import { CONTENT, ASSETS } from '../constants.js';
import { getCurrentLang } from '../i18n.js';

export function getTeamHtml() {
    const tTeam = CONTENT[getCurrentLang()].team;
    return `
        <section id="team" class="py-24 bg-navy-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h4 class="text-gold-400 font-bold uppercase tracking-widest text-sm mb-2" data-i18n-key="team.subtitle">${tTeam.subtitle}</h4>
                    <h2 class="text-3xl md:text-5xl font-bold text-white font-serif" data-i18n-key="team.title">${tTeam.title}</h2>
                    <div class="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
                </div>

                <div class="flex flex-wrap justify-center gap-8" id="team-items">
                    <!-- Team items will be rendered here by JS -->
                </div>
            </div>
        </section>
    `;
}

export function renderTeam() {
    const tTeam = CONTENT[getCurrentLang()].team;
    const container = document.getElementById('team-items');
    if (container) {
        container.innerHTML = ''; // Clear previous content

        tTeam.items.forEach(member => {
            const div = document.createElement('div');
            div.className = "group bg-navy-800 rounded-lg overflow-hidden border border-navy-700 hover:border-gold-500/50 transition-all duration-300 shadow-lg hover:shadow-gold-500/10 relative pb-6 w-full md:max-w-[calc(50%-1rem)] lg:max-w-sm";
            div.innerHTML = `
                <div class="h-24 bg-navy-700 relative"></div> <!-- Placeholder for top background -->
                <div class="relative -mt-24 mx-auto w-48 h-48 rounded-2xl overflow-hidden border-4 border-gold-400 z-10 bg-navy-700 flex items-center justify-center shadow-lg">
                    ${member.image ? `<img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" onerror="this.onerror=null; this.style.display='none'; this.parentElement.querySelector('.fallback-icon-inner').classList.remove('hidden');" />` : ''}
                    
                    <div class="fallback-icon-inner absolute inset-0 flex items-center justify-center bg-navy-800 ${member.image ? 'hidden' : ''}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user w-20 h-20 text-slate-500 opacity-50"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                </div>

                <div class="p-6 pt-4 relative text-center">
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>
                    
                    <h3 class="text-xl font-bold text-white mb-2 font-serif">${member.name}</h3>
                    <p class="text-gold-400 text-sm font-semibold uppercase tracking-wide mb-4">${member.role}</p>
                    <p class="text-slate-400 text-sm leading-relaxed px-2">
                        ${member.desc}
                    </p>
                </div>
            `;
            container.appendChild(div);
        });
    }
}