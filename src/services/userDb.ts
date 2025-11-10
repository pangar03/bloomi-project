import { supabase } from "./supabaseClient";

export const getUserByAuthId = async (authId: string) => {
    const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("auth_id", authId)
        .single();

    if (error) {
        console.error("Error fetching user by auth ID:", error);
        return;
    }

    return data;
};

export const incrementUserCoins = async (userId: string, amount: number) => {
    const previousValue = await supabase
        .from("users")
        .select("coins")
        .eq("id", userId)
        .single();

    if (previousValue.error) {
        console.error("Error fetching user coins:", previousValue.error);
        return;
    }

    const newValue = previousValue.data.coins + amount;

    const { data, error } = await supabase
        .from("users")
        .update({ coins: newValue })
        .eq("id", userId)
        .select()
        .single();

    if (error) {
        console.error("Error updating user coins:", error);
        return;
    }

    return data;
};

export const decrementUserCoins = async (userId: string, amount: number) => {
    const previousValue = await supabase
        .from("users")
        .select("coins")
        .eq("id", userId)
        .single();

    if (previousValue.error) {
        console.error("Error fetching user coins:", previousValue.error);
        return;
    }

    const newValue = previousValue.data.coins - amount;

    const { data, error } = await supabase
        .from("users")
        .update({ coins: newValue })
        .eq("id", userId)
        .select()
        .single();

    if (error) {
        console.error("Error updating user coins:", error);
        return;
    }

    return data;
};

export const updateUserDisplayedPet = async (userId: string, petId: string) => {
    const { data, error } = await supabase
        .from("users")
        .update({ displayed_pet: petId })
        .eq("id", userId)
        .select()
        .single();

    if (error) {
        console.error("Error updating user displayed pet:", error);
        return;
    }

    return data;
};

export const updateUserPin = async (userId: string, newPin: string) => {
    const { data, error } = await supabase
        .from("users")
        .update({ pin: newPin })
        .eq("id", userId)
        .select()
        .single();

    if (error) {
        console.error("Error updating user pin:", error);
        return;
    }

    return data;
};

export const getUserPin = async (userId: string) => {
    const { data, error } = await supabase
        .from("users")
        .select("pin")
        .eq("id", userId)
        .single();

    if (error) {
        console.error("Error fetching user pin:", error);
        return;
    }

    return data;
};
