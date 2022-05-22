import { StyledSection } from "./styled";

const Section = ({ children, backgroundSection, formSection }) => {

    return (
        <StyledSection
            backgroundSection={backgroundSection}
        >
            {children}
        </StyledSection>
    );
};

export default Section;