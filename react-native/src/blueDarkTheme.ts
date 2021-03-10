/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import { configureFonts, DefaultTheme } from 'react-native-paper';
import { blue, red, darkBlack, black, lightBlue } from '@pxblue/colors';
import { fontConfig } from './shared';

export const blueDarkTheme: typeof DefaultTheme = {
    ...DefaultTheme,
    dark: true,
    roundness: 4,
    fonts: configureFonts(fontConfig),
    colors: {
        ...DefaultTheme.colors,
        primary: blue[200],
        accent: lightBlue[200],
        background: darkBlack[800],
        surface: black[900],
        error: red[200],
        text: black[50],
        placeholder: black[200],
        onBackground: black[50],
        onSurface: black[50],
        notification: lightBlue[200],
        disabled: 'rgba(123, 131, 135, 0.36)', // black[300] - 36% opacity
    },
};
