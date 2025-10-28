export const Eventi = () => {
    return (
        <section id="eventi" className="py-8 px-3 md:px-6">
            <div className="text-center mb-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0043af' }}>
                    Eventi
                </h2>
                <p className="text-xl text-600 max-w-3 mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div className="grid mt-6">
                <div className="col-12 md:col-6 p-3">
                    <div className="p-5 border-round-lg shadow-2" style={{ background: 'white' }}>
                        <h3 className="text-2xl font-bold mb-3" style={{ color: '#0043af' }}>
                            Prossimi Eventi
                        </h3>
                        <p className="text-600 line-height-3 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="text-600 line-height-3">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>

                <div className="col-12 md:col-6 p-3">
                    <div className="p-5 border-round-lg shadow-2" style={{ background: 'white' }}>
                        <h3 className="text-2xl font-bold mb-3" style={{ color: '#0043af' }}>
                            Eventi Passati
                        </h3>
                        <p className="text-600 line-height-3 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="text-600 line-height-3">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
