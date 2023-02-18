import "./Header.css";
import Link from "./link/Link";
import Logo from "./logo/Logo";

const links1 = [{
    name: "Facebook",
    url: "https://es-es.facebook.com/"
},{
    name: "Instagram",
    url: "https://www.instagram.com/"
},{
    name: "Twitter",
    url: "https://twitter.com/?lang=es"
}];

const links2 = [{
    name: "Docu React",
    url: "#"
},{
    styleMod: "header__link--buttoned",
    name: "Ir a The Valley",
    url: "https://thevalley.es/"
}]

const Header = (props) => {
    return(
        <div className="header">
            <div className="header__links1">
                {links1.map(link => <Link styleMod={link.styleMod} name={link.name} url={link.url}></Link>)}
            </div>
            <Logo className="header__logo"></Logo>
            <div className="header__links2">
                {links2.map(link => <Link styleMod={link.styleMod} name={link.name} url={link.url}></Link>)}
            </div>
        </div>
    );
};

export default Header;