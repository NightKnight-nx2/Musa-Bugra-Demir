// Case-study pages, reachable at #/p/<slug>. Same bilingual + TODO conventions as content.js.
import { TODO } from './content.js';

const t = (tr, en) => ({ tr, en: en ?? tr });
const GH = 'https://github.com/NightKnight-nx2/';
const A = './assets/projects/';

export const CASE_STUDIES = {
  'mavi-inci': {
    kicker: t('VAKA ÇALIŞMASI · ROBOTİK & OTONOMİ', 'CASE STUDY · ROBOTICS & AUTONOMY'),
    title: t('Mavi İnci İDA', 'Mavi İnci USV'),
    subtitle: t('otonomi yazılım yığını', 'autonomy software stack'),
    summary: t(
      'Teknofest İnsansız Deniz Aracı yarışması için kurduğumuz ROS 2 tabanlı otonomi yığını. Kameradan duba tespitinden motor komutuna kadar her katman ayrı bir paket; simülasyon ve gerçek araç aynı çekirdeği paylaşıyor.',
      'The ROS 2 autonomy stack we built for the Teknofest Unmanned Surface Vehicle competition. Every layer, from buoy detection to motor commands, is its own package, and simulation and the real vehicle share the same core.'
    ),
    meta: [
      { k: t('ROL', 'ROLE'), v: t('Yazılım Birimi Kaptanı · ana geliştirici', 'Software Captain · main developer') },
      { k: t('DÖNEM', 'PERIOD'), v: '2025–' },
      { k: t('YIĞIN', 'STACK'), v: 'ROS 2 · Nav2 · TensorRT · MAVROS · Gazebo' },
      { k: t('DONANIM', 'HARDWARE'), v: 'Jetson · Pixhawk' },
    ],
    links: [{ label: t('Paketler ↗', 'Packages ↗'), href: GH + '?tab=repositories&q=ida_' }],
    hero: { src: A + 'mavi-inci.webp', alt: t('Mavi İnci havuz kenarında', 'Mavi İnci at the poolside'), caption: t('Havuz testleri, 16–21 Temmuz 2026.', 'Pool tests, 16–21 July 2026.'), fit: 'cover', tall: true },
    flowTitle: t('Veri akışı', 'Data flow'),
    flow: [
      ['Kamera|Camera', '*ida_yolo_trt', 'ida_mission (FSM)', 'Nav2'],
      ['*ida_guidance_governor', 'ida_mavros_bridge_core', 'MAVROS → Pixhawk'],
      ['!ida_safety (FDIR)', 'ida_estop_gpio', 'ida_data_logger'],
    ],
    flowNote: t(
      'Simülasyonda ida_sim_bringup, ida_sim_odometry ve ida_sim_thrust_bridge gerçek donanımın yerini alıyor; geri kalan her paket aynı kalıyor.',
      'In simulation, ida_sim_bringup, ida_sim_odometry and ida_sim_thrust_bridge stand in for the hardware; every other package stays the same.'
    ),
    decisions: [
      { title: t('Simülasyon ve gerçek araç tek çekirdek', 'One core for sim and real vehicle'), body: t('MAVROS köprüsünün ortak kısmı ida_mavros_bridge_core’da; simülasyona özgü her şey “yalnızca simülasyon” paketlerinde. Böylece Gazebo’da test edilen kod değiştirilmeden araca gidiyor.', 'The shared part of the MAVROS bridge lives in ida_mavros_bridge_core; anything sim-specific lives in “simulation only” packages. Code tested in Gazebo goes to the boat unchanged.') },
      { title: t('Nav2 ile motor arasında bir “vali”', 'A governor between Nav2 and the motors'), body: t('ida_guidance_governor, Nav2’nin ürettiği ham hız komutunu (/cmd_vel_nav) fiziksel olarak gerçekçi, yumuşak ve güvenli bir komuta (/cmd_vel) çeviriyor.', 'ida_guidance_governor turns Nav2’s raw velocity command (/cmd_vel_nav) into a physically realistic, smooth and safe one (/cmd_vel).') },
      { title: t('Güvenlik ayrı bir katman', 'Safety as its own layer'), body: t('ida_safety kritik düğümlerin heartbeat’ini ve bataryayı izleyip /system/safe_mode yayınlıyor; ida_estop_gpio uzaktan motor gücünü kesiyor.', 'ida_safety watches critical-node heartbeats and the battery and publishes /system/safe_mode; ida_estop_gpio cuts motor power remotely.') },
      { title: t('TensorRT C++ ile çıkarım', 'Inference via TensorRT C++'), body: t('Ultralytics tabanlı düğümün yanında, YOLOv8’i doğrudan TensorRT C++ API’siyle çalıştıran ayrı bir düğüm (ida_yolo_trt) var.', 'Alongside the Ultralytics-based node, a separate node (ida_yolo_trt) runs YOLOv8 directly through the TensorRT C++ API.') },
    ],
    packages: [
      ['ida_msgs', t('Özel ROS 2 mesaj tanımları', 'Custom ROS 2 message definitions')],
      ['ida_yolo_detection', t('YOLOv8n ile duba tespiti ve renk sınıfı', 'YOLOv8n buoy detection with colour class')],
      ['ida_yolo_trt', t('YOLOv8 · doğrudan TensorRT C++ API', 'YOLOv8 directly on the TensorRT C++ API')],
      ['ida_mission', t('P1/P2/P3 görev durum makinesi', 'P1/P2/P3 mission state machine')],
      ['ida_navigation', t('USV’ye ayarlı Nav2 parametreleri', 'Nav2 parameters tuned for the USV')],
      ['ida_guidance_governor', t('Ham hız komutunu güvenli komuta çevirir', 'Turns raw velocity into a safe command')],
      ['ida_mavros_bridge_core', t('Sim ve araç ortak MAVROS düğümleri', 'MAVROS nodes shared by sim and vehicle')],
      ['ida_mavlink_bridge', t('YKİ’den gelen MAVLink → görev komutu', 'Ground-station MAVLink → mission commands')],
      ['ida_safety', t('FDIR: heartbeat + batarya → safe_mode', 'FDIR: heartbeat + battery → safe_mode')],
      ['ida_estop_gpio', t('Uzaktan acil durdurma', 'Remote emergency stop')],
      ['ida_data_logger', t('Görev boyunca kanıt/telemetri kaydı', 'Evidence and telemetry logging')],
      ['ida_vehicle_bringup', t('Jetson + Pixhawk tarafını başlatır', 'Brings up the Jetson + Pixhawk side')],
      ['ida_sim_bringup', t('Gazebo Harmonic + ArduPilot SITL', 'Gazebo Harmonic + ArduPilot SITL')],
      ['ida_sim_odometry', t('Sim GPS + IMU → odometri', 'Sim GPS + IMU → odometry')],
      ['ida_sim_thrust_bridge', t('Kontrol yığını ↔ SITL itici modeli', 'Control stack ↔ SITL thruster model')],
    ],
  },

  aquavena: {
    kicker: t('VAKA ÇALIŞMASI · GÖMÜLÜ · IEEE R8 DÜNYA TOP 20', 'CASE STUDY · EMBEDDED · IEEE R8 WORLD TOP 20'),
    title: 'AquaVena',
    subtitle: t('akıllı serum infüzyon modülü', 'smart IV infusion module'),
    summary: t(
      'IEEE Region 8 Student Hardware Contest için EGEduino takımıyla geliştirdiğimiz, standart bir serum setine takılan hasta-kritik akış kontrol modülü. Ben yazılım biriminden sorumluydum.',
      'A patient-critical flow-control module that clips onto a standard IV set, built with team EGEduino for the IEEE Region 8 Student Hardware Contest. I led the software unit.'
    ),
    meta: [
      { k: t('ROL', 'ROLE'), v: t('Yazılım Birimi Sorumlusu', 'Software Lead') },
      { k: t('EKİP', 'TEAM'), v: t('EGEduino · 4 kişi', 'EGEduino · 4 people') },
      { k: t('YIĞIN', 'STACK'), v: 'ESP32-S3 · ESP-IDF · FreeRTOS · LVGL 9.5' },
      { k: t('SONUÇ', 'OUTCOME'), v: t('Dünya Top 20', 'World Top 20') },
    ],
    links: [],
    hero: { src: A + 'aquavena-block.webp', alt: t('AquaVena as-built sistem blok diyagramı', 'AquaVena as-built system block diagram'), caption: t('As-built sistem blok diyagramı (kablolama rev. 3).', 'As-built system block diagram (wiring rev. 3).'), fit: 'contain', light: true },
    stats: [
      { v: '11 523', l: t('satır el yazımı C', 'hand-written lines of C') },
      { v: '9', l: t('FreeRTOS görevi', 'FreeRTOS tasks') },
      { v: '17', l: t('LVGL ekranı', 'LVGL screens') },
      { v: '0 / 0', l: t('hata / uyarı, 1 895 dosya', 'errors / warnings, 1,895 files') },
    ],
    decisions: [
      { title: t('Güvenlik kendi çekirdeğinde', 'Safety on its own core'), body: t('Güvenlik, watchdog ve PID çekirdek 0’a sabitlendi; Wi-Fi, MQTT ve grafik çekirdek 1’de. Böylece arayüz yükü 1 ms güvenlik taramasını ve 100 ms kontrol döngüsünü asla geciktiremiyor.', 'Safety, watchdog and PID are pinned to core 0; Wi-Fi, MQTT and graphics run on core 1, so UI load can never delay the 1 ms safety poll or the 100 ms control loop.') },
      { title: t('Üst üste binen üç SPI arızası', 'Three stacked SPI faults'), body: t('Ekran, dokunmatik ve RFID aynı SPI hattında. Ekranın SDO’yu hiç bırakmaması, kütüphanenin MISO’yu sessizce kapatması ve reset sırası ayrı ayrı izole edilip çözüldü.', 'Display, touch and RFID share one SPI bus. The display never tri-stating SDO, the library silently disabling MISO and the reset ordering were each isolated and fixed.') },
      { title: t('Arızada güvenli tarafta kal', 'Fail towards safety'), body: t('Uç anahtarı normalde kapalı bağlandı: kopuk bir kablo “evde değil” okunuyor ve infüzyonu durduruyor, valfi sessizce yanlış konumlandırmıyor.', 'The endstop is wired normally-closed: a broken wire reads “not home” and blocks infusion instead of silently mispositioning the valve.') },
      { title: t('Busy-wait yerine yield', 'Yield, don’t busy-wait'), body: t('Yük hücresi HAL’indeki bekleme döngüsü düşük öncelikli görevleri aç bırakıp watchdog reset’ine yol açıyordu; bekleme yield eden ve önce örnek hazır mı diye bakan bir yapıya çevrildi.', 'A busy-wait in the load-cell HAL starved lower-priority tasks until the watchdog reset the device; it now yields and checks sample readiness first.') },
    ],
    resultsTable: {
      title: t('Teslim anındaki durum', 'Status at submission'),
      head: [t('ALT SİSTEM', 'SUBSYSTEM'), t('DURUM', 'STATUS')],
      rows: [
        [t('Mekanik montaj', 'Mechanical assembly'), t('Doğrulandı', 'Verified'), 'ok'],
        [t('Paylaşımlı SPI: ekran, dokunmatik, RFID', 'Shared SPI: display, touch, RFID'), t('Doğrulandı', 'Verified'), 'ok'],
        [t('Yük hücresi kanalı (HX711)', 'Gravimetric channel (HX711)'), t('Doğrulandı', 'Verified'), 'ok'],
        [t('Güç katı ve motor', 'Power stage and motor'), t('Doğrulandı', 'Verified'), 'ok'],
        [t('Damla sayıcı', 'Drop counter'), t('Doğrulandı', 'Verified'), 'ok'],
        [t('Hava embolisi dedektörü', 'Air-embolism detector'), t('Motor gürültüsünde yanlış alarm', 'False triggers under motor noise'), 'warn'],
        [t('Kapalı çevrim PID', 'Closed-loop PID'), t('Kodlandı, ayar bekliyor', 'Coded, awaiting tuning'), 'warn'],
        [t('Firmware build', 'Firmware build'), t('0 hata, 0 uyarı', '0 errors, 0 warnings'), 'ok'],
      ],
    },
    limits: [
      t('Hava sensörünün yanlış alarmının kök nedeni açık; tezgâh firmware’inde bir build bayrağıyla kapalı, klinik/değerlendirme build’inde yeniden açılmalı.', 'The air sensor’s false-trigger root cause is still open; detection is disabled in the bench firmware behind a build flag and must be re-enabled for any clinical or evaluation build.'),
      t('PID için gereken damla sayıcı artık çalışıyor; ayar henüz yapılmadı.', 'The drop counter the PID needs now works; tuning has not been done yet.'),
      t('Kapak bu build’de vidalı; sırada geçmeli (snap-fit) kapak var.', 'The cover is screw-fixed in this build; a snap-fit cover is next.'),
    ],
  },

  'vehicle-sim-7dof': {
    kicker: t('VAKA ÇALIŞMASI · KONTROL & DİNAMİK', 'CASE STUDY · CONTROL & DYNAMICS'),
    title: t('7-DOF Araç Dinamiği', '7-DOF Vehicle Dynamics'),
    subtitle: '+ Unity Replay',
    summary: t(
      'Hazır lastik kütüphanesi kullanmadan, kendi Pacejka modeli üzerine kurulu bir araç dinamiği simülasyonu. Üç sürücü profili aynı pisti sürüyor; sonuçlar ayrı bir Unity projesinde 3B oynatılıyor.',
      'A vehicle-dynamics simulation built on my own Pacejka model, with no tyre library. Three driver profiles lap the same track and the results are replayed in 3D in a separate Unity project.'
    ),
    meta: [
      { k: t('ROL', 'ROLE'), v: t('Tek geliştirici', 'Sole developer') },
      { k: t('YIĞIN', 'STACK'), v: 'Python · SciPy · Unity (C#)' },
      { k: t('ÇIKTI', 'OUTPUT'), v: '50 Hz CSV' },
    ],
    links: [
      { label: 'vehicle-sim-7dof ↗', href: GH + 'vehicle-sim-7dof' },
      { label: 'replay-viewer ↗', href: GH + 'replay-viewer-for-vehicle-sim-7dof' },
    ],
    hero: { src: A + 'vehicle-sim-7dof.webp', alt: t('Üç sürücü profilinin yörünge ve hız karşılaştırması', 'Trajectory and speed comparison of three driver profiles'), caption: t('Üç sürücü profilinin izi ve hız profili; agresif sürücü daha geniş ve hızlı bir yörünge çiziyor.', 'Trace and speed profile of the three drivers; the aggressive one takes a wider, faster line.'), fit: 'contain', light: true },
    flowTitle: t('Veri akışı', 'Data flow'),
    flow: [
      ['*tire_model.py', 'vehicle_model.py', 'simulate.py', '50 Hz CSV', '!Unity ReplayPlayer.cs'],
      ['raceline.py', 'driver.py'],
    ],
    flowNote: t('Durum vektörü: boylamsal hız, yanal hız, yaw hızı ve dört tekerleğin dönüş hızı (7 DOF). Dünya konumu kinematik olarak entegre ediliyor.', 'State: longitudinal speed, lateral speed, yaw rate and four wheel speeds (7 DOF). World pose is integrated kinematically.'),
    decisions: [
      { title: t('Lastik modelini kendim yazdım', 'I wrote the tyre model myself'), body: t('Boylamsal + yanal + friction-circle birleşik kayma. Üçüncü parti lastik kütüphanesi yok; yalnızca doğrulama için commonroad-vehicle-models ile ayrı ortamda karşılaştırıldı.', 'Longitudinal + lateral + friction-circle combined slip. No third-party tyre library; only compared against commonroad-vehicle-models in a separate environment for validation.') },
      { title: t('Ride/roll/pitch yerine kuazi-statik yük transferi', 'Quasi-static load transfer instead of ride/roll/pitch'), body: t('Üç ek serbestlik derecesi yerine ivmeye bağlı normal yük kaydırma: model küçük ve hızlı kalırken tekerlek yükleri gerçekçi.', 'Acceleration-driven normal-load shift instead of three extra DOF: the model stays small and fast while wheel loads stay realistic.') },
      { title: t('Simülasyon ve görselleştirme ayrı', 'Simulation and visuals are separate'), body: t('Aralarındaki tek sözleşme 50 Hz CSV formatı. Fizik Python’da test edilebilir kalıyor, Unity yalnızca oynatıyor.', 'The only contract between them is the 50 Hz CSV format. Physics stays testable in Python; Unity just plays it back.') },
    ],
    resultsTable: {
      title: t('Pacejka doğrulaması', 'Pacejka validation'),
      head: [t('ÖLÇÜT', 'METRIC'), t('REFERANS', 'REFERENCE'), t('BENİM MODELİM', 'MY MODEL')],
      rows: [
        [t('Yanal pik kuvvet', 'Peak lateral force'), '4195.6 N', '4200.0 N'],
        [t('Yanal pik kayma açısı', 'Peak lateral slip angle'), '0.149 rad', '0.187 rad'],
        [t('Boylamsal pik kuvvet (|F|)', 'Peak longitudinal force (|F|)'), '4695.6 N', '4599.2 N'],
        [t('Boylamsal pik-sonrası düşüş', 'Longitudinal post-peak drop'), '30.7 %', '40.3 %'],
      ],
      note: t('Eğri şekli referansla aynı; mutlak farklar bağımsız parametre setlerinden ve ters işaret kuralından geliyor.', 'The curve shape matches the reference; absolute differences come from independent parameter sets and an opposite sign convention.'),
    },
    limits: [
      t('Ride, roll ve pitch ayrı durum değişkeni değil; yük transferi kuazi-statik.', 'Ride, roll and pitch are not separate states; load transfer is quasi-static.'),
      t('Tek bir sabit raceline (oval + S-viraj) üzerinde test edildi.', 'Tested on a single fixed raceline (oval + S-bend).'),
    ],
  },

  'dual-protocol': {
    kicker: t('VAKA ÇALIŞMASI · OYUN TASARIMI · AEGEAN CRAFTERS', 'CASE STUDY · GAME DESIGN · AEGEAN CRAFTERS'),
    title: 'Dual Protocol',
    subtitle: 'The Case of Eva & Miles',
    summary: t(
      'İki oyunculu asimetrik bir noir bulmaca oyunu. Bir oyuncu sahada Ajan Eva, diğeri operasyonu yöneten Analist Miles; birbirlerinin ekranını göremiyorlar ve yalnızca konuşarak, bilgilerini birleştirerek Castellari cinayetini çözüyorlar.',
      'A two-player asymmetric noir puzzle game. One player is Agent Eva in the field, the other is Analyst Miles running the operation; they can’t see each other’s screens and solve the Castellari murder only by talking and combining what they know.'
    ),
    meta: [
      { k: t('ROL', 'ROLE'), v: t('Genel oyun tasarımcısı', 'Lead game designer') },
      { k: t('YAYIN', 'RELEASE'), v: t('2 Ekim 2026 · Steam', '2 Oct 2026 · Steam') },
      { k: t('YAYINCI', 'PUBLISHER'), v: 'Rock Paper Publisher' },
      { k: t('MOTOR', 'ENGINE'), v: 'Unity' },
    ],
    links: [{ label: t('Steam sayfası ↗', 'Steam page ↗'), href: 'https://store.steampowered.com/app/4660280/DUAL_PROTOCOL_The_Case_of_Eva_Miles/' }],
    hero: { src: A + 'dual-protocol.webp', alt: t('Dual Protocol kapak görseli', 'Dual Protocol key art'), fit: 'cover', wide: true },
    stats: [
      { v: '80K', l: 'wishlist' },
      { v: '10K', l: t('satış', 'sales') },
      { v: '2', l: t('oyuncu, iki farklı ekran', 'players, two separate screens') },
    ],
    roles: {
      title: t('Benim rolüm', 'My role'),
      items: [
        t('Genel oyun tasarımı', 'Overall game design'),
        t('Bölüm ve bulmaca tasarımı', 'Level and puzzle design'),
        t('Hikâye yazımı ve kurgu', 'Story writing and narrative'),
        t('Lokalizasyon', 'Localization'),
        t('Oyunun Steam’e entegrasyonu', 'Steam integration'),
      ],
    },
    decisions: [
      { title: t('İletişim oyunun kendisi', 'Communication is the game'), body: t('Eva sahadaki ipuçlarını, Miles operasyon tarafındaki bilgiyi görüyor; ikisi de resmin yalnızca yarısına sahip. Bulmacalar bu iki yarı birleşmeden çözülemeyecek şekilde kurgulandı, bu yüzden ilerlemenin tek yolu konuşmak.', 'Eva sees the clues in the field, Miles sees the operation’s data; each holds only half the picture. Puzzles are built so they can’t be solved until the halves are combined, so the only way forward is to talk.') },
      { title: t('Hikâye bulmacayı taşıyor', 'Story carries the puzzles'), body: t('Castellari cinayeti noir bir kurgu olarak yazıldı; bölümler ve bulmacalar bu kurgunun adımları olarak tasarlandı. Hikâye, bölüm ve bulmaca tasarımı aynı elde olduğu için birbirine bağlı ilerledi.', 'The Castellari murder is written as a noir story, and levels and puzzles are designed as steps through it. With story, level and puzzle design in the same hands, they moved forward together.') },
      { title: t('Mağazaya hazır çıkış', 'Store-ready at launch'), body: t('Lokalizasyon ve Steam entegrasyonu da benim sorumluluğumdaydı: oyun yayın günü birden fazla dilde ve Steam altyapısına bağlı olarak çıktı.', 'Localization and Steam integration were also on me: the game launched multi-language and wired into Steam’s platform from day one.') },
    ],
    limitsTitle: t('Üç oyundan öğrendiklerim', 'What three games taught me'),
    limits: [
      t('Kapsam ekibe göre seçilmeli: Spacey Space Burger’ın kapsamı ekip boyutunu aştığı için proje bekletmeye alındı.', 'Scope has to fit the team: Spacey Space Burger was put on hold when its scope outgrew the team.'),
      t('Yayıncıya bağlı bir proje, yayıncının kararıyla bitebilir: Spacey Space Rush’ın online sistemleri üzerinde çalışmışken proje iptal edildi.', 'A publisher-backed project can end on the publisher’s call: Spacey Space Rush was cancelled while I was building its online systems.'),
      t('Bitirilen oyun konuşur: Dual Protocol tamamlandı, yayınlandı ve 80K wishlist ile 10K satışa ulaştı.', 'A finished game speaks for itself: Dual Protocol was finished, shipped and reached 80K wishlists and 10K sales.'),
    ],
  },
};

export const CASE_ORDER = ['mavi-inci', 'aquavena', 'vehicle-sim-7dof', 'dual-protocol'];
