// =====================================================================
//  CONTENIDO DEL PORTFOLIO — edita aquí textos, links y proyectos.
//  Cada texto tiene versión "es" y "en".
// =====================================================================

import resnet from "./Assets/Projects/resnet.jpg";
import yolo from "./Assets/Projects/yolo.jpg";
import dinov2 from "./Assets/Projects/dinov2.jpg";
import summarization from "./Assets/Projects/summarization.jpg";
import siamese from "./Assets/Projects/siamese.jpg";
import rl from "./Assets/Projects/rl.jpg";
import ocr from "./Assets/Projects/ocr.jpg";
import thesis from "./Assets/Projects/thesis.jpg";
import expastro from "./Assets/Projects/expastro.jpg";
import dynamics from "./Assets/Projects/dynamics.jpg";
import chemevo from "./Assets/Projects/chemevo.jpg";

const GH = "https://github.com/curioso14";

export const profile = {
  name: "Jorge Dimter",
  shortName: "JORGE DIMTER",
  githubUser: "curioso14",
  links: {
    github: GH,
    linkedin: "https://www.linkedin.com/in/jorge-dimter/",
    email: "mailto:jorge.dimter@uc.cl",
    // Rellena si tienes (deja "" para ocultarlos):
    scholar: "",
    orcid: "",
  },
  email: "jorge.dimter@uc.cl",
  // Pon tu CV en public/cv.pdf y cambia esto a "cv.pdf" para activar el botón de descarga.
  // Ojo: tu CV actual incluye teléfono y fecha de nacimiento, quedarían públicos.
  cvFile: "",
};

