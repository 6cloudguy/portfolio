import { Link } from 'react-router-dom';
import { certificates } from '../data/certificates';

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

        </>
    );
};

export default Home;
