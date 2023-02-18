import "./Link.css";

const Links = (props) => {
    return <a className={props.styleMod ? props.styleMod + " header__link" : "header__link"} href={props.url} target="_blank">{props.name}</a>
}

export default Links;