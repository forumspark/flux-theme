import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
    safelist: ["resize-none", "sr-only", "w-56"],

    darkMode: ['selector'],

    content: [
      "./build/layout.html",
      "./build/layout_sidebar.html",
    ],

    theme: {
        extend: {
            spacing: {
              '8xl': '92rem',
            },
            colors: {
                zinc: {
                    '50': '#f7f7f8',
                    '100': '#f0eef0',
                    '200': '#dcdadd',
                    '300': '#bebabf',
                    '400': '#9b949c',
                    '500': '#7e7780',
                    '600': '#666168',
                    '700': '#534e54',
                    '800': '#3a363a',    // Darker than before
                    '900': '#2d292d',    // Darker than before
                    '950': '#201d20',    // Darker than before
                },
                primary: {
                    25: "#fef1f8",
                    '50': '#fef1f8',
                    '100': '#fee5f2',
                    '200': '#fecce6',
                    '300': '#ffa2d2',
                    '400': '#fd69b1',
                    '500': '#f72585',
                    '600': '#e81a6e',
                    '700': '#ca0c54',
                    '800': '#a70d45',
                    '900': '#8b103c',
                    '950': '#550220',
                },
                accent: {
                    50: "#fef9ec",
                    100: "#fcedc9",
                    200: "#f8d98f",
                    300: "#f4b942",
                    400: "#f2a82d",
                    500: "#ec8714",
                    600: "#d1630e",
                    700: "#ad4510",
                    800: "#8d3513",
                    900: "#742d13",
                    950: "#421506",
                },
                secondary: {
                    '50': '#fff4fe',
                    '100': '#ffe7fe',
                    '200': '#ffcefd',
                    '300': '#ffa8f8',
                    '400': '#fd75ef',
                    '500': '#f540e3',
                    '600': '#d920c2',
                    '700': '#b5179e',
                    '800': '#931580',
                    '900': '#781766',
                    '950': '#510143',
                },
            },
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                px: "inset 0 1px 0 #b8dcff",
                "inset-px": "inset 0 1px 0 rgba(255,255,255,0.6)",
                highlight: "inset 0 1px 0 rgba(255,255,255,0.4)",
                highlighter: "inset 0 1px 0 rgba(255,255,255,0.2)",
                inset: "inset 0 2px 0 rgba(0,0,0,0.1)",
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        maxWidth: null,
                        pre: {
                            background: "transparent",
                            padding: 0,
                            borderWidth: "1px",
                            borderColor: "var(--tw-prose-quote-borders)",
                        },
                    },
                },
            }),
            keyframes: {
                shake: {
                    "0%": {
                        transform: "translateX(0rem) rotate(0deg)",
                    },
                    "25%": {
                        transform: "translateX(-0.25rem) rotate(-20deg)",
                    },
                    "75%": {
                        transform: "translateX(0.25rem)  rotate(20deg)",
                    },
                    "100%": {
                        transform: "translateX(0rem)  rotate(0deg)",
                    },
                },
            },
            animation: {
                shake: "shake .3s both",
            },
        },
    },

    plugins: [forms, require("@tailwindcss/typography")],
};
