/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import { configureFonts, DefaultTheme } from 'react-native-paper';
import { blue, red, gray, black, lightBlue, white } from '@pxblue/colors';
import { fontConfig } from './shared';

export const blueTheme = {
    ...DefaultTheme,
    dark: false,
    roundness: 4,
    fonts: configureFonts(fontConfig),
    colors: {
        ...DefaultTheme.colors,
        primary: blue[500],
        primaryBase: blue[500],
        accent: lightBlue[500],
        background: gray[50],
        surface: white[50],
        error: red[500],
        text: black[500],
        textSecondary: black[300],
        onBackground: black[500],
        onSurface: black[500],
        notification: lightBlue[500],
    },
};