export const ui = {
  es: {
    nav: { home: "Inicio", about: "Sobre mí", projects: "Proyectos", cv: "CV", hobbies: "Pasatiempos" },
    langButton: "Switch language to English",
    hello: "¡Hola!",
    iam: "SOY",
    typewriter: [
      "IA para mejorar Chile",
      "IA para una mejor salud en Chile",
      "Ciencia que llega a la clínica",
      "Datos al servicio de las personas",
      "Del telescopio al microscopio",
    ],
    introTitle: ["DÉJAME", "PRESENTARME"],
    intro: [
      <>
        Soy <b className="purple">investigador predoctoral en iHealth</b>{" "}
        (Instituto Milenio en Ingeniería e Inteligencia Artificial para la
        Salud) y estudiante del{" "}
        <b className="purple">Doctorado en Ciencias de la Computación</b> de la
        Pontificia Universidad Católica de Chile.
      </>,
      <>
        Mi tesis busca diseñar, entrenar y validar un{" "}
        <b className="purple">sistema de IA multimodal</b> para el diagnóstico
        automatizado de <b className="purple">cáncer de piel</b> mediante
        microscopía confocal de reflectancia, combinando visión por computador y
        procesamiento de lenguaje natural.
      </>,
      <>
        Vengo de la astrofísica: soy{" "}
        <b className="purple">Licenciado en Astronomía con Distinción Máxima</b>{" "}
        (PUC) y trabajé con espectroscopía de <i>VLT/MUSE</i>, fotometría,
        interferometría con <i>ALMA</i> y simulaciones de N cuerpos.
      </>,
      <>
        También tengo experiencia en <b className="purple">industria</b>: como
        analista de datos desarrollé dashboards, benchmarking, agentes de IA y
        CRM para consultoría minera, implementé Pipedrive para MINMETAL como
        freelance, y desarrollé modelos meteorológicos y de riesgo para
        proyectos de Codelco. Complementé eso con el{" "}
        <b className="purple">Diplomado en Ciencia de Datos</b> de la UAI.
      </>,
    ],
    findMe: "Encuéntrame en",
    connect: ["Siéntete libre de ", "conectar", " conmigo"],
    aboutTitle: ["Quién", "soy"],
    aboutCard: {
      lines: [
        <>
          Hola, soy <span className="purple">Jorge Dimter</span>, nacido y
          criado en <span className="purple">Osorno</span>, actualmente en{" "}
          <span className="purple">Santiago</span>.
        </>,
        <>
          Investigo en <span className="purple">IA aplicada a salud</span> en
          iHealth y curso el{" "}
          <span className="purple">Doctorado en Ciencias de la Computación</span>{" "}
          en la PUC. Me formé como astrónomo y pasé por la industria como
          analista de datos en proyectos mineros.
        </>,
        <>
          Me interesa llevar metodologías científicas desde la investigación
          académica a contextos productivos y de política pública.
        </>,
      ],
      interestsIntro: "Lo que más me interesa:",
      interests: [
        "Imágenes médicas y diagnóstico asistido",
        "Modelos multimodales (imagen + texto)",
        "Modelamiento predictivo y detección temprana de patrones",
        "Astronomía y datos científicos",
      ],
      hobbiesIntro: "Fuera del trabajo:",
      hobbies: ["Fotografía", "Música", "Cocina", "Andar en moto"],
      hobbiesLink: "Ver pasatiempos",
      languagesTitle: "Idiomas",
      languages: "Español (nativo) · Inglés (B2) · Francés (B2) · Alemán (básico)",
      quote: "Daría todo lo que sé por la mitad de lo que ignoro.",
      quoteAuthor: "René Descartes",
    },
    skillsTitle: ["Habilidades", "técnicas"],
    toolsTitle: ["Herramientas", "que uso"],
    githubTitle: ["Mi actividad en", "GitHub"],
    projectsTitle: ["Mis", "proyectos"],
    projectsSub: "Investigación, industria y proyectos en machine learning, visión por computador y astrofísica.",
    filters: {
      all: "Todos",
      research: "Investigación",
      work: "Industria",
      ml: "ML & Visión",
      astro: "Astrofísica",
    },
    inProgress: "En curso",
    demo: "Demo",
    hobbiesTitle: ["Mis", "pasatiempos"],
    hobbiesSub: "Lo que hago cuando no estoy frente a un modelo.",
    galleryTitle: ["Algunas de mis", "fotos"],
    galleryEmpty: "Galería en preparación.",
    cvTitle: ["Currículum", ""],
    downloadCv: "Descargar CV",
    footer: "Basado en la plantilla de",
  },
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", cv: "Resume", hobbies: "Hobbies" },
    langButton: "Cambiar idioma a español",
    hello: "Hi there!",
    iam: "I'M",
    typewriter: [
      "AI to make Chile better",
      "AI for better healthcare in Chile",
      "Science that reaches the clinic",
      "Data that serves people",
      "From telescope to microscope",
    ],
    introTitle: ["LET ME", "INTRODUCE MYSELF"],
    intro: [
      <>
        I'm a <b className="purple">predoctoral researcher at iHealth</b>{" "}
        (Millennium Institute for Intelligent Healthcare Engineering) and a{" "}
        <b className="purple">PhD student in Computer Science</b> at Pontificia
        Universidad Católica de Chile.
      </>,
      <>
        My thesis aims to design, train, and validate a{" "}
        <b className="purple">multimodal AI system</b> for automated{" "}
        <b className="purple">skin cancer</b> diagnosis from reflectance
        confocal microscopy, combining computer vision and natural language
        processing.
      </>,
      <>
        I come from astrophysics: I hold a{" "}
        <b className="purple">B.Sc. in Astronomy with Highest Distinction</b>{" "}
        (PUC) and worked with <i>VLT/MUSE</i> spectroscopy, photometry,{" "}
        <i>ALMA</i> interferometry, and N-body simulations.
      </>,
      <>
        I also bring <b className="purple">industry</b> experience: as a data
        analyst I built dashboards, benchmarking analyses, AI agents, and CRM
        setups for mining consultancy, implemented Pipedrive for MINMETAL as a
        freelancer, and developed weather and risk models for Codelco
        projects. I complemented this with the{" "}
        <b className="purple">Data Science Diploma</b> from UAI.
      </>,
    ],
    findMe: "Find me on",
    connect: ["Feel free to ", "connect", " with me"],
    aboutTitle: ["Who", "I am"],
    aboutCard: {
      lines: [
        <>
          Hi, I'm <span className="purple">Jorge Dimter</span>, born and
          raised in <span className="purple">Osorno</span>, currently based in{" "}
          <span className="purple">Santiago</span>.
        </>,
        <>
          I do research in <span className="purple">AI for healthcare</span> at
          iHealth and I'm pursuing a{" "}
          <span className="purple">PhD in Computer Science</span> at PUC. I
          trained as an astronomer and worked in industry as a data analyst on
          mining projects.
        </>,
        <>
          I care about moving scientific methods from academic research into
          industry and public policy.
        </>,
      ],
      interestsIntro: "What I care about most:",
      interests: [
        "Medical imaging and computer-aided diagnosis",
        "Multimodal models (image + text)",
        "Predictive modeling and early pattern detection",
        "Astronomy and scientific data",
      ],
      hobbiesIntro: "Outside work:",
      hobbies: ["Photography", "Music", "Cooking", "Riding my motorcycle"],
      hobbiesLink: "See hobbies",
      languagesTitle: "Languages",
      languages: "Spanish (native) · English (B2) · French (B2) · German (basic)",
      quote: "I would give everything I know for half of what I am ignorant of.",
      quoteAuthor: "René Descartes",
    },
    skillsTitle: ["Technical", "skills"],
    toolsTitle: ["Tools", "I use"],
    githubTitle: ["My", "GitHub activity"],
    projectsTitle: ["My", "projects"],
    projectsSub: "Research, industry, and projects in machine learning, computer vision, and astrophysics.",
    filters: {
      all: "All",
      research: "Research",
      work: "Industry",
      ml: "ML & Vision",
      astro: "Astrophysics",
    },
    inProgress: "In progress",
    demo: "Demo",
    hobbiesTitle: ["My", "hobbies"],
    hobbiesSub: "What I do when I'm not in front of a model.",
    galleryTitle: ["Some of my", "photos"],
    galleryEmpty: "Gallery coming soon.",
    cvTitle: ["Resume", ""],
    downloadCv: "Download CV",
    footer: "Based on the template by",
  },
};

