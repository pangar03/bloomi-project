//Un slice es un mini contexto, es una parte pequeña que forma el estado global. El estado global es el total de los slices.
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../../types/Task";

type InitialState = {
    tasks: Task[];
    dailyTasks: Task[];
};

//Estado inicial
const initialState: InitialState = {
    tasks: [],
    dailyTasks: [],
};
// 1. Darle un nombre al slice
// 2. Pasar el estado inicial
// 3. Crear el reducer con las actions
export const taskListSlice = createSlice({
    name: "taskListSlice",
    initialState,
    //Reducer contiene las actiones para determinar que es lo que cambia del estado inicial
    reducers: {
        //Actions
        setTasks: (state, action: PayloadAction<Task[]>) => {
            state.tasks = action.payload;
        },
        setDailyTasks: (state, action: PayloadAction<Task[]>) => {
            state.dailyTasks = action.payload;
        },
    },
});

//Destructurar las actions para exportarlas de manera individual
export const { setTasks, setDailyTasks } = taskListSlice.actions;

//Exportar el reducer del slice
export default taskListSlice.reducer;
