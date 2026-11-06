// All portfolio content lives here, bilingual. Edit this file to update the site.
// Strings wrapped in TODO(...) render as visible placeholders so missing facts are easy to spot.

const t = (tr, en) => ({ tr, en: en ?? tr });
export const TODO = (tr, en) => ({ todo: true, tr, en: en ?? tr });

const GH = 'https://github.com/NightKnight-nx2/';
const A = './assets/projects/';

export const PROFILE = {
  name: 'Musa Buğra Demir',
  email: 'musabugrademir@gmail.com',
  github: 'https://github.com/NightKnight-nx2',
  linkedin: 'https://www.linkedin.com/in/musabugrademir/',
  // CV per language; the site serves the one matching the current UI language.
  cv: {
    tr: { href: './assets/cvmusabugrademir-tr.pdf', file: 'Musa_Bugra_Demir_Ozgecmis_TR.pdf' },
    en: { href: './assets/cvmusabugrademir.pdf', file: 'Musa_Bugra_Demir_CV_EN.pdf' },
  },
  portrait: './assets/pp.webp',
  updated: t('Kasım 2026', 'November 2026'),
};

export const PROOF = [
  { value: 'Top 20', accent: 'amber', label: t('Dünya · IEEE R8 Hardware Contest', 'World · IEEE R8 Hardware Contest'), sub: t('AquaVena · EGEduino', 'AquaVena · EGEduino') },
  { value: '#3 TR', accent: 'orange', label: t('IEEEXtreme 20.0 · #32 dünya', 'IEEEXtreme 20.0 · #32 worldwide'), sub: t('~9000 takım arasından', 'out of ~9,000 teams') },
  { value: '10K', accent: 'ink', label: t('satış · Dual Protocol (Steam)', 'sales · Dual Protocol (Steam)'), sub: t('80K wishlist · oyun tasarımcısı', '80K wishlists · game designer') },
  { value: t('5 takım', '5 teams'), accent: 'ink', label: t('Teknofest kaptanlığı', 'Teknofest team captain'), sub: t('İDA · İKA · hava savunma · İHA · uydu', 'USV · UGV · air defence · UAV · satellite') },
  { value: t('2 ödül', '2 awards'), accent: 'ink', label: t('Monad Blitz Hackathon', 'Monad Blitz Hackathon'), sub: t('En İyi · En Sürdürülebilir Fikir', 'Best · Most Sustainable Idea') },
];

