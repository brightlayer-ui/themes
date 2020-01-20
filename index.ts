/**
Copyright (c) 2018-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import * as RThemes from './react/dist';
import * as RNThemes from './react-native/dist';

import {ThemeOptions as PXBlueReactTheme} from "@material-ui/core/styles/createMuiTheme";
import { Theme as PXBlueReactNativeTheme } from '@pxblue/react-native-components/core/theme';

type ReactThemesType = {
    blue: PXBlueReactTheme,
    blueDark: PXBlueReactTheme
}

type ReactNativeThemesType = {
    blue: PXBlueReactNativeTheme
}

export const ReactThemes: ReactThemesType = {
    // @ts-ignore
    blue: RThemes.blue,
    // @ts-ignore
    blueDark: RThemes.blueDark
};
export const ReactNativeThemes: ReactNativeThemesType = {
    blue: RNThemes.blue
};
