/**
 Copyright (c) 2018-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/


import {ThemeOptions} from "@material-ui/core/styles/createMuiTheme";
import {action, background, input, text, typography} from './constants';

import * as ThemeColors from '@pxblue/colors';

export const blueTheme: ThemeOptions =
    {
        palette:{
            primary: ThemeColors.blue,
            secondary: ThemeColors.lightBlue,
            error: ThemeColors.red,
            background: background,
            text: text,
            action: action,
            // @ts-ignore
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
                    backgroundColor: ThemeColors.gray['50']
                },
                colorSecondary:{
                    backgroundColor: ThemeColors.blue['700']
                }
            },

            // TABS OVERRIDES
            MuiTabs:{
                indicator:{
                    backgroundColor: ThemeColors.white['50']
                }
            },

            // LIST ITEM OVERRIDES
            MuiListItem:{
                root:{
                    color: ThemeColors.black['500'],
                },

            },
        }
    };
