import { StyledFooter } from "./styled";

const Footer = ({ name, year }) => (
    <StyledFooter className="footer">
        <p>{`Coded by`} {name} &copy; {year}</p>
    </StyledFooter>
);

export default Footer;