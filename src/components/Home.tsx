import bgVideoTrast from '../assets/bgVideoTrast.mp4'

export const Home = () => {
    const services = [
        {
            icon: 'pi pi-volume-up',
            title: 'DJ Professionista',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            icon: 'pi pi-sun',
            title: 'Strumentazione Luminosa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            icon: 'pi pi-shopping-bag',
            title: 'Magliette Personalizzate',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        },
        {
            icon: 'pi pi-star',
            title: 'Vini Selezionati',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        }
    ];

    return (
        <section id="home">
            <video className="w-full h-full bg-cover relative" src={bgVideoTrast} loop autoPlay muted />
            {/* Hero Section */}
            <div className="text-center py-6 md:py-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ color: '#0043af' }}>
                    Tutto Molto Disco
                </h1>
                <p className="text-xl md:text-2xl text-600 max-w-3 mx-auto">
                    Trasformiamo ogni evento in un'esperienza indimenticabile
                </p>
            </div>

            {/* Services Section */}
            <div className="py-6 md:py-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" style={{ color: '#0043af' }}>
                    I Nostri Servizi
                </h2>
                <div className="grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="col-12 md:col-6 lg:col-3 p-3"
                        >
                            <div
                                className="p-4 border-round-lg shadow-2 h-full"
                                style={{
                                    background: 'white',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div
                                    className="flex align-items-center justify-content-center mb-4"
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: '#0043af',
                                        margin: '0 auto'
                                    }}
                                >
                                    <i
                                        className={service.icon}
                                        style={{
                                            fontSize: '2.5rem',
                                            color: 'white'
                                        }}
                                    ></i>
                                </div>
                                <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#0043af' }}>
                                    {service.title}
                                </h3>
                                <p className="text-600 text-center line-height-3">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Event Types Section */}
            <div className="py-6 md:py-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" style={{ color: '#0043af' }}>
                    Tipi di Eventi
                </h2>
                <div className="grid">
                    <div className="col-12 md:col-4 p-3">
                        <div className="p-5 border-round-lg text-center" style={{ background: '#0043af' }}>
                            <i className="pi pi-users text-6xl mb-3" style={{ color: 'white' }}></i>
                            <h3 className="text-2xl font-bold mb-3" style={{ color: 'white' }}>
                                Feste Private
                            </h3>
                            <p className="text-100 line-height-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 md:col-4 p-3">
                        <div className="p-5 border-round-lg text-center" style={{ background: 'white', border: '2px solid #0043af' }}>
                            <i className="pi pi-calendar text-6xl mb-3" style={{ color: '#0043af' }}></i>
                            <h3 className="text-2xl font-bold mb-3" style={{ color: '#0043af' }}>
                                Eventi Pubblici
                            </h3>
                            <p className="text-600 line-height-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 md:col-4 p-3">
                        <div className="p-5 border-round-lg text-center" style={{ background: '#0043af' }}>
                            <i className="pi pi-heart text-6xl mb-3" style={{ color: 'white' }}></i>
                            <h3 className="text-2xl font-bold mb-3" style={{ color: 'white' }}>
                                Degustazioni Vini
                            </h3>
                            <p className="text-100 line-height-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
