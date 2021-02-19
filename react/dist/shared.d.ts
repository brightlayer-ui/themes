/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
import { PXBlueColor } from '@pxblue/types';
import { SimplePaletteColorOptions } from '@material-ui/core';
export declare const typography: {
    fontFamily: string;
    fontWeightMedium: number;
    h6: {
        fontWeight: number;
    };
    subtitle2: {
        fontWeight: number;
    };
    body1: {
        lineHeight: string;
    };
    body2: {
        lineHeight: string;
    };
    button: {
        fontWeight: number;
        lineHeight: string;
    };
    overline: {
        letterSpacing: string;
        fontSize: string;
        fontWeight: number;
    };
};
export declare const createSimpleLightPalette: (color: PXBlueColor) => SimplePaletteColorOptions;
export declare const createSimpleDarkPalette: (color: PXBlueColor) => SimplePaletteColorOptions;
