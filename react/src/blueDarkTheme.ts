/**
 Copyright (c) 2020-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/

import { typography, createSimpleDarkPalette as createSimplePalette } from './shared';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import Color from 'color';
import * as PXBColors from '@pxblue/colors';

/* 
    Variable color definitions so we can reuse them in the theme overrides below
*/
const ThemeColors = {
    primary: createSimplePalette(PXBColors.blue),
    secondary: createSimplePalette(PXBColors.lightBlue),
    error: createSimplePalette(PXBColors.red),
    success: createSimplePalette(PXBColors.green),
    info: createSimplePalette(PXBColors.lightBlue),
    divider: Color(PXBColors.black[200]).alpha(0.32).rgb().string(),
    warning: {
        light: PXBColors.yellow[100],
        main: PXBColors.yellow[300],
        dark: PXBColors.yellow[900],
    },
    background: {
        default: PXBColors.darkBlack[800],
        paper: PXBColors.black[900],
    },
    text: {
        primary: PXBColors.black[50],
        secondary: PXBColors.black[200],
        disabled: Color(PXBColors.black[300]).alpha(0.32).rgb().string(),
        hint: Color(PXBColors.black[300]).alpha(0.32).rgb().string(),
    },
    action: {
        hover: Color(PXBColors.black[50]).alpha(0.1).rgb().string(),
        active: PXBColors.black[200],
        // disabled: 'rgba(0, 0, 0, .25)',
        disabledBackground: Color(PXBColors.black[200]).alpha(0.24).rgb().string(),
    },
}
const WhiteText = PXBColors.white[50];
const MediumBlackBackground = PXBColors.black[500];
const BlackText = PXBColors.black[500];
// const BlackBorder = PXBColors.black[500];