// Large featured projects (image + text side by side). `slug` links to a case study page.
export const FLAGSHIPS = [
  {
    slug: 'mavi-inci',
    kicker: t('ROBOTİK · OTONOMİ', 'ROBOTICS · AUTONOMY'),
    context: t('TEKNOFEST İDA · YAZILIM BİRİMİ KAPTANI', 'TEKNOFEST USV · SOFTWARE LEAD'),
    title: t('Mavi İnci İDA · Otonomi Yazılım Yığını', 'Mavi İnci USV · Autonomy Software Stack'),
    body: t(
      'İnsansız deniz aracı için uçtan uca ROS 2 yığını: TensorRT ile hızlandırılmış YOLOv8 duba tespiti, Nav2 seyrüsefer, P1/P2/P3 görev durum makinesi, FDIR güvenlik katmanı ve MAVLink/MAVROS köprüsü. Aynı kod Gazebo Harmonic + ArduPilot SITL simülasyonunda ve Jetson + Pixhawk üzerindeki gerçek araçta çalışır.',
      'An end-to-end ROS 2 stack for an unmanned surface vehicle: TensorRT-accelerated YOLOv8 buoy detection, Nav2 navigation, a P1/P2/P3 mission state machine, an FDIR safety layer and a MAVLink/MAVROS bridge. The same code runs in Gazebo Harmonic + ArduPilot SITL and on the real Jetson + Pixhawk vehicle.'
    ),
    stats: [
      { v: '15', l: t('ROS 2 PAKETİ', 'ROS 2 PACKAGES') },
      { v: t('Sim ↔ Gerçek', 'Sim ↔ Real'), l: t('TEK KOD TABANI', 'ONE CODEBASE') },
      { v: 'Jetson', l: t('+ PIXHAWK ÜZERİNDE', 'ON BOARD + PIXHAWK') },
    ],
    tags: ['ROS 2', 'Nav2', 'YOLOv8 · TensorRT C++', 'MAVROS', 'Gazebo Harmonic', 'ArduPilot SITL'],
    image: { src: A + 'mavi-inci.webp', alt: t('Mavi İnci insansız deniz aracı havuz kenarında', 'The Mavi İnci USV at the poolside'), caption: t('HAVUZ TESTLERİ · 16–21 TEMMUZ 2026', 'POOL TESTS · 16–21 JULY 2026'), fit: 'cover' },
    flow: [
      ['Kamera|Camera', '*ida_yolo_trt', 'ida_mission (FSM)'],
      ['Nav2', '*ida_guidance_governor', 'MAVROS → Pixhawk'],
      ['!ida_safety (FDIR)', 'ida_estop_gpio'],
    ],
    code: GH + '?tab=repositories&q=ida_',
  },
  {
    slug: 'aquavena',
    kicker: t('★ IEEE R8 · DÜNYA TOP 20', '★ IEEE R8 · WORLD TOP 20'),
    kickerAccent: 'amber',
    context: t('EGEDUINO · YAZILIM BİRİMİ SORUMLUSU · 2026', 'EGEDUINO · SOFTWARE LEAD · 2026'),
    title: t('AquaVena · Akıllı Serum İnfüzyon Modülü', 'AquaVena · Smart IV Infusion Module'),
    body: t(
      'Standart serum setine takılan, akışı step motorlu bir sıkıştırma valfiyle düzenleyen hasta-kritik bir cihaz. Optik damla sayımı yük hücresiyle doğrulanıyor, ilaç RFID ile tanımlanıyor. ESP-IDF + FreeRTOS üzerinde güvenlik ve PID döngüsü ayrı çekirdeğe sabitlendi; arayüz LVGL ile 17 ekran.',
      'A patient-critical device that clips onto a standard IV set and regulates flow with a stepper-driven pinch valve. Optical drop counting is cross-checked by a load cell and the drug is identified via RFID. On ESP-IDF + FreeRTOS, the safety and PID loops are pinned to their own core; the UI is 17 LVGL screens.'
    ),
    stats: [
      { v: '11 523', l: t('SATIR C · 91 DOSYA', 'LINES OF C · 91 FILES') },
      { v: '0 / 0', l: t('HATA / UYARI', 'ERRORS / WARNINGS') },
      { v: '1 ms', l: t('GÜVENLİK DÖNGÜSÜ', 'SAFETY POLL') },
    ],
    tags: ['ESP32-S3', 'ESP-IDF', 'FreeRTOS', 'LVGL 9.5', 'HX711', 'RC522 RFID', 'MQTT'],
    note: t(
      'Raporda açıkça yazılan sınırlar: hava sensörü motor gürültüsünde yanlış alarm veriyor (kök neden açık), PID kodlandı ama henüz ayarlanmadı.',
      'Limits stated openly in the report: the air sensor false-triggers under motor noise (root cause open), and the PID loop is coded but not yet tuned.'
    ),
    image: { src: A + 'aquavena-block.webp', alt: t('AquaVena sistem blok diyagramı', 'AquaVena system block diagram'), caption: t('AS-BUILT BLOK DİYAGRAMI · KABLOLAMA REV. 3', 'AS-BUILT BLOCK DIAGRAM · WIRING REV. 3'), fit: 'contain', light: true },
    reverse: true,
  },
];

