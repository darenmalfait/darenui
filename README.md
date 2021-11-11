<div align="center">
<h1>DarenUI</h1>

<p>Daren Component library</p>
</div>

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Usage](#usage)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Quick start](#quick-start)
- [Component library development](#component-library-development)
  - [Storybook](#storybook)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

### Installation

To install the component-library run the following within your project directory.

```sh
npm i @daren/ui-core @daren/ui-components postcss tailwindcss @tailwindcss/typography
```

### Configuration

The theme of this library depends on the @tailwindcss/typography plugin. To use it, follow the steps on the plugin source page. https://github.com/tailwindlabs/tailwindcss-typography

```js
// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: [ // purge is a bad name, it should be called components or something...
    // ... paths that use tailwind
    "./node_modules/@daren/**/*.{js,ts,jsx,tsx}", // path to daren
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("@daren/ui-core"),
  ],
};
```

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Then you need a global css file which you import at the root of the project

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Quick start

```js
import * as React from "react";
import { ThemeProvider, H1 } from "@daren/ui-components";
​
function App() {
  return (
    <ThemeProvider>
      <H1>Hello Daren</H1>
    </ThemeProvider>
  );
}
```

## Component library development

Install node_modules with `npm install`.

### Storybook

1. Run `npm start` file in the project folder.
2. Visit `localhost:6006`