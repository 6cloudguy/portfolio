const projectsData = [
    { id: 'blog', title: 'Blog Site', desc: 'A minimalistic blog site with markdown support with jekyll and github pages.', tech: ['Jekyll', 'Markdown', 'GitHub Pages'], code: 'https://6cloudguy.github.io/' },
    { id: 'autofn', title: 'AutoFn', desc: 'An automated bash-based recon tool for subdomain enumeration, port scanning, dir brute-forcing, and CVE lookup.', tech: ['nmap', 'ffuf', 'assetfinder', 'searchsploit'], code: 'https://github.com/6cloudguy/autofn' },
    { id: 'portfolio', title: 'Responsive Portfolio', desc: 'Accessible personal portfolio with micro‑interactions and mobile friendly layout.', tech: ['HTML', 'CSS', 'JavaScript'], code: '#' },
    //{ id:'ui-kit', title:'E‑commerce UI Kit', desc:'Reusable components library with theming and motion states.', tech:['Design Systems','CSS','Performance'],  code:'#' }
];

const Projects = () => {
    return (
        <>
            <h1 className="section-title">Projects</h1>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <article key={project.id} className="project-card" aria-labelledby={`p-${project.id}`}>
                        <h2 id={`p-${project.id}`} className="project-title">{project.title}</h2>
                        <p className="project-desc">{project.desc}</p>
                        <div className="tech-list">
                            {project.tech.map((t, index) => (
                                <span key={index} className='tech-badge'>{t}</span>
                            ))}
                        </div>
                        <div className="project-actions">
                            {project.code !== '#' && (
                                <a className="btn btn--linkedin" href={project.code} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} code`}>Click Me</a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </>
    );
};

export default Projects;
