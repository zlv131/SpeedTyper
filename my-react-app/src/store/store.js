import {configureStore} from "@reduxjs/toolkit";
import IndicatorsSlice from "./indicators.js";


export const store = configureStore({
	reducer: {
		indicators: IndicatorsSlice,
	},
})

