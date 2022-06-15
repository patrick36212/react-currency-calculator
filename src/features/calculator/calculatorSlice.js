import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        ownedCurrency: "EUR",
        targetCurrency: "USD",
        amount: "",
        result: {},
    },
    reducers: {
        toggleCurrency: state => {
            state.ownedCurrency = state.targetCurrency;
        },
    },
});

export const {
    toggleCurrency,
} = calculatorSlice.actions;

const selectCalculatorState = state => state.calculator;

export const selectOwnedCurrency = state => selectCalculatorState(state).ownedCurrency;
export const selectTargetCurrency = state => selectCalculatorState(state).targetCurrency;
export const selectAmount = state => selectCalculatorState(state).amount; 

export default calculatorSlice.reducer;