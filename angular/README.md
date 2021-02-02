# PX Blue themes for Angular applications

This package provides theming support for Eaton applications using the PX Blue design system. It includes resources for developers using Angular w/ [Angular Material](https://www.npmjs.com/package/@angular/material). This package comes with two theme options: a Blue theme (standard) and a Dark theme.

For other frameworks, check out our related packages:

-   [@pxblue/react-themes](https://www.npmjs.com/package/@pxblue/react-themes)
-   [@pxblue/react-native-themes](https://www.npmjs.com/package/@pxblue/react-native-themes)

## Installation

Install with npm

```shell
npm install --save @pxblue/angular-themes
```

or yarn

```shell
yarn add @pxblue/angular-themes
```

## Usage

In order to use the PX Blue themes and font (Open Sans), you will need to modify your angular.json file "styles" entries (there is one under "build" and one under "test") to include the PX Blue themes and Open Sans reference:

```js
"styles": [
    "src/styles.scss",
    "./node_modules/@pxblue/angular-themes/theme.scss",
    "./node_modules/@pxblue/angular-themes/open-sans.scss"
],
```

Alternatively, you can also import the theme file in your top-level SCSS file.

```scss
// in styles.scss or your top-level scss file
import '~@pxblue/angular-themes/theme.scss'
import '~@pxblue/angular-themes/open-sans.scss'
```

You can then apply the theme to your application by adding the proper class to your application's body element:

```HTML
// Default Theme
<body class="pxb-blue">

// Dark Theme
<body class="pxb-blue-dark">
```

> If you do not specify a theme class, your application will use the default Material theme.

### Updating From Version 5 ~> 6

In version 6, we have migrated from the deprecated `typeface-open-sans` package to `@fontsource/open-sans` (bundled with the PX Blue themes). You'll need to update your Open Sans references in angular.json:

Before:

```js
'./node_modules/typeface-open-sans';

```

After:

```js
'./node_modules/@pxblue/angular-themes/open-sans.scss';

```

## Demo

[View on Stackblitz](https://stackblitz.com/github/pxblue/themes/tree/master/angular/demo)
