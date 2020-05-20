/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import { Platform } from 'react-native';
import { configureFonts, DefaultTheme, Theme } from 'react-native-paper';
import { blue, red, gray, black, lightBlue, white } from '@pxblue/colors';

const fallbackFont = Platform.OS === 'ios' ? 'System' : 'Roboto';
type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

const defaultFontConfig = {
    regular: {
        fontFamily: 'OpenSans-Regular' || fallbackFont,
        fontWeight: '400' as FontWeight,
    },
    medium: {
        fontFamily: 'OpenSans-SemiBold' || fallbackFont,
        fontWeight: '500' as FontWeight,
    },
    light: {
        fontFamily: 'OpenSans-Light' || fallbackFont,
        fontWeight: '300' as FontWeight,
    },
    thin: {
        fontFamily: 'OpenSans-Light' || fallbackFont,
        fontWeight: '100' as FontWeight,
    },
};

const fontConfig = {
    default: defaultFontConfig,
    ios: defaultFontConfig,
    android: defaultFontConfig,
};

export const blueTheme: Theme = {
    ...DefaultTheme,
    dark: false,
    roundness: 4,
    fonts: configureFonts(fontConfig),
    colors: {
        ...DefaultTheme.colors,
        primary: blue[500],
        accent: lightBlue[500],
        background: gray[50],
        surface: white[50],
        error: red[500],
        text: black[500],
        onBackground: black[500],
        onSurface: black[500],
        notification: lightBlue[500],
    }
};