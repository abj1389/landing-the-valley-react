import "./Logo.css";
import logo from "./thevalley-logo.png";

const Logo = () => {
    return (
        <img className="header__logo" src={logo} alt="The Valley"/>
    );
}

export default Logo;