# PX Blue themes for Eaton applications
This package provides theming support for Eaton applications using the PX Blue design system. It includes resources for developers using:
* Angular w/ [Angular Material](https://www.npmjs.com/package/@angular/material)
* React w/ [Material UI](https://www.npmjs.com/package/@material-ui/core)

The PX Blue themes package comes with two theme options: a Blue theme (standard) and a Dark theme.

## Installation
Install with npm
```
npm install --save @pxblue/themes
```
or yarn
```
yarn add @pxblue/themes
```

## Usage
Depending on the framework that you are using, PX Blue themes are applied in different ways.

### Angular w/ Angular Material
In order to use the PX Blue themes and font (Open Sans), you will need to modify your angular.json file "styles" entries (there is one under "build" and one under "test") to include the PX Blue themes and Open Sans reference:
```
"styles": [
    "src/styles.scss",
    "./node_modules/@pxblue/themes/angular/theme.scss",
    "./node_modules/typeface-open-sans"
],
```

Alternatively, you can also import the theme file in your top-level SCSS file.
```
// in styles.scss or your top-level scss file
import '~@pxblue/themes/angular/theme.scss'
```

You can then apply the theme to your application by adding the proper class to your application's top-level element:
```
// Default Theme
<app-root class="pxb-blue">

// Dark Theme
<app-root class="pxb-blue-dark">
```
> If you do not specify a theme class, your application will use the default Material theme.

### React w/ Material UI
```
import { 
    MuiThemeProvider, 
    createMuiTheme 
} from '@material-ui/core/styles';
import * as PXBThemes from '@pxblue/themes/react';
require('typeface-open-sans');

...
// Default Theme
<MuiThemeProvider theme={createMuiTheme(PXBThemes.blue)}>
    <App />
</MuiThemeProvider>
...
// Dark Theme
<MuiThemeProvider theme={createMuiTheme(PXBThemes.blueDark)}>
    <App />
</MuiThemeProvider>
```

## Demos
| Framework           | Live Examples  |
| ---------------- |------------------|
| Angular | [View on Stackblitz](https://stackblitz.com/github/pxblue/themes/tree/master/angular/demo)
| React | [View on Code Sandbox](https://codesandbox.io/s/github/pxblue/themes/tree/master/react/demo)