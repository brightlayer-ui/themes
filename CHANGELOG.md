## v2.0.0
This update has introduced an updated Dark theme for PX Blue applications. 

Breaking Changes:
* When using Angular themes, you must apply a theme class to the root element of your application - the Blue theme is no longer applied automatically.
* React secondary color palette has been updated - you may notice slight changes to any elements styled with the secondary palette.
* Removed React Native themes since they merely copy the color palettes from @pxblue/colors.
* Removed deprecated NativeScript themes
* Removed deprecated Red/Red Dark themes

> **NOTE**: In order to use the dark themes, you must be using at least version 2.0.1 of [@pxblue/colors](https://www.npmjs.com/package/@pxblue/colors).