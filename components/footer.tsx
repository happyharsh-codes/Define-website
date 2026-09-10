import gsap from "gsap";

export default function Footer() {
    return(
        <footer id="absolute-footer">
            <section style={{gridArea: "a"}}>
                <h1 className="footer-header">DEFiNE</h1>
            </section>
            <section style={{gridArea: "b"}}>
                <div>
                    <img src="" alt="" />
                </div>
            </section>
            <section style={{gridArea: "c"}}>
                <div>
                    <nav className="footer-navs">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contacts</a>
                        <a href="">Feedback</a>
                    </nav>
                </div>
            </section>
            <section style={{gridArea: "d"}}>
                <div>
                    <nav className="footer-navs">
                        <a href="">Definerium</a>
                        <a href="">Redefine</a>
                        <a href="">Absolute 0</a>
                        <a href="">Knockback</a>
                    </nav>
                </div>
            </section>
            <section style={{gridArea: "e"}}>
                <div>
                    <nav className="footer-navs">
                        <a href="">Explore</a>
                        <a href="">Articles</a>
                        <a href="">Stories</a>
                        <a href="">Join us</a>
                    </nav>
                </div>
            </section>
            <section style={{gridArea: "f"}}>
                <div>
                    <nav className="footer-navs-credits">
                        <a href="">Privacy policy</a>
                        <a href="">Terms of Conditions</a>
                    </nav>
                </div>
            </section>
        </footer>
    )
}