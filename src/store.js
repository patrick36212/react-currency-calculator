import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './common/Header/ThemeSwitch/themeSlice';
import currenciesReducer from "./features/calculatorForm/currenciesSlice";

export default configureStore({
    reducer: {
        theme: themeReducer,
        currencies: currenciesReducer,
    },
});