import "./Footer.css";

let date = new Date();
let year = date.getFullYear();

const Footer = () => {
    return (
        <div className="footer">
            <p>Copyright <span>{year}</span></p>
        </div>
    );
};

export default Footer;