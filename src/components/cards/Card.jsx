import "./Card.css";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectLink,
  githubLink,
  companyName,
  companyLogo,
  techStack,
}) {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />

      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <div className="company-info">
          <img src={companyLogo} alt={companyName} className="company-logo" />
          <p className="company-name">{companyName}</p>
        </div>
        <p className="project-description">
          <q>
            <i>{description}</i>
          </q>
        </p>

        <div className="tech-stack">
          {techStack && techStack.length > 0 && (
            <ul>
              {techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="project-buttons">
          {projectLink ? (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ verticalAlign: "middle", marginRight: "8px" }}
    >
      <path d="M12 4.5C7 4.5 2.73 8.11 1 12c1.73 3.89 6 7.5 11 7.5s9.27-3.61 11-7.5c-1.73-3.89-6-7.5-11-7.5zm0 13c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10a4 4 0 100 8 4 4 0 000-8z"/>
    </svg>
              View Site
            </a>
          ) : (
            <span className="project-button disabled">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ verticalAlign: "middle", marginRight: "8px" }}
    >
      <path d="M12 4.5C7 4.5 2.73 8.11 1 12c1.73 3.89 6 7.5 11 7.5s9.27-3.61 11-7.5c-1.73-3.89-6-7.5-11-7.5zm0 13c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10a4 4 0 100 8 4 4 0 000-8z"/>
    </svg>
              View Site</span>
          )}

          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ verticalAlign: "middle", marginRight: "8px" }}
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.867 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.58.688.482C19.135 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
              Github Repository
            </a>
          ) : (
            <span className="project-button disabled">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ verticalAlign: "middle", marginRight: "8px" }}
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.867 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.58.688.482C19.135 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
              Github Repository
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
