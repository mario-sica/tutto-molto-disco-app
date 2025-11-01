import './App.scss'
import { Navbar } from "./components/Navbar.tsx";
import { Home } from "./components/Home.tsx";
import { Eventi } from "./components/Eventi.tsx";
import { ChiSiamo } from "./components/ChiSiamo.tsx";
import { Contattaci } from "./components/Contattaci.tsx";

function App() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Home />
        <Eventi />
        <ChiSiamo />
        <Contattaci />
      </main>
      <footer className="py-6 px-3 text-center" style={{ background: '#0043af', color: 'white' }}>
        <div className="mb-3">
          <h3 className="text-2xl font-bold mb-2">Tutto Molto Disco</h3>
          <p className="text-100">Trasformiamo ogni evento in un'esperienza indimenticabile</p>
        </div>
        <div className="flex justify-content-center gap-4 mb-3">
          <i className="pi pi-facebook cursor-pointer" style={{ fontSize: '1.5rem' }}></i>
          <i className="pi pi-instagram cursor-pointer" style={{ fontSize: '1.5rem' }}></i>
          <i className="pi pi-twitter cursor-pointer" style={{ fontSize: '1.5rem' }}></i>
        </div>
        <p className="text-100 text-sm">
          © 2025 Tutto Molto Disco. Tutti i diritti riservati.
        </p>
      </footer>
    </div>
  )
}

export default App
