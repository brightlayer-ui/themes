/**
Copyright (c) 2018-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
import { ThemeOptions as PXBlueReactTheme } from "@material-ui/core/styles/createMuiTheme";
import { Theme as PXBlueReactNativeTheme } from '@pxblue/react-native-components/core/theme';
declare type ReactThemesType = {
    blue: PXBlueReactTheme;
    blueDark: PXBlueReactTheme;
};
declare type ReactNativeThemesType = {
    blue: PXBlueReactNativeTheme;
};
export declare const ReactThemes: ReactThemesType;
export declare const ReactNativeThemes: ReactNativeThemesType;
export {};
