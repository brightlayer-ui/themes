# PX Blue themes for React applications

This package provides theming support for Eaton applications using the PX Blue design system. It includes resources for developers using React w/ [Material UI](https://www.npmjs.com/package/@material-ui/core) version 4+ (prior versions of this package will work with Material UI version 3 - check the [Changelog](https://github.com/pxblue/themes/blob/master/CHANGELOG.md) for details). This package comes with two theme options: a Blue theme (standard) and a Dark theme.

For other frameworks, check out our related packages:

-   [@pxblue/angular-themes](https://www.npmjs.com/package/@pxblue/angular-themes)
-   [@pxblue/react-native-themes](https://www.npmjs.com/package/@pxblue/react-native-themes)

## Installation

Install with npm

```shell
npm install --save @pxblue/react-themes
```

or yarn

```shell
yarn add @pxblue/react-themes
```

# Usage

To use these themes in your application, simply wrap the app in a `ThemeProvider` and pass in your desired theme (`blue` or `blueDark`). You'll also need to include the Open Sans font resources (included with the themes):

```tsx
import {
    ThemeProvider,
    createMuiTheme
} from '@material-ui/core/styles';
import * as PXBlueThemes from '@pxblue/react-themes';
import "@pxblue/react-themes/open-sans";
...
<ThemeProvider theme={createMuiTheme(PXBlueThemes.blue)}>
    <App />
</ThemeProvider>
```

### Updating From Version 5 ~> 6

In version 6, we have migrated from the deprecated `typeface-open-sans` package to `@fontsource/open-sans` (bundled with the PX Blue themes). You'll need to update your Open Sans import references in your root file:

Before:

```js
require('typeface-open-sans');
```

After:

```js
import '@pxblue/react-themes/open-sans';
```

## Demo

[View on Code Sandbox](https://codesandbox.io/s/github/pxblue/themes/tree/master/react/demos/theme/)
