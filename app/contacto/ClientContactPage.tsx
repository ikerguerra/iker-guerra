"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";
import Contact from "../components/Contact";
import SocialIcons from "../components/SocialIcons";

export default function ClientContactPage() {
    const [isDesktopView, setIsDesktopView] = useState<boolean>(false);

    useEffect(() => {
        const resizeHandler = () => {
            setIsDesktopView(window.innerWidth > 1024);
        };
        resizeHandler();
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    useEffect(() => {
        if (sessionStorage.getItem("hasLoadedInitial")) {
            import("../components/utils/initialFX").then((module) => {
                module.bypassFX();
            });
        }
    }, []);

    return (
        <div className="container-main" style={{
            minHeight: "100vh",
            width: "100vw",
            overflow: "hidden",
            position: "relative",
            backgroundColor: "var(--bg-color)"
        }}>
            <Cursor />
            <Navbar />
            <SocialIcons />
            <Contact />
        </div>
    );
}
