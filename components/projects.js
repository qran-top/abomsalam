import { CONTENT } from '../constants.js';
import { getCurrentLang } from '../i18n.js';

const iconMap = {
    truck: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>',
    factory: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M9 18V5l12-2v15"/><path d="M5 10v4"/><path d="M5 18v-2"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    globe: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    settings: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
    users: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    zap: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'
};

export function getProjectsHtml() {
    const tProjects = CONTENT[getCurrentLang()].projects;
    return `
        <section id="projects" class="py-24 bg-navy-900 relative border-t border-navy-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h4 class="text-gold-400 font-bold uppercase tracking-widest text-sm mb-2" data-i18n-key="projects.subtitle">${tProjects.subtitle}</h4>
                    <h2 class="text-3xl md:text-5xl font-bold text-white font-serif" data-i18n-key="projects.title">${tProjects.title}</h2>
                    <div class="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
                </div>

                <p class="text-center text-slate-300 text-lg leading-relaxed mb-16 max-w-4xl mx-auto font-medium" data-i18n-key="projects.intro">${tProjects.intro}</p>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-items">
                    <!-- Projects items will be rendered here by JS -->
                </div>
            </div>
        </section>
    `;
}

export function renderProjects() {
    const tProjects = CONTENT[getCurrentLang()].projects;
    const container = document.getElementById('projects-items');
    if (container) {
        container.innerHTML = ''; 

        tProjects.items.forEach(item => {
            const div = document.createElement('div');
            div.className = "group p-8 bg-navy-800/50 border border-navy-700 hover:border-gold-500/40 transition-all duration-300 rounded-xl shadow-lg hover:shadow-gold-500/5 relative overflow-hidden";
            div.innerHTML = `
                <div class="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:bg-gold-500/10"></div>
                
                <div class="w-12 h-12 bg-navy-700 rounded-lg flex items-center justify-center mb-6 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors duration-300">
                    ${iconMap[item.icon] || iconMap.globe}
                </div>
                <h3 class="text-xl font-bold text-white mb-4 font-serif">${item.title}</h3>
                <p class="text-slate-400 text-sm leading-relaxed">
                    ${item.desc}
                </p>
            `;
            container.appendChild(div);
        });
    }
}