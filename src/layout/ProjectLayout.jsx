import "./../assets/styles/Project.css";
import Card from "./../components/cards/Card";
import project_block from "./../assets/images/block.png";

import across_media_logo from "./../assets/logo/AMITS.png";
import ccdi_logo from "./../assets/logo/CCDI.png";
import dbtc_logo from "./../assets/logo/DBTC.jpg";

import EMS from "./../assets/images/EMS.png";
import ERP from "./../assets/images/ACB.png";
import TFOE from "./../assets/images/TFOE.png";
import GMS from "./../assets/images/GMS.png";
import RUTGERS from "./../assets/images/RUTGERS.png";
import SF1 from "./../assets/images/SF1.png";

export default function Project(){
  const projects = [
    {
      title: "Event Management System",
      description:
        "A web application for managing events, registrations, and schedules",
      imageUrl: EMS,
      projectLink: "",
      githubLink: "",
      companyName: "Across Media IT Solutions",
      companyLogo: across_media_logo,
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
      imageUrl: ERP,
      projectLink: "https://erp.aseanbiodiversity.org",
      githubLink: "",
      companyName: "Across Media IT Solutions",
      companyLogo: across_media_logo,
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
      imageUrl: TFOE,
      projectLink: "",
      githubLink: "",
      companyName: "Across Media IT Solutions",
      companyLogo: across_media_logo,
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
      imageUrl: GMS,
      projectLink: "",
      githubLink: "",
      companyName: "Computer Communication Development Institute",
      companyLogo: ccdi_logo,
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL"],
    },
    {
      title: "RUTGERS Car Rental System",
      description:
        "A web application for managing car rentals, bookings, and customer information",
      imageUrl: RUTGERS,
      projectLink: "",
      githubLink: "",
      companyName: "Computer Communication Development Institute",
      companyLogo: ccdi_logo,
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL"],
    },
    {
      title: "Student Form 1",
      description: "A desktop application for managing student information.",
      imageUrl: SF1,
      projectLink: "",
      githubLink: "",
      companyName: "Data Base Technology College",
      companyLogo: dbtc_logo,
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
          src={project_block}
          alt="block-image"
        />
      </div>
    </div>
  );
};
