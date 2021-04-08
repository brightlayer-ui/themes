# PX Blue themes for React Native applications

This package provides theming support for Eaton applications using the PX Blue design system. It includes resources for developers using React Native with [react-native-paper](https://www.npmjs.com/package/react-native-paper). This package comes with two theme options: a Blue theme (standard) and a Dark theme.

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

> **NOTE:** Using the PX Blue React Native theme requires that you add the Open Sans font to your application. You can learn how to do this by reading the instructions for [Vanilla React Native](https://medium.com/react-native-training/react-native-custom-fonts-ccc9aacf9e5e) or [Expo](https://docs.expo.io/versions/latest/guides/using-custom-fonts/). This will be added automatically if you start your project with the [@pxblue/cli](https://www.npmjs.com/package/@pxblue/cli).

> When using Expo, you will need to specify the name for each font weight you load using the format `OpenSans-<Weight>`, e.g., OpenSans-SemiBold. Refer to one of our React Native demos for reference.

### Light Theme

To use the light theme in your application, simply wrap the app in a `Provider` and pass in your desired theme (`blue`).

```tsx
import { Provider as ThemeProvider} from 'react-native-paper';
import * as PXBThemes from '@pxblue/react-native-themes';
...
// Default Theme
<ThemeProvider theme={PXBThemes.blue}>
    <App />
</ThemeProvider>
```

### Dark Theme

The theming mechanism for React Native Paper is a bit limited in the amount of customization available for components. Because of this, there are two dark themes available from PX Blue that should be applied to different components.

The main theme should be applied using a `Provider` that wraps your application and passing in the theme (`blueDark`). This will be applied to the majority of the component in the RNP library.

```tsx
import { Provider as ThemeProvider} from 'react-native-paper';
import * as PXBThemes from '@pxblue/react-native-themes';
...
<ThemeProvider theme={PXBThemes.blueDark}>
    <App />
</ThemeProvider>
```

#### Alternate Dark Theme

The alternate dark theme (`blueDarkAlt`) should be applied to select components to give them the desired PX Blue styling. The following components should use the alternate dark theme:

-   Activity Indicator
-   Appbar
-   Avatar
-   Badge
-   Bottom Navigation
-   Button (`contained` mode variant)
-   FAB
-   ProgressBar
-   Snackbar
-   TextInput

![Dark Theme Infographic](https://raw.githubusercontent.com/pxblue/themes/master/react-native/assets/dark-theme-infographic.png)

1. For these components, make sure you are using the darkThemeAlt.
2. Do not use the darkTheme or these components will render using the incorrect color scheme.

##### One-Off Usage

If you are only using a component from this list once or twice in your application, you can pass the alternate theme directly to the component through the `theme` prop.

```tsx
import { useTheme } from 'react-native-paper';
import { blueDarkAlt } from '@pxblue/react-native-themes';
const theme = useTheme();
...
<Badge size={24} visible theme={theme.dark ? blueDarkAlt : {}}></Badge>
```

##### Component-Based Usage

If you are using components frequently, it's best to create a wrapper component that will handle the alternate theme logic. This will allow you to keep your code more readable and avoid errors with inconsistent theme application.

To do this, you define a wrapper component that acts as a pass-through for all of the default props and adds the theme logic.

```tsx
import React from 'react';
import { blueDarkAlt } from '@pxblue/react-native-themes';
import { SomeComponent as PaperComponent, useTheme } from 'react-native-paper';
...
export const SomeComponent: typeof PaperComponent = (props) => {
    const theme = useTheme(props.theme);
    return (
        <PaperComponent
            {...props}
            theme={
                theme.dark
                ? Object.assign({}, blueDarkAlt, props.theme)
                : {}
            }
        />
    );
};
```

You would then use your custom wrapper component throughout your application instead of using the component directly from React Native Paper:

```tsx
import { SomeComponent } from './path/to/SomeComponent';
...
<SomeComponent {...samePropsAsThePaperComponent} />
```

The `Button` component is a special case that requires the alternate theme only if you are using the contained mode. The wrapper component for the `Button` should look like:

```tsx
import React from 'react';
import { blueDarkAlt } from '@pxblue/react-native-themes';
import { Button, useTheme } from 'react-native-paper';
...
export const MyCustomButton: typeof Button = (props) => {
    const theme = useTheme(props.theme);
    return (
        <Button
            {...props}
            theme={
                props.mode === 'contained' && theme.dark
                    ? Object.assign({}, blueDarkAlt, props.theme)
                    : {}
            }
        />
    );
};
```

The `TextInput` component is a special case that requires usage of both `blueDark` and `blueDarkAlt` themes. The wrapper component for the `TextInput` should look like:

```tsx
import { blueDark, blueDarkAlt } from '@pxblue/react-native-themes';
import { TextInput, useTheme } from 'react-native-paper';
import _clonedeep from 'lodash.clonedeep';

export const MyCustomTextInput: typeof TextInput = (props) => {
    const theme = useTheme(props.theme);
    const darkTheme = _clonedeep(blueDarkAlt);
    darkTheme.colors.primary = blueDark.colors.primary;

    return <TextInput {...props} theme={theme.dark ? Object.assign({}, darkTheme, props.theme) : {}} />;
};
```

> **Sample Wrappers:** PX Blue has sample wrapper code for all of these components that you can copy for use in your application. These can be found in our [Showcase Demo](https://github.com/pxblue/react-native-showcase-demo/tree/master/components/wrappers).

### TypeScript

Our PX Blue themes extend the themes provided by React Native Paper. If you are using these themes in a TypeScript project and want to access any of the properties that were added to the defaults, you need to add the following [global augmentation](https://callstack.github.io/react-native-paper/theming.html#typescript) in your project's index.tsx file:

```tsx
declare global {
    namespace ReactNativePaper {
        interface ThemeColors {
            primaryBase: string;
            textSecondary: string;
        }
        interface ThemeFonts {
            bold: ThemeFont;
        }
    }
}
```

<!--
## Demo

[Check it out](https://github.com/pxblue/react-native-showcase-demo/tree/master)
-->
