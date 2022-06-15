import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from './features/calculator/calculatorSlice';
import themeReducer from './common/Header/ThemeSwitch/themeSlice';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        calculator: calculatorReducer,
    },
});

export default store;