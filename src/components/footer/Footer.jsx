import "./Footer.css"; // Link to the CSS below

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/RedReddit07" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/reynold-fercol/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" />
        </a>
        <a href="https://x.com/red_fercol" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="Twitter" />
        </a>

      </div>
      <button className="back-to-top" onClick={scrollToTop}>
        ↑ Back to Top
      </button>
      <p className="copyright">
        © {new Date().getFullYear()} Reynold Fercol | Portfolio.
      </p>
    </footer>
  );
}
