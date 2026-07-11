import { CONTENT } from '../constants.js';
import { getCurrentLang } from '../i18n.js';

// Updated with the user-provided Formspree form ID
const FORMSPREE_FORM_ID = 'mkovozqe'; 

export function getContactHtml() {
    const tContact = CONTENT[getCurrentLang()].contact;
    return `
        <section id="contact" class="py-24 bg-navy-900 border-t border-navy-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <!-- Info Side -->
                    <div>
                        <h4 class="text-gold-400 font-bold uppercase tracking-widest text-sm mb-2" data-i18n-key="contact.subtitle">${tContact.subtitle}</h4>
                        <h2 class="text-3xl md:text-5xl font-bold text-white mb-8 font-serif" data-i18n-key="contact.title">${tContact.title}</h2>
                        <div class="space-y-8 mt-12">
                            <div class="flex items-start gap-4">
                                <div class="p-3 bg-navy-800 rounded-lg text-gold-400 shrink-0"><!-- MapPin icon SVG -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M12 10v6"/><path d="M12 21.7C17.3 17 22 13.5 22 10a8 8 0 0 0-16 0c0 3.5 4.7 7 10 11.7Z"/><path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>
                                </div>
                                <div>
                                    <h5 class="text-white font-bold text-lg mb-1" data-i18n-key="contact.addressLabel">${tContact.addressLabel}</h5>
                                    <p class="text-slate-400 whitespace-pre-line leading-relaxed" data-i18n-key="contact.address">${tContact.address}</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="p-3 bg-navy-800 rounded-lg text-gold-400 shrink-0"><!-- Phone icon SVG -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 = 2.81 2 2 0 0 1-2.09 2.16 11.46 11.46 0 0 0-1.72 2.15 11.46 11.46 0 0 0 2.15 1.72 2 2 0 0 1 2.16-2.09 12.84 12.84 0 0 0 2.81.7 A2 2 0 0 1 22 16.92z"/></svg>
                                </div>
                                <div>
                                    <h5 class="text-white font-bold text-lg mb-1" data-i18n-key="contact.phonesLabel">${tContact.phonesLabel}</h5>
                                    <div class="space-y-3 mt-2" id="contact-phones-list">
                                        <!-- Phones rendered as WhatsApp links by JS -->
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="p-3 bg-navy-800 rounded-lg text-gold-400 shrink-0"><!-- Mail icon SVG -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                </div>
                                <div>
                                    <h5 class="text-white font-bold text-lg mb-1" data-i18n-key="contact.emailLabel">${tContact.emailLabel}</h5>
                                    <a href="mailto:${tContact.email}" 
                                       data-i18n-email-link 
                                       data-i18n-key="contact.email" 
                                       class="text-slate-400 hover:text-gold-400 transition-colors duration-300 block">
                                       ${tContact.email}
                                    </a>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="p-3 bg-navy-800 rounded-lg text-gold-400 shrink-0"><!-- Globe icon SVG -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                                </div>
                                <div>
                                    <h5 class="text-white font-bold text-lg mb-1" data-i18n-key="contact.websiteLabel">${tContact.websiteLabel}</h5>
                                    <a href="https://${tContact.website}" 
                                       target="_blank" 
                                       data-i18n-website-link 
                                       data-i18n-key="contact.website" 
                                       class="text-slate-400 hover:text-gold-400 transition-colors duration-300 block">
                                       ${tContact.website}
                                    </a>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="p-3 bg-navy-800 rounded-lg text-gold-400 shrink-0"><!-- FileText icon SVG -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                                </div>
                                <div>
                                    <h5 class="text-white font-bold text-lg mb-1" data-i18n-key="contact.registrationLabel">${tContact.registrationLabel}</h5>
                                    <p class="text-slate-400" data-i18n-key="contact.cr">${tContact.cr}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Form Side -->
                    <div class="bg-navy-800 p-8 md:p-10 rounded-xl border border-navy-700 h-fit">
                        <form class="space-y-6" id="contact-form" action="https://formspree.io/f/${FORMSPREE_FORM_ID}" method="POST">
                            <div>
                                <label for="full-name" class="block text-slate-300 text-sm font-medium mb-2" data-i18n-key="contact.formName">${tContact.formName}</label>
                                <input 
                                    type="text" 
                                    id="full-name"
                                    name="name"
                                    required
                                    class="w-full bg-navy-900 border border-navy-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                                />
                            </div>
                            <div>
                                <label for="email-address" class="block text-slate-300 text-sm font-medium mb-2" data-i18n-key="contact.formEmail">${tContact.formEmail}</label>
                                <input 
                                    type="email" 
                                    id="email-address"
                                    name="email"
                                    required
                                    class="w-full bg-navy-900 border border-navy-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                                />
                            </div>
                            <div>
                                <label for="message-text" class="block text-slate-300 text-sm font-medium mb-2" data-i18n-key="contact.formMessage">${tContact.formMessage}</label>
                                <textarea 
                                    id="message-text"
                                    name="message"
                                    rows="4"
                                    required
                                    class="w-full bg-navy-900 border border-navy-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                id="contact-submit-btn"
                                class="w-full bg-gold-500 text-navy-900 font-bold py-4 rounded-lg hover:bg-gold-400 transition-colors uppercase tracking-widest shadow-lg hover:shadow-gold-500/20"
                                data-i18n-key="contact.formSubmit"
                            >${tContact.formSubmit}</button>
                            <div id="form-messages" class="mt-4 text-center text-sm font-medium h-6"></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function renderContactPhones() {
    const tContact = CONTENT[getCurrentLang()].contact;
    const container = document.getElementById('contact-phones-list');
    if (container) {
        container.innerHTML = ''; // Clear previous content

        tContact.phones.forEach(phone => {
            // Remove non-digit characters to create a valid WhatsApp link
            const cleanedNumber = phone.number.replace(/\D/g, '');
            const div = document.createElement('div');
            div.className = "flex items-center gap-3 text-slate-400 group";
            div.innerHTML = `
                <span class="inline-flex items-center justify-center text-[10px] sm:text-xs uppercase font-bold text-gold-600 bg-gold-400/10 px-2 rounded border border-gold-400/20 min-w-[75px] h-7 text-center transition-all group-hover:bg-gold-400/20 group-hover:border-gold-400/40">
                    ${phone.country}
                </span>
                <a href="https://wa.me/${cleanedNumber}" 
                   target="_blank" 
                   class="dir-ltr text-sm sm:text-base font-medium hover:text-gold-400 transition-colors duration-300" 
                   dir="ltr">
                   ${phone.number}
                </a>
            `;
            container.appendChild(div);
        });
    }
}

export function initContactForm() {
    const form = document.getElementById('contact-form');
    const submitButton = document.getElementById('contact-submit-btn');
    const formMessages = document.getElementById('form-messages');

    if (!form || !submitButton || !formMessages) return;

    // Store original button text for resetting
    const originalButtonTextKey = 'contact.formSubmit';
    let originalButtonText = CONTENT[getCurrentLang()].contact[originalButtonTextKey];

    // Helper to update messages based on language
    const updateFormMessagesForLang = () => {
        const tContact = CONTENT[getCurrentLang()].contact;
        originalButtonText = tContact[originalButtonTextKey];
        // If there's an active message, make sure it's updated too
        if (formMessages.textContent) {
            formMessages.textContent = '';
            formMessages.className = 'mt-4 text-center text-sm font-medium h-6';
        }
    };
    document.addEventListener('langChanged', updateFormMessagesForLang);
    updateFormMessagesForLang(); // Initial call to set current language text

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        const tContact = CONTENT[getCurrentLang()].contact;
        
        // Show sending message and disable button
        formMessages.textContent = tContact.formSending;
        formMessages.classList.remove('text-green-500', 'text-red-500'); // Clear previous status colors
        formMessages.classList.add('text-slate-400');
        submitButton.disabled = true;
        submitButton.classList.add('opacity-50', 'cursor-not-allowed');

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json' // Request JSON response from Formspree
                }
            });

            if (response.ok) {
                formMessages.textContent = tContact.formSuccess;
                formMessages.classList.remove('text-slate-400', 'text-red-500');
                formMessages.classList.add('text-green-500');
                form.reset(); // Clear the form fields
            } else {
                const data = await response.json();
                let errorMessage = tContact.formError;
                if (data && data.errors) {
                    errorMessage = data.errors.map(error => error.message).join(', ');
                } else if (data && data.error) {
                    errorMessage = data.error;
                }
                formMessages.textContent = errorMessage;
                formMessages.classList.remove('text-slate-400', 'text-green-500');
                formMessages.classList.add('text-red-500');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            formMessages.textContent = tContact.formError;
            formMessages.classList.remove('text-slate-400', 'text-green-500');
            formMessages.classList.add('text-red-500');
        } finally {
            submitButton.disabled = false;
            submitButton.classList.remove('opacity-50', 'cursor-not-allowed');
            setTimeout(() => {
                formMessages.textContent = '';
                formMessages.className = 'mt-4 text-center text-sm font-medium h-6';
            }, 5000);
        }
    });
}