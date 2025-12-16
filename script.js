const content = {
    tr: {
        title: "Mekatronik Mühendisi",
        aboutTitle: "Hakkımda",
        aboutText: "Elektronik kart tasarımı, gömülü sistem yazılımı ve otomasyon teknolojilerinde deneyimli bir mekatronik mühendisiyim.",
        projectsTitle: "Projeler",
        contactTitle: "İletişim"
    },
    en: {
        title: "Mechatronics Engineer",
        aboutTitle: "About Me",
        aboutText: "Mechatronics engineer experienced in PCB design, embedded systems and automation technologies.",
        projectsTitle: "Projects",
        contactTitle: "Contact"
    }
};

function setLang(lang) {
    document.getElementById("title").innerText = content[lang].title;
    document.getElementById("about-title").innerText = content[lang].aboutTitle;
    document.getElementById("about-text").innerText = content[lang].aboutText;
    document.getElementById("projects-title").innerText = content[lang].projectsTitle;
    document.getElementById("contact-title").innerText = content[lang].contactTitle;
}