// ---------------------------------------------------------------------
//  PROYECTOS
//  categories: lista de filtros donde aparece ("research" | "work" | "ml" | "astro")
//  img: imagen de la tarjeta, o null => tarjeta con ícono (icon: ver ProjectCards.js)
//  ghLink: "" => sin botón de GitHub
//  meta: línea corta bajo el título (institución / empresa · fechas)
// ---------------------------------------------------------------------
export const projects = [
  // ---------------- Investigación ----------------
  {
    categories: ["research", "ml"],
    img: null,
    icon: "microscope",
    inProgress: true,
    ghLink: "",
    tags: ["Multimodal", "CV", "NLP", "PyTorch"],
    meta: { es: "Tesis doctoral · iHealth / PUC · 2026 –", en: "PhD thesis · iHealth / PUC · 2026 –" },
    title: {
      es: "IA multimodal para diagnóstico de cáncer de piel (RCM)",
      en: "Multimodal AI for skin cancer diagnosis (RCM)",
    },
    description: {
      es: "Diseño, entrenamiento y validación de un sistema de IA multimodal para el diagnóstico automatizado de cáncer de piel mediante microscopía confocal de reflectancia, combinando visión por computador y NLP clínico. Supervisores: Dr. Domingo Mery y Dra. Jocelyn Dunstan. Financiamiento: Beca Ayudante Becario VRIP-UC y Tesista Fondecyt 1241825.",
      en: "Design, training, and validation of a multimodal AI system for automated skin cancer diagnosis from reflectance confocal microscopy, combining computer vision and clinical NLP. Advisors: Dr. Domingo Mery and Dr. Jocelyn Dunstan. Funding: VRIP-UC Teaching Assistant Fellowship and Fondecyt 1241825 thesis grant.",
    },
  },
  {
    categories: ["research", "astro"],
    img: thesis,
    ghLink: `${GH}/astronomy-thesis`,
    tags: ["VLT/MUSE", "Spectroscopy", "pPXF"],
    meta: { es: "Tesis de licenciatura · PUC · 2024", en: "B.Sc. thesis · PUC · 2024" },
    title: {
      es: "AGNs en vacíos cósmicos con MUSE",
      en: "AGNs in cosmic voids with MUSE",
    },
    description: {
      es: "Espectroscopía de campo integral de 11 AGNs en vacíos cósmicos: binning de Voronoi, ajuste de continuo con pPXF, diagramas BPT, tasas de formación estelar y metalicidades, comparando AGNs aislados y en interacción. Supervisor: Dr. Gaspar Galaz. Distinción Máxima.",
      en: "Integral field spectroscopy of 11 AGNs in cosmic voids: Voronoi binning, pPXF continuum fitting, BPT diagrams, star-formation rates, and metallicities, comparing isolated and interacting AGNs. Advisor: Dr. Gaspar Galaz. Highest Distinction.",
    },
  },
  {
    categories: ["research", "astro"],
    img: null,
    icon: "galaxy",
    ghLink: "",
    tags: ["Spectroscopy", "Galaxy mergers", "SMBH"],
    meta: { es: "Investigación de pregrado · PUC · verano 2022", en: "Undergraduate research · PUC · summer 2022" },
    title: {
      es: "Agujeros negros supermasivos en fusiones galácticas",
      en: "Supermassive black holes in galaxy mergers",
    },
    description: {
      es: "Estudio espectroscópico de alta resolución del sistema en etapa final de fusión NGC 17/34, sobre el crecimiento de agujeros negros supermasivos y la formación estelar en fusiones avanzadas. Supervisor: Dr. Ezequiel Treister.",
      en: "High-resolution spectroscopic study of the late-stage merger NGC 17/34, on supermassive black hole growth and star formation in advanced mergers. Advisor: Dr. Ezequiel Treister.",
    },
  },

  // ---------------- Industria ----------------
  {
    categories: ["work"],
    img: null,
    icon: "mining",
    ghLink: "",
    tags: ["Dashboards", "Benchmarking", "AI agents", "CRM"],
    meta: { es: "Analista de Datos · Koff & Guerrero Consultants · oct 2025 – abr 2026", en: "Data Analyst · Koff & Guerrero Consultants · Oct 2025 – Apr 2026" },
    title: {
      es: "Analítica y automatización para consultoría minera",
      en: "Analytics & automation for mining consultancy",
    },
    description: {
      es: "Soluciones analíticas y de automatización para la gestión y los proyectos de consultoría minera: dashboards ejecutivos, análisis de datos para benchmarking, desarrollo de agentes de IA y gestión de CRM.",
      en: "Analytics and automation solutions supporting management and mining consultancy projects: executive dashboards, benchmarking data analysis, AI agent development, and CRM management.",
    },
  },
  {
    categories: ["work"],
    img: null,
    icon: "snow",
    ghLink: "",
    tags: ["Time series", "Weather data", "Python"],
    meta: { es: "Analista de Datos · iCenit · 2025", en: "Data Analyst · iCenit · 2025" },
    title: {
      es: "Estimación automática de la isoterma 0 °C — Codelco Andina",
      en: "Automated 0 °C isotherm estimation — Codelco Andina",
    },
    description: {
      es: "Desarrollo de metodologías para estimar automáticamente la isoterma 0 °C a partir de datos meteorológicos históricos y en tiempo real.",
      en: "Developed methods to automatically estimate the 0 °C isotherm from historical and real-time weather data.",
    },
  },
  {
    categories: ["work"],
    img: null,
    icon: "risk",
    ghLink: "",
    tags: ["Clustering", "Time series", "Risk"],
    meta: { es: "Analista de Datos · iCenit · 2025", en: "Data Analyst · iCenit · 2025" },
    title: {
      es: "Análisis de riesgo de incidentes críticos — Codelco SSO",
      en: "Critical incident risk analysis — Codelco SSO",
    },
    description: {
      es: "Identificación de patrones en incidentes críticos de seguridad y salud ocupacional mediante técnicas de clustering y series temporales.",
      en: "Identified patterns in critical occupational health and safety incidents using clustering and time-series techniques.",
    },
  },

  {
    categories: ["work"],
    img: null,
    icon: "crm",
    ghLink: "",
    tags: ["Pipedrive", "CRM", "Data migration"],
    meta: { es: "Freelance · MINMETAL · 2026", en: "Freelance · MINMETAL · 2026" },
    title: {
      es: "Implementación de CRM Pipedrive — MINMETAL",
      en: "Pipedrive CRM implementation — MINMETAL",
    },
    description: {
      es: "Configuración del CRM Pipedrive para la consultora minera MINMETAL: levantamiento del proceso comercial, diseño del pipeline de ventas y sus etapas, campos y etiquetas personalizadas, y migración de clientes y negocios activos.",
      en: "Set up Pipedrive CRM for the mining consultancy MINMETAL: mapped the sales process, designed the sales pipeline and stages, custom fields and labels, and migrated clients and active deals.",
    },
  },

  // ---------------- ML & Visión ----------------
  {
    categories: ["ml"],
    img: dinov2,
    ghLink: `${GH}/deep-learning-projects/tree/main/project3_dinov2_visual_representations`,
    tags: ["DINOv2", "ViT", "Transfer learning"],
    title: {
      es: "Representaciones visuales con DINOv2",
      en: "Visual representations with DINOv2",
    },
    description: {
      es: "Análisis de tokens CLS y de parches de DINOv2 (ViT-S/14), matching entre imágenes por similitud coseno (similitud media 0,918 en 10 pares) y transfer learning sobre CIFAR-10 comparando píxeles crudos vs. features auto-supervisadas.",
      en: "Analysis of DINOv2 (ViT-S/14) CLS and patch tokens, cross-image patch matching via cosine similarity (mean similarity 0.918 over 10 pairs), and transfer learning on CIFAR-10 comparing raw pixels vs. self-supervised features.",
    },
  },
  {
    categories: ["ml"],
    img: yolo,
    ghLink: `${GH}/deep-learning-projects/tree/main/project2_yolo_instance_segmentation`,
    tags: ["YOLOv8", "Segmentation", "Fine-tuning"],
    title: {
      es: "Segmentación de instancias con YOLOv8",
      en: "Instance segmentation with YOLOv8",
    },
    description: {
      es: "Inferencia zero-shot en escenas urbanas de Santiago y fine-tuning de YOLOv8-nano sobre un dataset propio de deportes al aire libre, con estudio de hiperparámetros: subir la resolución a 640 px mejoró el mAP@50 de máscaras en un 34%.",
      en: "Zero-shot inference on Santiago street scenes and YOLOv8-nano fine-tuning on a custom outdoor-sports dataset, with a hyperparameter study: raising resolution to 640 px improved mask mAP@50 by 34%.",
    },
  },
  {
    categories: ["ml"],
    img: summarization,
    ghLink: `${GH}/deep-learning-projects/tree/main/project4_news_summarization_lstm_bart_t5`,
    tags: ["NLP", "Seq2Seq", "BART", "T5"],
    title: {
      es: "Resumen automático de noticias: LSTM → BART y T5",
      en: "News summarization: LSTM → BART & T5",
    },
    description: {
      es: "Del encoder-decoder LSTM a Seq2Seq con atención de Bahdanau, y fine-tuning de BART-base y T5-small sobre CNN/DailyMail. BART alcanzó ROUGE-1 de 32,9 frente a 4,9 del baseline LSTM.",
      en: "From an LSTM encoder-decoder to Seq2Seq with Bahdanau attention, and fine-tuning of BART-base and T5-small on CNN/DailyMail. BART reached ROUGE-1 of 32.9 vs. 4.9 for the LSTM baseline.",
    },
  },
  {
    categories: ["ml"],
    img: siamese,
    ghLink: `${GH}/deep-learning-projects/tree/main/project5_face_recognition_contrastive_learning`,
    tags: ["Metric learning", "Siamese", "ResNet18"],
    title: {
      es: "Verificación facial con aprendizaje contrastivo",
      en: "Face verification with contrastive learning",
    },
    description: {
      es: "Red siamesa con backbone ResNet18 congelado y cabeza de proyección entrenable sobre LFW. Análisis ROC con umbral óptimo por índice de Youden, visualización t-SNE de embeddings y análisis de errores.",
      en: "Siamese network with a frozen ResNet18 backbone and trainable projection head on LFW. ROC analysis with Youden-optimal threshold, t-SNE embedding visualization, and error analysis.",
    },
  },
  {
    categories: ["ml"],
    img: rl,
    ghLink: `${GH}/deep-learning-projects/tree/main/project6_reinforcement_learning_dqn_ppo_dpo`,
    tags: ["RL", "DQN", "PPO", "DPO", "LoRA"],
    title: {
      es: "Aprendizaje por refuerzo: DQN, PPO y DPO",
      en: "Reinforcement learning: DQN, PPO & DPO",
    },
    description: {
      es: "Agentes DQN y PPO en LunarLander-v3 con estudios de ablación, y alineamiento por preferencias de Qwen2.5-0.5B-Instruct con Direct Preference Optimization y LoRA.",
      en: "DQN and PPO agents on LunarLander-v3 with ablation studies, plus preference alignment of Qwen2.5-0.5B-Instruct using Direct Preference Optimization and LoRA.",
    },
  },
  {
    categories: ["ml"],
    img: resnet,
    ghLink: `${GH}/deep-learning-projects/tree/main/project1_resnet_cifar100`,
    tags: ["CNN", "ResNet", "CIFAR-100"],
    title: {
      es: "ResNet18 vs PlainNet18 en CIFAR-100",
      en: "ResNet18 vs PlainNet18 on CIFAR-100",
    },
    description: {
      es: "Implementación desde cero en PyTorch para aislar el efecto de las conexiones residuales en convergencia y precisión. ResNet18 llegó a 72,3% de validación y convergió notoriamente más rápido en las primeras épocas.",
      en: "From-scratch PyTorch implementation isolating the effect of residual connections on convergence and accuracy. ResNet18 reached 72.3% validation accuracy and converged noticeably faster in early epochs.",
    },
  },
  {
    categories: ["ml"],
    img: ocr,
    ghLink: `${GH}/pattern-recognition_CV`,
    tags: ["Pattern recognition", "OCR", "Features"],
    title: {
      es: "OCR de dígitos con descriptores morfológicos",
      en: "Digit OCR with morphological descriptors",
    },
    description: {
      es: "Pipeline clásico de reconocimiento de patrones: segmentación, extracción de descriptores morfológicos (zoning, medias por columna) y clasificación de dígitos a partir del análisis de sus distribuciones. Matriz de confusión diagonal en train y test.",
      en: "Classic pattern-recognition pipeline: segmentation, morphological feature extraction (zoning, column means), and digit classification driven by feature-distribution analysis. Fully diagonal confusion matrix on train and test.",
    },
  },

  // ---------------- Astrofísica ----------------
  {
    categories: ["astro"],
    img: expastro,
    ghLink: `${GH}/experimental_astrophysics`,
    tags: ["MUSE", "ALMA", "CIGALE", "Photometry"],
    title: {
      es: "Astrofísica experimental",
      en: "Experimental astrophysics",
    },
    description: {
      es: "Cuatro proyectos observacionales: espectroscopía de campo integral de NGC 2992 (MUSE), fotometría del Next Generation Fornax Survey, modelado SED de AGNs con CIGALE e interferometría de HD 163296 con ALMA.",
      en: "Four observational projects: integral field spectroscopy of NGC 2992 (MUSE), Next Generation Fornax Survey photometry, AGN SED modeling with CIGALE, and ALMA interferometry of HD 163296.",
    },
  },
  {
    categories: ["astro"],
    img: dynamics,
    ghLink: `${GH}/stellar-planetary_dynamics`,
    tags: ["N-body", "Rebound", "Gala"],
    title: {
      es: "Dinámica estelar y planetaria",
      en: "Stellar & planetary dynamics",
    },
    description: {
      es: "Simulaciones de N cuerpos y dinámica orbital: puntos de Lagrange, potencial de Plummer y órbitas galácticas, tránsitos y velocidades radiales de exoplanetas, y el mecanismo de Kozai-Lidov.",
      en: "N-body simulations and orbital dynamics: Lagrange points, Plummer potential and galactic orbits, exoplanet transits and radial velocities, and the Kozai-Lidov mechanism.",
    },
  },
  {
    categories: ["astro"],
    img: chemevo,
    ghLink: `${GH}/chemical_evolution_of_galaxies`,
    tags: ["Simulations", "EAGLE", "Python"],
    title: {
      es: "Evolución química de galaxias",
      en: "Chemical evolution of galaxies",
    },
    description: {
      es: "Análisis de simulaciones hidrodinámicas: propiedades del gas en galaxias en colisión, comparación de EAGLE con observaciones y efecto de las supernovas tipo Ia en la evolución química.",
      en: "Analysis of hydrodynamical simulations: gas properties in colliding galaxies, comparing EAGLE with observations, and the effect of Type Ia supernovae on chemical evolution.",
    },
  },
];

