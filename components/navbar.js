import { CONTENT, ASSETS } from '../constants.js';
import { updateContent, getCurrentLang } from '../i18n.js';

export function getNavbarHtml() {
    const tNav = CONTENT[getCurrentLang()].nav;
    return `
        <nav class="fixed w-full z-50 bg-navy-900/95 backdrop-blur-md border-b border-navy-800 shadow-lg">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-20">
                    <!-- Logo - Now an image -->
                    <a href="#hero" class="flex-shrink-0 flex items-center">
                        <img src="${ASSETS.logo}" alt="National Minerals Company Logo" class="h-10 w-auto">
                    </a>

                    <!-- Desktop Menu -->
                    <div class="hidden lg:block">
                        <div class="ml-10 flex items-baseline space-x-6 rtl:space-x-reverse">
                            <a href="#hero" class="text-slate-300 hover:text-gold-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide" data-i18n-key="nav.home">${tNav.home}</a>
                            <a href="#about" class="text-slate-300 hover:text-gold-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide" data-i18n-key="nav.about">${tNav.about}</a>
                            <a href="#values" class="text-slate-300 hover:text-gold-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide" data-i18n-key="nav.values">${tNav.values}</a>
                            <a href="#team" class="text-slate-300 hover:text-gold-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide" data-i18n-key="nav.team">${tNav.team}</a>
                            <a href="#services" class="text-slate-300 hover:text-gold-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide" data-i18n-key="nav.services">${tNav.services}</a>
                            <a href="#projects" class="text-slate-300 hover:text-gold-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide" data-i18n-key="nav.projects">${tNav.projects}</a>
                            <a href="#partners" class="text-slate-300 hover:text-gold-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide" data-i18n-key="partners.title">${CONTENT[getCurrentLang()].partners.title}</a>
                            <a href="#contact" class="text-slate-300 hover:text-gold-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide" data-i18n-key="nav.contact">${tNav.contact}</a>
                            
                            <button id="lang-switch-desktop" class="flex items-center gap-2 border border-gold-400/30 px-4 py-1.5 rounded-full text-gold-400 hover:bg-gold-400 hover:text-navy-900 transition-all duration-300 text-sm font-semibold">
                                <span class="lang-icon"><!-- Globe icon SVG -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                                </span>
                                <span data-i18n-key="nav.langSwitch">${tNav.langSwitch}</span>
                            </button>
                        </div>
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="-mr-2 flex lg:hidden">
                        <button id="mobile-menu-toggle" type="button" class="bg-navy-800 inline-flex items-center justify-center p-2 rounded-md text-gold-400 hover:text-white hover:bg-navy-700 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <span id="menu-icon-open"><!-- Menu icon SVG -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                            </span>
                            <span id="menu-icon-close" class="hidden"><!-- X icon SVG -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="lg:hidden hidden bg-navy-900 border-b border-navy-800">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#hero" class="text-slate-300 hover:text-gold-400 block px-3 py-2 rounded-md text-base font-medium text-center" data-i18n-key="nav.home">${tNav.home}</a>
                    <a href="#about" class="text-slate-300 hover:text-gold-400 block px-3 py-2 rounded-md text-base font-medium text-center" data-i18n-key="nav.about">${tNav.about}</a>
                    <a href="#values" class="text-slate-300 hover:text-gold-400 block px-3 py-2 rounded-md text-base font-medium text-center" data-i18n-key="nav.values">${tNav.values}</a>
                    <a href="#team" class="text-slate-300 hover:text-gold-400 block px-3 py-2 rounded-md text-base font-medium text-center" data-i18n-key="nav.team">${tNav.team}</a>
                    <a href="#services" class="text-slate-300 hover:text-gold-400 block px-3 py-2 rounded-md text-base font-medium text-center" data-i18n-key="nav.services">${tNav.services}</a>
                    <a href="#projects" class="text-slate-300 hover:text-gold-400 block px-3 py-2 rounded-md text-base font-medium text-center" data-i18n-key="nav.projects">${tNav.projects}</a>
                    <a href="#partners" class="text-slate-300 hover:text-gold-400 block px-3 py-2 rounded-md text-base font-medium text-center" data-i18n-key="partners.title">${CONTENT[getCurrentLang()].partners.title}</a>
                    <a href="#contact" class="text-slate-300 hover:text-gold-400 block px-3 py-2 rounded-md text-base font-medium text-center" data-i18n-key="nav.contact">${tNav.contact}</a>
                    <button id="lang-switch-mobile" class="w-full text-center mt-4 border border-gold-400/30 px-4 py-3 rounded-md text-gold-400 hover:bg-gold-400 hover:text-navy-900 transition-all font-semibold">
                        <span data-i18n-key="nav.langSwitch">${tNav.langSwitch}</span>
                    </button>
                </div>
            </div>
        </nav>
    `;
}

export function initNavbarListeners() {
    // Language Switcher
    document.getElementById('lang-switch-desktop').addEventListener('click', () => {
        const newLang = getCurrentLang() === 'en' ? 'ar' : 'en';
        updateContent(newLang);
    });
    document.getElementById('lang-switch-mobile').addEventListener('click', () => {
        const newLang = getCurrentLang() === 'en' ? 'ar' : 'en';
        updateContent(newLang);
        // Close mobile menu after language switch
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        if (mobileMenu && mobileMenuToggle) {
            mobileMenu.classList.add('hidden');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.getElementById('menu-icon-open').classList.remove('hidden');
            document.getElementById('menu-icon-close').classList.add('hidden');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    if (mobileMenuToggle && mobileMenu && menuIconOpen && menuIconClose) {
        mobileMenuToggle.addEventListener('click', () => {
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenu.classList.toggle('hidden');
            mobileMenuToggle.setAttribute('aria-expanded', String(!isExpanded));
            menuIconOpen.classList.toggle('hidden');
            menuIconClose.classList.toggle('hidden');
        });

        // Close mobile menu when a nav link is clicked
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                menuIconOpen.classList.remove('hidden');
                menuIconClose.classList.add('hidden');
            });
        });
    }

    // Update texts on language change event
    document.addEventListener('langChanged', () => {
        const tNav = CONTENT[getCurrentLang()].nav;
        const desktopSwitch = document.getElementById('lang-switch-desktop');
        if (desktopSwitch) {
            desktopSwitch.querySelector('[data-i18n-key="nav.langSwitch"]').textContent = tNav.langSwitch;
        }
        const mobileSwitch = document.getElementById('lang-switch-mobile');
        if (mobileSwitch) {
            mobileSwitch.querySelector('[data-i18n-key="nav.langSwitch"]').textContent = tNav.langSwitch;
        }
        
        // Update the legacy link
        const legacyLink = document.querySelector('a[href="#projects"][data-i18n-key="nav.projects"]');
        if (legacyLink) legacyLink.textContent = tNav.projects;
        
        const mobileLegacyLink = document.querySelector('#mobile-menu a[href="#projects"][data-i18n-key="nav.projects"]');
        if (mobileLegacyLink) mobileLegacyLink.textContent = tNav.projects;

        const desktopPartnersLink = document.querySelector('a[href="#partners"][data-i18n-key="partners.title"]');
        if (desktopPartnersLink) {
            desktopPartnersLink.textContent = CONTENT[getCurrentLang()].partners.title;
        }

        const mobilePartnersLink = document.querySelector('#mobile-menu a[href="#partners"][data-i18n-key="partners.title"]');
        if (mobilePartnersLink) {
            mobilePartnersLink.textContent = CONTENT[getCurrentLang()].partners.title;
        }
    });
}