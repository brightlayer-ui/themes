/**
Copyright (c) 2018-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
export declare type PXBlueTheme = {
    roundness: number;
    fonts: {
        extraBold: {
            fontFamily: string;
        };
        bold: {
            fontFamily: string;
        };
        semiBold: {
            fontFamily: string;
        };
        regular: {
            fontFamily: string;
        };
        light: {
            fontFamily: string;
        };
    };
    colors: {
        primary: string;
        background: string;
        surface: string;
        accent: string;
        error: string;
        text: string;
        onPrimary: string;
    };
    sizes: {
        tiny: number;
        extraSmall: number;
        small: number;
        medium: number;
        large: number;
        extraLarge: number;
        giant: number;
    };
};
export declare const blueTheme: PXBlueTheme;
