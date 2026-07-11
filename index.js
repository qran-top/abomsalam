import { updateContent, getCurrentLang } from './i18n.js';

// Import component HTML and rendering functions
import { getNavbarHtml, initNavbarListeners } from './components/navbar.js';
import { getHeroHtml } from './components/hero.js';
import { getAboutHtml } from './components/about.js';
import { getValuesHtml, renderValues } from './components/values.js';
import { getTeamHtml, renderTeam } from './components/team.js';
import { getServicesHtml, renderServices } from './components/services.js';
import { getProjectsHtml, renderProjects } from './components/projects.js'; // New import
import { getPartnersHtml } from './components/partners.js'; 
import { getCompanyProfileVideoHtml } from './components/company-profile-video.js';
import { getContactHtml, renderContactPhones, initContactForm } from './components/contact.js';
import { getFooterHtml } from './components/footer.js';

// Main application rendering logic
function renderApp() {
    const appRoot = document.getElementById('app-root');
    if (appRoot) {
        // Assemble all component HTML
        appRoot.innerHTML = `
            ${getNavbarHtml()}
            <main>
                ${getHeroHtml()}
                ${getAboutHtml()}
                ${getCompanyProfileVideoHtml()}
                ${getValuesHtml()}
                ${getTeamHtml()}
                ${getServicesHtml()}
                ${getProjectsHtml()} <!-- New Projects Section Added Here -->
                ${getPartnersHtml()} 
                ${getContactHtml()}
            </main>
            ${getFooterHtml()}
        `;

        // Initialize listeners and dynamic content after HTML is rendered
        initNavbarListeners();
        renderValues();
        renderTeam();
        renderServices();
        renderProjects(); // Initialize rendering of projects
        renderContactPhones();
        initContactForm(); 

        // Re-apply content for current language after initial render
        updateContent(getCurrentLang());
    }
}

// Listen for language changes and re-render dynamic parts
document.addEventListener('langChanged', (event) => {
    // Re-render only dynamic sections that need it
    renderValues();
    renderTeam();
    renderServices();
    renderProjects(); // Re-render projects on language change
    renderContactPhones();
});


// Initial content load when DOM is ready
document.addEventListener('DOMContentLoaded', renderApp);