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
    h6: {
        fontWeight: 600
    },
    subtitle2: {
        fontWeight: 600
    },
    body1: {
        lineHeight: '1.5em'
    },
    body2: {
        lineHeight: '1.43em'
    },
    button: {
        fontWeight: 600,
        lineHeight: '1.75em'
    },
    overline: {
        letterSpacing: '2px',
        fontSize: '12px',
        fontWeight: 600
    },


};
export const createSimplePalette = (color: PXBlueColor): SimplePaletteColorOptions => ({
    light: color[50],
    main: color[500],
    dark: color[700],
});
