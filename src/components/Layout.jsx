import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <nav style={{ padding: '1.5rem 0', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100 }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>
                        Portfolio<span style={{ color: 'var(--color-accent)' }}>.</span>
                    </Link>
                    <ul style={{ display: 'flex', gap: '2rem' }}>
                        <li><Link to="/" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s' }}>Home</Link></li>
                        <li><Link to="/projects" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s' }}>Projects</Link></li>
                        <li><Link to="/about" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s' }}>About</Link></li>
                    </ul>
                </div>
            </nav>
            <main>
                {children}
            </main>
            <footer style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
                <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
