import { supabase } from "./supabaseClient";

export const createPetForUser = async (userId: string, petName: string) => {
    const { data, error } = await supabase
        .from("pets")
        .insert({
            user_id: userId,
            name: petName,
        })
        .select()
        .single();

    if (error) {
        console.error("Error creating pet for user:", error);
        return;
    }

    return data;
};

export const getUserPets = async (userId: string) => {
    const { data, error } = await supabase
        .from("pets")
        .select("*")
        .eq("user_id", userId);

    if (error) {
        console.error("Error fetching user pets:", error);
        return;
    }

    return data;
};
