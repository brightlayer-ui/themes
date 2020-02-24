# PX Blue themes for Storybook applications
This package contains theming support for [Storybook](https://storybook.js.org/) applications built using Angular or React. It is primarily used to give these applications a PX Blue look and feel. Integrating this theme into your storybook application will change the appearance of the storybook container and any Markdown notes found within the `@storybook/addon-notes` add-on.  

## Installation
This theme package depends on [@pxblue/colors](https://www.npmjs.com/package/@pxblue/colors) and the [@storybook/theming](https://www.npmjs.com/package/@storybook/theming) add-on. To begin, install all three by running:

```
yarn add @pxblue/colors @storybook/theming @pxblue/storybook-themes
```

## Usage
To integrate the theme into your storybook app, add the following code to your config:
```typescript
import { pxblueTheme } from '@pxblue/storybook-themes'
import { addParameters } from '@storybook/react';

addParameters({
    options: {
        theme: pxblueTheme,
    }
});
```
For additional help while integrating storybook themes, see the [storybook docs](https://storybook.js.org/docs/configurations/theming/).

## Demos
You can see this theme in action in the documentation for PX Blue component libraries at [pxblue-components.github.io](https://pxblue-components.github.io).