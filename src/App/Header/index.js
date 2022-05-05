import { StyledHeader, StyledTitle, Wrapper } from "./styled";

const Header = ({ children }) => {

    return (
        <StyledHeader >
            <Wrapper>
                <StyledTitle>Currency Calc</StyledTitle>
                {children}
            </Wrapper>
        </StyledHeader>
    );
};

export default Header;