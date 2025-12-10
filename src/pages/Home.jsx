import React, { useRef, useState } from 'react';
import userPhoto from '../assets/userphoto.jpg';
import vitosLogo from '../assets/vitoslogo.gif';
import openaiLogo from '../assets/openailogo.png';
import geminiLogo from '../assets/geminilogo.jpg';
import book1 from '../assets/book1.jpg';
import book2 from '../assets/book2.jpg';
import book3 from '../assets/book3.jpg';
import book4 from '../assets/book4.jpg';
import vitos1 from '../assets/vitos1.jpg';
import vitos2 from '../assets/vitos2.jpg';
import vitos3 from '../assets/vitos3.jpg';
import kaptureLogo from '../assets/kapturelogo.png';
import signzyLogo from '../assets/signzylogo.webp';
import tcsLogo from '../assets/tcslogo.jpg';

import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Linkedin, User, X } from 'lucide-react';

const ImageSlideshow = () => {
    const images = [vitos1, vitos2, vitos3];
    const [index, setIndex] = useState(0);

    // Auto-play
    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ width: '100%', height: '350px', position: 'relative', overflow: 'hidden', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <AnimatePresence mode='wait'>
                <motion.img
                    key={index}
                    src={images[index]}
                    alt={`Product Slide ${index + 1}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </AnimatePresence>

            {/* Dots Indicator */}
            <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
                {images.map((_, i) => (
                    <div
                        key={i}
                        style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: i === index ? '#fff' : 'rgba(255,255,255,0.5)',
                            transition: 'background 0.3s'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            padding: '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start', // Start alignment for handling dropdown expansion
            zIndex: 100,
            pointerEvents: 'none' // Let clicks pass through empty space
        }}>
            {/* Title */}
            <h3 style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.5rem',
                margin: 0,
                pointerEvents: 'auto',
                color: 'var(--color-text-primary)'
            }}>
                Product Manager Portfolio
            </h3>

            {/* Contact Interactive Icon */}
            <div style={{ position: 'relative', pointerEvents: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        background: '#1e293b',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        transition: 'transform 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    {isOpen ? <X size={24} /> : <User size={24} />}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                marginTop: '1rem',
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '16px',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                width: '300px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ background: '#f1f5f9', padding: '8px', borderRadius: '50%' }}>
                                    <Phone size={18} color="#0f172a" />
                                </div>
                                <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>9629511273</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ background: '#f1f5f9', padding: '8px', borderRadius: '50%' }}>
                                    <Mail size={18} color="#0f172a" />
                                </div>
                                <a href="mailto:arunmanickam.49@gmail.com" style={{ fontSize: '0.95rem', fontWeight: '500', color: 'inherit', textDecoration: 'none' }}>arunmanickam.49@gmail.com</a>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ background: '#f1f5f9', padding: '8px', borderRadius: '50%' }}>
                                    <Linkedin size={18} color="#0077b5" />
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/arun-manickam-363228164/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ fontSize: '0.95rem', fontWeight: '500', color: '#0077b5', textDecoration: 'none' }}
                                >
                                    LinkedIn Profile
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const EXPERIENCE_DATA = [
    {
        id: 'kapture',
        company: 'Kapture CX',
        role: 'Product Manager',
        period: 'Nov 2024 – Present',
        logo: kaptureLogo,
        industry: 'CRM, CX',
        description: 'Gen AI Application Platforms and Flow based Automation builder',
        points: [
            "Led end-to-end design & development of AI-centric platforms (GenAI Voice & Chat Bot Builder), reducing go-live time from 3 weeks → 2–3 days.",
            "Launched a GenAI Voice & Chat Bot Configurator with cloud functions, KB/LLM integration, conversation flows, and multi-channel deployment.",
            "Owned product roadmap for CPO-led initiatives, translating strategy into releases, milestones, and sprint-level execution.",
            "Proposed and implemented an AI-first platform approach, now foundational across CX automation, GenAI voicebots, chatbots, and enterprise workflows.",
            "Shifted the company from developer-driven custom bot builds → a no-code self-service platform.",
            "Delivered the first version of the GenAI Voice Bot Platform in 16 weeks, now actively used internally and being rolled out to enterprise clients."
        ]
    },
    {
        id: 'signzy',
        company: 'Signzy',
        role: 'Product Manager',
        period: 'Sep 2023 – Nov 2024',
        logo: signzyLogo,
        industry: 'Fintech, Financial Services',
        description: 'Merchant onboarding with Video KYC for Banks',
        points: [
            "Translated business needs into product features, user flows, personas, and acceptance criteria.",
            "Delivered bi-monthly product releases, improving merchant onboarding accuracy, reducing manual checks, and accelerating approval time.",
            "Implemented an end-to-end merchant onboarding + Video KYC journey for a leading Indian bank.",
            "Successfully integrated the company’s Video KYC product into the bank’s ecosystem, enabling automated verification.",
            "Leveraged APIs (RAMP, MasterCard Database Match) to build a fraud-resistant onboarding flow.",
            "Authored the bank’s SOP playbooks, aligning product workflows with operational processes."
        ]
    },
    {
        id: 'tcs',
        company: 'Tata Consultancy Services',
        role: 'Business Analyst',
        period: 'July 2022 – Aug 2023',
        logo: tcsLogo,
        industry: 'E-commerce',
        description: 'OMNICHANNEL Systems Implementation for Fashion Conglomerate',
        points: [
            "Worked with the Product Manager to define product roadmap, feature prioritization, user stories, personas, and acceptance criteria.",
            "Delivered a Call Centre Order Management (COM) system, improving customer support efficiency.",
            "Proposed and shipped a Store Order Module (SOM) integrated with Aptos POS.",
            "Implemented updated routing logic post-BREXIT, reducing logistics cost and delivery failures for UK operations.",
            "Automated key business reports through IBM Cognos, reducing manual analysis time.",
            "Received Exceptional Performer Recognition in Retail Americas Townhall meeting."
        ]
    }
];

const ProductJourneyCycle = () => {
    // Radius = 150px (Smaller to fit screen)
    const steps = [
        { title: "Ideation", text: "Founder's office logic. Cost problem -> AI-First Platform.", x: 0, y: -150 }, // Top
        { title: "Design", text: "Crafting the perfect interface with UI/UX.", x: 142, y: -46 },  // Top-Right (approx 18 deg)
        { title: "Engineering", text: "Fullstack + ML. Cooling quarrels -> MVP1.", x: 88, y: 121 }, // Bottom-Right
        { title: "Launch", text: "Feedback loop: Customers. Go-live!", x: -88, y: 121 }, // Bottom-Left
        { title: "Evolution", text: "Enhancement & B2C launch.", x: -142, y: -46 } // Top-Left
    ];

    return (
        <div style={{ position: 'relative', width: '400px', height: '400px', margin: '0 auto' }}>
            {/* Central Hub Text - REMOVED per user request */}

            {/* Connecting Circle/Lines (SVG) - REMOVED per user request */}

            {steps.map((step, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    style={{
                        position: 'absolute',
                        left: `calc(50% + ${step.x}px)`,
                        top: `calc(50% + ${step.y}px)`,
                        transform: 'translate(-50%, -50%)',
                        width: '160px',
                        textAlign: 'center',
                        zIndex: 2
                    }}
                >
                    <div style={{
                        // background: '#fff', 
                        padding: '0.5rem',
                    }}>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', textDecoration: 'underline' }}>{step.title}</h4>
                        <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{step.text}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const FloatingKeyword = ({ text, top, left, right, bottom, rotate, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: delay, duration: 0.8 }}
        style={{
            position: 'absolute',
            top, left, right, bottom,
            transform: `rotate(${rotate}deg)`,
            fontFamily: 'var(--font-hand)',
            fontSize: '1.2rem',
            color: 'var(--color-text-secondary)',
            whiteSpace: 'nowrap',
            zIndex: 0,
            pointerEvents: 'none'
        }}
    >
        {text}
    </motion.div>
);

const RandomLogos = () => {
    return (
        <>
            {/* Top‑left corner around hero image */}
            <img
                src={vitosLogo}
                alt="vitos"
                className="random-logo"
                style={{ position: 'absolute', left: '-50px', top: '-50px' }}
            />
            {/* Top‑right corner around hero image */}
            <img
                src={openaiLogo}
                alt="openai"
                className="random-logo"
                style={{ position: 'absolute', right: '-50px', top: '-50px' }}
            />
            {/* Bottom‑left corner around hero image */}
            <img
                src={geminiLogo}
                alt="gemini"
                className="random-logo"
                style={{ position: 'absolute', left: '-50px', bottom: '-50px', borderRadius: '50%' }}
            />
        </>
    );
};

const SectionCard = ({ children, x, y, width = "600px", height = "auto", color = "transparent" }) => {
    return (
        <div
            style={{
                position: 'absolute',
                left: x,
                top: y,
                width: width,
                height: height,
                backgroundColor: color,
                // borderRadius: '24px', // Removed visual border
                padding: '0', // Removed padding as we don't need the box constraint
                // boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // Removed shadow
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transform: 'translate(-50%, -50%)', // KEY FIX: Center the card on its anchor point
                transition: 'all 0.5s ease-in-out', // Smooth transitions for resize
                fontFamily: 'var(--font-hand)' // Applied handwritten font globally to cards
            }}
        >
            {children}
        </div>
    );
};

const Home = () => {
    const containerRef = useRef(null);
    const [isBackstoryOpen, setIsBackstoryOpen] = useState(false);
    const [activeExpIndex, setActiveExpIndex] = useState(0);

    // Hook to track scroll progress of the window (default)
    const { scrollYProgress } = useScroll();

    // Auto-open backstory when scrolling near the section (approx 0.25 progress)
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Range: 0.20 to 0.30 covers the approach and arrival at the station
        // We only Auto-Open, we don't auto-close to avoid annoyance if user is reading
        if (latest > 0.20 && latest < 0.35 && !isBackstoryOpen) {
            setIsBackstoryOpen(true);
        }

        // Experience Section Scroll Trigger (approx 0.45 to 0.70)
        if (latest > 0.45 && latest < 0.75) {
            // Map the range 0.45-0.75 to 0-2 index
            const progress = (latest - 0.45) / (0.75 - 0.45); // 0 to 1
            if (progress < 0.33) setActiveExpIndex(0);
            else if (progress < 0.66) setActiveExpIndex(1);
            else setActiveExpIndex(2);
        }
    });

    const x = useTransform(scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["0vw", "-120vw", "50vw", "-80vw", "-80vw"]
    );

    const y = useTransform(scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["0vh", "-80vh", "-150vh", "-220vh", "-220vh"]
    );

    return (
        <div style={{ position: 'relative' }}>

            <div
                ref={containerRef}
                style={{ height: '500vh' }}
            />

            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    pointerEvents: 'none',
                }}
            >
                {/* Fixed Header Overlay */}
                <Header />

                {/* The Moving Canvas */}
                <motion.div
                    style={{
                        x,
                        y,
                        position: 'absolute',
                        top: '50%',      // KEY FIX: Origin is center of screen
                        left: '50%',     // KEY FIX: Origin is center of screen
                        width: 0,        // Canvas is points-based, no intrinsic size needed
                        height: 0,
                        pointerEvents: 'auto', // Re-enable pointer events for buttons/links
                    }}
                >


                    {/* --- CONTENT SECTIONS --- */}

                    {/* 1. Hero (Center 0,0) */}
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '600px',
                        textAlign: 'center',
                        transform: 'translate(-50%, -50%)', // Centered on origin
                    }}>
                        {/* Floating Keywords for "Empty Spaces" */}
                        <FloatingKeyword text="Voice Agent" top="-120px" left="-180px" rotate={-10} delay={0.5} />
                        <FloatingKeyword text="Gen AI powered Chat Bots" top="-80px" right="-220px" rotate={5} delay={0.7} />
                        <FloatingKeyword text="UX analysis" top="50%" left="-250px" rotate={-5} delay={0.9} />
                        <FloatingKeyword text="tracking Sucess metrics" top="60%" right="-280px" rotate={8} delay={1.1} />
                        <FloatingKeyword text="Product Roadmap" bottom="-80px" left="-150px" rotate={-8} delay={1.3} />
                        <FloatingKeyword text="RAG powered Knowledge base" bottom="-120px" right="-100px" rotate={4} delay={1.5} />
                        <FloatingKeyword text="LangChain Powered Multi Agent Architecture" top="-180px" left="50px" rotate={-3} delay={1.7} />
                        <FloatingKeyword text="PWC Partnership Projects" bottom="-180px" left="20px" rotate={3} delay={1.9} />

                        <div style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            backgroundColor: '#e2e8f0',
                            margin: '0 auto 2rem',
                            backgroundImage: `url(${userPhoto})`,
                            backgroundSize: 'cover',
                            position: 'relative' // Needed for absolute positioning of logos
                        }}>
                            <RandomLogos />
                        </div>
                        <h1 style={{ fontFamily: 'var(--font-hand)', fontSize: '4rem', marginBottom: '1rem' }}>
                            Hello, I'm Arun
                        </h1>
                        <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.5rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                            Product Manager building AI-driven platforms and CX automation tools. I launch scalable GenAI products with a focus on vision, strategy, and data-driven execution.
                        </p>
                    </div>

                    {/* 2. My Backstory (Right: 120vw, Down: 80vh) */}
                    <SectionCard x="120vw" y="80vh">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Backstory</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                            It wasn't a straight path. It started with a spark of inspiration from a mentor and led to a deep dive into the art and science of product management.
                        </p>

                        {!isBackstoryOpen && (
                            <button
                                onClick={() => setIsBackstoryOpen(true)}
                                style={{
                                    padding: '1rem 2rem',
                                    fontSize: '1.1rem',
                                    backgroundColor: 'var(--color-text-primary)',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    alignSelf: 'flex-start',
                                    transition: 'transform 0.2s',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                }}
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            >
                                Know more
                            </button>
                        )}

                        {/* Expanded Content - Appears Below */}
                        {isBackstoryOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    position: 'relative',
                                    marginTop: '2rem',
                                    paddingTop: '2rem',
                                    borderTop: '1px dashed var(--color-text-secondary)'
                                }}
                            >
                                <button
                                    onClick={() => setIsBackstoryOpen(false)}
                                    style={{
                                        position: 'absolute',
                                        top: '0',
                                        right: '0',
                                        background: 'none',
                                        border: 'none',
                                        fontSize: '1.5rem',
                                        cursor: 'pointer',
                                        color: 'var(--color-text-secondary)'
                                    }}
                                >
                                    ✕
                                </button>

                                {/* Story Text Container */}
                                <div style={{ position: 'relative', zIndex: 5, padding: '1rem' }}>

                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-hand)' }}>My Origin Story</h3>

                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                        I got inspired by a client-side product manager at my first job. I was a Business Analyst back then.
                                        This PM from the US guided me on what Product Management truly is—its magic, art, and science.
                                    </p>

                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                                        That inspiration sparked a reading spree—books on startups, entrepreneurship, and product strategy.
                                        I decided to pivot from service-based MNCs to product-based startups, moving to Bangalore to chase that fast-paced, high-impact environment I love.
                                    </p>
                                </div>

                                {/* Floating Books - Positioned to the LEFT of the text card */}
                                <motion.img
                                    src={book1}
                                    style={{ position: 'absolute', width: '100px', top: '0', left: '-180px', transform: 'rotate(-15deg)', zIndex: 1 }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                />
                                <motion.img
                                    src={book2}
                                    style={{ position: 'absolute', width: '120px', top: '80px', left: '-220px', transform: 'rotate(10deg)', zIndex: 1 }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                />
                                <motion.img
                                    src={book3}
                                    style={{ position: 'absolute', width: '110px', top: '180px', left: '-160px', transform: 'rotate(5deg)', zIndex: 6 }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                />
                                <motion.img
                                    src={book4}
                                    style={{ position: 'absolute', width: '90px', top: '250px', left: '-240px', transform: 'rotate(-8deg)', zIndex: 6 }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                />

                            </motion.div>
                        )}
                    </SectionCard>

                    {/* 3. Work Experience (Left: -50vw, Down: 150vh) */}
                    <SectionCard x="-50vw" y="150vh" width="900px">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Experience</h2>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            {/* Left: Buttons/Logos */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100px' }}>
                                {EXPERIENCE_DATA.map((exp, index) => (
                                    <button
                                        key={exp.id}
                                        onClick={() => setActiveExpIndex(index)}
                                        style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%',
                                            border: activeExpIndex === index ? '4px solid var(--color-accent)' : '2px solid #e2e8f0',
                                            padding: '0',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            transform: activeExpIndex === index ? 'scale(1.1)' : 'scale(1)',
                                            boxShadow: activeExpIndex === index ? '0 0 15px var(--color-accent-glow)' : 'none'
                                        }}
                                    >
                                        <img src={exp.logo} alt={exp.company} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </button>
                                ))}
                            </div>

                            {/* Right: Details Card */}
                            <div style={{ flex: 1, overflow: 'hidden' }}> {/* Overflow hidden for transition containment */}
                                {EXPERIENCE_DATA.map((exp, index) => (
                                    activeExpIndex === index && (
                                        <motion.div
                                            key={exp.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ height: '350px', overflowY: 'auto', paddingRight: '1rem' }} // Fixed height + scroll for content
                                        >
                                            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text-primary)' }}>{exp.company}</h3>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{exp.role}</span>
                                                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', background: '#e2e8f0', padding: '0.2rem 0.8rem', borderRadius: '12px' }}>{exp.period}</span>
                                            </div>
                                            <p style={{ fontSize: '0.95rem', color: 'var(--color-accent)', marginBottom: '1rem', fontWeight: '500' }}>
                                                {exp.industry} • {exp.description}
                                            </p>
                                            <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                {exp.points.map((point, i) => (
                                                    <li key={i} style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )
                                ))}
                            </div>
                        </div>
                    </SectionCard>

                    {/* 4. Launched Products (Right: 80vw, Down: 220vh) */}
                    <SectionCard x="80vw" y="220vh" width="1000px">
                        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>Launched Products</h2>
                        <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                            The AI-first platforms enable users to build Voice agents, DIY chat agents, and Multi-agents.
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                            {/* Left Side: Slideshow */}
                            <div style={{ flex: '0 0 45%' }}>
                                <ImageSlideshow />
                            </div>

                            {/* Right Side: The Cycle */}
                            <div style={{ flex: '0 0 55%', display: 'flex', justifyContent: 'center' }}>
                                <ProductJourneyCycle />
                            </div>
                        </div>
                    </SectionCard>

                </motion.div >
            </div >
        </div >
    );
};

export default Home;
