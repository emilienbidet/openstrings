import uiConfig from "@openstrings/ui/tailwind.config";
import type { Config } from "tailwindcss";

const config = {
    ...uiConfig,
    content: [
        ...uiConfig.content,
        "./src/**/*.{ts,tsx}",
    ],
} satisfies Config

export default config;