// Compact featured cards (grid).
export const FEATURED = [
  {
    slug: 'vehicle-sim-7dof',
    kicker: t('KONTROL & DİNAMİK · PYTHON + UNITY', 'CONTROL & DYNAMICS · PYTHON + UNITY'),
    title: t('7-DOF Araç Dinamiği + Unity Replay', '7-DOF Vehicle Dynamics + Unity Replay'),
    body: t('Sıfırdan yazılmış Pacejka “Magic Formula” lastik modeli, üç sürücü profili ve pure-pursuit takibi. 50 Hz CSV çıktısı ayrı bir Unity projesinde 3B oynatılıyor.', 'A from-scratch Pacejka “Magic Formula” tyre model, three driver profiles and pure-pursuit tracking. The 50 Hz CSV output is replayed in 3D by a separate Unity project.'),
    metric: t('<b>4200 N</b> yanal pik kuvvet · referans kütüphane: 4196 N', '<b>4200 N</b> peak lateral force · reference library: 4196 N'),
    image: { src: A + 'vehicle-sim-7dof.webp', alt: t('Üç sürücü profilinin yörünge karşılaştırması', 'Trajectory comparison of three driver profiles'), light: true },
    code: GH + 'vehicle-sim-7dof',
  },
  {
    slug: 'perception-control-loop',
    kicker: t('ALGI + KONTROL · UNITY + YOLOX', 'PERCEPTION + CONTROL · UNITY + YOLOX'),
    title: 'Perception-Control Loop',
    body: t('Unity’deki araca sanal ön kamera: koniler sahneden otomatik etiketleniyor, bu sentetik veriyle YOLOX-nano eğitilip canlı çalıştırılıyor. Algılanan koniler zemine geri-projekte edilip raceline’a çevriliyor; Stanley kontrolcüsü gerçek raceline yerine bunu sürüyor.', 'A virtual front camera on a Unity car: cones are auto-labelled from the scene, YOLOX-nano is trained on that synthetic data and run live. Detected cones are back-projected to the ground and turned into a raceline that the Stanley controller drives instead of the ground truth.'),
    metric: t('YOLOX’un tura eklediği kayıp: <b>~0,17 s</b> · algı gecikmesi <b>59 ms</b>', 'Lap time cost of YOLOX: <b>~0.17 s</b> · perception latency <b>59 ms</b>'),
    image: { src: A + 'perception-loop-camera.webp', alt: t('Unity ön kamerasında YOLOX koni tespitleri', 'YOLOX cone detections on the Unity front camera'), top: true },
    code: GH + 'perception-control-loop',
  },
  {
    kicker: t('UZAKTAN ALGILAMA · IoT · PROJE YÜRÜTÜCÜSÜ', 'REMOTE SENSING · IoT · PROJECT LEAD'),
    title: t('TerraSync', 'TerraSync'),
    body: t('Sentinel/Landsat görüntülerini düşük maliyetli ESP32 yer sensörleriyle birleştirip kentsel ısı adası, yeşil alan kaybı ve su stresini mahalle ölçeğinde haritalayan açık kaynak karar destek sistemi.', 'An open-source decision-support system that fuses Sentinel/Landsat imagery with low-cost ESP32 ground sensors to map urban heat islands, green-space loss and water stress at neighbourhood scale.'),
    metric: t('Pilot bölge: <b>Bornova / İzmir</b>', 'Pilot area: <b>Bornova / İzmir</b>'),
    logo: A + 'terrasync-logo.webp',
    flow: [['Sentinel-2 · Landsat', 'Earth Engine'], ['ESP32 sensörler|ESP32 sensors', '*füzyon|fusion'], ['!mahalle risk haritası|neighbourhood risk map']],
  },
  {
    kicker: t('WEB · TASARIM + FULLSTACK', 'WEB · DESIGN + FULLSTACK'),
    title: t('ieeeegesb.org', 'ieeeegesb.org'),
    body: t('IEEE Ege’nin sitesi ve yönetim paneli: etkinlik kaydı, QR bilet tarama, sertifika üretme/doğrulama, puan tablosu, KVKK onay yönetimi ve denetim kaydı.', 'IEEE Ege’s website and admin panel: event registration, QR ticket scanning, certificate issuing/verification, a leaderboard, consent management and audit logging.'),
    metric: t('<b>26</b> veri modeli · <b>80+</b> otomatik test', '<b>26</b> data models · <b>80+</b> automated tests'),
    image: { src: A + 'ieeeegesb.webp', alt: t('ieeeegesb.org ana sayfası', 'ieeeegesb.org home page'), top: true },
    live: 'https://ieeeegesb.org',
  },
];

export const GAMES = [
  {
    slug: 'dual-protocol',
    status: 'live', statusLabel: t('YAYINDA', 'RELEASED'), meta: t('2 EKİM 2026', '2 OCT 2026'),
    title: 'Dual Protocol: The Case of Eva & Miles',
    body: t('İki oyunculu asimetrik noir bulmaca: oyuncular birbirinin ekranını göremiyor, yalnızca konuşarak Castellari cinayetini çözüyor. Yayıncı: Rock Paper Publisher.', 'A two-player asymmetric noir puzzle: players can’t see each other’s screens and solve the Castellari murder only by talking. Published by Rock Paper Publisher.'),
    highlight: t('80K wishlist · 10K satış', '80K wishlists · 10K sales'),
    roles: [t('Genel oyun tasarımı', 'Lead game design'), t('Bölüm ve bulmaca tasarımı', 'Level & puzzle design'), t('Hikâye ve kurgu', 'Story & narrative'), t('Lokalizasyon', 'Localization'), t('Steam entegrasyonu', 'Steam integration')],
    image: A + 'dual-protocol.webp',
    steam: 'https://store.steampowered.com/app/4660280/DUAL_PROTOCOL_The_Case_of_Eva_Miles/',
  },
  {
    status: 'hold', statusLabel: t('BEKLEMEDE', 'ON HOLD'), meta: t('STEAM · YAKINDA', 'STEAM · COMING SOON'),
    title: 'Spacey Space Burger',
    body: t('Galaksi ölçeğinde açık dünyada intikam temalı bir yönetim simülasyonu. Kapsam ekip boyutunu aştığı için bekletmeye alındı.', 'A revenge-themed management sim in a galaxy-spanning open world. Put on hold when the scope outgrew the team.'),
    roles: [t('Oyun ve mekanik tasarımı', 'Game & mechanics design'), t('Bölüm tasarımı', 'Level design'), t('3B fizik sistemleri', '3D physics systems')],
    image: A + 'spacey-space-burger.webp',
    steam: 'https://store.steampowered.com/app/4244790/Spacey_Space_Burger/',
  },
  {
    status: 'cancelled', statusLabel: t('İPTAL', 'CANCELLED'), meta: t('YAYINCI KARARI', 'PUBLISHER DECISION'),
    title: 'Spacey Space Rush',
    body: t('2–8 oyuncunun aynı odada, farklı haritalarda engellerden kaçarak bitişe yarıştığı ve buldukları güçlerle birbirini sabote ettiği online party oyunu.', 'An online party game where 2–8 players race to the finish across different maps, dodging obstacles and sabotaging each other with power-ups.'),
    roles: [t('Online sistemler', 'Online systems'), t('Co-op oynanış döngüsü', 'Co-op gameplay loop'), t('Rekabetçi online mod', 'Competitive online mode'), t('Bölüm, oyun ve mekanik tasarımı', 'Level, game & mechanics design')],
    cover: t('2–8 OYUNCU · ONLINE PARTY', '2–8 PLAYERS · ONLINE PARTY'),
  },
  {
    status: 'dev', statusLabel: t('GELİŞTİRİLİYOR', 'IN DEVELOPMENT'), meta: t('HENÜZ GİZLİ', 'UNDER WRAPS'),
    title: t('Yeni proje', 'New project'),
    body: t('Aegean Crafters’ın yeni oyunu üzerinde çalışıyoruz; duyurulduğunda burada olacak.', 'We’re working on Aegean Crafters’ next game; it will appear here once announced.'),
    roles: [],
    secret: true,
  },
];

