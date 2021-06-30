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
    divider: Color(PXBColors.black[200]).alpha(0.36).string(),
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
        disabled: Color(PXBColors.black[300]).alpha(0.36).string(),
        hint: Color(PXBColors.black[300]).alpha(0.36).string(),
    },
    action: {
        hover: Color(PXBColors.black[50]).alpha(0.1).string(),
        active: PXBColors.black[200],
        disabled: Color(PXBColors.black[300]).alpha(0.36).string(),
        disabledBackground: Color(PXBColors.black[200]).alpha(0.24).string(),
    },
};
const WhiteText = PXBColors.white[50];
const MediumBlackBackground = PXBColors.black[500];
const BlackText = PXBColors.black[500];
const Spacing = 8;
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
                backgroundColor: ThemeColors.background.paper,
            },
        },

        // AVATAR OVERRIDES
        MuiAvatar: {
            colorDefault: {
                backgroundColor: Color(PXBColors.black[50]).alpha(0.1).string(),
                color: ThemeColors.text.primary,
            },
        },

        // BACKDROP OVERRIDES
        MuiBackdrop: {
            root: {
                backgroundColor: Color(PXBColors.darkBlack[900]).alpha(0.7).string(),
            },
        },

        // BADGE OVERRIDES
        MuiBadge: {
            colorError: {
                backgroundColor: ThemeColors.error.dark,
                color: WhiteText,
            },
            colorPrimary: {
                backgroundColor: ThemeColors.primary.dark,
                color: WhiteText,
            },
            colorSecondary: {
                backgroundColor: ThemeColors.secondary.dark,
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
                '&:not($selected) $label': {
                    color: ThemeColors.text.primary,
                },
            },
            selected: {},
            label: {},
        },

        // BUTTON OVERRIDES
        MuiButton: {
            root: {
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: PXBColors.black[400],
                },
            },
            outlined: {
                borderColor: PXBColors.black[200],
                '&:hover': {
                    backgroundColor: Color(PXBColors.black[50]).alpha(0.1).string(),
                },
                '&$disabled': {
                    borderColor: Color(PXBColors.black[200]).alpha(0.36).string(),
                    color: ThemeColors.action.disabled,
                },
            },
            outlinedPrimary: {
                borderColor: ThemeColors.primary.main,
                '&:hover': {
                    backgroundColor: Color(ThemeColors.primary.dark).alpha(0.2).string(),
                },
            },
            outlinedSecondary: {
                '&:not($disabled)': {
                    borderColor: ThemeColors.secondary.main,
                    '&:hover': {
                        backgroundColor: Color(ThemeColors.secondary.dark).alpha(0.2).string(),
                    },
                },
                '&$disabled': {
                    borderColor: Color(PXBColors.black[200]).alpha(0.36).string(),
                    color: ThemeColors.action.disabled,
                },
            },
            contained: {
                backgroundColor: MediumBlackBackground,
                color: WhiteText,
                '&:hover': {
                    backgroundColor: PXBColors.black[400],
                },
                '&$disabled': {
                    backgroundColor: ThemeColors.action.disabledBackground,
                    color: PXBColors.black[400],
                },
            },
            containedPrimary: {
                backgroundColor: ThemeColors.primary.dark,
                color: WhiteText,
                '&:hover': {
                    backgroundColor: PXBColors.blue[300],
                },
                '&$disabled': {
                    borderWidth: 0,
                },
            },
            containedSecondary: {
                backgroundColor: ThemeColors.secondary.dark,
                color: WhiteText,
                '&:hover': {
                    backgroundColor: PXBColors.lightBlue[300],
                },
                '&$disabled': {
                    borderWidth: 0,
                },
            },
            text: {
                '&$disabled': {
                    color: ThemeColors.action.disabled,
                },
                '&:hover': {
                    backgroundColor: ThemeColors.action.hover,
                },
            },
            textPrimary: {
                '&:hover': {
                    backgroundColor: Color(ThemeColors.primary.dark).alpha(0.2).string(),
                },
            },
            textSecondary: {
                '&:hover': {
                    backgroundColor: Color(ThemeColors.secondary.dark).alpha(0.2).string(),
                },
            },
            disabled: {},
        },

        // BUTTON GROUP OVERRIDES
        MuiButtonGroup: {
            groupedText: {
                '&:not(:last-child)$disabled': {
                    borderColor: ThemeColors.divider,
                },
            },
            groupedTextPrimary: {
                '&:not(:last-child)$disabled': {
                    borderColor: ThemeColors.divider,
                },
            },
            groupedTextSecondary: {
                '&:not(:last-child)$disabled': {
                    borderColor: ThemeColors.divider,
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
                    backgroundColor: PXBColors.black[700],
                    color: ThemeColors.text.primary,
                    marginRight: -4,
                },
                '& $avatarColorPrimary': {
                    backgroundColor: ThemeColors.primary.light,
                    color: ThemeColors.primary.dark,
                },
                '& $avatarColorSecondary': {
                    backgroundColor: ThemeColors.primary.light,
                    color: ThemeColors.primary.dark,
                },
                '&$disabled': {
                    opacity: 1,
                    backgroundColor: Color(PXBColors.black[200]).alpha(0.24).string(),
                    color: PXBColors.black[400],
                    '& $avatar': {
                        opacity: 0.5,
                    },
                    '& $deleteIcon': {
                        color: ThemeColors.action.disabled,
                    },
                    '& $icon': {
                        color: ThemeColors.action.disabled,
                    },
                },
            },
            clickable: {
                '&:hover': {
                    backgroundColor: PXBColors.black[400],
                },
            },
            clickableColorPrimary: {
                '&:hover': {
                    backgroundColor: PXBColors.blue[300],
                },
            },
            clickableColorSecondary: {
                '&:hover': {
                    backgroundColor: PXBColors.lightBlue[300],
                },
            },
            deleteIcon: {
                fontSize: '1.125rem',
                height: '1.125rem',
                width: '1.125rem',
                margin: `0px ${Spacing}px 0px -4px`,
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
            deleteIconColorSecondary: {
                color: PXBColors.lightBlue[100],
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
            deleteIconOutlinedColorSecondary: {
                color: PXBColors.lightBlue[400],
                '&:hover': {
                    color: ThemeColors.secondary.main,
                },
            },
            colorPrimary: {
                color: WhiteText,
                backgroundColor: ThemeColors.primary.dark,
                '&$clickable:hover': {
                    backgroundColor: PXBColors.blue[300],
                },
            },
            colorSecondary: {
                color: WhiteText,
                backgroundColor: ThemeColors.secondary.dark,
                '&$clickable:hover': {
                    backgroundColor: PXBColors.lightBlue[300],
                },
            },
            outlined: {
                backgroundColor: ThemeColors.background.paper,
                borderColor: Color(PXBColors.black[200]).alpha(0.32).string(),
                '&$clickable:hover': {
                    backgroundColor: PXBColors.black[800],
                },
                '& $avatar': {
                    backgroundColor: PXBColors.black[600],
                    color: ThemeColors.text.primary,
                    marginRight: -4,
                },
                '& $avatarColorPrimary': {
                    backgroundColor: PXBColors.blue[100],
                    color: ThemeColors.primary.dark,
                },
                '& $avatarColorSecondary': {
                    backgroundColor: PXBColors.blue[100],
                    color: ThemeColors.primary.dark,
                },
                '& $icon': {
                    marginLeft: Spacing,
                    marginRight: -4,
                },
                '& $deleteIcon': {
                    margin: `0px ${Spacing}px 0px -4px`,
                },
                '&$disabled': {
                    opacity: 1,
                    borderColor: Color(PXBColors.black[200]).alpha(0.36).string(),
                    backgroundColor: 'transparent',
                    color: PXBColors.black[400],
                },
            },
            outlinedPrimary: {
                backgroundColor: Color(ThemeColors.primary.dark).alpha(0.2).string(),
                '&$clickable:hover': {
                    backgroundColor: Color(ThemeColors.primary.dark).alpha(0.3).string(),
                },
            },
            outlinedSecondary: {
                backgroundColor: Color(ThemeColors.secondary.dark).alpha(0.2).string(),
                '&$clickable:hover': {
                    backgroundColor: Color(ThemeColors.secondary.dark).alpha(0.3).string(),
                },
            },
            icon: {
                fontSize: '1.125rem',
                color: ThemeColors.text.primary,
                marginLeft: Spacing,
                marginRight: -4,
            },
            avatar: {},
            disabled: {},
            label: {},
        },

        // DRAWER OVERRIDES
        MuiDrawer: {
            paper: {
                backgroundColor: PXBColors.darkBlack[300],
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
                    backgroundColor: PXBColors.blue[300],
                },
            },
            secondary: {
                backgroundColor: ThemeColors.secondary.dark,
                color: WhiteText,
                '&:hover': {
                    backgroundColor: PXBColors.lightBlue[300],
                },
            },
        },

        //LIST ITEM OVERRIDES (plus nav drawer)
        MuiListItem: {
            root: {
                color: ThemeColors.text.primary,
            },
        },

        // MOBILE STEPPER OVERRIDES
        MuiMobileStepper: {
            dot: {
                backgroundColor: Color(PXBColors.black[300]).alpha(0.36).string(),
                margin: `0px 4px`,
            },
            dotActive: {
                backgroundColor: ThemeColors.primary.dark,
            },
        },

        // PROGRESS OVERRIDES
        MuiLinearProgress: {
            root: {},
            colorPrimary: {
                backgroundColor: Color(ThemeColors.primary.dark).darken(0.7).string(),
            },
            colorSecondary: {
                backgroundColor: Color(ThemeColors.secondary.dark).darken(0.7).string(),
            },
            dashedColorPrimary: {
                backgroundImage: `radial-gradient(${Color(ThemeColors.primary.dark).darken(0.5).string()} 0%, ${Color(
                    ThemeColors.primary.dark
                )
                    .darken(0.7)
                    .string()} 16%, transparent 42%)`,
            },
            dashedColorSecondary: {
                backgroundImage: `radial-gradient(${Color(ThemeColors.secondary.dark).darken(0.5).string()} 0%, ${Color(
                    ThemeColors.secondary.dark
                )
                    .darken(0.7)
                    .string()} 16%, transparent 42%)`,
            },
            barColorPrimary: {
                backgroundColor: ThemeColors.primary.dark,
            },
            barColorSecondary: {
                backgroundColor: ThemeColors.secondary.dark,
            },
        },
        MuiCircularProgress: {
            colorPrimary: {
                color: ThemeColors.primary.dark,
            },
            colorSecondary: {
                color: ThemeColors.secondary.dark,
            },
        },

        // SLIDER OVERRIDES
        MuiSlider: {
            root: {
                height: 6,
                color: PXBColors.blue[300],
            },
            colorSecondary: {
                color: PXBColors.lightBlue[300],
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

        // SNACKBAR OVERRIDES
        MuiSnackbarContent: {
            root: {
                // backgroundColor: PXBColors.black[900],
                color: BlackText,
                '& .MuiButton-textPrimary': {
                    color: ThemeColors.primary.dark,
                },
                '& .MuiButton-textSecondary': {
                    color: PXBColors.lightBlue[500],
                },
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
                color: Color(PXBColors.black[300]).alpha(0.32).string(),
                zIndex: 1,
                '&$active': {
                    color: ThemeColors.primary.dark,
                    '& $text': {
                        fontWeight: 600,
                    },
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
                    color: ThemeColors.text.secondary,
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
                    opacity: 0.38,
                },
                '&$checked': {
                    color: ThemeColors.secondary.main,
                    '&$disabled': {
                        color: Color(ThemeColors.secondary.main).mix(Color(ThemeColors.background.paper), 0.5).string(),
                    },
                    '&$disabled + $track': {
                        backgroundColor: ThemeColors.secondary.main,
                    },
                },
            },
            colorPrimary: {
                '&$disabled': {
                    color: Color(PXBColors.white[50]).mix(Color(ThemeColors.background.paper), 0.5).string(),
                },
                '&$disabled + $track': {
                    backgroundColor: PXBColors.black[300],
                },
                '&$checked': {
                    color: ThemeColors.primary.main,
                    '&$disabled': {
                        color: Color(ThemeColors.primary.main).mix(Color(ThemeColors.background.paper), 0.5).string(),
                    },
                    '&$disabled + $track': {
                        opacity: 0.38,
                        backgroundColor: Color(ThemeColors.primary.main)
                            .mix(Color(ThemeColors.background.paper), 0.5)
                            .string(),
                    },
                },
            },
            colorSecondary: {
                '&$disabled': {
                    color: Color(PXBColors.white[50]).mix(Color(ThemeColors.background.paper), 0.5).string(),
                },
                '&$disabled + $track': {
                    backgroundColor: PXBColors.black[300],
                },
            },
            track: {
                backgroundColor: PXBColors.black[300],
                opacity: 0.38,
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
                background: ThemeColors.background.paper,
            },
        },
        MuiTableRow: {
            root: {
                color: ThemeColors.text.primary,
                backgroundColor: PXBColors.darkBlack[300],
                '&$hover:hover': {
                    backgroundColor: Color(PXBColors.darkBlack[300]).mix(Color(MediumBlackBackground), 0.5).string(),
                },
                '&:nth-of-type(odd):not($selected)': {
                    backgroundColor: ThemeColors.background.paper,
                    '&$hover:hover': {
                        backgroundColor: Color(ThemeColors.background.paper)
                            .mix(Color(MediumBlackBackground), 0.5)
                            .string(),
                    },
                },
                '&$selected': {
                    backgroundColor: Color(ThemeColors.primary.dark).alpha(0.2).string(),
                    '&$hover:hover': {
                        backgroundColor: Color(ThemeColors.primary.dark)
                            .mix(Color(MediumBlackBackground), 0.5)
                            .alpha(0.2)
                            .string(),
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
            root: {
                fontWeight: 400,
                '&$selected': {
                    fontWeight: 600,
                },
            },
            labelIcon: {
                '& $wrapper > *:first-child': {
                    marginBottom: 0,
                },
            },
            textColorInherit: {
                color: ThemeColors.text.secondary,
                opacity: 1,
                '&$selected': {
                    color: ThemeColors.primary.main,
                },
            },
            wrapper: {},
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

        // TEXT FIELD OVERRIDES
        MuiInputBase: {
            root: {
                '&$disabled': {
                    color: ThemeColors.text.disabled,
                },
            },
            input: {
                '&::placeholder': {
                    color: PXBColors.black[300],
                    opacity: 0.36,
                },
                '&:-webkit-autofill': {
                    '-webkit-box-shadow': `0 0 0 100px ${ThemeColors.background.paper} inset`,
                    '-webkit-text-fill-color': ThemeColors.text.primary,
                },
            },
            adornedStart: {},
            adornedEnd: {},
            disabled: {},
        },
        MuiInput: {
            underline: {
                '&:before': {
                    borderBottomColor: ThemeColors.divider,
                },
                '&:not($disabled):hover:before': {
                    borderBottomWidth: 1,
                    borderBottomColor: PXBColors.black[200],
                },
                '&:after': {
                    borderBottomColor: ThemeColors.primary.dark,
                },
                '&$error$focused:after': {
                    borderBottomColor: ThemeColors.error.dark,
                },
                '&$error:not($focused):after': {
                    borderBottomWidth: 1,
                    borderBottomColor: ThemeColors.error.dark,
                },
                '&$error:not($focused):hover:after': {
                    borderBottomColor: ThemeColors.error.main,
                },
                '&$colorSecondary:not($error):after': {
                    borderBottomColor: ThemeColors.secondary.dark,
                },
                '&$disabled:before': {
                    borderBottomColor: ThemeColors.divider,
                    borderBottomStyle: 'solid',
                },
            },
            disabled: {},
            focused: {},
            colorSecondary: {},
            error: {},
        },
        MuiFilledInput: {
            root: {
                backgroundColor: PXBColors.black[800],
                '&:hover': {
                    backgroundColor: PXBColors.black[600],
                },
                '&$focused': {
                    backgroundColor: PXBColors.black[800],
                },
                '&$disabled': {
                    color: ThemeColors.text.disabled,
                    backgroundColor: Color(PXBColors.black[800]).alpha(0.5).string(),
                    pointerEvents: 'none',
                },
            },
            input: {
                '&:-webkit-autofill': {
                    '-webkit-box-shadow': `0 0 0 100px ${PXBColors.black[800]} inset`,
                },
            },
            underline: {
                '&:before': {
                    borderBottomColor: ThemeColors.divider,
                },
                '&:after': {
                    borderBottomColor: ThemeColors.primary.dark,
                },
                '&$error$focused:after': {
                    borderBottomColor: ThemeColors.error.dark,
                },
                '&$error:not($focused):after': {
                    borderBottomWidth: 1,
                    borderBottomColor: ThemeColors.error.dark,
                },
                '&$error:not($focused):hover:after': {
                    borderBottomColor: ThemeColors.error.main,
                },
                '&$disabled:before': {
                    borderBottomStyle: 'solid',
                },
                '&$colorSecondary:not($error):after': {
                    borderBottomColor: ThemeColors.secondary.dark,
                },
            },
            focused: {},
            disabled: {},
            colorSecondary: {},
            error: {},
        },
        MuiOutlinedInput: {
            root: {
                '&$error $notchedOutline': {
                    borderColor: ThemeColors.error.dark,
                },
                '&$disabled $notchedOutline': {
                    borderColor: ThemeColors.divider,
                },
                '&:hover $notchedOutline': {
                    borderColor: PXBColors.black[200],
                },
                '&$error$colorSecondary$focused $notchedOutline': {
                    borderColor: ThemeColors.error.dark,
                },
                '&$error:hover:not($focused) $notchedOutline': {
                    borderColor: ThemeColors.error.main,
                },
                '&$focused $notchedOutline': {
                    borderColor: ThemeColors.primary.dark,
                },
                '&$colorSecondary$focused $notchedOutline': {
                    borderColor: ThemeColors.secondary.dark,
                },
            },
            input: {
                '&:-webkit-autofill': {
                    '-webkit-box-shadow': `0 0 0 100px ${PXBColors.black[900]} inset`,
                },
            },
            colorSecondary: {},
            focused: {},
            error: {},
            disabled: {},
            notchedOutline: {
                borderColor: ThemeColors.divider,
            },
        },
        MuiFormLabel: {
            root: {
                color: ThemeColors.text.secondary,
                '&$disabled': {
                    color: ThemeColors.text.disabled,
                },
                '&$filled:not($disabled):not($focused):not($error)': {
                    color: ThemeColors.text.primary,
                },
                '&$error$colorSecondary$focused': {
                    color: ThemeColors.error.main,
                },
            },
            colorSecondary: {},
            error: {},
            disabled: {},
            focused: {},
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
                borderColor: Color(PXBColors.black[200]).alpha(0.32).string(),
                '&$selected': {
                    backgroundColor: Color(ThemeColors.primary.dark).alpha(0.36).string(),
                    color: ThemeColors.primary.main,
                    '&:hover': {
                        backgroundColor: Color(ThemeColors.primary.main).alpha(0.36).string(),
                    },
                },
                '&:hover': {
                    backgroundColor: ThemeColors.action.hover,
                },
                '&$disabled': {
                    color: ThemeColors.action.disabled,
                },
            },
            selected: {},
            disabled: {},
        },
    },
};
