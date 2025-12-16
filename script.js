// Languages ve sections aynı kaldı (değiştirmedim)

// Variables
let currentLang = localStorage.getItem('lang') || 'tr';
let currentSectionKey = null;

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionKey = link.dataset.section;
        showSection(sectionKey);
        document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        if (window.innerWidth <= 900) {
            toggleSidebar();
        }
    });
});

window.addEventListener('load', () => {
    setLanguage(currentLang);
    document.querySelector('.nav-link[data-section="hakkimda"]').classList.add('active');
    updateToggleButton();
});

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        if (languages[lang][key]) {
            el.innerHTML = languages[lang][key];
        }
    });
    if (currentSectionKey) {
        showSection(currentSectionKey);
    }
    updateToggleButton();
}

function toggleLanguage() {
    const newLang = currentLang === 'tr' ? 'en' : 'tr';
    setLanguage(newLang);
}

function updateToggleButton() {
    const button = document.getElementById('language-toggle');
    button.textContent = currentLang === 'tr' ? 'EN' : 'TR';
}

function showSection(key) {
    currentSectionKey = key === 'hakkimda' ? null : key;
    const projectDetail = document.getElementById('project-detail');

    if (key === 'hakkimda') {
        projectDetail.classList.remove('visible');
        setTimeout(() => projectDetail.classList.add('hidden'), 400);
        document.body.classList.remove('project-open');
        document.getElementById('hakkimda').scrollIntoView({ behavior: 'smooth' });
    } else {
        const section = sections[currentLang][key];
        document.getElementById('project-year').textContent = section.year;
        document.getElementById('project-content').innerHTML = `
            <h2>${section.title}</h2>
            <p>${section.description}</p>
        `;
        projectDetail.classList.remove('hidden');
        setTimeout(() => projectDetail.classList.add('visible'), 10);
        document.body.classList.add('project-open');
        projectDetail.scrollIntoView({ behavior: 'smooth' });
    }
}

function closeSection() {
    const projectDetail = document.getElementById('project-detail');
    projectDetail.classList.remove('visible');
    setTimeout(() => projectDetail.classList.add('hidden'), 400);
    document.body.classList.remove('project-open');
    
    document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
    document.querySelector('.nav-link[data-section="hakkimda"]').classList.add('active');
    document.getElementById('hakkimda').scrollIntoView({ behavior: 'smooth' });
    currentSectionKey = null;
}

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}
