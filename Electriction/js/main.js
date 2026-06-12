// ==========================================================================
// CENTRAL TELEMETRY OPERATION CONTROLLER & INTERACTIVE MOCK QUIZ ENGINE
// ==========================================================================

// --- DATABASE: MULTI-PHASE ITI SLLABUS MOCK QUESTION NODES ---
const ITI_ACADEMY_QUIZ_DATABASE = [
    {
        question: "ITI Node Core: Circuit board isolation check me digital multimeter (DMM) selector knob switch ko kis parameter path par lock kiya jata hai?",
        options: ["Voltage Wave scale", "Continuity / Resistance Loop", "Current Induction shunt"],
        correctIndex: 1,
        explanation: "Correct! Component internal circuit cuts or broken traces validation check karne ke liye pointer ko hamesha low-resistance Continuity buzzer array segment par set karte hain."
    },
    {
        question: "Protection Layer: Induction motors starter looping systems me contactor coil terminal ke short circuit trip behavior ko kaun control karta hai?",
        options: ["MPCB / Overload Thermal Relay", "One Way Flush Switch", "Ceiling Fan Regulator"],
        correctIndex: 0,
        explanation: "Correct! MPCB aur Overload relay automatic bi-metallic elements dynamic heat distortion parameters absorb karke contactor operating voltage strip intercept kar dete hain."
    },
    {
        question: "Advanced Logic: Industrial SCADA systems monitoring layers me VFD control terminal drive speed frequency change karne ke liye kaun sa signal use hota hai?",
        options: ["Static Neutral Ground Link", "Analog 4-20mA / Modbus Protocol Packet", "Single phase AC line frequency"],
        correctIndex: 1,
        explanation: "Correct! Advanced level controllers scalar variable frequency adjustments execute karne ke liye continuous 4-20mA current looping signals ya dynamic serial data frame utilize karte hain."
    }
];

let activeQuizQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const navAnchors = document.querySelectorAll('.nav-anchor');
    const mobileTriggerCheckbox = document.getElementById('nav-toggle');
    const themeSwitcherBtn = document.getElementById('theme-toggle-btn');

    // 1. Dynamic Smooth Scroll Anchor Links Routing Paths Loops
    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const structuralHash = this.getAttribute('href');

            if (structuralHash.startsWith('#')) {
                e.preventDefault();
                navAnchors.forEach(node => node.classList.remove('active'));
                this.classList.add('active');

                if (mobileTriggerCheckbox && mobileTriggerCheckbox.checked) {
                    mobileTriggerCheckbox.checked = false;
                }

                const domTargetNode = document.querySelector(structuralHash);
                if (domTargetNode) {
                    const trackingHeaderSpacing = 75;
                    const topBoundingMatrix = domTargetNode.getBoundingClientRect().top;
                    const absoluteTargetPosition = topBoundingMatrix + window.pageYOffset - trackingHeaderSpacing;

                    window.scrollTo({ top: absoluteTargetPosition, behavior: 'smooth' });
                }
            }
        });
    });

    // 2. High-Fidelity Light/Dark Screen Theme Switcher Configuration
    if (themeSwitcherBtn) {
        themeSwitcherBtn.addEventListener('click', () => {
            const rootHtmlTag = document.documentElement;
            const operationalThemeAttr = rootHtmlTag.getAttribute('data-theme');

            if (operationalThemeAttr === 'dark') {
                rootHtmlTag.setAttribute('data-theme', 'light');
                localStorage.setItem('CONSOLE_THEME_CACHE', 'light');
            } else {
                rootHtmlTag.setAttribute('data-theme', 'dark');
                localStorage.setItem('CONSOLE_THEME_CACHE', 'dark');
            }
        });

        // Load existing storage layout profile if found
        const systemicSavedCache = localStorage.getItem('CONSOLE_THEME_CACHE');
        if (systemicSavedCache) {
            document.documentElement.setAttribute('data-theme', systemicSavedCache);
        }
    }

    // Launch First Quiz Question Node Live
    compileLiveQuizQuestionNode();
});

// 3. Interactive Quiz Engine Core Sub-Routines
function compileLiveQuizQuestionNode() {
    const activeQuestionPacket = ITI_ACADEMY_QUIZ_DATABASE[activeQuizQuestionIndex];

    document.getElementById('quiz-question-index-counter').innerText = `QUESTION NODE: 0${activeQuizQuestionIndex + 1} // 0${ITI_ACADEMY_QUIZ_DATABASE.length}`;
    document.getElementById('live-quiz-question-field').innerText = activeQuestionPacket.question;

    document.getElementById('opt-payload-a').innerText = activeQuestionPacket.options[0];
    document.getElementById('opt-payload-b').innerText = activeQuestionPacket.options[1];
    document.getElementById('opt-payload-c').innerText = activeQuestionPacket.options[2];

    // Clear color indicators states
    const allOptionCards = document.querySelectorAll('.option-selection-card');
    allOptionCards.forEach(card => {
        card.classList.remove('correct-glowing', 'wrong-glowing');
        card.disabled = false;
    });

    document.getElementById('quiz-diagnostic-result-panel').style.display = "none";
}

function submitLiveQuizOption(selectedHtmlElement, userSelectedIndex) {
    const activeQuestionPacket = ITI_ACADEMY_QUIZ_DATABASE[activeQuizQuestionIndex];
    const allOptionCards = document.querySelectorAll('.option-selection-card');

    allOptionCards.forEach(card => card.disabled = true); // Block double click leaks

    if (userSelectedIndex === activeQuestionPacket.correctIndex) {
        selectedHtmlElement.classList.add('correct-glowing');
    } else {
        selectedHtmlElement.classList.add('wrong-glowing');
        allOptionCards[activeQuestionPacket.correctIndex].classList.add('correct-glowing');
    }

    // Reveal Diagnostic Technical Explanations Panel
    document.getElementById('diagnostic-explanation-text-field').innerText = activeQuestionPacket.explanation;
    document.getElementById('quiz-diagnostic-result-panel').style.display = "block";
}

function triggerNextQuizQuestion() {
    activeQuizQuestionIndex++;
    if (activeQuizQuestionIndex >= ITI_ACADEMY_QUIZ_DATABASE.length) {
        activeQuizQuestionIndex = 0; // Loop tracking back to zero core
    }
    compileLiveQuizQuestionNode();
}

// 4. Anti-404 Broken Link File Interception Engine
function routeToManual(targetHtmlFilePath, elementTextTitle) {
    document.getElementById('mock-code-filepath').innerText = `"${targetHtmlFilePath}"`;
    document.getElementById('actual-folder-path-display').innerText = targetHtmlFilePath;

    const routerModalElement = document.getElementById('smart-seo-router-modal');
    routerModalElement.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeSeoModal() {
    document.getElementById('smart-seo-router-modal').style.display = "none";
    document.body.style.overflow = "auto";
}