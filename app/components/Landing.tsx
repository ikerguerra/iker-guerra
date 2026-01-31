import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hola! Soy</h2>
            <h1>
              IKER <span>GUERRA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Desarrollador</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Front End</div>
              <div className="landing-h2-2">Back End</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Back End</div>
              <div className="landing-h2-info-1">Front End</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
