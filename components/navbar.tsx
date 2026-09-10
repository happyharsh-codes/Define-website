import Button from "./buttons"
import gsap from "gsap";

export default function Navbar(): any {

    return (
        <header id="main-pg-header">
            <section className="main-pg-header-left">
                <div className="header-logo">
                    <h1>DEFINE</h1>
                </div>
            </section>
            <section className="main-pg-header-middle"></section>
            <section className="main-pg-header-right">
                <nav>
                    <Button label="Home" classes="header-nav-btn" />
                    <Button label="Try" classes="header-nav-btn" />
                    <Button label="Redefine" classes="header-nav-btn" />
                    <Button label="Absolute 0" classes="header-nav-btn" />
                </nav>
            </section>
        </header>
    )
}