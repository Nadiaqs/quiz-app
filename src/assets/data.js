const questions = [
    {
      section: "About You",
      question: "Why do you want to learn Latin American Spanish?",
      options: ["Work", "Study", "Travel", "Family", "Love", "Other"],
    },
    {
      question: "Have you studied Spanish before?",
      options: ["Yes", "No"],
    },
    {
      question: "What kind of learning have you done?",
      options: [
        "In-person classes",
        "Mobile apps",
        "Private online lessons",
        "Online courses",
        "Language exchange",
        "Other",
      ],
    },
    {
      question: "Do you have a preference for a specific regional variety of Latin American Spanish?",
      options: ["Yes", "No"],
    },
    {
      question: "If yes: Which one?",
      options: [
        "Argentina",
        "Bolivia",
        "Chile",
        "Colombia",
        "Costa Rica",
        "Cuba",
        "Dominican Republic",
        "Ecuador",
        "El Salvador",
        "Guatemala",
        "Honduras",
        "Mexico",
        "Nicaragua",
        "Panama",
        "Paraguay",
        "Peru",
        "Uruguay",
        "Venezuela",
        "Other",
      ],
    },
    {
      question: "Date of birth:",
      type: "date",
    },
    {
      section: "Grammar & Vocabulary",
      question: "Mi hermano ___ en México.",
      options: ["vivir", "vive", "vivo", "vives"],
      answer: "vive",
      level: "A1",
    },
    {
      question: "Which word is a synonym of ‘trabajo’?",
      options: ["descanso", "empleo", "sueño", "viaje"],
      answer: "empleo",
      level: "A2",
    },
    {
      question:
        "Cuando era niño, siempre ___ con mis amigos en el parque.",
      options: ["juego", "jugaba", "jugué", "juegas"],
      answer: "jugaba",
      level: "B1",
    },
    {
      question: "Which of these sentences contains a grammar mistake?",
      options: [
        "Ayer comimos en casa.",
        "Voy a estudiado español.",
        "¿Qué hora es?",
        "No tengo hambre.",
      ],
      answer: "Voy a estudiado español.",
      level: "B2",
    },
    {
      section: "Reading Comprehension",
      question:
        "Hoy hace mucho calor. María y sus amigos van a la playa... Where is María going?",
      options: ["To work", "To her house", "To the beach", "To the mountains"],
      answer: "To the beach",
      level: "A1",
    },
    {
      question:
        "Hola Juan: No puedo ir a la reunión del viernes. ¿Podemos cambiarla...?",
      options: [
        "To cancel the meeting",
        "To reschedule the meeting",
        "To attend the Friday meeting",
        "To ignore the meeting",
      ],
      answer: "To reschedule the meeting",
      level: "A2",
    },
    {
      question:
        "Después de trabajar todo el día... Why did Marta go for a run?",
      options: [
        "Because she had lots of energy",
        "To relax",
        "Because the weather was nice",
        "Because she had a race",
      ],
      answer: "To relax",
      level: "B1",
    },
    {
      question:
        "Hoy en día, muchas personas usan aplicaciones para aprender idiomas...",
      options: [
        "Language apps are boring",
        "Studying at school is better",
        "Apps allow for flexible learning",
        "People no longer study languages",
      ],
      answer: "Apps allow for flexible learning",
      level: "B2",
    },
  ];
  
  export default questions