export const CATEGORIES = [
  { id: 'all', label: t('Tümü', 'All') },
  { id: 'ctl', label: t('Kontrol & Dinamik', 'Control & Dynamics') },
  { id: 'ai', label: t('Yapay Zeka & Görüntü', 'AI & Vision') },
  { id: 'rob', label: t('Robotik & Gömülü', 'Robotics & Embedded') },
  { id: 'sim', label: t('Oyun & Simülasyon', 'Games & Simulation') },
  { id: 'alg', label: t('Algoritma & Araçlar', 'Algorithms & Tools') },
];

export const ARCHIVE = [
  { cat: 'ctl', lang: 'Python', title: t('Tekerlekli Biped Robot', 'Wheeled-Biped Robot'), desc: t('Lagrangian’dan türetilmiş dinamik, KKT ile tekerlek–zemin teması; engebeli parkurda LQR ve kısıtlı MPC karşılaştırması.', 'Dynamics derived from the Lagrangian, wheel–ground contact via KKT; LQR vs constrained MPC over rough terrain.'), result: 'LQR vs MPC', href: GH + 'wheeled-biped-sim' },
  { cat: 'ctl', lang: 'Python', title: t('F1 Aktif Süspansiyon', 'F1 Active Suspension'), desc: t('Ride-height’a bağlı floor-stall aerodinamiği; pasif süspansiyon ile LQR/PID kontrollü aktif süspansiyonun karşılaştırması.', 'Ride-height-dependent floor-stall aero; passive suspension vs LQR/PID-controlled active suspension.'), result: t('2-DOF heave + pitch'), href: GH + 'f1-active-suspension-sim' },
  { cat: 'ctl', lang: 'Python', title: t('Ball-on-Plate Dengeleyici', 'Ball-on-Plate Balancer'), desc: t('Kameradan ölçülen topu 4 step motorlu plakada LQR ile dengeleme; motor pull-out ve gecikme modelli.', 'Balancing a camera-tracked ball on a 4-stepper plate with LQR, including stepper pull-out and latency models.'), result: t('Lissajous yörünge takibi', 'Lissajous tracking'), href: GH + 'ball-on-plate-balancer' },
  { cat: 'ctl', lang: 'Python', title: t('F1 Porpoising Laboratuvarı', 'F1 Porpoising Lab'), desc: t('Ground-effect porpoising olayını parametrelerle keşfettiren etkileşimli Streamlit uygulaması.', 'An interactive Streamlit app for exploring ground-effect porpoising.'), result: t('Etkileşimli demo', 'Interactive demo'), href: GH + 'f1-porpoising-teaching-lab' },
  { cat: 'ctl', lang: 'HTML', title: t('Yük Transferi Simülatörü', 'Load-Transfer Simulator'), desc: t('Roll-stiffness dağılımının understeer / oversteer davranışına etkisi, tarayıcıda.', 'How roll-stiffness distribution drives understeer vs oversteer, in the browser.'), result: t('Tarayıcıda çalışır', 'Runs in browser'), href: GH + 'load-transfer-sim' },
  { cat: 'ctl', lang: 'Python', title: t('Yay Tahrikli Çift Sarkaç', 'Spring-Driven Double Pendulum'), desc: t('Otoparametrik rezonans ve kaotik davranışın sayısal analizi.', 'Numerical study of autoparametric resonance and chaos.'), result: t('Kaos · rezonans', 'Chaos · resonance'), href: GH + 'spring-driven-double-pendulum' },
  { cat: 'ai', lang: 'Python', title: t('FSOCO Koni Tespiti', 'FSOCO Cone Detection'), desc: t('Formula Student Driverless için gerçek FSOCO fotoğraflarıyla YOLO11n fine-tune, ByteTrack takip ve orta çizgi tahmini; takım bazlı, sızıntısız test split’i.', 'YOLO11n fine-tuned on real FSOCO photos for Formula Student Driverless, plus ByteTrack tracking and centreline estimation; leak-free, team-based test split.'), result: t('mAP50 0,787 · 4,8 ms/görüntü', 'mAP50 0.787 · 4.8 ms/image'), href: GH + 'fsoco-cone-detection' },
  { cat: 'ai', lang: 'Python · Unity', title: 'Perception-Control Loop', desc: t('Unity’de otomatik etiketlenen sentetik veriyle YOLOX-nano; algılanan konilerden raceline ve kapalı döngü Stanley kontrolü.', 'YOLOX-nano trained on auto-labelled Unity data; a raceline built from detected cones drives a closed-loop Stanley controller.'), result: t('mAP 0,734 · AP50 0,917', 'mAP 0.734 · AP50 0.917'), href: '#/p/perception-control-loop' },
  { cat: 'ai', lang: 'Python', title: 'LunarLander REINFORCE', desc: t('212 parametrelik politika ağı, entropi annealing ile “havada asılı kalma” yerel optimumundan kurtuluyor; 3 tohumda kontrol grubuyla karşılaştırma.', 'A 212-parameter policy escapes a “hovering” local optimum through entropy annealing; compared with a control group over 3 seeds.'), result: t('İniş oranı %3,0 → %91,1', 'Landing rate 3.0% → 91.1%'), href: GH + 'lunarlander-reinforce' },
  { cat: 'ai', lang: 'Python · ESP32', title: 'TerraSync', desc: t('Sentinel-2/Landsat görüntüleri + IoT yer sensörleriyle kentsel ısı adası, yeşil alan ve su stresi haritalama.', 'Mapping urban heat islands, green space and water stress from Sentinel-2/Landsat imagery plus IoT ground sensors.'), result: t('Bornova pilotu', 'Bornova pilot'), href: null },
  { cat: 'ai', lang: 'Python', title: t('Göğüs Röntgeni · Pnömoni', 'Chest X-Ray · Pneumonia'), desc: t('ResNet50 transfer öğrenme, kademeli unfreeze, recall odaklı eşik ve Grad-CAM açıklanabilirlik; masaüstü arayüz.', 'ResNet50 transfer learning, gradual unfreezing, a recall-focused threshold and Grad-CAM explanations; desktop GUI.'), result: 'Grad-CAM', href: GH + 'chest-xray-pneumonia-detection' },
  { cat: 'ai', lang: 'Python', title: t('Yorgunluk & Duruş İzleme', 'Fatigue & Posture Monitor'), desc: t('MediaPipe Face Mesh ile EAR tabanlı uyuklama ve boyun açısı tespiti; çok iş parçacıklı kamera akışı.', 'EAR-based drowsiness and neck-angle detection with MediaPipe; multi-threaded camera capture.'), result: t('CPU’da gerçek zamanlı', 'Real-time on CPU'), href: GH + 'Realtime-Fatigue-and-Posture-Monitoring-System' },
  { cat: 'ai', lang: 'HTML', title: 'Fish Hunt Neuroevolution', desc: t('Tek dosyalık p5.js demosu: sinir ağlı balıklar nesiller boyu avlanmayı öğreniyor.', 'A single-file p5.js demo where neural-net fish learn to hunt over generations.'), result: t('Tarayıcıda çalışır', 'Runs in browser'), href: GH + 'fish-hunt-neuroevolution' },
  { cat: 'ai', lang: 'Python', title: 'F1 Strategy Wall', desc: t('Resmi F1 livetiming akışından canlı telemetri; XGBoost ile pit stratejisi tahmini. FastAPI + Streamlit.', 'Live telemetry from the official F1 livetiming stream with XGBoost pit-strategy predictions. FastAPI + Streamlit.'), result: t('Geliştiriliyor', 'Work in progress'), href: GH + 'F1-Strategy-Wall-Live-Race-Visualization' },
  { cat: 'rob', lang: 'C · ESP-IDF', title: 'AquaVena · EGEduino', desc: t('ESP32-S3 tabanlı akıllı serum infüzyon modülü: damla sayımı, yük hücresiyle doğrulama, RFID, LVGL arayüz.', 'ESP32-S3 smart IV infusion module: drop counting, load-cell cross-check, RFID and an LVGL UI.'), result: t('IEEE R8 · Dünya Top 20', 'IEEE R8 · World Top 20'), href: '#/p/aquavena' },
  { cat: 'rob', lang: 'ROS 2', title: t('Mavi İnci İDA yığını', 'Mavi İnci USV stack'), desc: t('15 paketlik ROS 2 otonomi yığını: algılama, görev FSM, güvenlik, MAVROS köprüsü, simülasyon.', 'A 15-package ROS 2 autonomy stack: perception, mission FSM, safety, MAVROS bridge, simulation.'), result: t('Sim ↔ gerçek araç', 'Sim ↔ real vehicle'), href: '#/p/mavi-inci' },
  { cat: 'rob', lang: 'Python · Arduino', title: t('Biomanus · Biyonik El', 'Biomanus · Bionic Hand'), desc: t('Kamera ile el takibi, 5 servolu biyonik eli gerçek zamanlı taklit ediyor; hız sınırı ve watchdog korumalı.', 'Camera hand tracking drives a 5-servo bionic hand in real time, with rate limiting and a watchdog.'), result: 'MediaPipe → 5 servo', href: GH + 'Biomanus' },
  { cat: 'rob', lang: 'Python', title: 'Universal Ground Control Station', desc: t('İHA/İDA/İKA için şemasız, veri güdümlü telemetri paneli; yeni JSON alanlarını otomatik keşfeder.', 'A schema-free, data-driven telemetry dashboard for UAVs/USVs/UGVs that auto-discovers new JSON fields.'), result: 'PyQt6 · PyQtGraph', href: GH + 'Universal-Ground-Control-Station' },
  { cat: 'rob', lang: 'Python', title: t('EKF Sensör Füzyonu', 'EKF Sensor Fusion'), desc: t('İKA/İDA için GPS + IMU/odometri füzyonu; doğrusal olmayan kinematik ve Jacobian türetimi.', 'GPS + IMU/odometry fusion for UGVs/USVs with nonlinear kinematics and derived Jacobians.'), result: t('Genişletilmiş Kalman Filtresi', 'Extended Kalman Filter'), href: GH + 'Sensor-Fusion-Kalman-Filter-Simulation-for-Autonomous-Vehicles' },
  { cat: 'sim', lang: 'C# · Unity', title: 'Unity Car Evolution', desc: t('Raycast sensörlü arabalar küçük bir sinir ağı ve genetik algoritmayla sürmeyi öğreniyor; A* ile labirent modu.', 'Raycast-sensor cars learn to drive with a small neural net and a genetic algorithm; A*-shaped maze mode.'), result: 'NN + GA + A*', href: GH + 'Unity-Car-Evolution' },
  { cat: 'sim', lang: 'C# · Unity', title: 'Vehicle Replay Viewer', desc: t('7-DOF simülasyonun CSV kayıtlarını üç sürücü profiliyle 3B oynatan Unity projesi.', 'A Unity project that replays the 7-DOF sim’s CSV logs in 3D for three driver profiles.'), result: t('50 Hz CSV → 3B', '50 Hz CSV → 3D'), href: GH + 'replay-viewer-for-vehicle-sim-7dof' },
  { cat: 'alg', lang: 'C#', title: t('Sıfırdan MLP · Rakam Tanıma', 'MLP from Scratch · Digits'), desc: t('Kütüphanesiz C# çok katmanlı algılayıcı; 5×5 ızgarada el yazısı rakam tanıma.', 'A dependency-free C# multi-layer perceptron recognising digits on a 5×5 grid.'), result: t('Kütüphanesiz', 'No libraries'), href: GH + 'Neural-Network-for-Digit-Recognition' },
  { cat: 'alg', lang: 'C#', title: t('Türkiye’de En Kısa Yol', 'Shortest Paths in Türkiye'), desc: t('81 il ve İzmir ilçeleri arasında Dijkstra ile en kısa karayolu rotası.', 'Dijkstra shortest highway routes between 81 provinces and İzmir’s districts.'), result: 'Dijkstra', href: GH + 'Shortest-Paths-in-Turkey-with-Dijkstra' },
  { cat: 'alg', lang: 'C#', title: t('Ege Denizi Balık Kataloğu', 'Aegean Fish Catalogue'), desc: t('BST, AVL ağacı ve Trie veri yapılarının uygulamalı karşılaştırması.', 'A hands-on comparison of BST, AVL tree and Trie structures.'), result: 'BST · AVL · Trie', href: GH + 'Ege-Denizi-Fish-Catalog' },
  { cat: 'alg', lang: 'Java', title: 'Texas Hold’em Poker', desc: t('Bağımlılıksız Java SE motoru ve arayüzü; farklı zorlukta 3 bot, el geçmişi.', 'A zero-dependency Java SE engine and GUI with three bots of varying difficulty and hand history.'), result: t('3 yapay zeka rakip', '3 AI opponents'), href: GH + 'Texas-Hold-em-Poker-with-Java' },
  { cat: 'alg', lang: 'Python', title: t('Toplu E-posta Otomasyonu', 'Bulk Email Automation'), desc: t('Excel listesinden kişiselleştirilmiş, ekli toplu e-posta; sponsorluk ve davetler için.', 'Personalised bulk email with attachments from an Excel list, for sponsorship and invitations.'), result: 'Excel → Gmail SMTP', href: GH + 'email-automation' },
];

