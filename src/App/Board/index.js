import { StyledBoardHeader, StyledBoardName, StyledBoardWrapper, StyledCurrenciesWrapper, StyledPropertiesContainer } from "./styled";
import Clock from "../Clock";

const Board = () => {

    
    return (
        <StyledBoardWrapper>
            <StyledBoardHeader>
                <StyledBoardName>Exchange rates</StyledBoardName>
                <Clock />
            </StyledBoardHeader>
            <StyledCurrenciesWrapper tableHeader>
                <StyledPropertiesContainer>Currency name</StyledPropertiesContainer>
                <StyledPropertiesContainer>Rate</StyledPropertiesContainer>
                <StyledPropertiesContainer>{`Change (72h)`}</StyledPropertiesContainer>
                <StyledPropertiesContainer>{`Percentage (72h)`}</StyledPropertiesContainer>
            </StyledCurrenciesWrapper>
            <StyledCurrenciesWrapper>
                <StyledPropertiesContainer>EUR</StyledPropertiesContainer>
                <StyledPropertiesContainer>1</StyledPropertiesContainer>
            </StyledCurrenciesWrapper>
            <StyledCurrenciesWrapper>
                <StyledPropertiesContainer>USD</StyledPropertiesContainer>
                <StyledPropertiesContainer>1.040455</StyledPropertiesContainer>
                <StyledPropertiesContainer>kurs 2</StyledPropertiesContainer>
                <StyledPropertiesContainer>%</StyledPropertiesContainer>
            </StyledCurrenciesWrapper>
            <StyledCurrenciesWrapper>
                <StyledPropertiesContainer>GPB</StyledPropertiesContainer>
                <StyledPropertiesContainer>0.849079</StyledPropertiesContainer>
                <StyledPropertiesContainer>kurs 2</StyledPropertiesContainer>
                <StyledPropertiesContainer>%</StyledPropertiesContainer>
            </StyledCurrenciesWrapper>
            <StyledCurrenciesWrapper>
                <StyledPropertiesContainer>PLN</StyledPropertiesContainer>
                <StyledPropertiesContainer>4.680743</StyledPropertiesContainer>
                <StyledPropertiesContainer>kurs 2</StyledPropertiesContainer>
                <StyledPropertiesContainer>%</StyledPropertiesContainer>
            </StyledCurrenciesWrapper>
        </StyledBoardWrapper>
    );
};

export default Board