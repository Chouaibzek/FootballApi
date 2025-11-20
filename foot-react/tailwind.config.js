const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            default: {
              50: "#f6f8f7",
              100: "#eaefec",
              200: "#dee5e0",
              300: "#d2dcd5",
              400: "#c5d2c9",
              500: "#b9c9be",
              600: "#99a69d",
              700: "#78837c",
              800: "#585f5a",
              900: "#383c39",
              foreground: "#000",
              DEFAULT: "#b9c9be"
            },
            primary: {
              50: "#eaeaea",
              100: "#cccbcd",
              200: "#aeadb0",
              300: "#918f92",
              400: "#737175",
              500: "#555358",
              600: "#464449",
              700: "#373639",
              800: "#28272a",
              900: "#1a191a",
              foreground: "#fff",
              DEFAULT: "#555358"
            },
            secondary: {
              50: "#ebebeb",
              100: "#cfcfd0",
              200: "#b3b3b4",
              300: "#979899",
              400: "#7b7c7d",
              500: "#5f6062",
              600: "#4e4f51",
              700: "#3e3e40",
              800: "#2d2e2f",
              900: "#1d1d1d",
              foreground: "#fff",
              DEFAULT: "#5f6062"
            },
            success: {
              50: "#efedec",
              100: "#d7d5d0",
              200: "#c0bcb5",
              300: "#a9a39a",
              400: "#928b7e",
              500: "#7b7263",
              600: "#655e52",
              700: "#504a40",
              800: "#3a362f",
              900: "#25221e",
              foreground: "#fff",
              DEFAULT: "#7b7263"
            },
            warning: {
              50: "#f8f8ea",
              100: "#eeefcb",
              200: "#e4e6ad",
              300: "#dadd8f",
              400: "#d0d371",
              500: "#c6ca53",
              600: "#a3a744",
              700: "#818336",
              800: "#5e6027",
              900: "#3b3d19",
              foreground: "#000",
              DEFAULT: "#c6ca53"
            },
            danger: {
              50: "#f8fbf6",
              100: "#eff5e8",
              200: "#e5eedb",
              300: "#dce8ce",
              400: "#d2e2c0",
              500: "#c9dcb3",
              600: "#a6b694",
              700: "#838f74",
              800: "#5f6955",
              900: "#3c4236",
              foreground: "#000",
              DEFAULT: "#c9dcb3"
            },
            background: "#f6fffa",
            foreground: "#004c1b",
            content1: {
              DEFAULT: "#e0f5e8",
              foreground: "#000"
            },
            content2: {
              DEFAULT: "#c2ebd0",
              foreground: "#000"
            },
            content3: {
              DEFAULT: "#a3e0b9",
              foreground: "#000"
            },
            content4: {
              DEFAULT: "#85d6a1",
              foreground: "#000"
            },
            focus: "#66cc8a",
            overlay: "#000000"
          }
        },
        dark: {
          colors: {
            default: {
              50: "#0e100e",
              100: "#1d211d",
              200: "#2b312b",
              300: "#3a423a",
              400: "#485248",
              500: "#6d756d",
              600: "#919791",
              700: "#b6bab6",
              800: "#dadcda",
              900: "#ffffff",
              foreground: "#fff",
              DEFAULT: "#485248"
            },
            primary: {
              50: "#1a191a",
              100: "#28272a",
              200: "#373639",
              300: "#464449",
              400: "#555358",
              500: "#737175",
              600: "#918f92",
              700: "#aeadb0",
              800: "#cccbcd",
              900: "#eaeaea",
              foreground: "#fff",
              DEFAULT: "#555358"
            },
            secondary: {
              50: "#1d1d1d",
              100: "#2d2e2f",
              200: "#3e3e40",
              300: "#4e4f51",
              400: "#5f6062",
              500: "#7b7c7d",
              600: "#979899",
              700: "#b3b3b4",
              800: "#cfcfd0",
              900: "#ebebeb",
              foreground: "#fff",
              DEFAULT: "#5f6062"
            },
            success: {
              50: "#25221e",
              100: "#3a362f",
              200: "#504a40",
              300: "#655e52",
              400: "#7b7263",
              500: "#928b7e",
              600: "#a9a39a",
              700: "#c0bcb5",
              800: "#d7d5d0",
              900: "#efedec",
              foreground: "#fff",
              DEFAULT: "#7b7263"
            },
            warning: {
              50: "#3b3d19",
              100: "#5e6027",
              200: "#818336",
              300: "#a3a744",
              400: "#c6ca53",
              500: "#d0d371",
              600: "#dadd8f",
              700: "#e4e6ad",
              800: "#eeefcb",
              900: "#f8f8ea",
              foreground: "#000",
              DEFAULT: "#c6ca53"
            },
            danger: {
              50: "#3c4236",
              100: "#5f6955",
              200: "#838f74",
              300: "#a6b694",
              400: "#c9dcb3",
              500: "#d2e2c0",
              600: "#dce8ce",
              700: "#e5eedb",
              800: "#eff5e8",
              900: "#f8fbf6",
              foreground: "#000",
              DEFAULT: "#c9dcb3"
            },
            background: "#010b06",
            foreground: "#99d2ad",
            content1: {
              DEFAULT: "#14291c",
              foreground: "#fff"
            },
            content2: {
              DEFAULT: "#295237",
              foreground: "#fff"
            },
            content3: {
              DEFAULT: "#3d7a53",
              foreground: "#fff"
            },
            content4: {
              DEFAULT: "#52a36e",
              foreground: "#000"
            },
            focus: "#66cc8a",
            overlay: "#ffffff"
          }
        }
      },
      layout: {
        disabledOpacity: "0.4"
      }
    })
  ],
}