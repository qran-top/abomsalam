import { CONTENT, ASSETS } from './constants.js';

// Get initial language from localStorage, or default to 'en'
let currentLang = localStorage.getItem('lang') || 'en'; 

export function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

export function updateContent(lang = currentLang) {
    currentLang = lang;
    localStorage.setItem('lang', currentLang); // Save selected language to localStorage

    const t = CONTENT[currentLang];
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.className = `bg-navy-900 text-slate-300`;

    // Update static texts
    document.querySelectorAll('[data-i18n-key]').forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        if (key) {
            const value = getNestedValue(t, key);
            if (value !== undefined) {
                element.textContent = value;
            }
        }
    });

    // Update Presentation PDF Links
    document.querySelectorAll('[data-i18n-presentation-link]').forEach(el => {
        el.href = ASSETS.presentations[currentLang];
    });

    // Update Email mailto Link
    document.querySelectorAll('[data-i18n-email-link]').forEach(el => {
        const email = getNestedValue(t, 'contact.email');
        if (email) el.href = `mailto:${email}`;
    });

    // Update Website Link
    document.querySelectorAll('[data-i18n-website-link]').forEach(el => {
        const site = getNestedValue(t, 'contact.website');
        if (site) el.href = site.startsWith('http') ? site : `https://${site}`;
    });

    // Update Hero Video Source
    document.querySelectorAll('[data-i18n-video-hero]').forEach(el => {
        const newSrc = ASSETS.hero.video[currentLang];
        if (el.src !== newSrc) el.src = newSrc;
    });

    // Update Company Profile Video Source
    document.querySelectorAll('[data-i18n-video-profile]').forEach(el => {
        const newSrc = ASSETS.companyProfileVideo[currentLang];
        if (el.src !== newSrc) el.src = newSrc;
    });

    // Dispatch a custom event to notify components that content needs to be re-rendered
    document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: currentLang } }));
}

export function getCurrentLang() {
    return currentLang;
}