import { useState, useRef, useEffect } from 'react';

const writeupsData = [
    { id: 'strutted', src: 'htb', in: 'git', title: 'HTB — Strutted (Linux)', desc: 'File upload vulnerabilities and classic privilege escalation techniques explored in this Linux-based challenge.', tags: ['Recon', 'Web', 'Linux', 'Upload'] },
    { id: 'artificial', src: 'htb', in: 'git', title: 'HTB — Artificial(Linux)', desc: 'Vulnerabilities from file upload to backups leading to root', tags: ['Fle Upload', 'Linux', 'Backrest'] },
    { id: 'Me_and_My_Girlfriend_1', src: 'VMs', in: 'git', title: 'VulnHub — Me & My Girlfriend (Linux)', desc: 'Multiple attack vectors from IDOR to running PHP as root user for complete system compromise.', tags: ['Web', 'Linux', 'IDOR', 'PHP'] },
    { id: 'jangow1', src: 'VMs', in: 'git', title: 'VulnHub — Jangow01 (Linux)', desc: 'Command injection vulnerabilities leading to DirtyCow exploit for privilege escalation.', tags: ['Linux', 'FTP', 'Command Injection'] },
    { id: 'editor', src: 'htb', in: 'git', title: 'HTB — Editor(Linux)', desc: 'RCE through xWiki macro to passwords in plaintext and sudo permissions leading to root.', tags: ['Linux', 'Web', 'RCE', 'HTB'] },
    { id: 'htb-soulmate-796e854e097b', src: 'htb', in: 'medium', title: 'HTB — Soulmate(Linux)', desc: 'Additional HackTheBox writeups currently in development. Stay tuned for more detailed walkthroughs.', tags: ['Coming Soon', 'HTB'] },
    //{ id:'coming-soon-2',src:'VMs',in:'git', title:'VulnHub — Advanced Boxes', desc:'Complex multi-stage penetration testing scenarios and advanced exploitation techniques.', tags:['Coming Soon','Advanced'] },
    //{ id:'coming-soon-3',src:'tryhackme',in:'git', title:'TryHackMe CTF Rooms', desc:'Capture The Flag challenges covering various cybersecurity domains and methodologies.', tags:['Coming Soon','CTF'] }
];

const pageSize = 9;

const Writeups = () => {
    const [page, setPage] = useState(0);
    const gridRef = useRef(null);

    const totalPages = Math.ceil(writeupsData.length / pageSize);
    const start = page * pageSize;
    const end = Math.min(start + pageSize, writeupsData.length);
    const currentData = writeupsData.slice(start, end);

    const handlePrev = (e) => {
        e.preventDefault();
        if (page > 0) {
            setPage(page - 1);
            scrollToGrid();
        }
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (page < totalPages - 1) {
            setPage(page + 1);
            scrollToGrid();
        }
    };

    const scrollToGrid = () => {
        // Use timeout to allow render to happen first if needed, though react state update might be enough
        setTimeout(() => {
            gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
    };

    return (
        <>
            <h1 className="section-title">My Writeups</h1>
            <p className="section-subtitle">Deep dives into penetration testing challenges and virtual machines</p>

            <div className="projects-grid" id="writeups-grid" aria-live="polite" ref={gridRef}>
                {currentData.map((item, index) => {
                    const isComingSoon = item.tags.includes('Coming Soon');
                    const href = isComingSoon ? '#' : ((item.in === 'git') ? `https://github.com/6cloudguy/box-writeups/blob/main/${encodeURIComponent(item.src)}/${encodeURIComponent(item.id)}/README.md` : `https://medium.com/@6cloudguy/${encodeURIComponent(item.id)}`);
                    const target = isComingSoon ? undefined : "_blank";
                    const rel = isComingSoon ? undefined : "noopener noreferrer";
                    const buttonText = isComingSoon ? '⏳ Coming Soon' : '📖 Read Writeup';
                    const buttonClass = isComingSoon ? 'btn btn--coming-soon' : 'btn btn--linkedin';

                    return (
                        <article key={item.id} className={`project-card ${isComingSoon ? 'coming-soon' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                            <h2 id={`wu-${item.id}`} className="project-title">{item.title}</h2>
                            <p className="project-desc">{item.desc}</p>
                            <div className="tech-list">
                                {item.tags.map((t, i) => <span key={i} className='tech-badge'>{t}</span>)}
                            </div>
                            <div className="project-actions">
                                <a className={buttonClass} href={href} target={target} rel={rel} aria-label={isComingSoon ? 'Coming soon' : `Read ${item.title} writeup`}>
                                    {buttonText}
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>

            <div className="controls">
                <a href="#" className="btn" aria-label="Previous page" onClick={handlePrev} style={{ visibility: page <= 0 ? 'hidden' : 'visible' }}>← Previous</a>
                <a href="#" className="btn" aria-label="Next page" onClick={handleNext} style={{ visibility: page >= totalPages - 1 ? 'hidden' : 'visible' }}>Next →</a>
            </div>
        </>
    );
};

export default Writeups;
