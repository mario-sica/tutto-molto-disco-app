import bgVideoTrast from '../assets/bgVideo1.mp4'
import {Button} from "primereact/button";
import {useToast} from '../contexts/ToastContext';

export const Home = () => {
    const {showInfo} = useToast();

    return (
        <>
            <section id="home">
                <div className='w-full h-screen'>
                    <video className="w-full h-full" style={{objectFit: 'cover'}} src={bgVideoTrast} loop autoPlay
                           muted/>
                    {/* Hero Section */}
                    <div
                        className="w-full h-full absolute top-0 flex flex-column justify-content-center align-items-center"
                    >
                        <div className="flex flex-column justify-content-center align-items-center">
                            <h1 className="text-3xl md:text-5xl font-bold text-center"
                                style={{color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                                Non é un party,<br/> é un culto.
                            </h1>
                            <div className="mt-3 md:mt-5" style={{cursor: 'not-allowed'}}>
                                <Button
                                    className="p-button-text text-white p-button-lg"
                                    onClick={() => showInfo('Non ancora!', 'Al momento non sono disponibili biglietti. 😢')}
                                    rounded
                                >
                                    <p className="font-bold md:text-2xl">Ottieni biglietti</p>
                                </Button>
                            </div>
                        </div>
                        <div className='w-full absolute bottom-0 pb-8 flex justify-content-center'>
                            <div className="chevron"></div>
                            <div className="chevron"></div>
                            <div className="chevron"></div>
                        </div>
                    </div>
                </div>

                {/* Event Types Section */}
                <div className="py-6 md:py-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" style={{color: '#0043af'}}>
                        Tipi di Eventi
                    </h2>
                    <div className="grid">
                        <div className="col-12 md:col-4 p-3">
                            <div className="p-5 border-round-lg text-center" style={{background: '#0043af'}}>
                                <i className="pi pi-users text-6xl mb-3" style={{color: 'white'}}></i>
                                <h3 className="text-2xl font-bold mb-3" style={{color: 'white'}}>
                                    Feste Private
                                </h3>
                                <p className="text-100 line-height-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 md:col-4 p-3">
                            <div className="p-5 border-round-lg text-center"
                                 style={{background: 'white', border: '2px solid #0043af'}}>
                                <i className="pi pi-calendar text-6xl mb-3" style={{color: '#0043af'}}></i>
                                <h3 className="text-2xl font-bold mb-3" style={{color: '#0043af'}}>
                                    Eventi Pubblici
                                </h3>
                                <p className="text-600 line-height-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 md:col-4 p-3">
                            <div className="p-5 border-round-lg text-center" style={{background: '#0043af'}}>
                                <i className="pi pi-heart text-6xl mb-3" style={{color: 'white'}}></i>
                                <h3 className="text-2xl font-bold mb-3" style={{color: 'white'}}>
                                    Degustazioni Vini
                                </h3>
                                <p className="text-100 line-height-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
