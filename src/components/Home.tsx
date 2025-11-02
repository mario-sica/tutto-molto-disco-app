import bgVideoTrast from '../assets/bgVideo4k.mp4'
import {Button} from "primereact/button";
import {useToast} from '../contexts/ToastContext';

export const Home = () => {
    const {showInfo} = useToast();

    return (
        <>
            <section id="home">
                <div className='w-full h-screen'>
                    <video className="w-full h-full" style={{objectFit: 'cover'}} src={bgVideoTrast} loop autoPlay playsInline
                           muted/>
                    <div
                        className="w-full h-full absolute top-0 flex flex-column justify-content-center align-items-center"
                    >
                        <div className="flex flex-column justify-content-center align-items-center">
                            <h1 className="text-3xl md:text-5xl font-bold text-center"
                                style={{color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                                Non é un party,<br/> é un culto.
                            </h1>
                            <div className="mt-3 md:mt-5">
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
            </section>
        </>
    );
};
