🧠 Food Showcase Web App (React + TypeScript)

Single-page application sviluppata per un cliente reale nel settore food, progettata per valorizzare il brand e migliorare l’esperienza utente rispetto ai classici siti statici.

👉 Obiettivo: trasformare una semplice vetrina in uno strumento che guida l’utente verso il contatto o l’acquisto offline

🎯 Il Problema

La maggior parte dei siti nel settore food:

sono statici poco curati lato UX non valorizzano i prodotti non accompagnano l’utente

Il cliente aveva bisogno di:

raccontare il brand mostrare i prodotti in modo efficace migliorare la percezione qualitativa

Senza trasformare tutto in un e-commerce (inutile in questo caso)

💡 La Soluzione

Ho progettato una SPA modulare con:

Sezioni narrative (Hero, Storia) Presentazione prodotti Menu organizzato per categorie Galleria visiva Navigazione semplice e lineare

👉 Risultato: un sito che non è solo bello, ma funziona

🧱 Tech Stack 

React (Hooks) 

TypeScript 

Architettura component-based 

State management locale essenziale

👉 Scelta intenzionale: niente overengineering, focus su performance e manutenibilità

🧩 Architettura 

App.tsx 
├── Header 
├── Hero 
├── Storia 
├── Prodotto 
├── Menu 
├── Gallery 
└── Footer 

Pattern utilizzati 

Separazione per responsabilità (componenti indipendenti) 

Struttura modulare e scalabile 

Gestione stato minima e mirata 

✨ Feature principali 

UI moderna e responsive 

Navigazione fluida 

Struttura chiara per contenuti 

Ottimizzazione della user experience 

Codice leggibile e mantenibile 

⚠️ Trade-off (voluti)

Questo progetto non è un e-commerce, per scelta strategica:

Nessun backend Nessuna gestione ordini Nessun pagamento online

👉 Perché? Perché il cliente aveva bisogno di posizionamento e immagine, non di complessità tecnica inutile.

🔧 Possibili evoluzioni

Se il progetto dovesse evolvere:

Integrazione backend (CMS o API) Sistema di ordini / prenotazioni SEO avanzato Analytics e tracking utenti 🧪 Cosa dimostra questo progetto

Questa è la parte che interessa davvero ai recruiter 👇

Capacità di lavorare su progetti reali Attenzione a UX e obiettivi di business Scelte tecniche consapevoli Codice organizzato e scalabile

👉 Non è un esercizio. È un prodotto.

⚙️ Setup npm install npm run dev
