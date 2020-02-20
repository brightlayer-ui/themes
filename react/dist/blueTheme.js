"use strict";
/**
 Copyright (c) 2018-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var ThemeColors = require("@pxblue/colors");
exports.blueTheme = {
    palette: {
        primary: ThemeColors.blue,
        secondary: ThemeColors.lightBlue,
        error: ThemeColors.red,
        background: constants_1.background,
        text: constants_1.text,
        action: constants_1.action,
        // @ts-ignore
        line: { stepper: ThemeColors.blue['500'] },
        input: constants_1.input
    },
    typography: constants_1.typography,
    direction: "ltr",
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
        // TABS OVERRIDES
        MuiTabs: {
            indicator: {
                backgroundColor: ThemeColors.white['50']
            }
        },
        // LIST ITEM OVERRIDES
        MuiListItem: {
            root: {
                color: ThemeColors.black['500'],
            },
        },
    }
};
