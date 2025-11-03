//Un slice es un mini contexto, es una parte pequeña que forma el estado global. El estado global es el total de los slices.
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../../types/Task";
import type { MoodDataType } from "../../types/MoodData";
import type { PetVariant } from "../../types/PetVariant";

type User = {
    name: string;
    currentPet: PetVariant;
    ownedPets: PetVariant[];
    currency: number;
    pin: string;
    taskRegistry: { [key: string]: Task[] };
    journalEntries: MoodDataType[];
};

type InitialState = {
    user: User | null;
};

//Estado inicial
const initialState: InitialState = {
    user: null,
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
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.user!.name = action.payload;
        },
        setCurrentPet: (state, action: PayloadAction<PetVariant>) => {
            state.user!.currentPet = action.payload;
        },
        setOwnedPets: (state, action: PayloadAction<PetVariant[]>) => {
            state.user!.ownedPets = [
                ...state.user!.ownedPets,
                ...action.payload,
            ];
        },
        setCurrency: (state, action: PayloadAction<number>) => {
            state.user!.currency = action.payload;
        },
        setPin: (state, action: PayloadAction<string>) => {
            state.user!.pin = action.payload;
        },
        setTaskRegistry: (
            state,
            action: PayloadAction<{ [key: string]: Task[] }>
        ) => {
            state.user!.taskRegistry = action.payload;
        },
        setJournalEntries: (state, action: PayloadAction<MoodDataType[]>) => {
            state.user!.journalEntries = [
                ...action.payload,
                ...state.user!.journalEntries,
            ];
        },
    },
});

//Destructurar las actions para exportarlas de manera individual
export const {
    setUser,
    setName,
    setCurrentPet,
    setOwnedPets,
    setCurrency,
    setPin,
    setTaskRegistry,
    setJournalEntries,
} = userSlice.actions;

//Exportar el reducer del slice
export default userSlice.reducer;
