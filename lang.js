const translations = {
    en: {
        email: "efekansalman@efekansalman ",
        bio: "I am a software developer specialized in Java, Spring Boot, and Python. I work on projects in the field of neurobiology, combining software development with scientific research. I also develop various automation systems and projects in Java that focus on increasing efficiency and streamlining processes in different fields.",
        interestsTitle: "Interests",
        interestsList: [
            "Core Java & Spring (boot)",
            "Backend development",
            "Python",
            "Neuroscience",
            "Machine learning"
        ],
        languagesTitle: "Languages",
        languagesList: [
            "🇹🇷 Turkish",
            "🇬🇧 English (B2)",
            "🇫🇷 French (A2)"
        ]
    },
    tr: {
        email: "efekansalman@efekansalman ",
        bio: "Ben, Java, Spring Boot ve Python konusunda uzmanlaşan bir yazılım geliştiricisiyim. Yazılım geliştirmeyi bilimsel araştırmalarla birleştirerek nörobiyoloji alanında projeler üzerinde çalışıyorum. Ayrıca verimliliği artırmaya yönelik çeşitli otomasyon sistemleri ve projeler geliştiriyorum.",
        interestsTitle: "İlgi Alanlarım",
        interestsList: [
            "Core Java & Spring (boot)",
            "Backend geliştirme",
            "Python",
            "Nörobiyoloji",
            "Makine öğrenimi"
        ],
        languagesTitle: "Diller",
        languagesList: [
            "🇹🇷 Türkçe",
            "🇬🇧 İngilizce (B2)",
            "🇫🇷 Fransızca (A2)"
        ]
    },
    fr: {
        email: "efekansalman@efekansalman ",
        bio: "Je suis un développeur logiciel spécialisé en Java, Spring Boot et Python. Je travaille sur des projets dans le domaine de la neurobiologie, en combinant le développement logiciel avec la recherche scientifique. Je développe également divers systèmes d'automatisation et projets en Java visant à améliorer l'efficacité et rationaliser les processus dans différents domaines.",
        interestsTitle: "Centres d'intérêt",
        interestsList: [
            "Core Java & Spring (boot)",
            "Développement backend",
            "Python",
            "Neurosciences",
            "Apprentissage automatique"
        ],
        languagesTitle: "Langues",
        languagesList: [
            "🇹🇷 Turc",
            "🇬🇧 Anglais (B2)",
            "🇫🇷 Français (A2)"
        ]
    }
};

function setLanguage(lang) {
    document.getElementById("email").innerText = translations[lang].email;
    document.getElementById("bio").innerText = translations[lang].bio;
    document.getElementById("interests-title").innerText = translations[lang].interestsTitle;
    document.getElementById("languages-title").innerText = translations[lang].languagesTitle;
    
    const interestsList = document.getElementById("interests-list");
    interestsList.innerHTML = "";
    translations[lang].interestsList.forEach(interest => {
        let li = document.createElement("li");
        li.innerText = interest;
        interestsList.appendChild(li);
    });

    const languagesList = document.getElementById("languages-list");
    languagesList.innerHTML = "";
    translations[lang].languagesList.forEach(language => {
        let li = document.createElement("li");
        li.innerText = language;
        languagesList.appendChild(li);
    });
}

// Set default language to English
setLanguage('en');
