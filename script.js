const eventDate = new Date("2026-03-07T10:00:00-03:00").getTime();

const translations = {
  es: {
    page_title: "Carbriata Concours 2026 | Edicion Dolores",
    page_description:
      "Carbriata Concours 2026 se realiza el sabado 7 de marzo de 2026 en el Autodromo Municipal Miguel Angel Atauri de Dolores, Buenos Aires, con mas de 200 autos iconicos y vueltas de desfile.",
    nav_experience: "Experiencia",
    nav_format: "Formato",
    nav_lineup: "Coleccion",
    nav_tickets: "Entradas",
    nav_buy: "Comprar",
    lang_label: "Idioma",
    language_selector_aria: "Selector de idioma",
    hero_eyebrow: "Sabado, 7 de marzo de 2026",
    hero_title: "Carbriata Concours 2026",
    hero_lead:
      "Un encuentro automotor de un dia en el Autodromo Municipal Miguel Angel Atauri, Dolores, Buenos Aires. El concepto es claro: autos iconicos, vueltas de desfile y atmosfera pura de entusiastas sin presion de carrera.",
    countdown_title: "Comienza en (hora Argentina)",
    countdown_days: "Dias",
    countdown_hours: "Horas",
    countdown_minutes: "Minutos",
    countdown_seconds: "Segundos",
    hero_cta_tickets: "Comprar entradas",
    hero_cta_instagram: "Novedades en Instagram",
    visual_label: "Sede",
    visual_title: "Autodromo Miguel Angel Atauri",
    visual_meta: "Dolores, Buenos Aires",
    chip_1: "200+ Autos",
    chip_2: "700m de desfile",
    chip_3: "Sin competencia",
    exp_eyebrow: "Experiencia",
    exp_title: "Puntos destacados de esta edicion",
    exp_card1_title: "200+ autos iconicos",
    exp_card1_body:
      "La coleccion recorre leyendas de rally, clasicos historicos, deportivos, exoticos y maquinas con ADN de pista en una sola exhibicion.",
    exp_card2_title: "Vueltas de desfile, no carreras",
    exp_card2_body:
      "Los autos giran en trazado de 700 metros sin cronometro, sin ranking y sin formato competitivo.",
    exp_card3_title: "Food trucks y jazz en vivo",
    exp_card3_body:
      "El evento combina cultura automotriz con espacios gastronomicos y presentaciones de jazz durante toda la jornada.",
    schedule_eyebrow: "Formato",
    schedule_title: "Como se vive Carbriata 2026",
    tab_display: "Exhibicion",
    tab_track: "Pista",
    tab_lifestyle: "Estilo",
    tabs_aria_label: "Formato del evento",
    display_item1_title: "Galeria curada de autos",
    display_item1_body: "Una exhibicion de alta densidad con modelos iconicos de distintas epocas.",
    display_item2_title: "Categorias de coleccion",
    display_item2_body:
      "Rally legends, clasicos historicos, deportivos, exoticos y maquinas de pista.",
    display_item3_title: "Recorrido para publico",
    display_item3_body:
      "Espacios para observar detalles, comparar estilos y conversar con propietarios.",
    display_item3_badge: "Abierto",
    track_item1_title: "Vueltas de desfile",
    track_item1_body:
      "El circuito principal propone un recorrido de 700 metros dentro del autodromo.",
    track_item2_title: "Formato no competitivo",
    track_item2_body:
      "No hay cronometraje ni tabla de resultados: el foco esta en disfrutar manejar.",
    track_item2_badge: "Sin carrera",
    track_item3_title: "Tandas de participantes",
    track_item3_body:
      "Los duenos de autos participan en pista dentro de un entorno seguro y social.",
    track_item3_badge: "Duenos",
    life_item1_title: "Sesiones de jazz",
    life_item1_body: "Presentaciones en vivo durante el dia para una atmosfera relajada y elegante.",
    life_item1_badge: "En vivo",
    life_item2_title: "Zona de food trucks",
    life_item2_body: "Oferta gastronomica integrada a paddock y sectores de espectadores.",
    life_item2_badge: "Comida",
    life_item3_title: "Evento de un solo dia",
    life_item3_body: "La edicion 2026 esta planteada como una jornada completa en Dolores.",
    life_item3_badge: "Sab 7 Mar",
    lineup_eyebrow: "Coleccion",
    lineup_title: "Categorias publicadas de esta edicion",
    lineup_card1_title: "Rally legends",
    lineup_card1_body:
      "Iconos historicos del rally con configuraciones de epoca y alto valor cultural.",
    lineup_card2_title: "Clasicos historicos",
    lineup_card2_body:
      "Piezas de coleccion que representan diseno, ingenieria y tradicion automotriz.",
    lineup_card3_title: "Deportivos y exoticos",
    lineup_card3_body:
      "Modelos de altas prestaciones de segmentos premium y performance contemporanea.",
    lineup_card4_title: "Maquinas de pista",
    lineup_card4_body:
      "Autos enfocados en circuito seleccionados por su ingenieria y presencia visual.",
    tickets_eyebrow: "Entradas",
    tickets_title: "Desde ARS 39.900",
    tickets_body:
      "La venta oficial esta publicada en QRTicket para el sabado 7 de marzo de 2026. Sede: Autodromo Municipal Miguel Angel Atauri, Dolores, Buenos Aires.",
    tickets_cta_buy: "Abrir venta oficial",
    tickets_cta_ig: "Abrir Instagram",
    footer_meta: "Dolores, Buenos Aires | 7 de marzo de 2026",
    lineup_prev_aria: "Auto anterior",
    lineup_next_aria: "Auto siguiente"
  },
  en: {
    page_title: "Carbriata Concours 2026 | Dolores Edition",
    page_description:
      "Carbriata Concours 2026 takes place on Saturday, March 7, 2026 at Autodromo Municipal Miguel Angel Atauri in Dolores, Buenos Aires, with 200+ iconic cars and parade laps.",
    nav_experience: "Experience",
    nav_format: "Format",
    nav_lineup: "Lineup",
    nav_tickets: "Tickets",
    nav_buy: "Buy",
    lang_label: "Language",
    language_selector_aria: "Language selector",
    hero_eyebrow: "Saturday, March 7, 2026",
    hero_title: "Carbriata Concours 2026",
    hero_lead:
      "A one-day automotive gathering at Autodromo Municipal Miguel Angel Atauri in Dolores, Buenos Aires. The concept is clear: iconic cars, parade laps, and pure enthusiast atmosphere without race pressure.",
    countdown_title: "Starts in (Argentina time)",
    countdown_days: "Days",
    countdown_hours: "Hours",
    countdown_minutes: "Minutes",
    countdown_seconds: "Seconds",
    hero_cta_tickets: "Buy tickets",
    hero_cta_instagram: "Instagram updates",
    visual_label: "Venue",
    visual_title: "Autodromo Miguel Angel Atauri",
    visual_meta: "Dolores, Buenos Aires",
    chip_1: "200+ Cars",
    chip_2: "700m Parade Laps",
    chip_3: "Non-Competitive",
    exp_eyebrow: "Experience",
    exp_title: "Published highlights for this edition",
    exp_card1_title: "200+ iconic cars",
    exp_card1_body:
      "The lineup spans rally legends, historic classics, sports cars, exotics, and race-bred machines in one exhibition.",
    exp_card2_title: "Parade laps, not racing",
    exp_card2_body:
      "Cars run a 700-meter route with no timing, no ranking, and no race format.",
    exp_card3_title: "Food trucks and live jazz",
    exp_card3_body:
      "The event blends automotive culture with food areas and live jazz sets throughout the day.",
    schedule_eyebrow: "Format",
    schedule_title: "How Carbriata 2026 is structured",
    tab_display: "Display",
    tab_track: "Track",
    tab_lifestyle: "Lifestyle",
    tabs_aria_label: "Event format",
    display_item1_title: "Curated vehicle gallery",
    display_item1_body: "A dense showcase with iconic models from multiple eras.",
    display_item2_title: "Collection categories",
    display_item2_body: "Rally legends, historic classics, sports cars, exotics, and track machines.",
    display_item3_title: "Open visitor walkthrough",
    display_item3_body: "Spaces to inspect details, compare styles, and connect with owners.",
    display_item3_badge: "Open",
    track_item1_title: "Parade laps",
    track_item1_body: "The main track activity is a 700-meter parade route inside the autodromo.",
    track_item2_title: "Non-competitive format",
    track_item2_body: "No timing and no scoreboard: the focus is on driving enjoyment.",
    track_item2_badge: "No race",
    track_item3_title: "Owner sessions",
    track_item3_body: "Car owners drive on track in a safe and social setting.",
    track_item3_badge: "Owners",
    life_item1_title: "Live jazz sessions",
    life_item1_body: "Live performances run throughout the day for a relaxed and elegant atmosphere.",
    life_item1_badge: "Live",
    life_item2_title: "Food truck zone",
    life_item2_body: "Casual food options integrated into paddock and spectator areas.",
    life_item2_badge: "Food",
    life_item3_title: "Single-day event",
    life_item3_body: "The 2026 edition is designed as a full Saturday experience in Dolores.",
    life_item3_badge: "Sat 7 Mar",
    lineup_eyebrow: "Lineup",
    lineup_title: "Published categories in this edition",
    lineup_card1_title: "Rally legends",
    lineup_card1_body: "Historic rally icons with period-correct setup and strong cultural value.",
    lineup_card2_title: "Historic classics",
    lineup_card2_body: "Collector pieces representing design, engineering, and automotive tradition.",
    lineup_card3_title: "Sports and exotics",
    lineup_card3_body: "High-performance models from premium and contemporary performance segments.",
    lineup_card4_title: "Track machines",
    lineup_card4_body: "Circuit-focused cars selected for engineering and visual presence.",
    tickets_eyebrow: "Tickets",
    tickets_title: "From ARS 39,900",
    tickets_body:
      "Official ticket sales are published on QRTicket for Saturday, March 7, 2026. Venue: Autodromo Municipal Miguel Angel Atauri, Dolores, Buenos Aires.",
    tickets_cta_buy: "Open official ticket page",
    tickets_cta_ig: "Open Instagram",
    footer_meta: "Dolores, Buenos Aires | March 7, 2026",
    lineup_prev_aria: "Previous car",
    lineup_next_aria: "Next car"
  }
};

