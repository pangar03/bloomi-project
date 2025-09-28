import type { EmojiVariant } from "./EmojiVariant";

export type MoodDataType = {
    date: Date;
    mood: EmojiVariant | null;
    entry: string;
};