export const TEAM_GALLERY = [
  { name: 'Mavi İnci', sub: t('İNSANSIZ DENİZ ARACI', 'UNMANNED SURFACE VEHICLE'), role: t('Yazılım & Haberleşme Kaptanı', 'Software & Comms Captain'), img: A + 'mavi-inci.webp', alt: t('Mavi İnci insansız deniz aracı', 'Mavi İnci USV'), fit: 'cover' },
  { name: 'ODBARS', sub: t('İNSANSIZ KARA ARACI', 'UNMANNED GROUND VEHICLE'), role: t('Haberleşme Birimi Kaptanı', 'Communications Captain'), img: A + 'odbars.webp', alt: t('ODBARS insansız kara aracının 3B modeli', '3D model of the ODBARS UGV'), fit: 'contain', light: true },
  { name: 'Çelikgöz · Çelikkubbe', sub: t('HAVA SAVUNMA SİSTEMLERİ', 'AIR DEFENCE SYSTEMS'), role: t('Yazılım & Haberleşme Kaptanı', 'Software & Comms Captain'), img: A + 'celikgoz.webp', alt: t('Çelikgöz hava savunma taretinin 3B modeli', '3D model of the Çelikgöz air-defence turret'), fit: 'contain', light: true },
];

export const IEEE_TERMS = [
  { period: '2026–27', current: true, title: t('Yönetim Kurulu Başkanı', 'Chair of the Executive Board'), body: t('Dönemin hedefi topluluktaki proje sayısını 7’den 30’a çıkarmak; sayı şimdiden 20’ye ulaştı ve artıyor. Geçen yılki durgunluğun ardından üye sayısı 600’e yükseldi. Kurduğum sponsorluk ağıyla büyük firmalarla anlaşmalar yapıyor, tüm projelerin kodunu GitHub’da açık kaynak olarak yayımlıyoruz.', 'The goal for this term is to grow the branch from 7 to 30 projects; we’re already at 20 and counting. After a quiet previous year, membership has grown to 600. I’m building an active sponsorship network that keeps landing deals with major companies, and every project’s code is published as open source on GitHub.'),
    stats: [
      { v: '7 → 20', l: t('PROJE · HEDEF 30', 'PROJECTS · TARGET 30') },
      { v: '600', l: t('ÜYE', 'MEMBERS') },
      { v: '%100', l: t('AÇIK KAYNAK KOD', 'OPEN-SOURCE CODE') },
    ] },
  { period: '2025–26', title: t('Yönetim Kurulu Saymanı', 'Treasurer of the Executive Board'), body: t('Teknofest projeleri ile WIE, CS, ComSoc ve Tanıtım-Tasarım komitelerinden sorumlu yönetim kurulu üyesi. Bütçe planlaması, kurumsal sponsorluklar ve ieeeegesb.org’un tasarımı ve fullstack geliştirmesi. Kelebek Etkisi, SciTech ’26, İzmir Enerji Zirvesi, RAStlantı, CyberEge.', 'Board member responsible for Teknofest projects and the WIE, CS, ComSoc and Promotion-Design committees. Budget planning, corporate sponsorships, and the design and full-stack build of ieeeegesb.org. Butterfly Effect, SciTech ’26, İzmir Energy Summit, RAStlantı, CyberEge.') },
];

