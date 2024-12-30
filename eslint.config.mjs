import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable specific ESLint rules here:
      "react/no-unescaped-entities": "off", // Example: Allow unescaped characters like '
      "no-console": "warn", // Example: Warn instead of error for console.log
      // Add more rules as needed
    },
  },
];

export default eslintConfig;
