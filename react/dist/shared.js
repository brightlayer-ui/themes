"use strict";
/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
Object.defineProperty(exports, "__esModule", { value: true });
exports.typography = {
    fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif',
    fontWeightMedium: 600,
    h6: {
        fontWeight: 600,
    },
    subtitle1: {
        fontWeight: 600,
    },
    subtitle2: {
        fontWeight: 600,
    },
    body1: {
        lineHeight: '1.5',
    },
    body2: {
        lineHeight: '1.43',
    },
    button: {
        fontWeight: 600,
        lineHeight: '1.75',
    },
    overline: {
        letterSpacing: '2px',
        fontSize: '0.75rem',
        fontWeight: 600,
        lineHeight: '2.67',
    },
    caption: {
        lineHeight: '1.67',
    },
};
exports.createSimpleLightPalette = function (color) { return ({
    light: color[50],
    main: color[500],
    dark: color[700],
}); };
exports.createSimpleDarkPalette = function (color) { return ({
    light: color[50],
    main: color[200],
    dark: color[500],
}); };
