# Tutto Molto Disco - Webapp

Webapp ufficiale di **Tutto Molto Disco**, organizzazione di eventi specializzata nella creazione di esperienze indimenticabili.

## Descrizione

Tutto Molto Disco si occupa di organizzare eventi di diverso tipo:
- Feste private
- Eventi pubblici
- Degustazioni vini
- E molto altro...

### Servizi Offerti

- DJ professionista
- Magliette personalizzate
- Strumentazione luminosa professionale
- Selezione vini pregiati
- Tutto il necessario per rendere ogni evento unico

## Tecnologie Utilizzate

- **React 19** - Libreria UI
- **TypeScript** - Type safety
- **Vite** - Build tool e dev server
- **PrimeReact** - Componenti UI
- **PrimeFlex** - Utility CSS per layout responsive
- **PrimeIcons** - Set di icone

## Design

- **Tema Colori**:
    - Bianco principale (#ffffff)
    - Blu intenso (#0043af) - colore ufficiale Tutto Molto Disco
- **Approccio**: Mobile-first responsive design
- **Layout**: Navbar con logo centrale e burger menu a sinistra

## Struttura del Progetto

```
src/
├── components/
│   ├── Navbar.tsx       # Navigazione principale con sidebar
│   ├── Home.tsx         # Pagina home con servizi
│   ├── InfoSection.tsx       # Sezione info
│   ├── ChiSiamo.tsx     # Chi siamo
│   └── Contattaci.tsx   # Contatti
├── assets/
│   └── tmd_logo.png     # Logo Tutto Molto Disco
├── App.tsx              # Componente principale
├── App.css              # Stili personalizzati
├── main.tsx             # Entry point
└── index.css            # Stili globali
```

## Installazione

1. Clona il repository
```bash
git clone <repository-url>
cd tutto-molto-disco-app
```

2. Installa le dipendenze
```bash
npm install
```

## Sviluppo

Avvia il server di sviluppo:
```bash
npm run dev
```

L'applicazione sarà disponibile su `http://localhost:5173/`

## Build

Crea la build di produzione:
```bash
npm run build
```

I file ottimizzati saranno generati nella cartella `dist/`

## Preview Build

Visualizza la build di produzione in locale:
```bash
npm run preview
```

## Linting

Esegui il linter per verificare la qualità del codice:
```bash
npm run lint
```

## Sezioni della Webapp

### Home
- Hero section con presentazione
- Panoramica dei servizi offerti (DJ, Luci, Magliette, Vini)
- Tipi di eventi organizzati

### InfoSection
- Chi siamo

### Chi Siamo
- Storia dell'organizzazione
- Missione e valori

### Contattaci
- Informazioni di contatto
- Form per richieste

### Shop
Sezione attualmente disabilitata, in arrivo prossimamente

## Features

- Navigazione smooth tra sezioni
- Design responsive ottimizzato per mobile
- Animazioni hover sulle card
- Sidebar menu per navigazione mobile-friendly
- Scrollbar personalizzata con tema colori
- Footer con link social

## Licenza

© 2025 Tutto Molto Disco. Tutti i diritti riservati.
