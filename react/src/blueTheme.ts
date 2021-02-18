/**
 Copyright (c) 2020-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/

import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { typography, createSimpleLightPalette as createSimplePalette } from './shared';
import * as ThemeColors from '@pxblue/colors';
import Color from 'color';

/*
    Refer to https://material-ui.com/customization/default-theme/ for a list of properties that are available
    to customize in our themes. These have changed periodically from version to version of Material UI.
*/
export const blueTheme: ThemeOptions = {
    direction: 'ltr',
    typography: typography,
    palette: {
        type: 'light',
        primary: createSimplePalette(ThemeColors.blue),
        secondary: createSimplePalette(ThemeColors.lightBlue),
        error: createSimplePalette(ThemeColors.red),
        success: createSimplePalette(ThemeColors.green),
        info: createSimplePalette(ThemeColors.lightBlue),
        warning: {
            light: ThemeColors.yellow[100],
            main: ThemeColors.yellow[500],
            dark: ThemeColors.yellow[900],
        },
        background: {
            default: ThemeColors.white[200],
            paper: ThemeColors.white[50],
        },
        text: {
            primary: ThemeColors.black[500],
            secondary: ThemeColors.black[300],
            hint: ThemeColors.gray[500],
        },
        action: {
            active: ThemeColors.gray[500],
            disabled: 'rgba(0, 0, 0, .25)',
        },
    },
    overrides: {
        // AVATAR OVERRIDES
        MuiAvatar: {
            colorDefault: {
                backgroundColor: ThemeColors.blue[50],
                color: ThemeColors.blue[500],
            },
        },

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

        // BOTTOM NAVIGATION OVERRIDES
        MuiBottomNavigation: {
            root: {
                backgroundColor: ThemeColors.blue[500],
            },
        },
        MuiBottomNavigationAction: {
            root: {
                color: ThemeColors.blue[200],
                '&$selected': {
                    color: ThemeColors.white[50],
                    '& $label': {
                        fontSize: '0.75rem',
                        fontWeight: 600,
                    },
                },
            },
            selected: {},
            label: {},
        },

        // BUTTON OVERRIDES
        MuiButton: {
            root: {
                textTransform: 'none',
            },
            containedPrimary: {
                '&$disabled': {
                    backgroundColor: ThemeColors.blue[50],
                    color: ThemeColors.blue[200],
                    opacity: 1,
                },
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
            disabled: {},
        },

        // CHIP OVERRIDES
        MuiChip: {
            root: {
                fontSize: '0.875rem',
                backgroundColor: ThemeColors.white[500],
                color: ThemeColors.black[500],
                '& $avatar': {
                    color: ThemeColors.blue[500],
                },
            },
            clickable: {
                '&:hover': {
                    backgroundColor: ThemeColors.gray[100],
                },
            },
            deleteIcon: {
                color: ThemeColors.gray[500],
                '&:hover': {
                    color: ThemeColors.black[500],
                },
            },
            deleteIconColorPrimary: {
                color: ThemeColors.blue[100],
                '&:hover': {
                    color: ThemeColors.white[50],
                },
            },
            deleteIconOutlinedColorPrimary: {
                color: ThemeColors.blue[200],
                '&:hover': {
                    color: ThemeColors.blue[500],
                },
            },
            outlined: {
                borderColor: Color(ThemeColors.black[500]).fade(0.88).rgb().string(),
                '&$clickable:hover': {
                    backgroundColor: ThemeColors.white[200],
                },
            },
            outlinedPrimary: {
                backgroundColor: Color(ThemeColors.blue[500]).fade(0.95).rgb().string(),
                '&$clickable:hover': {
                    backgroundColor: Color(ThemeColors.blue[500]).fade(0.9).rgb().string(),
                },
            },
            avatar: {},
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

        // SWITCH OVERRIDES
        MuiSwitch: {
            switchBase: {
                color: ThemeColors.white[50],
                '&$checked + $track': {
                    opacity: 0.38,
                },
            },
            colorPrimary: {
                '&$checked': {
                    color: ThemeColors.blue[500],
                },
            },
            track: {
                backgroundColor: ThemeColors.black[100],
                opacity: 1,
            },
            checked: {},
        },

        // TABS OVERRIDES
        MuiTab: {
            textColorPrimary: {
                color: ThemeColors.white[50],
                opacity: 0.7,
                '&$selected': {
                    color: ThemeColors.white[50],
                    opacity: 1,
                },
            },
            textColorSecondary: {
                color: ThemeColors.white[50],
                opacity: 0.7,
                '&$selected': {
                    color: ThemeColors.white[50],
                    opacity: 1,
                },
            },
            selected: {},
        },
        MuiTabs: {
            indicator: {
                backgroundColor: ThemeColors.white[50],
            },
        },

        // TOGGLE BUTTON OVERRIDES (LAB)
        // @ts-ignore
        MuiToggleButtonGroup: {
            root: {
                backgroundColor: ThemeColors.white[50],
            },
            groupedHorizontal: {
                '&:not(:first-child)': {
                    marginLeft: 0,
                },
            },
            groupedVertical: {
                '&:not(:first-child)': {
                    marginTop: 0,
                },
            },
        },
        // @ts-ignore
        MuiToggleButton: {
            root: {
                backgroundColor: ThemeColors.white[50],
                color: ThemeColors.gray[500],
                borderColor: ThemeColors.gray[100],
                '&$selected': {
                    backgroundColor: ThemeColors.blue[50],
                    color: ThemeColors.blue[500],
                },
            },
            selected: {},
        },
    },
};
