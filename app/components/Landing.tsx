import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <p className="landing-greeting">Hola! Soy</p>
            <h1>
              IKER GUERRA
            </h1>
            <span className="sr-only">Desarrollador Full Stack en Asturias</span>
          </div>
          <div className="landing-info">
            <h2>Desarrollador</h2>
            <div className="landing-info-h2">
              <div className="landing-h2-1">Front End</div>
              <div className="landing-h2-2">Back End</div>
            </div>
            <div className="landing-info-details">
              <div className="landing-h2-info">Next.js & React</div>
              <div className="landing-h2-info-1">Node.js & Java</div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
