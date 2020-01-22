"use strict";
/**
Copyright (c) 2018-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("@pxblue/colors");
exports.blueTheme = {
    roundness: 4,
    fonts: {
        extraBold: {
            fontFamily: 'OpenSans-ExtraBold',
        },
        bold: {
            fontFamily: 'OpenSans-Bold',
        },
        semiBold: {
            fontFamily: 'OpenSans-SemiBold',
        },
        regular: {
            fontFamily: 'OpenSans-Regular',
        },
        light: {
            fontFamily: 'OpenSans-Light',
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
