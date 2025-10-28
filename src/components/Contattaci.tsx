export const Contattaci = () => {
    return (
        <section id="contattaci" className="py-8 px-3 md:px-6">
            <div className="text-center mb-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0043af' }}>
                    Contattaci
                </h2>
                <p className="text-xl text-600 max-w-3 mx-auto">
                    Hai domande o vuoi organizzare un evento con noi? Non esitare a contattarci!
                </p>
            </div>

            <div className="max-w-4 mx-auto">
                <div className="grid">
                    <div className="col-12 md:col-4 p-3">
                        <div className="text-center p-4">
                            <div
                                className="flex align-items-center justify-content-center mb-3"
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: '#0043af',
                                    margin: '0 auto'
                                }}
                            >
                                <i className="pi pi-phone" style={{ fontSize: '1.5rem', color: 'white' }}></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: '#0043af' }}>
                                Telefono
                            </h3>
                            <p className="text-600">
                                +39 XXX XXX XXXX
                            </p>
                        </div>
                    </div>

                    <div className="col-12 md:col-4 p-3">
                        <div className="text-center p-4">
                            <div
                                className="flex align-items-center justify-content-center mb-3"
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: '#0043af',
                                    margin: '0 auto'
                                }}
                            >
                                <i className="pi pi-envelope" style={{ fontSize: '1.5rem', color: 'white' }}></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: '#0043af' }}>
                                Email
                            </h3>
                            <p className="text-600">
                                info@tuttomoltodisco.it
                            </p>
                        </div>
                    </div>

                    <div className="col-12 md:col-4 p-3">
                        <div className="text-center p-4">
                            <div
                                className="flex align-items-center justify-content-center mb-3"
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: '#0043af',
                                    margin: '0 auto'
                                }}
                            >
                                <i className="pi pi-map-marker" style={{ fontSize: '1.5rem', color: 'white' }}></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: '#0043af' }}>
                                Sede
                            </h3>
                            <p className="text-600">
                                Via Lorem Ipsum, 123
                                <br />
                                00000 Città
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 p-5 border-round-lg shadow-2" style={{ background: 'white' }}>
                    <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#0043af' }}>
                        Inviaci un Messaggio
                    </h3>
                    <p className="text-600 text-center line-height-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </section>
    );
};
