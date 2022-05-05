import { StyledFooter } from "./styled";

const Footer = ({ name, year }) => (
    <StyledFooter>
        <p>{`Coded by`} {name} &copy; {year}</p>
    </StyledFooter>
);

export default Footer;