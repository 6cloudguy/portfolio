import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('keyup', handleEscape);
        return () => document.removeEventListener('keyup', handleEscape);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <header className="site-header">
      <div className="container nav-bar">
        <Link className="brand" to="/" aria-label="Home">
          <div className="brand-name">Pranav P</div>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/writeups">Writeups</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </nav>
        
        <button 
            className="menu-toggle" 
            aria-label="Open menu" 
            aria-expanded={isMenuOpen} 
            aria-controls="mobile-menu"
            onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      
      <div id="mobile-menu" className="mobile-menu-panel" hidden={!isMenuOpen}>
        <ul className="mobile-menu-list" role="menu">
          <li role="none"><Link role="menuitem" className="mobile-menu-link" to="/">Home</Link></li>
          <li role="none"><Link role="menuitem" className="mobile-menu-link" to="/projects">Projects</Link></li>
          <li role="none"><Link role="menuitem" className="mobile-menu-link" to="/writeups">Writeups</Link></li>
          <li role="none"><Link role="menuitem" className="mobile-menu-link" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
