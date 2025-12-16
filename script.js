// Languages
const languages = {
    tr: {
        about: 'HAKKIMDA',
        meb: 'MEB YARIŞMASI',
        tubitak: 'TÜBİTAK YARIŞMASI',
        robotaksi: 'ROBOTAKSİ', // Tek başlık
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
        robotaksi: 'ROBOTAXI', // Tek başlık
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

// Project Data (Robotaksi birleştirildi)
const sections = {
    tr: {
        hakkimda: {
            year: '',
            title: '',
            description: ''
        },
        meb: {
            year: '2018',
            title: 'MEB Uluslar Arası Hızlı Çizgi İzleyen Robot Yarışması',
            description: '2017-2018 yılları arasında lise eğitimimi aldığım İnönü MTAL\'de aktif görev aldım. Araç yazılımı, sensör seçimi ve çeşitli teknik konularda katkı sağladım. Bu süreçte takımımız yarışmayı 4. sırada tamamladı.'
        },
        tubitak: {
            year: '2021',
            title: 'TÜBİTAK-2242',
            description: 'TÜBİTAK 2242 Yarışması\'nda İmalat ve Otomotiv kategorisinde takım olarak beşincilik elde ettik. Projede Bluetooth ile Arduino tabanlı kontrol sistemi geliştirdim, mekanizma tasarımı ve sensör entegrasyonu gerçekleştirdim. Parçaların 3D baskısını yaparak tavana monte edilen raylı sistem üzerinde hareket edebilen, mutfaklarda kullanılmak üzere yardımcı robot kol prototipi geliştirdik.'
        },
        robotaksi: { // Tek başlık altında birleştirildi
            year: '2023-2025',
            title: 'Robotaksi Yarışması',
            description: '2023 yılında Robotaksi Binek Otonom Araç Yarışması\'nda ekibimizle 3. olarak En İyi Takım Ruhu ödülünü kazandık. Bu projede ben aracın elektronik kart tasarımı, elektrik sistemi ve gömülü sistem geliştirme lerinden sorumluydum; sensör ve aktüatörlerin entegrasyonu ile aracın güvenli ve verimli çalışmasını sağladım.<br><br>2024 yılında takım kaptanı olarak önceki aracımızı hem elektriksel hem mekanik olarak baştan tasarlayıp geliştirilmesinde bulundum, üzerine ikinci bir araç daha ürettik. Projede gömülü sistem yazılımı, elektronik kart tasarımı ve takım organizasyonu görevlerini üstlendim ve mekanik çalışmalara da katkı sağladım. Ayrıca Baykar, T.C. Gençlik ve Spor Bakanlığı, Uzay Spor, Ensar Kalıp, Mesan Elektrik ve Düzce Belediyesi ile görüşmeler yaparak sponsorluk anlaşmalarını sağladım.<br><br>2025 yılında hem mekanik çalışmalara destek sağladım hem de elektrik ekibinde görev aldım; bu süreçte yeni bir araç tasarlayıp geliştirdik. Araç tasarımında Cybertack\'tan esinlenerek yola çıktık ve projede gömülü sistem yazılımı, elektronik kart tasarımı görevlerini yürüttüm.'
        },
        robotkol: {
            year: '2023-2024',
            title: 'Robot Kol',
            description: 'Sonel Yazılım firmasında bir yıl boyunca, KOSGEB destekli robot kol projesi kapsamında, robot kol prototipi üretimi ve gömülü sistem kodlarının geliştirilmesi alanlarında çalıştım.'
        },
        plcatolyesi: {
            year: '2024',
            title: 'PLC Atölyesi',
            description: 'Düzce Üniversitesi Mekatronik Mühendisliği bölümüne kazandırılan PLC Atölyesi için PLC deney setleri, FESTO deney standları ve sıvı seviye kontrol mekanizması üzerinde hem PLC programlama hem de mekanik tasarım ve montaj çalışmalarında aktif olarak görev aldım.'
        },
        egitmenlik: {
            year: '2023-2025',
            title: 'Eğitmenlik',
            description: 'T3 Vakfı Deneyap Atölyelerinde ileri Robotik, Nesnelerin İnterneti ve Elektronik Programlama, Nano Teknoloji, Tasarım ve Üretim, Uçan ve Otonom Araçlar alanlarında eğitmenlik yaptım.'
        },
        scada: {
            year: '2025',
            title: 'SCADA Projesi',
            description: 'SCADA dersinin uygulama ödevi olarak, kargo otomasyonu konusunu seçtim. Bu otomasyonun amacı, gelen kargoları boyutlandırarak uygun bölmelere ayırmak ve aynı zamanda gelen kargo sayısını kaydederek depo kontrolünü sağlamaktır. Bu işlemler için Siemens S7-1200 CPU 1214C DC/DC/DC modeli ile analog çıkışları kontrol etmek amacıyla SM 1231 AI 4x13BIT modülünü tercih ettim.'
        },
        clawgraber: {
            year: '2025',
            title: 'Claw Grabber',
            description: 'Tersine Mühendislik metotlarını uygulayarak görseldekileri mekanizma olan \'Claw Grabber\' tasarladım.'
        },
        bitirme: {
            year: '2025',
            title: 'Bitirme Projesi',
            description: 'TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı kapsamında yürütücülüğünü üstlendiğim ve aynı zamanda bitirme projem olan "Üniversite Ortamlarında Hava Savunma Sistemleri Geliştirilebilir mi?" başlıklı araştırma projem, TÜBİTAK tarafından desteklenmeye hak kazanmıştır. Projede, Raspberry Pi tabanlı görüntü işleme sistemleri kullanarak gerçek zamanlı hedef tespiti ve anlık müdahale algoritmaları geliştirdim. Ayrıca proje kapsamında sensör entegrasyonu, veri işleme, otomatik kontrol sistemleri ve tek bir donanım platformu üzerinde tüm yazılım-mekanik entegrasyonu sağlanmıştır. Bu çalışma, hem savunma sistemleri simulasyonları hem de üniversite ortamında uygulanabilir prototip tasarımı açısından önemli bir deneyim kazandırmıştır.'
        }
    },
    en: {
        hakkimda: {
            year: '',
            title: '',
            description: ''
        },
        meb: {
            year: '2018',
            title: 'MEB International Fast Line Following Robot Competition',
            description: 'Between 2017-2018, I took an active role in İnönü MTAL where I received my high school education. I contributed to vehicle software, sensor selection, and various technical issues. In this process, our team completed the competition in 4th place.'
        },
        tubitak: {
            year: '2021',
            title: 'TÜBİTAK-2242',
            description: 'In the TÜBİTAK 2242 Competition, we achieved fifth place as a team in the Manufacturing and Automotive category. In the project, I developed a Bluetooth and Arduino-based control system, performed mechanism design and sensor integration. By 3D printing the parts, we developed a helper robot arm prototype that can move on a rail system mounted on the ceiling for use in kitchens.'
        },
        robotaksi: { // Tek başlık altında birleştirildi
            year: '2023-2025',
            title: 'Robotaxi Competition',
            description: 'In the 2023 Robotaxi Passenger Autonomous Vehicle Competition, our team won the Best Team Spirit award by coming 3rd. In this project, I was responsible for the vehicle\'s electronic board design, electrical system, and embedded
