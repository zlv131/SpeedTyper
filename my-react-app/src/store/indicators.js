import {createSlice} from "@reduxjs/toolkit";


const initialIndicators = { value: {score: 0, currentWord: 'bzhyk', difficulty: 'Easy'} };

export const IndicatorsSlice = createSlice({
	name: "Indicators",
	initialState: initialIndicators,
	reducers: {
		upScore: (state, action) => {
			return void(state.value = action.payload);
		},
		
		changeDifficulty: (state, action) => {
			return void(state.value = action.payload);
		}
	},
})


export const { upScore, changeDifficulty } = IndicatorsSlice.actions;

export default IndicatorsSlice.reducer;