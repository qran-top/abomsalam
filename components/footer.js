import { CONTENT } from '../constants.js';
import { getCurrentLang } from '../i18n.js';

export function getFooterHtml() {
    const tContact = CONTENT[getCurrentLang()].contact; // Footer content is part of contact translations
    return `
        <footer class="bg-navy-950 py-8 border-t border-navy-900">
            <div class="max-w-7xl mx-auto px-4 text-center">
                <p class="text-slate-500 text-sm" data-i18n-key="contact.rights">${tContact.rights}</p>
            </div>
        </footer>
    `;
}