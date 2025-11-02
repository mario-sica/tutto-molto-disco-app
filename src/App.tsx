import './App.scss'
import { Navbar } from "./components/Navbar.tsx";
import { Home } from "./components/Home.tsx";
import { InfoSection } from "./components/InfoSection.tsx";
import { Contattaci } from "./components/Contattaci.tsx";
import { ToastProvider } from "./contexts/ToastContext.tsx";
import logoFooter from "./assets/logo_footer.png";

function App() {
  return (
    <ToastProvider>
      <div style={{ background: '#ffffff', minHeight: '100vh' }}>
        <Navbar />
        <main>
          <Home />
          <InfoSection />
          <Contattaci />
        </main>
        <footer className="py-4 px-3 text-center" style={{ background: '#0043af', color: 'white' }}>
          <div className="mb-3">
              <div className='flex justify-content-center align-items-center h-full'>
                  <div className="flex justify-content-center top-0 h-8rem">
                      <img
                          src={logoFooter}
                          alt="Tutto Molto Disco"
                      />
                  </div>
              </div>
            <p className="text-100">Trasformiamo ogni evento in un'esperienza indimenticabile</p>
          </div>
          <div className="flex justify-content-center gap-4 mb-3">
            <a
              href="https://www.facebook.com/profile.php?id=61576893946460"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <i className="pi pi-facebook cursor-pointer" style={{ fontSize: '1.5rem' }}></i>
            </a>
            <a
              href="https://www.instagram.com/tuttomoltodisco/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <i className="pi pi-instagram cursor-pointer" style={{ fontSize: '1.5rem' }}></i>
            </a>
          </div>
          <p className="text-100 text-sm">
            © 2025 Tutto Molto Disco. Tutti i diritti riservati.
          </p>
        </footer>
      </div>
    </ToastProvider>
  )
}

export default App
