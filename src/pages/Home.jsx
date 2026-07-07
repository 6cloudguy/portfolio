import { Link } from 'react-router-dom';
import { certificates } from '../data/certificates';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="hero-title">Site Moved</h1>
                <p className="hero-subtitle">Visit my new site <a href="https://pranavp2006.vercel.app" target="_blank" rel="noopener noreferrer">here</a></p>
            </section>

        </>
    );
};

export default Home;
