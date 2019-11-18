"use strict";
/**
Copyright (c) 2018-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
var colors_1 = require("@pxblue/colors");
exports.blueTheme = {
    roundness: 4,
    fonts: {
        extraBold: {
            fontFamily: 'OpenSans-ExtraBold',
            fontWeight: '800'
        },
        bold: {
            fontFamily: 'OpenSans-Bold',
            fontWeight: '700'
        },
        semiBold: {
            fontFamily: 'OpenSans-SemiBold',
            fontWeight: '600'
        },
        regular: {
            fontFamily: 'OpenSans-Regular',
            fontWeight: '400'
        },
        light: {
            fontFamily: 'OpenSans-Light',
            fontWeight: '300'
        }
    },
    colors: {
        primary: colors_1.blue[500],
        background: colors_1.gray[50],
        surface: colors_1.white[50],
        accent: colors_1.lightBlue[500],
        error: colors_1.red[500],
        text: colors_1.gray[500],
        onPrimary: colors_1.white[50]
    },
    sizes: {
        tiny: 10,
        extraSmall: 12,
        small: 14,
        medium: 16,
        large: 20,
        extraLarge: 24,
        giant: 34
    }
};
exports.expoBlueTheme = {
    roundness: 4,
    fonts: {
        extraBold: {
            fontFamily: 'open-sans-extrabold',
            fontWeight: '800'
        },
        bold: {
            fontFamily: 'open-sans-bold',
            fontWeight: '700'
        },
        semiBold: {
            fontFamily: 'open-sans-semibold',
            fontWeight: '600'
        },
        regular: {
            fontFamily: 'open-sans-regular',
            fontWeight: '400'
        },
        light: {
            fontFamily: 'open-sans-light',
            fontWeight: '300'
        }
    },
    colors: {
        primary: colors_1.blue[500],
        background: colors_1.gray[50],
        surface: colors_1.white[50],
        accent: colors_1.lightBlue[500],
        error: colors_1.red[500],
        text: colors_1.gray[500],
        onPrimary: colors_1.white[50]
    },
    sizes: {
        tiny: 10,
        extraSmall: 12,
        small: 14,
        medium: 16,
        large: 20,
        extraLarge: 24,
        giant: 34
    }
};
