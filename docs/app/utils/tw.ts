export const twFile = {
  name: 'tailwind.config.js',
  code: `import colors from "tailwindcss/colors";
module.exports = {
  mode: "jit",
  purge: [
    // ...
    "./node_modules/@darenui/**/*.{js,ts,jsx,tsx}", // path to darenui
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      }
    }
  },
  variants: {
    extend: {},
  },
  // add darenui plugin
  plugins: [
    require("@tailwindcss/forms"),
    require("@daren/ui-core")({
      colors: ["orange"],
    }),
    // ...
  ],
};`,
  readOnly: true,
}

export const tabsEndClosedTWFile = {
  name: 'tailwind.config.js',
  code: `module.exports = {
  mode: "jit",
  purge: [
    // ...
    "./node_modules/@darenui/**/*.{js,ts,jsx,tsx}", // path to darenui
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: {
        inherit: "inherit",
      },
    }
  },
  variants: {
    extend: {},
  },
  // add darenui plugin
  plugins: [
    require("@tailwindcss/forms"),
    require("@daren/ui-core"),
    // ...
  ],
};`,
  readOnly: true,
}