// ---------------------------------------------------------------------
//  CV (página "CV")
// ---------------------------------------------------------------------
export const cv = {
  es: {
    summary:
      "Investigador predoctoral de iHealth en IA aplicada a salud, con formación en astrofísica y experiencia en análisis de datos en industria y academia. Combino machine learning, visión por computador y procesamiento de lenguaje natural para abordar problemas complejos en contextos científicos y productivos.",
    sections: [
      {
        section: "Educación",
        items: [
          {
            title: "Doctorado en Ciencias de la Computación",
            place: "Pontificia Universidad Católica de Chile · Santiago",
            date: "2026 – 2030",
            detail:
              "Proyecto de tesis: diseño, entrenamiento y validación de un sistema de IA multimodal para el diagnóstico automatizado de cáncer de piel mediante microscopía confocal de reflectancia. Financiamiento: Beca Ayudante Becario VRIP-UC y Tesista Fondecyt 1241825.",
          },
          {
            title: "Diplomado en Ciencia de Datos",
            place: "Universidad Adolfo Ibáñez · Santiago",
            date: "2025 – 2026",
            detail:
              "Análisis de datos y machine learning: bases de datos, visualización, cloud computing, estadística y modelos llevados a producción.",
          },
          {
            title: "Licenciatura en Astronomía — Distinción Máxima",
            place: "Pontificia Universidad Católica de Chile · Santiago",
            date: "2021 – 2024",
            detail:
              "Física avanzada: mecánica clásica y lagrangiana, teoría electromagnética, métodos de física matemática, mecánica cuántica, análisis de datos y astrofísica.",
          },
          {
            title: "Ingeniería Civil (Plan Común)",
            place: "Pontificia Universidad Católica de Chile · Santiago",
            date: "2019 – 2021",
            detail: "Ciencias básicas: matemática, física, química, economía, comunicación y programación.",
          },
        ],
      },
      {
        section: "Experiencia en investigación",
        items: [
          {
            title: "Investigador Doctoral — iHealth",
            place: "Instituto Milenio en Ingeniería e Inteligencia Artificial para la Salud · Santiago",
            date: "abr 2026 – presente",
            detail:
              "Modelos de visión por computador y NLP para la detección temprana de lesiones cutáneas con microscopía confocal de reflectancia. Supervisores: Dr. Domingo Mery y Dra. Jocelyn Dunstan.",
          },
          {
            title: "Práctica de Licenciatura — AGNs en vacíos cósmicos con MUSE",
            place: "Pontificia Universidad Católica de Chile",
            date: "ago – dic 2024",
            detail:
              "Espectroscopía de campo integral de alta resolución para 11 AGNs en vacíos: metalicidad, formación estelar y sus relaciones; AGNs aislados vs. en interacción. Supervisor: Dr. Gaspar Galaz.",
          },
          {
            title: "Investigación de Pregrado — Agujeros negros supermasivos en fusiones galácticas",
            place: "Pontificia Universidad Católica de Chile",
            date: "verano 2022",
            detail:
              "Estudio espectroscópico de alta resolución del sistema en etapa final de fusión NGC 17/34. Supervisor: Dr. Ezequiel Treister.",
          },
        ],
      },
      {
        section: "Experiencia laboral",
        items: [
          {
            title: "Analista de Datos — Koff & Guerrero Consultants",
            place: "Consultoría minera",
            date: "oct 2025 – abr 2026",
            detail:
              "Soluciones analíticas y de automatización para gestión y proyectos de consultoría minera: dashboards ejecutivos, análisis de datos para benchmarking, agentes de IA y gestión de CRM.",
          },
          {
            title: "Consultor freelance — MINMETAL",
            place: "Consultoría minera",
            date: "2026",
            detail:
              "Implementación del CRM Pipedrive: levantamiento del proceso comercial, pipeline de ventas, campos y etiquetas personalizadas, y migración de clientes y negocios activos.",
          },
          {
            title: "Analista de Datos — iCenit",
            place: "Proyectos para Codelco",
            date: "ene – jul 2025",
            detail:
              "Metodologías para la estimación automática de la isoterma 0 °C para Codelco Andina con datos meteorológicos históricos y en tiempo real. Análisis de riesgo para Codelco SSO: patrones de incidentes críticos con clustering y series temporales.",
          },
        ],
      },
      {
        section: "Docencia",
        items: [
          { title: "Cálculo Multivariable y Ecuaciones Diferenciales", place: "Clases particulares", date: "2026" },
          { title: "Probabilidad y Estadística", place: "Clases particulares", date: "2025" },
          { title: "Física", place: "Clases particulares", date: "2021" },
          { title: "Cálculo I", place: "Clases particulares", date: "2019 – 2021" },
          { title: "Preparación PTU/PAES de Matemática y Física", place: "Clases particulares", date: "2019 – 2022" },
        ],
      },
      {
        section: "Habilidades e idiomas",
        items: [
          { title: "Lenguajes", detail: "Python, SQL, Mathematica / Wolfram, LaTeX" },
          {
            title: "Python",
            detail:
              "PyTorch, scikit-learn, pandas, NumPy, SciPy, Matplotlib, OpenCV, LangChain, Astropy, MPDAF, Linetools, Specutils, Photutils",
          },
          { title: "Otros", detail: "Power BI, Power Query (M), Excel, Pipedrive CRM" },
          { title: "Idiomas", detail: "Español (nativo), Inglés (B2), Francés (B2), Alemán (básico, no certificado)" },
        ],
      },
    ],
  },
  en: {
    summary:
      "iHealth predoctoral researcher in AI for healthcare, with a background in astrophysics and data analysis experience in industry and academia. I combine machine learning, computer vision, and natural language processing to tackle complex problems in scientific and production settings.",
    sections: [
      {
        section: "Education",
        items: [
          {
            title: "PhD in Computer Science",
            place: "Pontificia Universidad Católica de Chile · Santiago",
            date: "2026 – 2030",
            detail:
              "Thesis project: design, training, and validation of a multimodal AI system for automated skin cancer diagnosis from reflectance confocal microscopy. Funding: VRIP-UC Teaching Assistant Fellowship and Fondecyt 1241825 thesis grant.",
          },
          {
            title: "Diploma in Data Science",
            place: "Universidad Adolfo Ibáñez · Santiago",
            date: "2025 – 2026",
            detail:
              "Data analysis and machine learning: databases, data visualization, cloud computing, statistics, and models in production.",
          },
          {
            title: "B.Sc. in Astronomy — Highest Distinction",
            place: "Pontificia Universidad Católica de Chile · Santiago",
            date: "2021 – 2024",
            detail:
              "Advanced physics: classical and Lagrangian mechanics, electromagnetic theory, mathematical physics, quantum mechanics, data analysis, and astrophysics.",
          },
          {
            title: "Civil Engineering (common core)",
            place: "Pontificia Universidad Católica de Chile · Santiago",
            date: "2019 – 2021",
            detail: "Core sciences: mathematics, physics, chemistry, economics, communication, and programming.",
          },
        ],
      },
      {
        section: "Research experience",
        items: [
          {
            title: "Doctoral Researcher — iHealth",
            place: "Millennium Institute for Intelligent Healthcare Engineering · Santiago",
            date: "Apr 2026 – present",
            detail:
              "Computer vision and NLP models for early detection of skin lesions with reflectance confocal microscopy. Advisors: Dr. Domingo Mery and Dr. Jocelyn Dunstan.",
          },
          {
            title: "B.Sc. research project — AGNs in cosmic voids with MUSE",
            place: "Pontificia Universidad Católica de Chile",
            date: "Aug – Dec 2024",
            detail:
              "High-resolution integral field spectroscopy of 11 void AGNs: metallicity, star formation, and their relations; isolated vs. interacting AGNs. Advisor: Dr. Gaspar Galaz.",
          },
          {
            title: "Undergraduate research — Supermassive black holes in galaxy mergers",
            place: "Pontificia Universidad Católica de Chile",
            date: "Summer 2022",
            detail:
              "High-resolution spectroscopic study of the late-stage merger NGC 17/34. Advisor: Dr. Ezequiel Treister.",
          },
        ],
      },
      {
        section: "Work experience",
        items: [
          {
            title: "Data Analyst — Koff & Guerrero Consultants",
            place: "Mining consultancy",
            date: "Oct 2025 – Apr 2026",
            detail:
              "Analytics and automation for management and mining consultancy projects: executive dashboards, benchmarking data analysis, AI agents, and CRM management.",
          },
          {
            title: "Freelance consultant — MINMETAL",
            place: "Mining consultancy",
            date: "2026",
            detail:
              "Pipedrive CRM implementation: sales-process mapping, sales pipeline, custom fields and labels, and migration of clients and active deals.",
          },
          {
            title: "Data Analyst — iCenit",
            place: "Projects for Codelco",
            date: "Jan – Jul 2025",
            detail:
              "Methods for automated 0 °C isotherm estimation for Codelco Andina using historical and real-time weather data. Risk analysis for Codelco SSO: critical-incident patterns via clustering and time series.",
          },
        ],
      },
      {
        section: "Teaching",
        items: [
          { title: "Multivariable Calculus and Differential Equations", place: "Private tutoring", date: "2026" },
          { title: "Probability and Statistics", place: "Private tutoring", date: "2025" },
          { title: "Physics", place: "Private tutoring", date: "2021" },
          { title: "Calculus I", place: "Private tutoring", date: "2019 – 2021" },
          { title: "University admission test prep (Math & Physics)", place: "Private tutoring", date: "2019 – 2022" },
        ],
      },
      {
        section: "Skills & languages",
        items: [
          { title: "Languages", detail: "Python, SQL, Mathematica / Wolfram, LaTeX" },
          {
            title: "Python",
            detail:
              "PyTorch, scikit-learn, pandas, NumPy, SciPy, Matplotlib, OpenCV, LangChain, Astropy, MPDAF, Linetools, Specutils, Photutils",
          },
          { title: "Other", detail: "Power BI, Power Query (M), Excel, Pipedrive CRM" },
          { title: "Spoken languages", detail: "Spanish (native), English (B2), French (B2), German (basic, uncertified)" },
        ],
      },
    ],
  },
};

