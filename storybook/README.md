# @pxblue/storybook-theme
`@pxblue/storybook-theme` contains the theme used within PX Blue's angular, react, and react-native storybook demo applications.   
Integrating this theme into your storybook application will change the appearance of the storybook container and any Markdown notes found within the `@storybook/addon-notes` add-on.  


## Usage
`@pxblue/storybook-theme` is made using [@pxblue/colors](https://www.npmjs.com/package/@pxblue/colors) and the [@storybook/theming](https://www.npmjs.com/package/@storybook/theming) add-on.  Add these dependencies to your package by running:

```
yarn add @pxblue/colors @storybook/theming
```



To integrate `@pxblue/storybook-theme` into your storybook app, add the following code to your config:
```typescript
import { pxblueTheme } from '@pxblue/storybook-theme'
import { addParameters } from '@storybook/react';

addParameters({
    options: {
        theme: pxblueTheme,
    }
});
```


 For additional help while integrating storybook themes, see the [storybook docs](https://storybook.js.org/docs/configurations/theming/).
