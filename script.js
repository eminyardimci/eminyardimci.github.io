const content = {
    tr: {
        title: "Mekatronik Mühendisi",
        aboutTitle: "Hakkımda",
        aboutText: "Elektronik kart tasarımı, gömülü sistem yazılımı ve otomasyon teknolojilerinde deneyimli bir mekatronik mühendisiyim.",
        projectsTitle: "Projeler",
        contactTitle: "İletişim",

        robotaksi: "Otonom araç yarışmaları kapsamında elektronik kart tasarımı, gömülü sistem yazılımı ve sensör entegrasyonu.",
        tubitak: "Bluetooth tabanlı kontrol sistemi, mekanizma tasarımı ve prototip üretimi.",
        robotkol: "KOSGEB destekli robot kol projesi, gömülü sistem yazılımı ve prototip geliştirme."
    },
    en: {
        title: "Mechatronics Engineer",
        aboutTitle: "About Me",
        aboutText: "Mechatronics engineer experienced in PCB design, embedded systems and automation technologies.",
        projectsTitle: "Projects",
        contactTitle: "Contact",

        robotaksi: "Autonomous vehicle competitions involving PCB design, embedded software development and sensor integration.",
        tubitak: "Bluetooth-based control system, mechanical design and prototype development.",
        robotkol: "KOSGEB-supported robotic arm project focusing on embedded systems and prototyping."
    }
};

function setLang(lang) {

    // Üst başlıklar
    document.getElementById("title").innerText = content[lang].title;
    document.getElementById("about-title").innerText = content[lang].aboutTitle;
    document.getElementById("about-text").innerText = content[lang].aboutText;
    document.getElementById("projects-title").innerText = content[lang].projectsTitle;
    document.getElementById("contact-title").innerText = content[lang].contactTitle;

    // PROJELER
    document.getElementById("robotaksi-text").innerText = content[lang].robotaksi;
    document.getElementById("tubitak-text").innerText = content[lang].tubitak;
    document.getElementById("robotkol-text").innerText = content[lang].robotkol;
}
