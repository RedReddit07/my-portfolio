import "./../assets/styles/TechStack.css";

const techStack = [
    {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    { 
        name: "CodeIgniter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
    },
    {
        name: "ReactJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    // {
    //     name: "Node.js",
    //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    // },
    {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    // {
    //     name: "Python",
    //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    // },
    // {
    //     name: "Material UI",
    //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    // },
    {
        name: "jQuery",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    },
    {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    // {
    //     name: "Java",
    //     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    // },
];

export default function TechStack() {
  return (
      <div id="tech-section" className="tech-stack-container">
        <h3 className="tech-title">My Skills</h3>
            <div className="tech-grid">
            {techStack.map((tech, index) => (
                <div className="tech-item" key={index}>
                    <img src={tech.icon} alt={tech.name} className="tech-icon" />
                    <div className="tech-name">{tech.name}</div>
                </div>
                ))}
            </div>
        </div>
  );
}
