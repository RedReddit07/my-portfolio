import "./../assets/styles/Project.css";
import Card from "./../components/cards/Card";
export default function Project(){
  const projects = [
    {
      title: "Event Management System",
      description:
        "A web application for managing events, registrations, and schedules",
      imageUrl: "src/assets/images/EMS.png",
      projectLink: "",
      githubLink: "",
      companyName: "Across Media IT Solutions",
      companyLogo: "src/assets/logo/AMITS.png",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "CodeIgniter",
        "MDB",
        "MySQL",
      ],
    },

    {
      title: "Asean Centre for Biodiversity (ERP)",
      description:
        "An ERP (Enterprise Resource Planning) system integrate planning, purchasing inventory, finance and human resources.",
      imageUrl: "src/assets/images/ACB.png",
      projectLink: "erp.aseanbiodiversity.org",
      githubLink: "",
      companyName: "Across Media IT Solutions",
      companyLogo: "src/assets/logo/AMITS.png",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "CodeIgniter",
        "MDB",
        "MySQL",
      ],
    },
    {
      title: "BICOL TFOE",
      description:
        "A Customer Relationship Management (CRM) systems for managing members, events, and donations.",
      imageUrl: "src/assets/images/TFOE.png",
      projectLink: "",
      githubLink: "",
      companyName: "Across Media IT Solutions",
      companyLogo: "src/assets/logo/AMITS.png",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "CodeIgniter",
        "MDB",
        "MySQL",
      ],
    },
    {
      title: "Grades Management System",
      description:
        "An online web application for Sorsogon Pilot Elementary Teachers to manage their class grades and report cards.",
      imageUrl: "src/assets/images/GMS.png",
      projectLink: "",
      githubLink: "",
      companyName: "Computer Communication Development Institute",
      companyLogo: "src/assets/logo/CCDI.png",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL"],
    },
    {
      title: "RUTGERS Car Rental System",
      description:
        "A web application for managing car rentals, bookings, and customer information",
      imageUrl: "src/assets/images/RUTGERS.png",
      projectLink: "",
      githubLink: "",
      companyName: "Computer Communication Development Institute",
      companyLogo: "src/assets/logo/CCDI.png",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL"],
    },
    {
      title: "Student Form 1",
      description: "A desktop application for managing student information.",
      imageUrl: "src/assets/images/SF1.png",
      projectLink: "",
      githubLink: "",
      companyName: "Data Base Technology College",
      companyLogo: "src/assets/logo/DBTC.jpg",
      techStack: ["VB.NET", "MSAccess"],
    },
  ];

  return (
    <div id="project-section">
      <div className="project-container">
        <h3>My Works</h3>

        <div className="project-list">
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </div>
      <div className="block-container">
        <img
          id="project-block"
          src="src/assets/images/block.png"
          alt="block-image"
        />
      </div>
    </div>
  );
};
