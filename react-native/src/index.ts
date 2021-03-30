/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
export { blueTheme as blue } from './blueTheme';
export { blueDarkTheme as blueDark } from './blueDarkTheme';
export { blueDarkAltTheme as blueDarkAlt } from './blueDarkAltTheme';

// This will still need to be added to an end-user project if they want to access these properties without typescript yelling at them.
declare global {
    namespace ReactNativePaper {
        interface ThemeColors {
            primaryBase: string;
            textSecondary: string;
        }
        interface ThemeFonts {
            bold: ThemeFont;
        }
    }
}
