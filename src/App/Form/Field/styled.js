import styled from "styled-components";

export const StyledLabel = styled.label`
    margin-bottom: 15px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const StyledLabelText = styled.span`
    font-weight: bold;
    padding: 10px;
    max-width: 350px;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const StyledFormField = styled.input`
    text-align: center;
    padding: 10px;
    border-radius: 30px;
    border: none;
    background: linear-gradient(145deg, #cacaca, #f0f0f0);
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

    @media (max-width: 767px) {
        width: 100%;
    }

    &:required {
        border: 1px solid hsl(0, 53%, 90%);
        background: linear-gradient(145deg, hsl(0, 70%, 90%), hsl(0, 53%, 90%));
    }
    &:required:hover {
        border: 1px solid hsl(0, 0%, 50%);
    }
`;