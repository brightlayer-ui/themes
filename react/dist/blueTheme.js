"use strict";
/**
Copyright (c) 2018-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var ThemeColors = require("@pxblue/colors");
var constants_1 = require("./constants");
exports.blueTheme = {
    palette: {
        primary: ThemeColors.blue,
        secondary: ThemeColors.lightBlue,
        error: ThemeColors.red,
        background: constants_1.background,
        action: constants_1.action,
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
        //LIST ITEM OVERRIDES (plus nav drawer)
        MuiListItem: {
            root: {
                color: ThemeColors.black['500'],
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.08)'
                },
                // OVERRIDES FOR ACTIVE ROUTE IN SIDE NAVIGATION
                '&.routeActive': {
                    position: 'relative',
                    '&:hover': {
                        backgroundColor: 'transparent'
                    },
                    '&:before': {
                        content: '""',
                        zIndex: -1,
                        position: 'absolute',
                        height: '100%',
                        width: 'calc(100% - 8px)',
                        left: 0,
                        top: 0,
                        backgroundColor: ThemeColors.blue['50'],
                        borderRadius: '0px 24px 24px 0px'
                    },
                    '&.drawerOpen:hover:before': {
                        backgroundColor: ThemeColors.blue['100'],
                    },
                    '& svg': {
                        fill: ThemeColors.blue['500']
                    }
                }
            },
        }
    }
};
