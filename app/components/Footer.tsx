import React from "react";
import { MdCopyright } from "react-icons/md";
import "./styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>Desarrollado con NextJS</p>
            </div>
            <div className="footer-right">
                <p>
                    <MdCopyright /> {new Date().getFullYear()} Iker Guerra
                </p>
            </div>
        </footer>
    );
};

export default Footer;
