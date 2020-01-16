/**
Copyright (c) 2018-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import {blue, red, gray, lightBlue, white} from '@pxblue/colors';
import { Theme as PXBlueTheme } from '@pxblue/react-native-components/core/theme';

export const blueTheme: PXBlueTheme =
{
  roundness: 4,
  fonts: {
    extraBold: {
      fontFamily: 'OpenSans-ExtraBold',
      // fontWeight: '800'
    },
    bold: {
      fontFamily: 'OpenSans-Bold',
      // fontWeight: '700'
    },
    semiBold: {
      fontFamily: 'OpenSans-SemiBold',
      // fontWeight: '600'
    },
    regular: {
      fontFamily: 'OpenSans-Regular',
      // fontWeight: '400'
    },
    light: {
      fontFamily: 'OpenSans-Light',
      // fontWeight: '300'
    }
  },
  colors: {
    primary: blue[500],
    background: gray[50],
    surface: white[50],
    accent: lightBlue[500],
    error: red[500],
    text: gray[500],
    onPrimary: white[50]
  },
  sizes: {
    tiny: 10,
    extraSmall: 12,
    small: 14,
    medium: 16,
    large: 20,
    extraLarge: 24,
    giant: 34
  }
};