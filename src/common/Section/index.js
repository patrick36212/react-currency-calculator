import { StyledSection } from "./styled";

const Section = ({ children, backgroundSection }) => {

    return (
        <StyledSection
            backgroundSection={backgroundSection}
        >
            {children}
        </StyledSection>
    );
};

export default Section;