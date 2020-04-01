/**
 Copyright (c) 2020-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/

import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { typography, createSimplePalette } from './shared';
import * as ThemeColors from '@pxblue/colors';

/* 
    Refer to https://material-ui.com/customization/default-theme/ for a list of properties that are available
    to customize in our themes. These have changed periodically from version to version of Material UI.
*/
export const blueTheme: ThemeOptions =
{
    direction: "ltr",
    typography: typography,
    palette: {
        type: 'light',
        primary: createSimplePalette(ThemeColors.blue),
        secondary: createSimplePalette(ThemeColors.lightBlue),
        error: createSimplePalette(ThemeColors.red),
        background: {
            default: ThemeColors.gray['50'],
            paper: ThemeColors.white['50']
        },
        text: {
            primary: ThemeColors.black['500'],
            secondary: ThemeColors.black['300'],
            hint: ThemeColors.black['500'],
        },
        action: {
            active: ThemeColors.black[500],
            disabled: "rgba(0, 0, 0, .25)",
        },
    },
    overrides: {
        // APP BAR OVERRIDES
        MuiAppBar: {
            colorDefault: {
                color: ThemeColors.black['500'],
                backgroundColor: ThemeColors.gray['50']
            },
            colorSecondary: {
                backgroundColor: ThemeColors.blue['700']
            }
        },

        // BUTTON OVERRIDES
        MuiButton: {
            root: {
                textTransform: 'none'
            }
        },

        // BUTTON OVERRIDES
        MuiFab: {
            root: {
                textTransform: 'none'
            }
        },

        // LIST ITEM OVERRIDES
        MuiListItem: {
            root: {
                color: ThemeColors.black['500'],
            },

        },

        // TABS OVERRIDES
        MuiTabs: {
            indicator: {
                backgroundColor: ThemeColors.white['50']
            }
        },
    }
};