const languageSelector = document.getElementById("languageSelector");
const metaDescription = document.getElementById("metaDescription");
const languageStorageKey = "carbriata-language";

function applyTranslations(language) {
  const selectedLanguage = translations[language] ? language : "es";
  const dictionary = translations[selectedLanguage];

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = dictionary[key];
    if (!value) {
      return;
    }
    node.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    const key = node.dataset.i18nAriaLabel;
    const value = dictionary[key];
    if (!value) {
      return;
    }
    node.setAttribute("aria-label", value);
  });

  document.title = dictionary.page_title;
  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary.page_description);
  }
  document.documentElement.lang = selectedLanguage;
}

function initializeLanguage() {
  const storedLanguage = localStorage.getItem(languageStorageKey);
  const initialLanguage = storedLanguage && translations[storedLanguage] ? storedLanguage : "es";
  languageSelector.value = initialLanguage;
  applyTranslations(initialLanguage);
}

languageSelector.addEventListener("change", (event) => {
  const nextLanguage = event.target.value;
  applyTranslations(nextLanguage);
  localStorage.setItem(languageStorageKey, nextLanguage);
});

initializeLanguage();

const timeEls = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};

function updateCountdown() {
  const now = Date.now();
  const delta = Math.max(0, eventDate - now);

  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  const hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((delta / (1000 * 60)) % 60);
  const seconds = Math.floor((delta / 1000) % 60);

  timeEls.days.textContent = String(days).padStart(2, "0");
  timeEls.hours.textContent = String(hours).padStart(2, "0");
  timeEls.minutes.textContent = String(minutes).padStart(2, "0");
  timeEls.seconds.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

const dayTabs = document.querySelectorAll(".day-tab");
const scheduleLists = document.querySelectorAll(".schedule-list");

dayTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedDay = tab.dataset.day;

    dayTabs.forEach((button) => {
      const isSelected = button === tab;
      button.classList.toggle("active", isSelected);
      button.setAttribute("aria-selected", String(isSelected));
    });

    scheduleLists.forEach((list) => {
      list.classList.toggle("active", list.dataset.day === selectedDay);
    });
  });
});

