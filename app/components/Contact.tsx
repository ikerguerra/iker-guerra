import React from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission would go here (e.g., API call)
    console.log("Form submitted:", formData);
    alert("¡Gracias! Me pondré en contacto contigo pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h3>¿Quieres contactar conmigo?</h3>
          <h2>Hablemos.</h2>
        </div>

        <div className="contact-main">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
                data-cursor="disable"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                data-cursor="disable"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Mensaje"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                data-cursor="disable"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" data-cursor="disable">
              Enviar mensaje <MdArrowOutward />
            </button>
          </form>

          <div className="social-links">
            <a
              href="https://github.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
        </div>

        <div className="contact-footer">
          <div className="footer-left">
            <p>Desarrollado con NextJS & ❤️</p>
          </div>
          <div className="footer-right">
            <p>
              <MdCopyright /> 2024 Iker Guerra
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
