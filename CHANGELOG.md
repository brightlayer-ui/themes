## v4.0.0
This package is now deprecated. Themes have been broken out into separate NPM packages. Please update to the package specific to your framework:
* [@pxblue/angular-themes](https://www.npmjs.com/package/@pxblue/angular-themes)
* [@pxblue/react-themes](https://www.npmjs.com/package/@pxblue/react-themes)
* [@pxblue/react-native-themes](https://www.npmjs.com/package/@pxblue/react-native-themes)

## v3.0.1
* Our React Native theme has been converted to TypeScript to provide strong typing for TypeScript projects. These themes will continue to work as usual for JS projects.

## v3.0.0
* Our React theme has been converted to TypeScript to provide strong typing for TypeScript projects. These themes will continue to work as usual for JS projects.

## v2.2.3
* Introduces new theme for React Native applications using the @pxblue/react-native-components library.

## v2.1.0
Updated error/warn color for Angular theme

## v2.0.2
* Adds anti-aliasing style rules to Angular theme to match default React behavior

## v2.0.0
This update has introduced an updated Dark theme for PX Blue applications. 

Breaking Changes:
* When using Angular themes, you must apply a theme class to the root element of your application - the Blue theme is no longer applied automatically.
* React secondary color palette has been updated - you may notice slight changes to any elements styled with the secondary palette.
* Removed React Native themes since they merely copy the color palettes from @pxblue/colors.
* Removed deprecated NativeScript themes
* Removed deprecated Red/Red Dark themes

> **NOTE**: In order to use the dark themes, you must be using at least version 1.0.13 of [@pxblue/colors](https://www.npmjs.com/package/@pxblue/colors).
