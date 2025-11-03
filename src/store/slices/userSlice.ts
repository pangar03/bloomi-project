//Un slice es un mini contexto, es una parte pequeña que forma el estado global. El estado global es el total de los slices.
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../../types/Task";
import type { MoodDataType } from "../../types/MoodData";

type InitialState = {
    name: string;
    currentPet: string;
    ownedPets: string[];
    currency: number;
    pin: string;
    taskRegistry: { [key: string]: Task[] };
    journalEntries: MoodDataType[];
};

//Estado inicial
const initialState: InitialState = {
    name: "",
    currentPet: "",
    ownedPets: [],
    currency: 0,
    pin: "",
    taskRegistry: {},
    journalEntries: [],
};

// 1. Darle un nombre al slice
// 2. Pasar el estado inicial
// 3. Crear el reducer con las actions
export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    //Reducer contiene las actiones para determinar que es lo que cambia del estado inicial
    reducers: {
        //Actions
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setCurrentPet: (state, action: PayloadAction<string>) => {
            state.currentPet = action.payload;
        },
        setOwnedPets: (state, action: PayloadAction<string[]>) => {
            state.ownedPets = [...state.ownedPets, ...action.payload];
        },
        setCurrency: (state, action: PayloadAction<number>) => {
            state.currency = action.payload;
        },
        setPin: (state, action: PayloadAction<string>) => {
            state.pin = action.payload;
        },
        setTaskRegistry: (
            state,
            action: PayloadAction<{ [key: string]: Task[] }>
        ) => {
            state.taskRegistry = action.payload;
        },
        setJournalEntries: (state, action: PayloadAction<MoodDataType[]>) => {
            state.journalEntries = [...action.payload, ...state.journalEntries];
        },
    },
});

//Destructurar las actions para exportarlas de manera individual
export const {
    setName,
    setCurrentPet,
    setOwnedPets,
    setCurrency,
    setPin,
    setTaskRegistry,
} = userSlice.actions;

//Exportar el reducer del slice
export default userSlice.reducer;
