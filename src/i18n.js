import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

// UI chrome strings only. Portfolio content lives in src/data/.
const resources = {
  tr: {
    translation: {
      'skip': 'İçeriğe geç',
      'nav.projects': 'Projeler',
      'nav.games': 'Oyunlar',
      'nav.experience': 'Deneyim',
      'nav.achievements': 'Başarılar',
      'nav.about': 'Hakkımda',
      'nav.contact': 'İletişim',
      'nav.menu': 'Menü',
      'nav.lang': 'Dili değiştir',
      'hero.status': 'Staj ve iş birliklerine açık',
      'hero.lead': 'Otonom araçlar için <hl>kontrol</hl>, <hl>algılama</hl> ve <hl>haberleşme</hl> yazılımı geliştiriyorum.',
      'hero.sub': 'Ege Üniversitesi Bilgisayar Mühendisliği 3. sınıf · IEEE Ege Öğrenci Topluluğu Yönetim Kurulu Başkanı (2026–27) · 5 Teknofest takımında yazılım ve haberleşme kaptanı · Steam’de 10K satan bir oyunun tasarım ekibinde.',
      'hero.cta.projects': 'Projeleri gör',
      'hero.cta.cv': 'CV indir',
      'hero.caption.left': 'MBD · EGE ÜNİ.',
      'hero.caption.right': 'BİLG. MÜH. · 3. SINIF',
      'proof.label': 'Öne çıkan başarılar',
      'projects.idx': '01 / PROJELER',
      'projects.title': 'Öne çıkan işler.',
      'projects.sub': 'Her proje: ne çözdüğü, nasıl kurulduğu ve ölçülen sonucu.',
      'projects.case': 'Vaka çalışması',
      'projects.code': 'Kod',
      'projects.live': 'Siteyi aç',
      'projects.flow': 'VERİ AKIŞI',
      'games.idx': '02 / OYUNLAR · AEGEAN CRAFTERS · KASIM 2025–',
      'games.title': 'Yayınlanan oyunlar ve dersler.',
      'games.sub': 'Hepsi Unity ile. Biri yayında, biri beklemede, biri iptal oldu; her biri işin bir parçası.',
      'games.steam': 'Steam sayfası',
      'games.case': 'Vaka çalışması',
      'archive.idx': '03 / ARŞİV',
      'archive.title': 'Tüm projeler',
      'archive.filter': 'Kategoriye göre filtrele',
      'archive.empty': 'Bu kategoride proje yok.',
      'exp.idx': '04 / DENEYİM',
      'exp.title': 'Liderlik ve takımlar.',
      'exp.ieee': 'IEEE EGE ÖĞRENCİ TOPLULUĞU',
      'exp.teams': 'PROJE TAKIMLARI',
      'exp.col.team': 'TAKIM',
      'exp.col.role': 'ROL',
      'exp.col.period': 'DÖNEM',
      'ach.idx': '05 / BAŞARILAR',
      'ach.title': 'Yarışmalar ve gönüllülük.',
      'about.idx': '06 / HAKKIMDA',
      'about.title': 'Kod yazan, takım kuran bir mühendis adayı.',
      'about.p1': 'Simülasyonda doğrulanmamış bir şeyi araca yüklememeyi seviyorum: önce modeli kur, sonra kontrolcüyü ölç, en son sahaya çık. Aynı yaklaşımı IEEE Ege’de de uyguluyorum; takımları ölçülebilir hedefler etrafında topluyor, projelerin çıktısının açık kaynak olarak yaşamasını sağlıyorum.',
      'about.quote': '“Bazıları sadece etkinlik düzenler; bizler ise vizyon inşa eder, tarih yazarız.”',
      'about.skills': 'YETENEKLER → KULLANILDIĞI PROJELER',
      'about.projectsN': '{{count}} proje',
      'contact.idx': '07 / İLETİŞİM',
      'contact.title': 'Bir sinyal gönder.',
      'contact.sub': 'Staj, araştırma, sponsorluk ya da takım iş birliği için yaz.',
      'contact.copy': 'Kopyala',
      'contact.copied': 'Kopyalandı',
      'footer.updated': 'SON GÜNCELLEME',
      'case.back': 'Tüm projeler',
      'case.arch': 'MİMARİ',
      'case.decisions': 'KARARLAR',
      'case.decisionsTitle': 'Neden böyle kurdum?',
      'case.packages': 'KOD HARİTASI',
      'case.packagesTitle': 'Paketler',
      'case.results': 'SONUÇLAR',
      'case.limits': 'SINIRLAR & SONRAKİ ADIM',
      'case.limitsTitle': 'Neyi henüz çözmedik?',
      'case.lessons': 'DERSLER',
      'case.role': 'ROL',
      'case.prev': 'Önceki',
      'case.next': 'Sonraki',
      'case.notFound': 'Bu proje sayfası bulunamadı.',
    },
  },
  en: {
    translation: {
      'skip': 'Skip to content',
      'nav.projects': 'Projects',
      'nav.games': 'Games',
      'nav.experience': 'Experience',
      'nav.achievements': 'Awards',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.menu': 'Menu',
      'nav.lang': 'Change language',
      'hero.status': 'Open to internships and collaborations',
      'hero.lead': 'I build <hl>control</hl>, <hl>perception</hl> and <hl>communication</hl> software for autonomous vehicles.',
      'hero.sub': '3rd-year Computer Engineering student at Ege University · Chair of the IEEE Ege Student Branch (2026–27) · software & comms captain on 5 Teknofest teams · on the design team of a game that sold 10K copies on Steam.',
      'hero.cta.projects': 'See projects',
      'hero.cta.cv': 'Download CV',
      'hero.caption.left': 'MBD · EGE UNIV.',
      'hero.caption.right': 'COMP. ENG. · YEAR 3',
      'proof.label': 'Highlights',
      'projects.idx': '01 / PROJECTS',
      'projects.title': 'Selected work.',
      'projects.sub': 'Each project: what it solves, how it’s built and the measured result.',
      'projects.case': 'Case study',
      'projects.code': 'Code',
      'projects.live': 'Open site',
      'projects.flow': 'DATA FLOW',
      'games.idx': '02 / GAMES · AEGEAN CRAFTERS · NOV 2025–',
      'games.title': 'Shipped games and lessons.',
      'games.sub': 'All built in Unity. One shipped, one on hold, one cancelled; each one is part of the work.',
      'games.steam': 'Steam page',
      'games.case': 'Case study',
      'archive.idx': '03 / ARCHIVE',
      'archive.title': 'All projects',
      'archive.filter': 'Filter by category',
      'archive.empty': 'No projects in this category.',
      'exp.idx': '04 / EXPERIENCE',
      'exp.title': 'Leadership and teams.',
      'exp.ieee': 'IEEE EGE STUDENT BRANCH',
      'exp.teams': 'PROJECT TEAMS',
      'exp.col.team': 'TEAM',
      'exp.col.role': 'ROLE',
      'exp.col.period': 'PERIOD',
      'ach.idx': '05 / AWARDS',
      'ach.title': 'Competitions and volunteering.',
      'about.idx': '06 / ABOUT',
      'about.title': 'An engineer who writes code and builds teams.',
      'about.p1': 'I don’t like putting anything on a vehicle that hasn’t been validated in simulation: build the model, measure the controller, then go to the field. I run IEEE Ege the same way, rallying teams around measurable goals and making sure project output lives on as open source.',
      'about.quote': '“Some just organise events; we build vision and make history.”',
      'about.skills': 'SKILLS → WHERE I USED THEM',
      'about.projectsN': '{{count}} projects',
      'contact.idx': '07 / CONTACT',
      'contact.title': 'Send a signal.',
      'contact.sub': 'Write for internships, research, sponsorship or team collaboration.',
      'contact.copy': 'Copy',
      'contact.copied': 'Copied',
      'footer.updated': 'LAST UPDATED',
      'case.back': 'All projects',
      'case.arch': 'ARCHITECTURE',
      'case.decisions': 'DECISIONS',
      'case.decisionsTitle': 'Why I built it this way',
      'case.packages': 'CODE MAP',
      'case.packagesTitle': 'Packages',
      'case.results': 'RESULTS',
      'case.limits': 'LIMITS & NEXT STEPS',
      'case.limitsTitle': 'What isn’t solved yet?',
      'case.lessons': 'LESSONS',
      'case.role': 'ROLE',
      'case.prev': 'Previous',
      'case.next': 'Next',
      'case.notFound': 'This project page could not be found.',
    },
  },
};

function initialLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'tr' || saved === 'en') return saved;
  } catch { /* storage unavailable */ }
  return (navigator.language || 'tr').toLowerCase().startsWith('tr') ? 'tr' : 'en';
}

i18n.use(initReactI18next).init({
  resources,
  lng: initialLang(),
  fallbackLng: 'tr',
  interpolation: { escapeValue: false },
});

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  try { localStorage.setItem('lang', lng); } catch { /* ignore */ }
});
document.documentElement.lang = i18n.language;

// Pick the current-language string from a {tr, en} object (or pass through plain strings).
export function useL() {
  const { i18n: inst } = useTranslation();
  const lang = inst.language === 'en' ? 'en' : 'tr';
  return (v) => (v == null ? '' : typeof v === 'string' ? v : v[lang] ?? v.tr);
}

export default i18n;
