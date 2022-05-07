import { StyledSection } from "./styled";

export const Section = ({ children }) => {

    return (
        <StyledSection>
            {children}
        </StyledSection>
    );
};

export const SectionBackground = ({ children, backgroundSection }) => {
    return (
        <StyledSection
            backgroundSection
        >
            {children}
        </StyledSection>
    );
};