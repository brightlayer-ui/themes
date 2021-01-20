/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import { configureFonts, DefaultTheme } from 'react-native-paper';
import { blue, red, darkBlack, black, lightBlue, gray } from '@pxblue/colors';
import { fontConfig } from './shared';
import { Theme } from 'react-native-paper/lib/typescript/src/types';

export const blueDarkTheme: Theme = {
    ...DefaultTheme,
    dark: true,
    roundness: 4,
    fonts: configureFonts(fontConfig),
    colors: {
        ...DefaultTheme.colors,
        primary: blue[500],
        accent: lightBlue[500],
        background: darkBlack[100],
        surface: black[900],
        error: red[500],
        text: black[50],
        onBackground: gray[300],
        onSurface: gray[300],
        notification: lightBlue[500],
    },
};
