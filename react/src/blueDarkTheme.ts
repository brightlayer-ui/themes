/**
 Copyright (c) 2020-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/

import { typography, createSimplePalette } from './shared';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

import * as ThemeColors from '@pxblue/colors';

export const blueDarkTheme: ThemeOptions = {
    direction: 'ltr',
    typography: typography,
    palette: {
        type: 'dark',
        primary: createSimplePalette(ThemeColors.blue),
        secondary: createSimplePalette(ThemeColors.lightBlue),
        error: createSimplePalette(ThemeColors.red),
        background: {
            default: ThemeColors.black['A200'],
            paper: ThemeColors.black['900'],
        },
        text: {
            primary: ThemeColors.gray['300'],
            secondary: ThemeColors.black['300'],
            hint: ThemeColors.gray['300'],
        },
        action: {
            active: ThemeColors.gray['300'],
        },
    },

    overrides: {
        // APP BAR OVERRIDES
        MuiAppBar: {
            colorDefault: {
                color: ThemeColors.black['100'],
                backgroundColor: ThemeColors.black['A200'],
            },
            colorPrimary: {
                color: ThemeColors.black['50'],
                backgroundColor: ThemeColors.black['A700'],
            },
            colorSecondary: {
                backgroundColor: ThemeColors.black['A100'],
            },
        },

        // BACKDROP OVERRIDES
        MuiBackdrop: {
            root: {
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
            },
        },

        // BUTTON OVERRIDES
        MuiButton: {
            root: {
                textTransform: 'none',
            },
            outlined: {
                borderColor: ThemeColors.black['100'],
            },
            outlinedPrimary: {
                borderColor: ThemeColors.blue[500],
            },
            outlinedSecondary: {
                borderColor: ThemeColors.lightBlue[500],
            },
            contained: {
                backgroundColor: ThemeColors.black['500'],
                color: ThemeColors.white['50'],
                '&:hover': {
                    backgroundColor: ThemeColors.black['300'],
                },
            },
        },

        // CHIP OVERRIDES
        MuiChip: {
            root: {
                backgroundColor: ThemeColors.black['500'],
            },
        },

        // DRAWER OVERRIDES
        MuiDrawer: {
            paper: {
                backgroundColor: ThemeColors.black['A400'],
            },
            paperAnchorBottom: {
                backgroundColor: ThemeColors.black['900'],
            },
        },

        // FAB OVERRIDES
        MuiFab: {
            root: {
                textTransform: 'none',
                backgroundColor: ThemeColors.black['500'],
                color: ThemeColors.white['50'],
                '&:hover': {
                    backgroundColor: ThemeColors.black['300'],
                },
            },
        },

        //LIST ITEM OVERRIDES (plus nav drawer)
        MuiListItem: {
            root: {
                color: ThemeColors.gray['300'],
            },
        },

        // SNACKBAR OVERRIDES
        MuiSnackbarContent: {
            root: {
                backgroundColor: ThemeColors.black['A700'],
                color: ThemeColors.white['50'],
            },
        },

        // TABLE OVERRIDES
        MuiTableCell: {
            head: {
                fontWeight: 600,
            },
        },
        MuiTableHead: {
            root: {
                background: ThemeColors.black['A200'],
            },
        },
        MuiTableRow: {
            root: {
                color: ThemeColors.gray['100'],
                '&$selected': {
                    backgroundColor: ThemeColors.black['A400'],
                },
            },
        },

        // TABS OVERRIDES
        MuiTabs: {
            indicator: {
                backgroundColor: ThemeColors.blue['500'],
            },
        },
    },
};