/*
    Refer to https://material-ui.com/customization/default-theme/ for a list of properties that are available
    to customize in our themes. These have changed periodically from version to version of Material UI.
*/
export const blueDarkTheme: ThemeOptions = {
    direction: 'ltr',
    typography: typography,
    palette: {
        type: 'dark',
        primary: ThemeColors.primary,
        secondary: ThemeColors.secondary,
        error: ThemeColors.error,
        success: ThemeColors.success,
        info: ThemeColors.info,
        divider: ThemeColors.divider,
        warning: ThemeColors.warning,
        background: ThemeColors.background,
        text: ThemeColors.text,
        action: ThemeColors.action,
    },

    overrides: {
        // AVATAR OVERRIDES
        MuiAvatar: {
            colorDefault: {
                backgroundColor: Color(PXBColors.black[50]).alpha(0.1).rgb().string(),
                color: ThemeColors.text.primary,
            },
        },

        // APP BAR OVERRIDES
        MuiAppBar: {
            colorDefault: {
                color: ThemeColors.text.primary,
                backgroundColor: PXBColors.darkBlack[100],
            },
            colorPrimary: {
                color: ThemeColors.text.primary,
                backgroundColor: PXBColors.black[800],
            },
            colorSecondary: {
                color: ThemeColors.text.primary,
                backgroundColor: PXBColors.black[900],
            },
        },

        // BACKDROP OVERRIDES
        MuiBackdrop: {
            root: {
                backgroundColor: Color(PXBColors.darkBlack[900]).alpha(0.7).rgb().string(),
            },
        },

        // BADGE OVERRIDES
        MuiBadge: {
            colorError: {
                backgroundColor: ThemeColors.error.main,
                color: WhiteText,
            },
        },

        // BOTTOM NAVIGATION OVERRIDES
        MuiBottomNavigation: {
            root: {
                backgroundColor: PXBColors.black[800],
            },
        },
        MuiBottomNavigationAction: {
            root: {
                '&$selected': {
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
            outlined: {
                borderColor: PXBColors.black[100],
            },
            contained: {
                backgroundColor: MediumBlackBackground,
                color: WhiteText,
                '&:hover': {
                    backgroundColor: PXBColors.black[300],
                },
            },
            containedPrimary: {
                backgroundColor: ThemeColors.primary.dark,
                color: WhiteText,
                '&:hover': {
                    backgroundColor: PXBColors.blue[700],
                },
                '&$disabled': {
                    color: Color(PXBColors.black[200]).alpha(0.24).rgb().string(),
                },
            },
            disabled: {},
        },

        // CHIP OVERRIDES
        MuiChip: {
            root: {
                fontSize: '0.875rem',
                backgroundColor: MediumBlackBackground,
                color: ThemeColors.text.primary,
                '& $avatar': {
                    color: WhiteText,
                },
            },
            clickable: {
                '&:hover': {
                    backgroundColor: PXBColors.black[400],
                },
            },
            deleteIcon: {
                color: ThemeColors.text.secondary,
                '&:hover': {
                    color: ThemeColors.text.primary,
                },
            },
            deleteIconColorPrimary: {
                color: PXBColors.blue[100],
                '&:hover': {
                    color: WhiteText,
                },
            },
            deleteIconOutlinedColorPrimary: {
                color: PXBColors.blue[400],
                '&:hover': {
                    color: ThemeColors.primary.main,
                },
            },
            colorPrimary: {
                color: WhiteText,
                backgroundColor: ThemeColors.primary.dark,
                '&$clickable:hover': {
                    backgroundColor: PXBColors.blue[300],
                },
            },
            outlined: {
                backgroundColor: ThemeColors.background.paper,
                borderColor: Color(PXBColors.black[200]).alpha(0.32).rgb().string(),
                '&$clickable:hover': {
                    backgroundColor: PXBColors.black[800],
                },
            },
            outlinedPrimary: {
                backgroundColor: Color(ThemeColors.primary.dark).alpha(0.2).rgb().string(),
                '&$clickable:hover': {
                    backgroundColor: Color(ThemeColors.primary.dark).alpha(0.3).rgb().string(),
                },
            },
            avatar: {},
        },

        // DRAWER OVERRIDES
        MuiDrawer: {
            paper: {
                backgroundColor: PXBColors.darkBlack[500],
            },
            paperAnchorBottom: {
                backgroundColor: ThemeColors.background.paper,
            },
        },

        // FAB OVERRIDES
        MuiFab: {
            root: {
                textTransform: 'none',
                backgroundColor: MediumBlackBackground,
                color: WhiteText,
                '&:hover': {
                    backgroundColor: PXBColors.black[300],
                },
            },
            primary: {
                backgroundColor: ThemeColors.primary.dark,
                color: WhiteText,
                '&:hover': {
                    backgroundColor: PXBColors.blue[700],
                },
            },
        },

        //LIST ITEM OVERRIDES (plus nav drawer)
        MuiListItem: {
            root: {
                color: ThemeColors.text.primary,
            },
        },

        // SNACKBAR OVERRIDES
        MuiSnackbarContent: {
            root: {
                // backgroundColor: PXBColors.black[900],
                color: BlackText,
                '& .MuiButton-textPrimary': {
                    color: ThemeColors.primary.dark,
                },
            },
        },

        // SLIDER OVERRIDES
        MuiSlider: {
            root: {
                height: 6,
                color: PXBColors.blue[300],
            },
            track: {
                height: 6,
                marginTop: -1,
            },
            rail: {
                height: 4,
                backgroundColor: PXBColors.black[300],
            },
            thumb: {
                height: 20,
                width: 20,
                marginTop: -8,
                backgroundColor: ThemeColors.primary.main,
            },
            thumbColorSecondary: {
                backgroundColor: ThemeColors.secondary.main,
            },
            mark: {
                backgroundColor: ThemeColors.primary.dark,
                marginTop: 1,
            },
            markActive: {
                backgroundColor: ThemeColors.primary.dark,
            },
        },

        // STEPPER OVERRIDES
        MuiStepper: {},
        MuiStepConnector: {
            line: {
                borderColor: ThemeColors.divider,
            },
        },
        MuiStep: {
            completed: {
                // Place a white background behind the icons so that the checks will not be see-through
                '& .MuiStepLabel-iconContainer:before': {
                    content: '""',
                    position: 'absolute',
                    display: 'block',
                    top: '5%',
                    right: '5%',
                    bottom: '5%',
                    left: '5%',
                    backgroundColor: PXBColors.white[50],
                    borderRadius: '50%',
                },
            },
        },
        MuiStepIcon: {
            root: {
                color: Color(PXBColors.black[300]).alpha(0.32).rgb().string(),
                zIndex: 1,
                '&$active': {
                    color: ThemeColors.primary.dark,
                },
                '&$completed': {
                    color: ThemeColors.primary.dark,
                },
            },
            text: {
                fill: PXBColors.black[300],
            },
            active: {
                '& $text': {
                    fill: WhiteText,
                },
            },
            completed: {},
        },
        MuiStepLabel: {
            label: {
                color: ThemeColors.text.secondary,
                '&$active': {
                    fontWeight: 600,
                    color: ThemeColors.primary.main,
                },
                '&$completed': {
                    fontWeight: 600,
                },
            },
            iconContainer: {
                position: 'relative',
            },
            active: {},
            completed: {},
        },

        // SWITCH OVERRIDES
        MuiSwitch: {
            switchBase: {
                color: ThemeColors.text.primary,
                '&$checked + $track': {
                    opacity: 0.5,
                },
            },
            colorPrimary: {
                '&$checked': {
                    color: ThemeColors.primary.main,
                },
            },
            track: {
                backgroundColor: PXBColors.black[300],
                opacity: 0.36,
            },
            checked: {},
        },

        // TABLE OVERRIDES
        MuiTableCell: {
            head: {
                fontWeight: 600,
            },
        },
        MuiTableHead: {
            root: {
                background: ThemeColors.background.paper,
            },
        },
        MuiTableRow: {
            root: {
                color: ThemeColors.text.primary,
                backgroundColor: PXBColors.darkBlack[300],
                '&$hover:hover': {
                    backgroundColor: Color(PXBColors.darkBlack[300]).mix(Color(PXBColors.black[500]), 0.5).rgb().string(),
                },
                '&:nth-of-type(odd):not($selected)': {
                    backgroundColor: PXBColors.black[900],
                    '&$hover:hover': {
                        backgroundColor: Color(PXBColors.black[900]).mix(Color(PXBColors.black[500]), 0.5).rgb().string(),
                    },
                },
                '&$selected': {
                    backgroundColor: Color(ThemeColors.primary.dark).alpha(0.2).rgb().string(),
                    '&$hover:hover': {
                        backgroundColor: Color(ThemeColors.primary.dark).mix(Color(PXBColors.black[500]), 0.5).alpha(0.2).rgb().string(),
                    },
                },
            },
            hover: {},
        },
        MuiTableSortLabel: {
            root: {
                '&:hover': {
                    color: ThemeColors.text.primary,
                    '& $icon': {
                        color: ThemeColors.text.secondary,
                        opacity: 1,
                    },
                },
            },
            icon: {
                opacity: 0.36,
            },
        },

        // TABS OVERRIDES
        MuiTab: {
            textColorInherit: {
                color: ThemeColors.text.secondary,
                opacity: 1,
                '&$selected': {
                    color: ThemeColors.primary.main,
                },
            },
            selected: {},
        },
        MuiTabs: {
            root: {
                color: ThemeColors.text.secondary,
            },
            indicator: {
                backgroundColor: ThemeColors.primary.main,
            },
        },

        // TOGGLE BUTTON OVERRIDES (LAB)
        // @ts-ignore
        MuiToggleButtonGroup: {
            root: {
                backgroundColor: ThemeColors.background.paper,
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
                backgroundColor: ThemeColors.background.paper,
                color: PXBColors.gray[500],
                borderColor: Color(PXBColors.black[200]).alpha(0.32).rgb().string(),
                '&$selected': {
                    backgroundColor: Color(ThemeColors.primary.dark).alpha(0.2).rgb().string(),
                    color: ThemeColors.primary.main,
                },
            },
            selected: {},
        },
    },
};
