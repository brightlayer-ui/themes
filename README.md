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
```
// in styles.scss or your top-level sass file
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

In order to use the PX Blue theme font (Open Sans), you will also need to modify your angular.json file "styles" entries (there is one under "build" and one under "test") to include the Open Sans reference:
```
"styles": [
    "src/styles.scss",
    "./node_modules/typeface-open-sans"
],
```


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
>**NOTE:** Our React theme has been updated to use the new v2 Typography variants. You may see warning in your console output if you are still using the older variants. Read the [Migration Guide](https://material-ui.com/style/typography/#migration-to-typography-v2) to learn how to update your application.
