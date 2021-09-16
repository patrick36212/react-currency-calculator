import "./style.css"

const Footer = ({ name, year }) => (
    <footer className="footer">
        <p className="footer__paragraph">{`Coded by`} {name} &copy; {year}</p>
    </footer>
);

export default Footer;