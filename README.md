# PX Blue themes for Eaton applications
This package provides theming support for Eaton applications using the PX Blue design system. It includes resources for developers using:
* Angular w/ [Angular Material](https://www.npmjs.com/package/@angular/material)
* React w/ [Material UI](https://www.npmjs.com/package/@material-ui/core)
* NativeScript
* React Native

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
import '~@pxblue/themes/angular/src/eaton-theme'
```


### React w/ Material UI
```
import { 
    MuiThemeProvider, 
    createMuiTheme 
} from '@material-ui/core/styles';
import {
    EatonThemes,
    EatonColors
} from '@pxblue/themes/react/src';
...
<MuiThemeProvider theme={createMuiTheme(EatonThemes.blue)}>
    <App />
</MuiThemeProvider>
```

### NativeScript
```
// in styles.scss or your top-level sass file
import '~@pxblue/themes/nativescript/src/eaton-theme'
```

### React Native
The React Native theme provides a color palette but not a comprehensive automatic styling system. You will need to manually apply the appropriate colors to various elements in your application.

```
import Colors from '@pxblue/themes/react-native/src'
...
<Text style={{color: Colors.blue['500']}}>Hello World!</Text>
```