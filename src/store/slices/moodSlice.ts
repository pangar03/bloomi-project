//Un slice es un mini contexto, es una parte pequeña que forma el estado global. El estado global es el total de los slices.
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MoodDataType } from "../../types/MoodData";

type InitialState = {
    dailyMood: MoodDataType | null;
};

//Estado inicial
const initialState: InitialState = {
    dailyMood: null,
};

// 1. Darle un nombre al slice
// 2. Pasar el estado inicial
// 3. Crear el reducer con las actions
export const moodSlice = createSlice({
    name: "moodSlice",
    initialState,
    //Reducer contiene las actiones para determinar que es lo que cambia del estado inicial
    reducers: {
        //Actions
        setDailyMood: (state, action: PayloadAction<MoodDataType | null>) => {
            state.dailyMood = action.payload;
        },
    },
});

//Destructurar las actions para exportarlas de manera individual
export const { setDailyMood } = moodSlice.actions;

//Exportar el reducer del slice
export default moodSlice.reducer;
