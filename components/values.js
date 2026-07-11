import { CONTENT } from '../constants.js';
import { getCurrentLang } from '../i18n.js';

export function getValuesHtml() {
    const tValues = CONTENT[getCurrentLang()].values;
    return `
        <section id="values" class="py-24 bg-navy-800 relative overflow-hidden">
            <!-- Background Decoration -->
            <div class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div class="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
                <div class="absolute bottom-0 right-0 w-96 h-96 bg-gold-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-16">
                    <h4 class="text-gold-400 font-bold uppercase tracking-widest text-sm mb-2" data-i18n-key="values.subtitle">${tValues.subtitle}</h4>
                    <h2 class="text-3xl md:text-5xl font-bold text-white font-serif" data-i18n-key="values.title">${tValues.title}</h2>
                    <div class="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="values-items">
                    <!-- Values items will be rendered here by JS -->
                </div>
            </div>
        </section>
    `;
}

export function renderValues() {
    const tValues = CONTENT[getCurrentLang()].values;
    const container = document.getElementById('values-items');
    if (container) {
        container.innerHTML = ''; // Clear previous content

        tValues.items.forEach(item => {
            const div = document.createElement('div');
            div.className = "group flex flex-col sm:flex-row gap-6 p-8 bg-navy-900 border border-navy-700 hover:border-gold-500/50 transition-all duration-300 rounded-lg hover:shadow-2xl hover:shadow-gold-500/5";
            div.innerHTML = `
                <div class="flex-shrink-0">
                    <div class="w-14 h-14 bg-navy-800 rounded-lg flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300">
                        ${item.iconSvg}
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-white mb-2">${item.title}</h3>
                    <p class="text-slate-400 leading-relaxed text-sm">
                        ${item.desc}
                    </p>
                </div>
            `;
            container.appendChild(div);
        });
    }
}