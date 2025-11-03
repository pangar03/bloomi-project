import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import goalListSlice from "./slices/goalListSlice";
import taskListSlice from "./slices/taskListSlice";
import moodSlice from "./slices/moodSlice";

//El store es el estado global, es decir, donde guardamos los datos con disponibilidad transversal
export const store = configureStore({
    reducer: {
        userSlice: userSlice,
        taskListSlice: taskListSlice,
        goalListSlice: goalListSlice,
        moodSlice: moodSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
