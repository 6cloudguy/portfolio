import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="hero-title">Cybersecurity Aspirant</h1>
                <p className="hero-subtitle">Hack the Box Player | Studying for eJPT | Loves Music</p>
                <p className="hero-description">
                    Passionate about offensive security with expertise in web exploitation
                    and ethical hacking. Currently pursuing <span className="highlight">eJPTv2 certification</span> while building
                    practical experience through hands-on labs and real-world security challenges.
                </p>
                <div className="hero-cta">
                    <Link to="/writeups" className="btn-primary">View My Work</Link>
                    <Link to="/contact" className="btn-secondary">Get In Touch</Link>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="profile-card">
                    <div className="profile-img">
                        <img src="/assets/image - Copy.jpg" alt="Pranav P - Cybersecurity aspirant" />
                    </div>
                    <div className="profile-name">Pranav P</div>
                    <div className="profile-role">Cybersecurity Aspirant</div>
                    <div className="brand-subtitle">2nd Year BSc CS Student</div>

                    <div className="profile-stats">
                        <div className="stat-item">
                            <span className="stat-label">Experience</span>
                            <span className="stat-value">1 Year</span>
                        </div>
                        {/* <div className="stat-item">
              <span className="stat-label">Certifications</span>
              <span className="stat-value">3</span>
            </div> */}
                        <div className="stat-item">
                            <span className="stat-label">Focus</span>
                            <span className="stat-value">Red Team</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Status</span>
                            <span className="stat-value">Available</span>
                        </div>
                    </div>
                </div>

                <div className="content-area">
                    {/* About Me */}
                    <div className="section-card">
                        <h2 className="section-title">About Me</h2>
                        <p className="about-text">
                            I'm a dedicated <span className="highlight">cybersecurity aspirant</span> with a strong foundation in
                            offensive security methodologies. As a 2nd-year Computer Science student, I combine academic knowledge with hands-on practical experience.
                        </p>
                        <p className="about-text">
                            My approach to security testing follows industry-standard methodologies: comprehensive reconnaissance,
                            systematic enumeration, precise exploitation, thorough post-exploitation analysis, and detailed reporting.
                            I believe in <span className="highlight">methodical, responsible disclosure</span> and contributing to the
                            cybersecurity community through knowledge sharing.
                        </p>
                        <p className="about-text">
                            When I'm not behind the terminal, you'll find me preparing for my
                            <span className="highlight">eJPTv2 certification</span> while continuously expanding my skills through
                            platforms like HackTheBox, TryHackMe, and VulnHub.
                        </p>
                    </div>

                    {/* Technical Skills */}
                    <div className="section-card">
                        <h2 className="section-title">Technical Expertise</h2>
                        <div className="skills-grid">

                            <div className="skill-category">
                                <div className="skill-title">⚙️ Tools & Frameworks</div>
                                <ul className="skill-list">
                                    <li className="skill-item">Metasploit</li>
                                    <li className="skill-item">Burp Suite</li>
                                    <li className="skill-item">Nmap</li>
                                    <li className="skill-item">FFUF</li>
                                </ul>
                            </div>

                            <div className="skill-category">
                                <div className="skill-title">💻 Programming</div>
                                <ul className="skill-list">
                                    <li className="skill-item">Python</li>
                                    <li className="skill-item">C</li>
                                    <li className="skill-item">C++</li>
                                    <li className="skill-item">Bash Scripting</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="section-card">
                        <h2 className="section-title">Certifications & Education</h2>
                        <div className="cert-grid">
                            <div className="cert-item">
                                <div className="cert-name">BSc Computer Science</div>
                                <div className="cert-issuer">MG College • 2nd Year</div>
                                <span className="cert-status">In Progress</span>
                            </div>

                            <div className="cert-item">
                                <div className="cert-name">INE Certified Cloud Associate</div>
                                <div className="cert-issuer">INE Security</div>
                                <span className="cert-status">Completed</span>
                            </div>
                            
                            <div className="cert-item">
                                <div className="cert-name">Python (Basic)</div>
                                <div className="cert-issuer">HackerRank</div>
                                <span className="cert-status">Completed</span>
                            </div>

                            <div className="cert-item">
                                <div className="cert-name">Cybersecurity Professional Certificate V2</div>
                                <div className="cert-issuer">GOOGLE</div>
                                <span className="cert-status">Completed</span>
                            </div>

                            <div className="cert-item">
                                <div className="cert-name">Ethical Hacking Certification</div>
                                <div className="cert-issuer">SWAYAM NPTEL</div>
                                <span className="cert-status">Completed</span>
                            </div>

                            <div className="cert-item">
                                <div className="cert-name">AI for Penetration Testing</div>
                                <div className="cert-issuer">LinkedIn Learning</div>
                                <span className="cert-status">Completed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
