# PX Blue themes for React Native applications

This package provides theming support for Eaton applications using the PX Blue design system. It includes resources for developers using React Native with [react-native-paper](https://www.npmjs.com/package/react-native-paper). This package currently comes with one theme option: a Blue theme (standard). A dark variation of the theme will be coming in a future update.

For other frameworks, check out our related packages:

-   [@pxblue/angular-themes](https://www.npmjs.com/package/@pxblue/angular-themes)
-   [@pxblue/react-themes](https://www.npmjs.com/package/@pxblue/react-themes)

## Installation

Install with npm

```shell
npm install --save @pxblue/react-native-themes
```

or yarn

```shell
yarn add @pxblue/react-native-themes
```

# Usage

To use these themes in your application, simply wrap the app in a `Provider` and pass in your desired theme (`blue`).

```tsx
import { Provider as ThemeProvider} from 'react-native-paper';
import * as PXBThemes from '@pxblue/react-native-themes';
...
// Default Theme
<ThemeProvider theme={PXBThemes.blue}>
    <App />
</ThemeProvider>
```

> **NOTE:** Using the PX Blue React Native theme requires that you add the Open Sans font to your application. You can learn how to do this by reading the instructions for [Vanilla React Native](https://medium.com/react-native-training/react-native-custom-fonts-ccc9aacf9e5e) or [Expo](https://docs.expo.io/versions/latest/guides/using-custom-fonts/). This will be added automatically if you start your project with the [@pxblue/cli](https://www.npmjs.com/package/@pxblue/cli).

> When using Expo, you will need to specify the name for each font weight you load using the format `OpenSans-<Weight>`, e.g., OpenSans-SemiBold. Refer to one of our React Native demos for reference.

## Demo

Coming Soon
