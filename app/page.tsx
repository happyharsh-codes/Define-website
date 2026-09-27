"use client"
import Navbar from "@/components/navbar"
import Button from "@/components/buttons"
import Footer from "@/components/footer"
import { RefObject } from "react";

import gsap, { random } from "gsap";

import "./globals.css";
import "./page.css";
import { useEffect, useRef } from "react";
export default function Page() {

    const dashboardRef: RefObject<HTMLElement | null> = useRef(null);

    const getAnimationStrips = (ref: HTMLElement | null) => {
        const div = document.createElement("div");
        ref?.appendChild(div);
        div.className = "animstrip"
        let length = Math.ceil(Math.random()*100);
        for (let i = 0; i < length; i++) {
            const span = document.createElement("span");
            span.textContent = Math.floor(Math.random() * 10)%2 == 0 ? "0" :"1"
            span.className = "animstrip-letter";
            span.style.cssText = `backdrop-filter: brightness(${Math.random()})`;
            div.appendChild(span);
        }   
    }

    useEffect(() => {
        getAnimationStrips(dashboardRef.current);

    }, []);
    return (
        <>
            <Navbar />
            <main>
                <div className="home-dashboard" ref={dashboardRef}>
                    <div className="contents-top-left">
                        <h1>Harsh</h1>
                        <p>creator?</p>
                    </div>
                    <div className="contents-bottom-right">
                        <h3>Describe</h3>
                        <p>who?</p>
                        <p>what?</p>
                        <p>works?</p>
                        <p>contact?</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>

    )
}