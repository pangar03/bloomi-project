import { supabase } from "./supabaseClient";
import type { Session, User } from "@supabase/supabase-js";

// Crea usuario en Auth, lo provisiona en tabla `users` con pin y coins,
// crea mascota por defecto en `pets` y actualiza `users.displayed_pet`.
// Retorna el usuario de Auth y la sesión (si existiera).
export async function CreateUser(
  email: string,
  password: string,
  pin: string | number
): Promise<{ authUser: User; session: Session | null }> {
  const pinNumber = typeof pin === "string" ? Number(pin) : pin;

  // Paso 1: crear usuario en Auth (llamado con la información de registro)
  const {
    data: { user: authUser, session },
    error: authError,
  } = await supabase.auth.signUp({
    email,
    password,
  });
  if (authError) throw authError;
  if (!authUser) throw new Error("No se creó el usuario de Auth");

  // Paso 2: crear usuario en la tabla `users` pública (incluyendo también el pin)
  const { data: userRow, error: userError } = await supabase
    .from("users")
    .insert({
      auth_id: authUser.id,
      pin: pinNumber,
      coins: 0,
    })
    .select()
    .single();
  if (userError) throw userError;

  // Paso 3: crear una pet de defecto para el usuario
  const { data: petRow, error: petError } = await supabase
    .from("pets")
    .insert({
      user_id: userRow.id,
    })
    .select()
    .single();
  if (petError) throw petError;

  // Paso 4: Actualizar el usuario para almacenar la mascota mostrada
  const { error: updateError } = await supabase
    .from("users")
    .update({ displayed_pet: petRow.id })
    .eq("id", userRow.id);
  if (updateError) throw updateError;

  // Si no hubo autologin por confirmación de email, intentamos obtener sesión
  let finalSession = session ?? null;
  if (!finalSession) {
    const { data: sessionData } = await supabase.auth.getSession();
    finalSession = sessionData?.session ?? null;
  }
  return { authUser, session: finalSession };
}

// Login simple vía supabase
export async function Login(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}