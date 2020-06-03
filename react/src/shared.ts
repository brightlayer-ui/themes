/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import { PXBlueColor } from '@pxblue/types';
import { SimplePaletteColorOptions } from '@material-ui/core';

export const typography = {
    fontFamily: '"Open Sans", Helvetica, Roboto, sans-serif',
    fontWeightMedium: 600,
    h1: {
        marginBottom: '8px'
    },
    h2: {
        marginBottom: '8px'
    },
    h3: {
        marginBottom: '8px'
    },
    h4: {
        marginBottom: '8px'
    },
    h5: {
        marginBottom: '8px'
    },
    h6: {
        fontWeight: 600,
        marginBottom: '8px'
    },
    subtitle1: {
        marginBottom: '8px'
    },
    subtitle2: {
        fontWeight: 600,
        marginBottom: '8px'
    },
    body1: {
        lineHeight: '1.5em',
        marginBottom: '8px'
    },
    body2: {
        lineHeight: '1.43em',
        marginBottom: '8px'
    },
    button: {
        fontWeight: 600,
        lineHeight: '1.75em',
        marginBottom: '8px'
    },
    caption: {
        marginBottom: '8px'
    },
    overline: {
        letterSpacing: '2px',
        fontSize: '12px',
        marginBottom: '8px'
    },


};
export const createSimplePalette = (color: PXBlueColor): SimplePaletteColorOptions => ({
    light: color[50],
    main: color[500],
    dark: color[700],
});
