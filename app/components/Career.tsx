import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Eterna Diagnostics</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Desarrollo y evolución de webapp corporativa multi-tenant con NextJS y React.
              Gestión de bases de datos MySQL, automatización de despliegues (CI/CD) y
              coordinación de equipo remoto para optimizar procesos y reducir deuda técnica.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Developer</h4>
                <h5>Intermark I.T</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Mantenimiento de aplicaciones empresariales utilizando Java (Spring Boot), Angular
              y Bootstrap. Implementación de soluciones escalables bajo metodologías ágiles (Jira/Bitbucket).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>FP Superior DAM</h4>
                <h5>IES Número 1</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Técnico Superior en Desarrollo de Aplicaciones Multiplataforma.
              Formación sólida en lógica de programación, bases de datos y desarrollo de software.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
