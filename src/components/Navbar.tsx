import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import logo from '../assets/tmd_logo.png';

export const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const menuItems = [
        { label: 'Home', path: '#home', disabled: false },
        { label: 'Eventi', path: '#eventi', disabled: false },
        { label: 'Chi Siamo', path: '#chi-siamo', disabled: false },
        { label: 'Contattaci', path: '#contattaci', disabled: false },
        { label: 'Shop', path: '#shop', disabled: true }
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-5 bg-white shadow-2" style={{ height: '70px' }}>
                <div className="flex align-items-center justify-content-center h-full px-3 md:px-4" style={{ position: 'relative' }}>
                    {/* Burger menu a sinistra */}
                    <Button
                        onClick={() => setVisible(!visible)}
                        icon="pi pi-bars"
                        className="p-button-text"
                        style={{
                            position: 'absolute',
                            left: '1rem',
                            color: '#0043af',
                            fontSize: '1.5rem'
                        }}
                    />

                    {/* Logo al centro */}
                    <div className="flex align-items-center">
                        <img
                            src={logo}
                            alt="Tutto Molto Disco"
                            style={{ height: '50px', width: 'auto' }}
                        />
                    </div>
                </div>
            </nav>

            <Sidebar
                visible={visible}
                onHide={() => setVisible(false)}
                position="left"
                className="w-full md:w-20rem"
                style={{
                    background: 'white',
                    borderRight: '2px solid #0043af'
                }}
            >
                <div className="flex flex-column gap-3 pt-4">
                    <h2 className="text-center mb-4" style={{ color: '#0043af' }}>Menu</h2>
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.disabled ? undefined : item.path}
                            onClick={() => !item.disabled && setVisible(false)}
                            className={`text-900 text-xl font-medium p-3 border-round transition-duration-150 ${
                                item.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-blue-50'
                            }`}
                            style={{
                                textDecoration: 'none',
                                color: item.disabled ? '#999' : '#0043af',
                                pointerEvents: item.disabled ? 'none' : 'auto'
                            }}
                        >
                            {item.label}
                            {item.disabled && <span className="ml-2 text-xs">(prossimamente)</span>}
                        </a>
                    ))}
                </div>
            </Sidebar>
        </>
    );
};