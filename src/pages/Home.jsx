import React, { useRef, useState } from 'react';
import userPhoto from '../assets/userphoto.jpg';
import vitosLogo from '../assets/vitoslogo.gif';
// Rebuild trigger
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

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

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
        <div style={{ position: 'relative', width: '500px', height: '400px', margin: '0 auto' }}>
            {/* Central Hub Text - REMOVED per user request */}

            {/* Connecting Circle/Lines (SVG) - REMOVED per user request */}
            {/* <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
                 <circle cx="250" cy="200" r="150" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="10 10" />
            </svg> */}

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
                        <p style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{step.text}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

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

    // --- CONFIGURATION OF THE "JOURNEY" ---
    // We map scroll progress (0 to 1) to X/Y coordinates of the CAMERA.
    // To move the camera TO a point (x, y), we translate the canvas BY (-x, -y).

    // 1. Hero: (0, 0)
    // 2. Backstory: (120vw, 80vh) -> moving Down-Right
    // 3. Experience: (-50vw, 150vh) -> moving Down-Left
    // 4. Products: (80vw, 220vh) -> moving Down-Right again

    // Note: Using 'vw'/'vh' in calculations can be tricky with simple numbers. 
    // For robustness, we'll stick to pixels or percentages assuming a standard desktop canvas for now, 
    // or use calculated strings if Motion supports it (it does mostly).
    // Let's use percentages of the viewport width/height (100vw/100vh) for relative movement.

    const x = useTransform(scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["0vw", "-120vw", "50vw", "-80vw", "-80vw"]
    );

    const y = useTransform(scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["0vh", "-80vh", "-150vh", "-220vh", "-220vh"]
    );

    // Rotation adds to the "Freeform" haphazard feel (optional, kept subtle)
    // REMOVED per user request for better readability
    // const rotate = useTransform(scrollYProgress,
    //     [0, 0.25, 0.5, 0.75, 1],
    //     [0, -5, 3, -2, 0]
    // );

    return (
        <div style={{ position: 'relative' }}>

            {/* 
        This is the "Scroll Driver". It has a huge height to allow scrolling.
        The user scrolls THIS element.
      */}
            <div
                ref={containerRef}
                style={{ height: '500vh' }}
            />

            {/* 
        This is the "Viewport" or Window. It stays fixed on screen.
        It contains the Canvas which moves around inside it.
      */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    pointerEvents: 'none', // Allow scroll-through to the driver div
                }}
            >
                {/* The Moving Canvas */}
                <motion.div
                    style={{
                        x,
                        y,
                        // rotate, // Removed rotation
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
                    <SectionCard x="80vw" y="220vh" width="850px">
                        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1rem' }}>Launched Products</h2>
                        <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
                            The AI-first platforms enable users to build Voice agents, DIY chat agents, and Multi-agents.
                        </p>

                        <ProductJourneyCycle />

                        {/* Visual Evidence (Vitos Images) - Super Sized & No Captions */}

                        <motion.div
                            style={{ position: 'absolute', top: '10%', right: '-30px', width: '220px', transform: 'rotate(6deg)', zIndex: 1 }}
                            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                        >
                            <img src={vitos1} alt="Vitos Interface 1" style={{ width: '100%', borderRadius: '8px', border: '3px solid #fff', boxShadow: '0 5px 10px rgba(0,0,0,0.1)' }} />
                        </motion.div>

                        <motion.div
                            style={{ position: 'absolute', bottom: '0%', left: '-30px', width: '240px', transform: 'rotate(-4deg)', zIndex: 1 }}
                            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                        >
                            <img src={vitos2} alt="Vitos Interface 2" style={{ width: '100%', borderRadius: '8px', border: '3px solid #fff', boxShadow: '0 5px 10px rgba(0,0,0,0.1)' }} />
                        </motion.div>

                        <motion.div
                            style={{ position: 'absolute', top: '-10%', left: '-10px', width: '200px', transform: 'rotate(-8deg)', zIndex: 1 }}
                            initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                        >
                            <img src={vitos3} alt="Vitos Interface 3" style={{ width: '100%', borderRadius: '8px', border: '3px solid #fff', boxShadow: '0 5px 10px rgba(0,0,0,0.1)' }} />
                        </motion.div>

                    </SectionCard>

                </motion.div>
            </div >
        </div >
    );
};

export default Home;
