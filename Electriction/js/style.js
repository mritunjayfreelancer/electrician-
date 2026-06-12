// ==========================================================================
// CENTRAL TELEMETRY CORE CONTROL PACKET SWITCHING ENGINE
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const navAnchors = document.querySelectorAll('.nav-anchor');
    const mobileCheckboxTrigger = document.getElementById('nav-toggle');

    // 1. Smooth Scroll Targeting Coordinates Engine
    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const currentHash = this.getAttribute('href');

            if (currentHash.startsWith('#')) {
                e.preventDefault();

                navAnchors.forEach(el => el.classList.remove('active'));
                this.classList.add('active');

                // Collapse Mobile Floating Menu Backplate Drawer
                if (mobileCheckboxTrigger && mobileCheckboxTrigger.checked) {
                    mobileCheckboxTrigger.checked = false;
                }

                const targetedDomElement = document.querySelector(currentHash);
                if (targetedDomElement) {
                    const navHeaderHeight = 75;
                    const elementTopCoordinate = targetedDomElement.getBoundingClientRect().top;
                    const absoluteCalculatedOffset = elementTopCoordinate + window.pageYOffset - navHeaderHeight;

                    window.scrollTo({
                        top: absoluteCalculatedOffset,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// 2. Automated Smart SEO Folder Path Intercept Routine
function routeToManual(targetSubfolderFilePath, componentTechnicalTitle) {
    // Inject relative path strings inside mock window blocks codes
    document.getElementById('mock-code-filepath').innerText = `"${targetSubfolderFilePath}"`;
    document.getElementById('actual-folder-path-display').innerText = targetSubfolderFilePath;

    // Toggle modal layout via absolute flex frames
    const modalWindowElement = document.getElementById('smart-seo-router-modal');
    modalWindowElement.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Lock main scrolling path
}

function closeSeoModal() {
    const modalWindowElement = document.getElementById('smart-seo-router-modal');
    modalWindowElement.style.display = 'none';
    document.body.style.overflow = 'auto'; // Release main window track viewports
}