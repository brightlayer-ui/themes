/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import * as ThemeColors from '@pxblue/colors';
import { typography, input, background, action } from './constants';

export const blueTheme = 
{
	palette:{
	  primary: ThemeColors.blue,
	  secondary: ThemeColors.gray,
    error: ThemeColors.red,
    background: background,
    action: action,
    line: {stepper: ThemeColors.blue['500']},
    input: input
  },
  typography: typography,
  direction: "ltr",
  overrides:{    
    // APP BAR OVERRIDES
    MuiAppBar:{
      colorDefault:{
        color: ThemeColors.black['500'],
        backgroundColor: ThemeColors.gray['100'],//ThemeColors.black['900']
      },
      colorSecondary:{
        backgroundColor: ThemeColors.gray['200']
      }
    }
  }
};
