import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {

    useEffect(() => {
        document.body.classList.add('error-page');
        return () => {
            document.body.classList.remove('error-page');
        };
    }, []);

    return (
        <>
            <div className="error-code error-animation">404</div>
            <h1>Page Not Found</h1>
            <p>Looks like this page got lost in cyberspace.<br />Let's get you back on track.</p>
            <br />

            <Link to="/" className="home-btn home-btn--sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                Back to Home
            </Link>

            <p className="footer-note">
                🚧 Built with caffeine & curiosity | v2.16 <br />
                © 2025 Pranav P. All rights reserved.
            </p>
        </>
    );
};

export default NotFound;