const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -60px 0px"
  }
);

revealEls.forEach((el) => revealObserver.observe(el));

const lineupTrack = document.getElementById("lineupTrack");
const prevLineup = document.getElementById("prevLineup");
const nextLineup = document.getElementById("nextLineup");
let lineupIndex = 0;

function getVisibleCardCount() {
  if (window.matchMedia("(max-width: 780px)").matches) {
    return 1;
  }
  if (window.matchMedia("(max-width: 1080px)").matches) {
    return 2;
  }
  return 3;
}

function updateLineupButtons(maxIndex) {
  prevLineup.disabled = lineupIndex <= 0;
  nextLineup.disabled = lineupIndex >= maxIndex;

  prevLineup.style.opacity = prevLineup.disabled ? "0.4" : "1";
  nextLineup.style.opacity = nextLineup.disabled ? "0.4" : "1";
}

function updateLineupTrack() {
  const cards = Array.from(lineupTrack.children);
  if (cards.length === 0) {
    return;
  }

  const visibleCount = getVisibleCardCount();
  const maxIndex = Math.max(0, cards.length - visibleCount);
  lineupIndex = Math.min(lineupIndex, maxIndex);

  const cardWidth = cards[0].getBoundingClientRect().width;
  const gap = parseFloat(getComputedStyle(lineupTrack).gap) || 0;
  const offset = lineupIndex * (cardWidth + gap);
  lineupTrack.style.transform = `translateX(${-offset}px)`;

  updateLineupButtons(maxIndex);
}

prevLineup.addEventListener("click", () => {
  lineupIndex = Math.max(0, lineupIndex - 1);
  updateLineupTrack();
});

nextLineup.addEventListener("click", () => {
  const visibleCount = getVisibleCardCount();
  const total = lineupTrack.children.length;
  const maxIndex = Math.max(0, total - visibleCount);
  lineupIndex = Math.min(maxIndex, lineupIndex + 1);
  updateLineupTrack();
});

window.addEventListener("resize", updateLineupTrack);
updateLineupTrack();

const ambientLight = document.querySelector(".ambient-light");
const visualCard = document.querySelector(".visual-card");

document.addEventListener("pointermove", (event) => {
  const x = `${event.clientX}px`;
  const y = `${event.clientY}px`;
  document.documentElement.style.setProperty("--pointer-x", x);
  document.documentElement.style.setProperty("--pointer-y", y);
});

if (visualCard && ambientLight) {
  visualCard.addEventListener("pointermove", (event) => {
    const rect = visualCard.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) * 2 - 1) * 7;
    const rotateX = ((y / rect.height) * 2 - 1) * -5;
    visualCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  visualCard.addEventListener("pointerleave", () => {
    visualCard.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
}
