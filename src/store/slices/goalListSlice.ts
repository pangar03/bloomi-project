//Un slice es un mini contexto, es una parte pequeña que forma el estado global. El estado global es el total de los slices.
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Goal } from "../../types/Goal";

type InitialState = {
    goals: Goal[];
};

//Estado inicial
const initialState: InitialState = {
    goals: [],
};

// 1. Darle un nombre al slice
// 2. Pasar el estado inicial
// 3. Crear el reducer con las actions
export const goalListSlice = createSlice({
    name: "goalListSlice",
    initialState,
    //Reducer contiene las actiones para determinar que es lo que cambia del estado inicial
    reducers: {
        //Actions
        setGoals: (state, action: PayloadAction<Goal[]>) => {
            state.goals = action.payload;
        },
        addGoal: (state, action: PayloadAction<Goal>) => {
            state.goals = [action.payload, ...state.goals];
        },
        removeGoal: (state, action: PayloadAction<string>) => {
            state.goals = state.goals.filter(
                (goal) => goal.id !== action.payload
            );
        },
        progressGoal: (state, action: PayloadAction<string>) => {
            state.goals = state.goals.map((goal) => {
                return goal.trackedTaskId === action.payload
                    ? {
                          ...goal,
                          progress: goal.progress ? goal.progress + 1 : 1,
                      }
                    : goal;
            });
        },
    },
});

//Destructurar las actions para exportarlas de manera individual
export const { setGoals, addGoal, removeGoal, progressGoal } =
    goalListSlice.actions;

//Exportar el reducer del slice
export default goalListSlice.reducer;