// ---------------------------------------------------------------------
//  PASATIEMPOS (página "Pasatiempos")
//  icon: "camera" | "music" | "cooking" | "moto"
//  Edita las descripciones a tu gusto.
// ---------------------------------------------------------------------
export const hobbies = [
  {
    icon: "camera",
    title: { es: "Fotografía", en: "Photography" },
    text: {
      es: "Mirar con calma y encontrar la composición. Abajo dejo algunas de mis fotos.",
      en: "Slowing down to find the composition. Some of my photos are below.",
    },
  },
  {
    icon: "music",
    title: { es: "Música", en: "Music" },
    text: {
      es: "Parte de mi día a día, dentro y fuera del trabajo.",
      en: "Part of my everyday life, at work and beyond.",
    },
  },
  {
    icon: "cooking",
    title: { es: "Cocina", en: "Cooking" },
    text: {
      es: "Experimentar en la cocina tiene bastante de método científico.",
      en: "Experimenting in the kitchen has a lot in common with the scientific method.",
    },
  },
  {
    icon: "moto",
    title: { es: "Moto", en: "Motorcycling" },
    text: {
      es: "Salir a rodar y despejar la cabeza.",
      en: "Getting out on the road to clear my head.",
    },
  },
];

// ---------------------------------------------------------------------
//  GALERÍA DE FOTOS
//  1. Copia tus fotos a src/Assets/Photos/ (jpg, idealmente < 400 KB c/u)
//  2. Impórtalas arriba de este archivo, p.ej.:
//       import foto1 from "./Assets/Photos/foto1.jpg";
//  3. Agrégalas aquí: { src: foto1, caption: { es: "Osorno", en: "Osorno" } }
// ---------------------------------------------------------------------
export const photos = [];
