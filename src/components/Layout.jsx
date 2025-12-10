import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <div className="layout">

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