export const TEAMS = [
  { name: 'Mavi İnci', sub: t('İnsansız Deniz Aracı', 'Unmanned Surface Vehicle'), role: t('Yazılım & Haberleşme Birimleri Kaptanı', 'Software & Comms Captain'), prev: t('önce: Yazılım Birimi Kaptanı (2025–26)', 'previously: Software Captain (2025–26)'), period: '2025–', active: true },
  { name: 'Çelikgöz · Çelikkubbe', sub: t('Hava Savunma Sistemleri', 'Air Defence Systems'), role: t('Yazılım & Haberleşme Birimleri Kaptanı', 'Software & Comms Captain'), period: '2025–', active: true },
  { name: t('Uluslararası İHA', 'International UAV'), sub: t('Yeni kurulan takım', 'Newly founded team'), role: t('Yazılım & Haberleşme Birimleri Kaptanı', 'Software & Comms Captain'), period: '2026–', active: true },
  { name: t('Model Uydu', 'Model Satellite'), sub: t('CubeSat ekibinden kuruldu · Teknofest', 'Founded by the CubeSat team · Teknofest'), role: t('Yazılım & Haberleşme Birimleri Kaptanı', 'Software & Comms Captain'), period: '2026–', active: true },
  { name: 'TerraSync', sub: t('Uydu + IoT kentsel iklim riski', 'Satellite + IoT urban climate risk'), role: t('Proje Yürütücüsü & Kaptan', 'Project Lead & Captain'), period: t('Eyl 2026–', 'Sep 2026–'), active: true },
  { name: 'Aegean Crafters', sub: t('Bağımsız oyun stüdyosu', 'Independent game studio'), role: t('Oyun, bölüm & mekanik tasarımcısı · Unity', 'Game, level & mechanics designer · Unity'), period: t('Kas 2025–', 'Nov 2025–'), active: true },
  { name: 'ODBARS', sub: t('İnsansız Kara Aracı', 'Unmanned Ground Vehicle'), role: t('Haberleşme Birimi Kaptanı · LoRa', 'Communications Captain · LoRa'), period: '2025–26' },
  { name: 'EGEduino · AquaVena', sub: 'IEEE R8 Student Hardware Contest', role: t('Yazılım Birimi Sorumlusu · Dünya Top 20', 'Software Lead · World Top 20'), period: '2026' },
  { name: 'IEEE Ege CubeSat', sub: t('Küp uydu · tamamlandı', 'CubeSat · concluded'), role: t('Yazılım Takım Lideri & Proje Yöneticisi', 'Software Team Lead & Project Manager'), period: '2025' },
];

