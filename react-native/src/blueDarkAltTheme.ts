/**
Copyright (c) 2020-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import { blue, black, lightBlue } from '@pxblue/colors';
import { blueDarkTheme } from './blueDarkTheme';

export const blueDarkAltTheme = {
    ...blueDarkTheme,
    colors: {
        ...blueDarkTheme.colors,
        primary: blue[500],
        accent: lightBlue[500],
        background: black[900],
        notification: lightBlue[500],
    },
};
