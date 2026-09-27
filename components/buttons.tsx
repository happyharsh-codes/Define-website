import gsap from "gsap";

export default function Button({label="", animation=".", classes=""}) {
    return(
    <button className={`${classes} button`}>
        {[...label].map((letter, i) => (
            <span key={i} className="button-letter" >{letter}</span>
        ))}
    </button>
    )
}