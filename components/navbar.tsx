import Button from "./buttons"
import gsap from "gsap";

export default function Navbar(): any {

    return (
        <header id="navbar-main">
            
            <section className="navbar-main-left">
                <div className="navbar-logo">
                    <h1 className="navbar-logo-title">DEFINE</h1>
                </div>
            </section>
            <section className="navbar-main-middle"></section>
            <section className="navbar-main-right">
                <nav>
                    <Button label="Home" classes="navbar-main-right-btns"/>
                    <Button label="Redefine" classes="navbar-main-right-btns"/>
                    <Button label="Explore" classes="navbar-main-right-btns"/>
                    <Button label="Absolute 0" classes="navbar-main-right-btns"/>
                </nav>
            </section>
        </header>
    )
}