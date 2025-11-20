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
              50: "#f8f9fa",
              100: "#f1f3f5",
              200: "#e9ecef",
              300: "#dee2e6",
              400: "#ced4da",
              500: "#adb5bd",
              600: "#868e96",
              700: "#495057",
              800: "#343a40",
              900: "#212529",
              foreground: "#495057",
              DEFAULT: "#adb5bd"
            },
            primary: {
              50: "#e3f2fd",
              100: "#bbdefb",
              200: "#90caf9",
              300: "#64b5f6",
              400: "#42a5f5",
              500: "#2196f3",
              600: "#1e88e5",
              700: "#1976d2",
              800: "#1565c0",
              900: "#0d47a1",
              foreground: "#fff",
              DEFAULT: "#2196f3"
            },
            secondary: {
              50: "#f3e5f5",
              100: "#e1bee7",
              200: "#ce93d8",
              300: "#ba68c8",
              400: "#ab47bc",
              500: "#9c27b0",
              600: "#8e24aa",
              700: "#7b1fa2",
              800: "#6a1b9a",
              900: "#4a148c",
              foreground: "#fff",
              DEFAULT: "#9c27b0"
            },
            success: {
              50: "#e8f5e9",
              100: "#c8e6c9",
              200: "#a5d6a7",
              300: "#81c784",
              400: "#66bb6a",
              500: "#4caf50",
              600: "#43a047",
              700: "#388e3c",
              800: "#2e7d32",
              900: "#1b5e20",
              foreground: "#fff",
              DEFAULT: "#4caf50"
            },
            warning: {
              50: "#fff8e1",
              100: "#ffecb3",
              200: "#ffe082",
              300: "#ffd54f",
              400: "#ffca28",
              500: "#ffc107",
              600: "#ffb300",
              700: "#ffa000",
              800: "#ff8f00",
              900: "#ff6f00",
              foreground: "#000",
              DEFAULT: "#ffc107"
            },
            danger: {
              50: "#ffebee",
              100: "#ffcdd2",
              200: "#ef9a9a",
              300: "#e57373",
              400: "#ef5350",
              500: "#f44336",
              600: "#e53935",
              700: "#d32f2f",
              800: "#c62828",
              900: "#b71c1c",
              foreground: "#fff",
              DEFAULT: "#f44336"
            },
            background: "#f0ebe5",
            foreground: "#3e3731",
            content1: {
              DEFAULT: "#faf8f5",
              foreground: "#3e3731"
            },
            content2: {
              DEFAULT: "#f5f1ec",
              foreground: "#3e3731"
            },
            content3: {
              DEFAULT: "#ebe6e0",
              foreground: "#3e3731"
            },
            content4: {
              DEFAULT: "#e0dbd5",
              foreground: "#3e3731"
            },
            focus: "#2196f3",
            overlay: "#000000"
          }
        },
        dark: {
          colors: {
            default: {
              50: "#0a0a0a",
              100: "#171717",
              200: "#262626",
              300: "#404040",
              400: "#525252",
              500: "#737373",
              600: "#a3a3a3",
              700: "#d4d4d4",
              800: "#e5e5e5",
              900: "#f5f5f5",
              foreground: "#fff",
              DEFAULT: "#404040"
            },
            primary: {
              50: "#0a0a0a",
              100: "#171717",
              200: "#262626",
              300: "#404040",
              400: "#737373",
              500: "#a3a3a3",
              600: "#d4d4d4",
              700: "#e5e5e5",
              800: "#f5f5f5",
              900: "#ffffff",
              foreground: "#000",
              DEFAULT: "#FFFFFF"
            },
            secondary: {
              50: "#18181b",
              100: "#27272a",
              200: "#3f3f46",
              300: "#52525b",
              400: "#71717a",
              500: "#a1a1aa",
              600: "#d4d4d8",
              700: "#e4e4e7",
              800: "#f4f4f5",
              900: "#fafafa",
              foreground: "#fff",
              DEFAULT: "#6B7280"
            },
            success: {
              50: "#14532d",
              100: "#166534",
              200: "#15803d",
              300: "#16a34a",
              400: "#22c55e",
              500: "#4ade80",
              600: "#86efac",
              700: "#bbf7d0",
              800: "#dcfce7",
              900: "#f0fdf4",
              foreground: "#000",
              DEFAULT: "#22c55e"
            },
            warning: {
              50: "#713f12",
              100: "#854d0e",
              200: "#a16207",
              300: "#ca8a04",
              400: "#eab308",
              500: "#facc15",
              600: "#fde047",
              700: "#fef08a",
              800: "#fef9c3",
              900: "#fefce8",
              foreground: "#000",
              DEFAULT: "#eab308"
            },
            danger: {
              50: "#7f1d1d",
              100: "#991b1b",
              200: "#b91c1c",
              300: "#dc2626",
              400: "#ef4444",
              500: "#f87171",
              600: "#fca5a5",
              700: "#fecaca",
              800: "#fee2e2",
              900: "#fef2f2",
              foreground: "#fff",
              DEFAULT: "#ef4444"
            },
            background: "#111827",
            foreground: "#F3F4F6",
            content1: {
              DEFAULT: "#1f2937",
              foreground: "#fff"
            },
            content2: {
              DEFAULT: "#374151",
              foreground: "#fff"
            },
            content3: {
              DEFAULT: "#4b5563",
              foreground: "#fff"
            },
            content4: {
              DEFAULT: "#6b7280",
              foreground: "#fff"
            },
            focus: "#FFFFFF",
            overlay: "#ffffff"
          }
        }
      },
      layout: {
        disabledOpacity: "0.5"
      }
    })
  ],
}