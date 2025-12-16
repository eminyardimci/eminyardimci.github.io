// ================= LANGUAGES =================
const languages = {
    tr: {
        about: 'HAKKIMDA',
        meb: 'MEB YARIŞMASI',
        tubitak: 'TÜBİTAK YARIŞMASI',
        robotaksi: 'ROBOTAKSİ',
        robotkol: 'ROBOT KOL',
        plcatolyesi: 'PLC ATÖLYESİ',
        egitmenlik: 'EĞİTMENLİK',
        scada: 'SCADA',
        clawgraber: 'CLAW GRABBER',
        bitirme: 'BİTİRME PROJESİ',
        cvTitle: 'Özgeçmiş',
        profileTitle: 'Profil',
        profileDesc: 'Elektronik kart tasarımı, gömülü sistem yazılımı ve otomasyon teknolojilerinde deneyimli; takım çalışmasına yatkın ve yenilikçi çözümler üretmeye odaklı bir mekatronik mühendisiyim.',
        educationTitle: 'Eğitim',
        duzceUni: 'Düzce Üniversitesi',
        mechatronics: 'Mekatronik Mühendisliği',
        highSchool: 'İnönü MTAL – Elektrik Teknolojileri<br>2015 – 2019',
        languagesTitle: 'Diller',
        turkish: 'Türkçe',
        english: 'İngilizce (A2)',
        contactTitle: 'İletişim Bilgileri',
        linkedin: 'LinkedIn',
        youtube: 'YouTube',
        personalFeaturesTitle: 'Kişisel Özellikler',
        teamwork: 'Takım çalışması ve liderlik',
        newTech: 'Yeni teknolojileri öğrenme ve uygulama',
        timeMgmt: 'Zaman yönetimi ve planlama',
        workHistoryTitle: 'Çalışma Geçmişi',
        mavili: 'Mavili Elektronik (Stajyer)',
        petkom: 'Petkom Yazılım (Stajyer)',
        pektam: 'Pektam Pano (Stajyer)',
        sunny: 'Sunny Elektronik (Stajyer)',
        orbiba: 'Orbiba Robotics (Stajyer)',
        sonel: 'Sonel Yazılım – Ar-Ge',
        t3: 'T3 Vakfı – Eğitmen',
        skillsTitle: 'Beceriler',
        electronicDesign: 'Elektronik Kart Tasarımı',
        embedded: 'Gömülü Sistem Yazılımı',
        plc: 'PLC / HMI / SCADA',
        '3dModeling': '3D Katı Modelleme',
        certificatesTitle: 'Sertifikalar',
        stm32: 'STM32',
        freertos: 'FreeRTOS',
        altium: 'Altium PCB',
        cProg: 'C Programlama',
        welding: 'Gaz Altı Kaynak (Magwell)',
        close: 'Kapat',
        projects: 'Projeler',
        university: '<strong>Düzce Üniversitesi</strong><br>Mekatronik Mühendisliği<br>2021 – 2025 | GNO: 3.38'
    },
    en: {
        about: 'ABOUT',
        meb: 'MEB COMPETITION',
        tubitak: 'TÜBİTAK COMPETITION',
        robotaksi: 'ROBOTAXI',
        robotkol: 'ROBOT ARM',
        plcatolyesi: 'PLC WORKSHOP',
        egitmenlik: 'INSTRUCTORSHIP',
        scada: 'SCADA',
        clawgraber: 'CLAW GRABBER',
        bitirme: 'GRADUATION PROJECT',
        cvTitle: 'Resume',
        profileTitle: 'Profile',
        profileDesc: 'Experienced in electronic board design, embedded system software, and automation technologies; a mechatronics engineer inclined to teamwork and focused on producing innovative solutions.',
        educationTitle: 'Education',
        duzceUni: 'Düzce University',
        mechatronics: 'Mechatronics Engineering',
        highSchool: 'İnönü MTAL – Electrical Technologies<br>2015 – 2019',
        languagesTitle: 'Languages',
        turkish: 'Turkish',
        english: 'English (A2)',
        contactTitle: 'Contact Information',
        linkedin: 'LinkedIn',
        youtube: 'YouTube',
        personalFeaturesTitle: 'Personal Features',
        teamwork: 'Teamwork and leadership',
        newTech: 'Learning and applying new technologies',
        timeMgmt: 'Time management and planning',
        workHistoryTitle: 'Work History',
        mavili: 'Mavili Electronics (Intern)',
        petkom: 'Petkom Software (Intern)',
        pektam: 'Pektam Panel (Intern)',
        sunny: 'Sunny Electronics (Intern)',
        orbiba: 'Orbiba Robotics (Intern)',
        sonel: 'Sonel Software – R&D',
        t3: 'T3 Foundation – Instructor',
        skillsTitle: 'Skills',
        electronicDesign: 'Electronic Board Design',
        embedded: 'Embedded System Software',
        plc: 'PLC / HMI / SCADA',
        '3dModeling': '3D Solid Modeling',
        certificatesTitle: 'Certificates',
        stm32: 'STM32',
        freertos: 'FreeRTOS',
        altium: 'Altium PCB',
        cProg: 'C Programming',
        welding: 'Gas Metal Arc Welding (Magwell)',
        close: 'Close',
        projects: 'Projects',
        university: '<strong>Düzce University</strong><br>Mechatronics Engineering<br>2021 – 2025 | GPA: 3.38'
    }
};

