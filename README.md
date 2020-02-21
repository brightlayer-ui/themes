# PX Blue themes for Eaton applications
This package provides theming support for Eaton applications using the PX Blue design system. It includes resources for developers using:
* Angular w/ [Angular Material](https://www.npmjs.com/package/@angular/material)
* React w/ [Material UI](https://www.npmjs.com/package/@material-ui/core)
* React Native w/ [@pxblue/react-native-components](https://www.npmjs.com/package/@pxblue/react-native-components)

The PX Blue themes package comes with two theme options: a Blue theme (standard) and a Dark theme (not yet available for React Native).

## Installation
Previously, these themes were published together as @pxblue/themes, but they have since been separated into distinct packages for each framework. Get started by installing the appropriate package for your chosen framework:

```
yarn add @pxblue/angular-themes
yarn add @pxblue/react-themes
yarn add @pxblue/react-native-themes
```
>**NOTE**: We also have a theme package for theming storybook documentation applications in a PX Blue style (@pxblue/storybook-themes).

## Usage
Depending on the framework that you are using, PX Blue themes are applied in different ways.

### Angular w/ Angular Material
In order to use the PX Blue themes and font (Open Sans), you will need to modify your angular.json file "styles" entries (there is one under "build" and one under "test") to include the PX Blue themes and Open Sans reference:
```
"styles": [
    "src/styles.scss",
    "./node_modules/@pxblue/angular-themes/theme.scss",
    "./node_modules/typeface-open-sans"
],
```

Alternatively, you can also import the theme file in your top-level SCSS file.
```
// in styles.scss or your top-level scss file
import '~@pxblue/angular-themes/theme.scss'
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
To use these themes in your application, simply wrap the app in a `MuiThemeProvider` and pass in your desired theme (`blue` or `blueDark`):
```
import { 
    MuiThemeProvider, 
    createMuiTheme 
} from '@material-ui/core/styles';
import * as PXBlueThemes from '@pxblue/react-themes';
...
<MuiThemeProvider theme={createMuiTheme(PXBlueThemes.blue)}>
    <App />
</MuiThemeProvider>
```

### React Native w/ @pxblue/react-native-components
To use these themes in your application, simply wrap the app in a `ThemeProvider` and pass in your desired theme (`blue`). Omitting the `theme` prop will default to the Material theme:
```
import { ThemeProvider } from '@pxblue/react-native-components';
import * as PXBThemes from '@pxblue/react-native-themes';
...
// Default Theme
<ThemeProvider theme={PXBThemes.blue}>
    <App />
</ThemeProvider>
```

> **NOTE:** Using the PX Blue React Native theme requires that you add the Open Sans font to your application. You can learn how to do this by reading the instructions for [Vanilla React Native](https://medium.com/react-native-training/react-native-custom-fonts-ccc9aacf9e5e) or [Expo](https://docs.expo.io/versions/latest/guides/using-custom-fonts/).

> When using Expo, you will need to specify the name for each font weight you load using the format `OpenSans-<Weight>`, e.g., OpenSans-SemiBold. Refer to one of our React Native demos for reference.

## Demos
| Framework        | Live Examples                                                                                |
|------------------|----------------------------------------------------------------------------------------------|
| Angular          | [View on Stackblitz](https://stackblitz.com/github/pxblue/themes/tree/master/angular/demo)   |
| React            | [View on Code Sandbox](https://codesandbox.io/s/github/pxblue/themes/tree/master/react/demo) |
| React Native     | Coming Soon                                                                                  |