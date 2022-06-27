import { createSlice } from "@reduxjs/toolkit";

const currenciesSlice = createSlice({
    name: "currencies",
    initialState: {
        amount: '',
        ownedCurrency: "EUR",
        targetCurrency: "USD",
    },
    reducers: {
        handleAmountChange: (state, action) => {
            state.amount = action.payload;
        },
        handleOwnedCurrency: (state, action) => {
            state.ownedCurrency = action.payload;
        },
        handleTargetCurrency: (state, action) => {
            state.targetCurrency = action.payload;
        }
    },
});

export const {
    handleAmountChange,
    handleOwnedCurrency,
    handleTargetCurrency,
} = currenciesSlice.actions

const selectCurrenciesState = state => state.currencies;

export const selectAmount = state => selectCurrenciesState(state).amount;
export const selectOwnedCurrency = state => selectCurrenciesState(state).ownedCurrency;
export const selectTargetCurrency = state => selectCurrenciesState(state).targetCurrency;

export default currenciesSlice.reducer;