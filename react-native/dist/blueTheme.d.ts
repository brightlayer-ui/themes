/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
import { TextStyle } from 'react-native';
declare type Font = {
    fontFamily: string;
    fontWeight: TextStyle['fontWeight'];
};
export declare type PXBlueReactNativeTheme = {
    roundness: number;
    colors: {
        primary: string;
        background: string;
        surface: string;
        accent: string;
        error: string;
        text: string;
        onPrimary: string;
    };
    fonts: {
        extraBold: Partial<Font>;
        bold: Partial<Font>;
        semiBold: Partial<Font>;
        regular: Partial<Font>;
        light: Partial<Font>;
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
export declare const blueTheme: PXBlueReactNativeTheme;
export {};
