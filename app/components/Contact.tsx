"use client";

import React, { useRef, useState } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { trackEvent } from "../utils/gtag";
import "./styles/Contact.css";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: null });

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId === "your_service_id_here") {
      setStatus({
        type: "error",
        message: "Error de configuración: Por favor, rellena las variables de entorno en .env.local",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      setStatus({
        type: "success",
        message: "¡Gracias! Me pondré en contacto contigo pronto.",
      });
      trackEvent("generate_lead", {
        form_name: "contact_form",
        status: "success",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message: "Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h3>¿Quieres contactar conmigo?</h3>
          <h2>Hablemos.</h2>
        </div>

        <div className="contact-main">
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
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

            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="submit-btn"
              data-cursor="disable"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"} <MdArrowOutward />
            </button>
          </form>
        </div>

        <div className="contact-footer">
          <div className="footer-left">
            <p>Desarrollado con NextJS</p>
          </div>
          <div className="footer-right">
            <p>
              <MdCopyright /> {new Date().getFullYear()} Iker Guerra
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
