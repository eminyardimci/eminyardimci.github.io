// Project Data from PDF
const projects = {
    meb: {
        title: "MEB Uluslar Arası Hızlı Çizgi İzleyen Robot Yarışması",
        year: "2017-2018",
        description: "2017-2018 yılları arasında lise eğitimimi aldığım İnönü MTAL'de aktif görev aldım. Araç yazılımı, sensör seçimi ve çeşitli teknik konularda katkı sağladım. Bu süreçte takımımız yarışmayı 4. sırada tamamladı.",
        images: [] // Add image paths if available, e.g., ['img/meb1.jpg']
    },
    tubitak: {
        title: "TÜBİTAK-2242",
        year: "2021",
        description: "TÜBİTAK 2242 Yarışması'nda İmalat ve Otomotiv kategorisinde takım olarak beşincilik elde ettik. Projede Bluetooth ile Arduino tabanlı kontrol sistemi geliştirdim, mekanizma tasarımı ve sensör entegrasyonu gerçekleştirdim. Parçaların 3D baskısını yaparak tavana monte edilen raylı sistem üzerinde hareket edebilen, mutfaklarda kullanılmak üzere yardımcı robot kol prototipi geliştirdik.",
        images: []
    },
    robotaksi: {
        title: "Robotaksi Yarışması",
        year: "2023-2025",
        description: "2023'te ekibimizle 3. olarak En İyi Takım Ruhu ödülünü kazandık. Elektronik kart tasarımı, elektrik sistemi ve gömülü sistem geliştirmeden sorumluydum. 2024'te takım kaptanı olarak önceki aracı baştan tasarladık ve ikinci bir araç ürettik; sponsorluklar sağladım. 2025'te yeni bir araç tasarladık, Cybertack'tan esinlenerek gömülü sistem yazılımı ve elektronik kart tasarımı yürüttüm.",
        images: []
    },
    robotkol: {
        title: "Robot Kol",
        year: "2023-2024",
        description: "Sonel Yazılım firmasında bir yıl boyunca, KOSGEB destekli robot kol projesi kapsamında, robot kol prototipi üretimi ve gömülü sistem kodlarının geliştirilmesi alanlarında çalıştım.",
        images: []
    },
    plcatolyesi: {
        title: "PLC Atölyesi",
        year: "2024",
        description: "Düzce Üniversitesi Mekatronik Mühendisliği bölümüne kazandırılan PLC Atölyesi için PLC deney setleri, FESTO deney standları ve sıvı seviye kontrol mekanizması üzerinde hem PLC programlama hem de mekanik tasarım ve montaj çalışmalarında aktif olarak görev aldım.",
        images: []
    },
    egitmenlik: {
        title: "Eğitmenlik",
        year: "2023-2025",
        description: "T3 Vakfı Deneyap Atölyelerinde ileri Robotik, Nesnelerin İnterneti ve Elektronik Programlama, Nano Teknoloji, Tasarım ve Üretim, Uçan ve Otonom Araçlar alanlarında eğitmenlik yaptım.",
        images: []
    },
    scada: {
        title: "SCADA Projesi",
        year: "2025",
        description: "SCADA dersinin uygulama ödevi olarak, kargo otomasyonu konusunu seçtim. Bu otomasyonun amacı, gelen kargoları boyutlandırarak uygun bölmelere ayırmak ve aynı zamanda gelen kargo sayısını kaydederek depo kontrolünü sağlamaktır. Bu işlemler için Siemens S7-1200 CPU 1214C DC/DC/DC modeli ile analog çıkışları kontrol etmek amacıyla SM 1231 AI 4x13BIT modülünü tercih ettim.",
        images: []
    },
    clawgraber: {
        title: "Claw Graber",
        year: "2025",
        description: "Tersine Mühendislik metotlarını olan uygulayarak görseldekileri mekanizma olan 'Claw Graber' tasarladım.",
        images: []
    },
    bitirme: {
        title: "Bitirme Projesi",
        year: "2025",
        description: "TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı kapsamında yürütücülüğünü üstlendiğim ve aynı zamanda bitirme projem olan 'Üniversite Ortamlarında Hava Savunma Sistemleri Geliştirilebilir mi?' başlıklı araştırma projem, TÜBİTAK tarafından desteklenmeye hak kazanmıştır. Projede, Raspberry Pi tabanlı görüntü işleme sistemleri kullanarak gerçek zamanlı hedef tespiti ve anlık müdahale algoritmaları geliştirdim. Ayrıca proje kapsamında sensör entegrasyonu, veri işleme, otomatik kontrol sistemleri ve tek bir donanım platformu üzerinde tüm yazılım-mekanik entegrasyonu sağlanmıştır. Bu çalışma, hem savunma sistemleri simulasyonları hem de üniversite ortamında uygulanabilir prototip tasarımı açısından önemli bir deneyim kazandırmıştır.",
        images: []
    }
};

// Event Listeners
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const projectKey = link.dataset.project;
        showProject(projectKey);
        if (window.innerWidth <= 900) {
            toggleSidebar(); // Close sidebar on mobile
        }
    });
});

function showProject(key) {
    const project = projects[key];
    const content = document.getElementById('project-content');
    content.innerHTML = `
        <h2>${project.title}</h2>
        <p><strong>Yıl:</strong> ${project.year}</p>
        <p>${project.description}</p>
        ${project.images.map(img => `<img src="${img}" alt="${project.title}" class="project-img">`).join('')}
    `;
    document.getElementById('project-detail').classList.remove('hidden');
    document.getElementById('project-detail').scrollIntoView({ behavior: 'smooth' });
}

function closeProject() {
    document.getElementById('project-detail').classList.add('hidden');
}

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}
/*function openProjects() {
  alert("Projeler ekranı bir sonraki adımda açılacak 👍");
}
*/
/*function openProjects() {
  document.getElementById("projects-overlay").style.display = "flex";
}

function closeProjects() {
  document.getElementById("projects-overlay").style.display = "none";
}
*/
