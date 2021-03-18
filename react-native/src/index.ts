/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
export { blueTheme as blue } from './blueTheme';
export { blueDarkTheme as blueDark } from './blueDarkTheme';
export { blueDarkAltTheme as blueDarkAlt } from './blueDarkAltTheme';

// TODO This isn't working as expected when used in a project...need to figure out how to make this accessible
declare global {
    namespace ReactNativePaper {
        interface ThemeColors {
            primaryBase: string;
            textSecondary: string;
        }
    }
}
