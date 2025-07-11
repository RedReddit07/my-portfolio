import { useState } from "react";
import "../assets/styles/Contact.css"; // Link your CSS here

export default function ConnectCard() {
  const [copied, setCopied] = useState(false);
  const email = "reynolderenofercol@gmail.com"; // Replace with your email

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
    });
  };

  return (
    <div id="contact-section" className="contact-container">
      <div className="connect-card">
        <h3>Contact</h3>
        <p>Grab a coffee and Send me an email. 😁</p>
        <a href="mailto:reynolderenofercol@gmail.com"><p className="email">{email}</p></a>
        <button className="copy-button" onClick={copyEmail}>
            {copied ? "Copied!" : "Copy Email"}
        </button>
      </div>
    </div>
  );
}
