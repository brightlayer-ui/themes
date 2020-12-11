"use strict";
/**
 Copyright (c) 2020-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("./shared");
var ThemeColors = require("@pxblue/colors");
/*
    Refer to https://material-ui.com/customization/default-theme/ for a list of properties that are available
    to customize in our themes. These have changed periodically from version to version of Material UI.
*/
exports.blueTheme = {
    direction: 'ltr',
    typography: shared_1.typography,
    palette: {
        type: 'light',
        primary: shared_1.createSimplePalette(ThemeColors.blue),
        secondary: shared_1.createSimplePalette(ThemeColors.lightBlue),
        error: shared_1.createSimplePalette(ThemeColors.red),
        background: {
            default: ThemeColors.gray[50],
            paper: ThemeColors.white[50],
        },
        text: {
            primary: ThemeColors.black[500],
            secondary: ThemeColors.black[300],
            hint: ThemeColors.gray[500],
        },
        action: {
            active: ThemeColors.black[500],
            disabled: 'rgba(0, 0, 0, .25)',
        },
    },
    overrides: {
        // APP BAR OVERRIDES
        MuiAppBar: {
            colorDefault: {
                color: ThemeColors.black[500],
                backgroundColor: ThemeColors.gray[50],
            },
            colorSecondary: {
                color: ThemeColors.white[50],
                backgroundColor: ThemeColors.blue[700],
                '& .MuiInputBase-root': {
                    color: ThemeColors.white[50],
                },
                '& .MuiSelect-icon': {
                    color: ThemeColors.white[50],
                },
            },
        },
        // BUTTON OVERRIDES
        MuiButton: {
            root: {
                textTransform: 'none',
            },
            outlined: {
                borderColor: ThemeColors.black[500],
            },
            outlinedPrimary: {
                borderColor: ThemeColors.blue[500],
            },
            outlinedSecondary: {
                borderColor: ThemeColors.lightBlue[500],
            },
        },
        // TEXT INPUT OVERRIDES
        MuiFilledInput: {
            root: {
                backgroundColor: ThemeColors.white[200],
            },
        },
        // BUTTON OVERRIDES
        MuiFab: {
            root: {
                textTransform: 'none',
            },
        },
        // LIST ITEM OVERRIDES
        MuiListItem: {
            root: {
                color: ThemeColors.black[500],
            },
        },
        // TABS OVERRIDES
        MuiTabs: {
            indicator: {
                backgroundColor: ThemeColors.white[50],
            },
        },
    },
};
