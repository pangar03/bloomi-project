// Convert Supabase DATE (string) -> local Date (no UTC shift)
export function parseSupabaseDate(dateStr: string): string {
    const date = new Date(dateStr).toISOString().split("T")[0];
    return date;
}

// Convert local Date -> Supabase DATE string (YYYY-MM-DD)
export function toSupabaseDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}
