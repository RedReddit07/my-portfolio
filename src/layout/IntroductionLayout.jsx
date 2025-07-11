import "./../assets/styles/Introduction.css";
export default function WelcomeLayout() {
  return (
    <main>
      <div className="intro-container">
        <div className="profile-picture">
          <img src="src/assets/images/pfp.png" alt="Profile Avatar" />
        </div>

        <div className="introduction-text">
          <h2>👋 Hello, I'm Reynold Fercol, an aspiring</h2>

            <div className="text-title">
              <h1><span>Web</span> Developer</h1> <br/>
              <span id="countryname">from Sorsogon.❤️</span> <br />
            </div>
            
            <p><q>Solving Complex Problems, One Line of Code at a Time.</q></p>
            <a href="src/context/RESUME_REYNOLD_FERCOL.pdf" download="">
              <button className="intro-button">Download CV</button>
            </a>
           
        </div>
      </div>

      <div className="mouse-down">
        <img
          src="src/assets/images/mouse-down.png"
          alt="mouse-down"
          height="64"
        />
      </div>
    </main>
  );
}
