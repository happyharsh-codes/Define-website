import Navbar from "@/components/navbar"
import Button from "@/components/buttons"
import Footer from "@/components/footer"

import gsap from "gsap";

import "./globals.css";
import "./page.css";
export default function Page() {
    return (
        <>
            <Navbar/>
            <main>
                <div className="home-dashboard">
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
            <Footer/>
        </>

    )
}