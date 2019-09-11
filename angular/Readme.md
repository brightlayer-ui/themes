# Angular Theme
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

## Demo
[View on Stackblitz](https://stackblitz.com/github/pxblue/themes/tree/master/angular/demo)