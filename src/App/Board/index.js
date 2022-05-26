import { StyledTableName, StyledBase, StyledBoardHeader, StyledBoardName, StyledBoardWrapper, StyledCurrenciesWrapper, StyledPropertiesContainer } from "./styled";
import Clock from "../Clock";

const Board = ({ name, value, onChange, option, currencyRate, currencyName, difference, percentage }) => {

    return (
        <StyledBoardWrapper>
            <StyledBoardHeader>
                <StyledBoardName>Exchange rates</StyledBoardName>
                <Clock />
            </StyledBoardHeader>
            <StyledCurrenciesWrapper>
                <StyledTableName>Currency name</StyledTableName>
                <StyledTableName>Rate</StyledTableName>
                <StyledTableName>{`Change (72h)`}</StyledTableName>
                <StyledTableName>{`Percentage (72h)`}</StyledTableName>
            </StyledCurrenciesWrapper>
            <StyledCurrenciesWrapper>
                <StyledBase
                    as="select"
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    {option}
                </StyledBase>
                <StyledPropertiesContainer>{currencyRate}</StyledPropertiesContainer>
            </StyledCurrenciesWrapper>
            <StyledCurrenciesWrapper>
                <StyledPropertiesContainer>{currencyName}</StyledPropertiesContainer>
                <StyledPropertiesContainer>{currencyRate}</StyledPropertiesContainer>
                <StyledPropertiesContainer>{difference}</StyledPropertiesContainer>
                <StyledPropertiesContainer>{percentage}</StyledPropertiesContainer>
            </StyledCurrenciesWrapper>
        </StyledBoardWrapper>
    );
};

export default Board