import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="home">
            <section style={{
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem 0'
            }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            fontSize: '4rem',
                            fontWeight: 800,
                            marginBottom: '1.5rem',
                            lineHeight: 1.1
                        }}
                    >
                        Building Digital <span style={{ color: 'var(--color-accent)' }}>Experiences</span><br />
                        That Matter.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        style={{
                            fontSize: '1.25rem',
                            color: 'var(--color-text-secondary)',
                            maxWidth: '600px',
                            margin: '0 auto 3rem auto'
                        }}
                    >
                        I'm a full-stack developer passionate about creating intuitive, dynamic, and beautiful web applications.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <button style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            backgroundColor: 'var(--color-accent)',
                            color: '#0f172a',
                            border: 'none',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            boxShadow: '0 0 20px var(--color-accent-glow)',
                            transition: 'transform 0.2s',
                        }}
                            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        >
                            View My Work
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
