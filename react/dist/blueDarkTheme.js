"use strict";
/**
 Copyright (c) 2018-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var ThemeColors = require("@pxblue/colors");
exports.blueDarkTheme = {
    palette: {
        primary: ThemeColors.blue,
        secondary: ThemeColors.lightBlue,
        error: ThemeColors.red,
        grey: ThemeColors.gray,
        background: constants_1.darkBackground,
        text: constants_1.darkText,
        action: constants_1.darkAction,
        // @ts-ignore
        line: { stepper: ThemeColors.black['500'] },
        input: constants_1.darkInput,
        type: 'dark'
    },
    typography: constants_1.typography,
    direction: "ltr",
    overrides: {
        // APP BAR OVERRIDES
        MuiAppBar: {
            colorDefault: {
                color: ThemeColors.black['100'],
                backgroundColor: ThemeColors.black['A200']
            },
            colorPrimary: {
                color: ThemeColors.black['50'],
                backgroundColor: ThemeColors.black['A700']
            },
            colorSecondary: {
                backgroundColor: ThemeColors.black['A100']
            }
        },
        // BACKDROP OVERRIDES
        MuiBackdrop: {
            root: {
                backgroundColor: 'rgba(0, 0, 0, 0.3)'
            }
        },
        // BUTTON OVERRIDES
        MuiButton: {
            outlined: {
                borderColor: ThemeColors.black['100']
            },
            contained: {
                backgroundColor: ThemeColors.black['500'],
                color: ThemeColors.white['50'],
                '&:hover': {
                    backgroundColor: ThemeColors.black['300'],
                }
            }
        },
        // CHIP OVERRIDES
        MuiChip: {
            root: {
                backgroundColor: ThemeColors.black['500']
            }
        },
        // DRAWER OVERRIDES
        MuiDrawer: {
            paper: {
                backgroundColor: ThemeColors.black['A400']
            },
            paperAnchorBottom: {
                backgroundColor: ThemeColors.black['900']
            }
        },
        // FAB OVERRIDES
        MuiFab: {
            root: {
                backgroundColor: ThemeColors.black['500'],
                color: ThemeColors.white['50'],
                '&:hover': {
                    backgroundColor: ThemeColors.black['300'],
                }
            }
        },
        //LIST ITEM OVERRIDES (plus nav drawer)
        MuiListItem: {
            root: {
                color: ThemeColors.gray['300'],
            }
        },
        // SNACKBAR OVERRIDES
        MuiSnackbarContent: {
            root: {
                backgroundColor: ThemeColors.black['A700'],
                color: ThemeColors.white['50']
            }
        },
        // TABLE OVERRIDES
        MuiTableCell: {
            head: {
                fontWeight: 600
            }
        },
        MuiTableHead: {
            root: {
                background: ThemeColors.black['A200']
            }
        },
        MuiTableRow: {
            root: {
                color: ThemeColors.gray['100'],
                "&$selected": {
                    backgroundColor: ThemeColors.black['A400']
                }
            }
        },
        // TABS OVERRIDES
        MuiTabs: {
            indicator: {
                backgroundColor: ThemeColors.blue['500']
            }
        }
    }
};
