# Angular Theme
```
// in styles.scss or your top-level sass file
import '~@pxblue/themes/angular/theme.scss'
```
In order to use the default theme font (Open Sans), you will also need to modify your angular.json file "styles" entries (there is one under "build" and one under "test") to include the Open Sans reference:
```
"styles": [
    "src/styles.scss",
    "./node_modules/typeface-open-sans"
],
```
