module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    lighter: "FCE6D0",
                    light: "FFBF7E",
                    regular: "FD8B18",
                    dark: "C26100",
                    darker: "703800",
                },
                accent: {
                    lighter: "D8EFFF",
                    light: "80CCFF",
                    regular: "3AAFFE",
                    dark: "1685CF",
                    darker: "004D81",
                },
                yellow: {
                    lighter: "FFEFC3",
                    light: "F3D582",
                    regular: "FDC938",
                    dark: "B78F22",
                    darker: "614700",
                },
                purple: {
                    lighter: "F2E6FF",
                    light: "CD9DFF",
                    regular: "A45FED",
                    dark: "7B43B5",
                    darker: "3F1B65",
                },
                red: {
                    lighter: "FFBDBE",
                    light: "F57275",
                    regular: "DA4447",
                    dark: "B12C2E",
                    darker: "741618",
                },
                gray: {
                    light: "D5D5D5",
                    regular: "7D7D7D",
                    dark: "424242",
                },
                white: "FFFFFF",
                black: "141414",
            },
            borderRadius: {
                sharp: "0px",
                regular: "16px",
                soft: "32px",
            },
            spacing: {
                s: "8px",
                m: "16px",
                l: "24px",
                xl: "32px",
                "2xl": "40px",
                "3xl": "48px",
                "4xl": "64px",
                "5xl": "80px",
            },
            fontFamily: {
                sans: ["baloo 2", "sans-serif"],
            },
            fontSize: {
                small: "8px",
                regular: "14px",
                medium: "20px",
                large: "36px",
                title: "48px",
            },
            boxShadow: {
                // CTA, ACCENT, REGULAR, RED are the ones that look solid, use them on buttons.
                cta: "0 3px 0 0 #703800",
                accent: "0 3px 0 0 #004D81",
                regular: "0 3px 0 0 #424242",
                red: "0 3px 0 0 #741618",
                task: "0 2px 4px 0 rgba(112, 56, 0, 0.25)",
                purple: "0 2px 4px 0 rgba(205, 157, 255, 0.25)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