export const ACHIEVEMENTS = [
  { tag: t('★ DÜNYA TOP 20', '★ WORLD TOP 20'), accent: 'amber', featured: true, title: 'IEEE R8 Student Hardware Contest', body: t('EGEduino takımıyla AquaVena: ESP32-S3 tabanlı akıllı serum infüzyon modülü. Yazılım birimi sorumlusu.', 'AquaVena with team EGEduino: an ESP32-S3 smart IV infusion module. Software lead.') },
  { tag: t('#3 TÜRKİYE · #32 DÜNYA', '#3 TÜRKİYE · #32 WORLD'), accent: 'orange', title: 'IEEEXtreme 20.0', body: t('Yaklaşık 9000 takımın katıldığı 24 saatlik küresel programlama yarışması. Bir önceki yıl (19.0): #33 Türkiye, #1071 dünya.', 'A 24-hour global programming contest with ~9,000 teams. Previous edition (19.0): #33 Türkiye, #1071 worldwide.') },
  { tag: t('★ 2 KATEGORİ ÖDÜLÜ', '★ 2 CATEGORY AWARDS'), accent: 'amber', title: 'Monad Blitz Hackathon', body: t('“En İyi Fikir” ve “En Sürdürülebilir Fikir”. Flutter istemcisi + Monad akıllı sözleşmeleri.', '“Best Idea” and “Most Sustainable Idea”. Flutter client + Monad smart contracts.') },
  { tag: t('STEM GÖNÜLLÜSÜ', 'STEM VOLUNTEER'), accent: 'dim', title: t('Liselilere mühendislik', 'Engineering for high-schoolers'), body: t('STAR Projesi, Teach and Make, Children in Power, Hour of Code, Akademiden Liseye: Kadın Mühendisler.', 'STAR Project, Teach and Make, Children in Power, Hour of Code, From Academia to High School: Women Engineers.') },
];