// ================= PROJECT DATA =================
const sections = { /* BURAYA SENİN GÖNDERDİĞİN sections OBJESİ AYNI ŞEKİLDE GELİR */ };

// ================= DOM CACHE =================
const elements = {
    navLinks: document.querySelectorAll('.nav-link'),
    projectDetail: document.getElementById('project-detail'),
    projectYear: document.getElementById('project-year'),
    projectContent: document.getElementById('project-content'),
    hakkimda: document.getElementById('hakkimda'),
    languageToggle: document.getElementById('language-toggle'),
    sidebar: document.querySelector('.sidebar'),
    body: document.body
};

// ================= STATE =================
let currentLang = localStorage.getItem('lang') || 'tr';
let currentSectionKey = null;
let isTransitioning = false;

// ================= SIDEBAR NAV =================
document.querySelector('.sidebar').addEventListener('click', (e) => {
    const link = e.target.closest('.nav-link');
    if (!link) return;

    e.preventDefault();
    const sectionKey = link.dataset.section;

    if (currentSectionKey === sectionKey && sectionKey !== 'hakkimda') return;

    showSection(sectionKey);

    elements.navLinks.forEach(a => a.classList.remove('active'));
    link.classList.add('active');

    if (window.innerWidth <= 900) toggleSidebar();
});

// ================= LANGUAGE TOGGLE =================
elements.languageToggle.addEventListener('click', function () {
    const newLang = currentLang === 'tr' ? 'en' : 'tr';
    setLanguage(newLang);
});

// ================= ON LOAD =================
window.addEventListener('load', () => {
    setLanguage(currentLang, false);
    document.querySelector('.nav-link[data-section="hakkimda"]').classList.add('active');
});

// ================= FUNCTIONS =================
function setLanguage(lang, reRenderSection = true) {
    if (lang === currentLang) return;

    currentLang = lang;
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        if (languages[lang][key]) el.innerHTML = languages[lang][key];
    });

    elements.languageToggle.textContent = lang === 'tr' ? 'EN' : 'TR';

    if (reRenderSection && currentSectionKey) {
        showSection(currentSectionKey);
    }
}

function showSection(key) {
    if (isTransitioning) return;
    isTransitioning = true;

    currentSectionKey = key === 'hakkimda' ? null : key;

    if (key === 'hakkimda') {
        closeProjectDetail();
        scrollToElement(elements.hakkimda);
    } else {
        const section = sections[currentLang][key];
        elements.projectYear.textContent = section.year;
        elements.projectContent.innerHTML = `<h2>${section.title}</h2><p>${section.description}</p>`;

        elements.projectDetail.classList.remove('hidden');
        requestAnimationFrame(() => {
            elements.projectDetail.classList.add('visible');
            elements.body.classList.add('project-open');
            scrollToElement(elements.projectDetail);
        });
    }

    setTimeout(() => isTransitioning = false, 500);
}

// ================= CLOSE FUNCTIONS =================
function closeSection() {
    if (isTransitioning) return;
    isTransitioning = true;

    closeProjectDetail();

    elements.navLinks.forEach(a => a.classList.remove('active'));
    document.querySelector('.nav-link[data-section="hakkimda"]').classList.add('active');

    scrollToElement(elements.hakkimda);
    currentSectionKey = null;

    setTimeout(() => isTransitioning = false, 500);
}

function closeProjectDetail() {
    elements.projectDetail.classList.remove('visible');
    elements.body.classList.remove('project-open');

    setTimeout(() => {
        elements.projectDetail.classList.add('hidden');
        elements.projectYear.textContent = '';
        elements.projectContent.innerHTML = '';
    }, 400);
}

// ================= HELPERS =================
function scrollToElement(el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleSidebar() {
    elements.sidebar.classList.toggle('active');
}