export const SKILLS = [
  { cat: 'ctl', title: t('Kontrol & Dinamik', 'Control & Dynamics'), items: 'LQR · MPC · PID · Pacejka · Lagrangian (sympy) · SciPy' },
  { cat: 'ai', title: t('Yapay Zeka & Görüntü', 'AI & Vision'), items: 'PyTorch · YOLO · TensorRT · OpenCV · MediaPipe · RL' },
  { cat: 'rob', title: t('Robotik & Gömülü', 'Robotics & Embedded'), items: 'ROS 2 · Nav2 · MAVROS · Gazebo · ESP-IDF · FreeRTOS · LVGL · STM32 · LoRa' },
  { cat: null, title: t('Uzaktan Algılama', 'Remote Sensing'), items: 'Sentinel-2 · Landsat · Earth Engine · Rasterio · Dask' },
  { cat: 'sim', title: t('Oyun & Simülasyon', 'Games & Simulation'), items: t('Unity (C#) · oyun & bölüm tasarımı · online co-op · Steamworks · Blender', 'Unity (C#) · game & level design · online co-op · Steamworks · Blender') },
  { cat: null, title: 'Web', items: 'React · Vite · Node/Express · TypeScript · PostgreSQL · Prisma · Redis' },
  { cat: null, title: t('Diller', 'Languages'), items: 'Python · C++ · C · C# · Java · JavaScript · Dart · Solidity · SQL' },
];
