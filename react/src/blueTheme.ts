/**
 Copyright (c) 2020-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/

import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { typography, createSimpleLightPalette as createSimplePalette } from './shared';
import * as PXBColors from '@pxblue/colors';
import Color from 'color';

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
        main: PXBColors.yellow[500],
        dark: PXBColors.yellow[900],
    },
    background: {
        default: PXBColors.white[200],
        paper: PXBColors.white[50],
    },
    text: {
        primary: PXBColors.black[500],
        secondary: PXBColors.gray[500],
        // disabled: Color(PXBColors.black[500]).alpha(0.3).string(),
        hint: PXBColors.gray[500],
    },
    action: {
        // hover: Color(PXBColors.black[50]).alpha(0.1).string(),
        active: PXBColors.gray[500],
        disabled: Color(PXBColors.black[500]).alpha(0.3).string(),
        // disabledBackground: Color(PXBColors.black[200]).alpha(0.24).string(),
    },
};
const WhiteText = PXBColors.white[50];
const BlackBorder = PXBColors.black[500];
const Spacing = 8;

/*
    Refer to https://material-ui.com/customization/default-theme/ for a list of properties that are available
    to customize in our themes. These have changed periodically from version to version of Material UI.
*/
export const blueTheme: ThemeOptions = {
    direction: 'ltr',
    typography: typography,
    palette: {
        type: 'light',
        primary: ThemeColors.primary,
        secondary: ThemeColors.secondary,
        error: ThemeColors.error,
        success: ThemeColors.success,
        info: ThemeColors.info,
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
                backgroundColor: ThemeColors.background.paper,
            },
            colorSecondary: {
                color: ThemeColors.background.paper,
                backgroundColor: ThemeColors.primary.dark,
                '& .MuiInputBase-root': {
                    color: ThemeColors.background.paper,
                },
                '& .MuiSelect-icon': {
                    color: ThemeColors.background.paper,
                },
            },
        },
        // AVATAR OVERRIDES
        MuiAvatar: {
            colorDefault: {
                backgroundColor: ThemeColors.primary.light,
                color: ThemeColors.primary.main,
            },
        },

        // BOTTOM NAVIGATION OVERRIDES
        MuiBottomNavigation: {
            root: {
                backgroundColor: ThemeColors.primary.main,
            },
        },
        MuiBottomNavigationAction: {
            root: {
                color: PXBColors.blue[200],
                '&$selected': {
                    color: WhiteText,
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
            contained: {
                backgroundColor: ThemeColors.background.paper,
                color: ThemeColors.text.primary,
                '&$disableElevation:not($containedPrimary):not($containedSecondary)': {
                    backgroundColor: PXBColors.white[500],
                    '&:hover': {
                        backgroundColor: PXBColors.white[300],
                    },
                    '&$disabled': {
                        borderWidth: 0,
                    },
                },
                '&:hover': {
                    backgroundColor: Color(PXBColors.black[500]).alpha(0.05).string(),
                },
                '&$disabled': {
                    backgroundColor: ThemeColors.background.paper,
                    border: `1px solid ${Color(PXBColors.black[500]).alpha(0.12).string()}`,
                    color: Color(ThemeColors.text.primary).alpha(0.3).string(),
                },
            },
            containedPrimary: {
                '&:hover': {
                    backgroundColor: PXBColors.blue[300],
                },
                '&$disabled': {
                    backgroundColor: ThemeColors.primary.light,
                    borderWidth: 0,
                    color: PXBColors.blue[200],
                    opacity: 1,
                },
            },
            containedSecondary: {
                '&:hover': {
                    backgroundColor: PXBColors.lightBlue[300],
                },
                '&$disabled': {
                    backgroundColor: ThemeColors.secondary.light,
                    borderWidth: 0,
                    color: PXBColors.lightBlue[200],
                    opacity: 1,
                },
            },
            outlined: {
                borderColor: ThemeColors.divider,
                '&:hover': {
                    backgroundColor: Color(PXBColors.black[500]).alpha(0.05).string(),
                },
                '&$disabled': {
                    backgroundColor: ThemeColors.background.paper,
                    borderColor: Color(BlackBorder).alpha(0.12).string(),
                    color: Color(ThemeColors.text.primary).alpha(0.3).string(),
                },
            },
            outlinedPrimary: {
                borderColor: ThemeColors.primary.main,
                '&$disabled': {
                    borderColor: Color(BlackBorder).alpha(0.12).string(),
                },
                '&:hover': {
                    backgroundColor: Color(ThemeColors.primary.main).alpha(0.05).string(),
                },
            },
            outlinedSecondary: {
                borderColor: ThemeColors.secondary.main,
                '&$disabled': {
                    borderColor: Color(BlackBorder).alpha(0.12).string(),
                },
                '&:hover': {
                    backgroundColor: Color(ThemeColors.secondary.main).alpha(0.05).string(),
                },
            },
            text: {
                '&$disabled': {
                    color: ThemeColors.action.disabled,
                },
                '&:hover': {
                    backgroundColor: Color(PXBColors.black[500]).alpha(0.05).string(),
                },
            },
            textPrimary: {
                '&:hover': {
                    backgroundColor: Color(ThemeColors.primary.main).alpha(0.05).string(),
                },
            },
            textSecondary: {
                '&:hover': {
                    backgroundColor: Color(ThemeColors.secondary.main).alpha(0.05).string(),
                },
            },
            disabled: {},
            disableElevation: {},
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

        // CHECKBOX OVERRIDES
        MuiCheckbox: {
            root: {
                color: ThemeColors.action.active,
            },
        },

        // CHIP OVERRIDES
        MuiChip: {
            root: {
                fontSize: '0.875rem',
                backgroundColor: PXBColors.white[500],
                color: ThemeColors.text.primary,
                '& $avatar': {
                    backgroundColor: ThemeColors.primary.main,
                    color: WhiteText,
                    // marginLeft: Spacing,
                    marginRight: -4,
                },
                '& $avatarColorPrimary': {
                    backgroundColor: ThemeColors.primary.light,
                    color: ThemeColors.primary.main,
                },
                '& $avatarColorSecondary': {
                    backgroundColor: ThemeColors.primary.light,
                    color: ThemeColors.primary.main,
                },
                '&$disabled': {
                    opacity: 1,
                    color: Color(ThemeColors.text.primary).alpha(0.3).string(),
                    '& $avatar': {
                        opacity: 0.5,
                    },
                    '&:not($colorPrimary):not($colorSecondary) $deleteIcon': {
                        color: ThemeColors.action.disabled,
                    },
                    '&:not($colorPrimary):not($colorSecondary) $icon': {
                        color: ThemeColors.action.disabled,
                    },
                },
            },
            clickable: {
                '&:hover': {
                    backgroundColor: PXBColors.gray[100],
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
            colorPrimary: {
                '&:not($outlinedPrimary)$disabled': {
                    backgroundColor: ThemeColors.primary.light,
                    color: PXBColors.blue[200],
                    opacity: 1,
                },
            },
            colorSecondary: {
                '&:not($outlinedSecondary)$disabled': {
                    backgroundColor: ThemeColors.secondary.light,
                    color: PXBColors.lightBlue[200],
                    opacity: 1,
                },
            },
            deleteIcon: {
                fontSize: '1.125rem',
                height: '1.125rem',
                width: '1.125rem',
                margin: `0px ${Spacing}px 0px -4px`,
                color: ThemeColors.action.active,
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
                color: PXBColors.blue[200],
                '&:hover': {
                    color: ThemeColors.primary.main,
                },
            },
            deleteIconOutlinedColorSecondary: {
                color: PXBColors.lightBlue[200],
                '&:hover': {
                    color: ThemeColors.secondary.main,
                },
            },
            outlined: {
                borderColor: Color(BlackBorder).alpha(0.12).string(),
                '&$clickable:hover': {
                    backgroundColor: PXBColors.white[200],
                },
                '& $avatar': {
                    backgroundColor: PXBColors.gray[500],
                    marginRight: -4,
                },
                '& $avatarColorPrimary': {
                    backgroundColor: PXBColors.blue[100],
                    color: ThemeColors.primary.main,
                },
                '& $avatarColorSecondary': {
                    backgroundColor: PXBColors.blue[100],
                    color: ThemeColors.primary.main,
                },
                '& $icon': {
                    marginLeft: Spacing,
                    marginRight: -4,
                },
                '& $deleteIcon': {
                    margin: `0px ${Spacing}px 0px -4px`,
                },
                '&$disabled $deleteIcon': {
                    color: 'inherit',
                },
            },
            outlinedPrimary: {
                backgroundColor: Color(ThemeColors.primary.main).alpha(0.05).string(),
                '&$clickable:hover': {
                    backgroundColor: Color(ThemeColors.primary.main).alpha(0.1).string(),
                },
                '&$disabled': {
                    opacity: 1,
                    backgroundColor: ThemeColors.background.paper,
                    color: ThemeColors.action.disabled,
                    borderColor: Color(BlackBorder).alpha(0.12).string(),
                },
            },
            outlinedSecondary: {
                backgroundColor: Color(ThemeColors.secondary.main).alpha(0.05).string(),
                '&$clickable:hover': {
                    backgroundColor: Color(ThemeColors.secondary.main).alpha(0.1).string(),
                },
                '&$disabled': {
                    opacity: 1,
                    backgroundColor: ThemeColors.background.paper,
                    color: ThemeColors.action.disabled,
                    borderColor: Color(BlackBorder).alpha(0.12).string(),
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
            avatarColorPrimary: {},
            avatarColorSecondary: {},
        },

        // FAB OVERRIDES
        MuiFab: {
            root: {
                textTransform: 'none',
                backgroundColor: ThemeColors.background.paper,
                color: ThemeColors.text.primary,
                '&:hover': {
                    backgroundColor: Color(PXBColors.black[500]).alpha(0.05).string(),
                },
                '&$disabled': {
                    backgroundColor: ThemeColors.background.paper,
                    border: `1px solid ${Color(BlackBorder).alpha(0.12).string()}`,
                    color: ThemeColors.action.disabled,
                },
            },
            primary: {
                '&:hover': {
                    backgroundColor: PXBColors.blue[300],
                },
            },
            secondary: {
                '&:hover': {
                    backgroundColor: PXBColors.lightBlue[300],
                },
            },
            disabled: {},
        },

        // LIST ITEM OVERRIDES
        MuiListItem: {
            root: {
                color: ThemeColors.text.primary,
            },
        },

        // MOBILE STEPPER OVERRIDES
        MuiMobileStepper: {
            dot: {
                backgroundColor: PXBColors.gray[200],
                margin: `0px 4px`,
            },
            dotActive: {
                backgroundColor: ThemeColors.primary.main,
            },
        },

        // PROGRESS OVERRIDES
        MuiLinearProgress: {
            root: {},
            colorPrimary: {
                backgroundColor: PXBColors.blue[100],
            },
            colorSecondary: {
                backgroundColor: PXBColors.lightBlue[100],
            },
            barColorPrimary: {},
            barColorSecondary: {},
        },
        MuiCircularProgress: {},

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
                backgroundColor: PXBColors.black[100],
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
                backgroundColor: PXBColors.blue[200],
                marginTop: 1,
            },
            markActive: {
                backgroundColor: PXBColors.blue[200],
            },
        },

        // SNACKBAR OVERRIDES
        MuiSnackbarContent: {
            root: {
                backgroundColor: PXBColors.black[900],
                color: PXBColors.black[50],
                '& .MuiButton-textPrimary': {
                    color: PXBColors.blue[200],
                },
                '& .MuiButton-textSecondary': {
                    color: PXBColors.lightBlue[200],
                },
            },
        },

        // STEPPER OVERRIDES
        MuiStepper: {},
        MuiStepConnector: {
            line: {
                borderColor: Color(BlackBorder).alpha(0.12).string(),
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
                    backgroundColor: ThemeColors.background.paper,
                    borderRadius: '50%',
                },
            },
        },
        MuiStepIcon: {
            root: {
                color: PXBColors.white[500],
                zIndex: 1,
            },
            text: {
                fill: ThemeColors.text.primary,
            },
            active: {
                '& $text': {
                    fill: WhiteText,
                    fontWeight: 600,
                },
            },
        },
        MuiStepLabel: {
            label: {
                color: ThemeColors.text.primary,
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
                color: ThemeColors.background.paper,
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
                    color: ThemeColors.background.paper,
                },
                '&$disabled + $track': {
                    backgroundColor: PXBColors.black[100],
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
                    color: ThemeColors.background.paper,
                },
                '&$disabled + $track': {
                    backgroundColor: PXBColors.black[100],
                },
            },
            track: {
                backgroundColor: PXBColors.black[100],
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
                backgroundColor: PXBColors.white[100],
                '&$hover:hover': {
                    backgroundColor: Color(PXBColors.white[100]).mix(Color(PXBColors.black[50]), 0.5).string(),
                },
                '&:nth-of-type(odd):not($selected)': {
                    backgroundColor: ThemeColors.background.paper,
                    '&$hover:hover': {
                        backgroundColor: Color(ThemeColors.background.paper)
                            .mix(Color(PXBColors.black[50]), 0.5)
                            .string(),
                    },
                },
                '&$selected': {
                    backgroundColor: Color(ThemeColors.primary.main).alpha(0.05).string(),
                    '&$hover:hover': {
                        backgroundColor: Color(ThemeColors.primary.main).alpha(0.07).string(),
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
                        color: PXBColors.black[300],
                        opacity: 1,
                    },
                },
            },
            icon: {
                opacity: 0.12,
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
            textColorPrimary: {
                color: WhiteText,
                opacity: 0.7,
                '&$selected': {
                    color: WhiteText,
                    opacity: 1,
                },
            },
            textColorSecondary: {
                color: WhiteText,
                opacity: 0.7,
                '&$selected': {
                    color: WhiteText,
                    opacity: 1,
                },
            },
            selected: {},
            wrapper: {},
        },
        MuiTabs: {
            indicator: {
                backgroundColor: ThemeColors.background.paper,
            },
        },

        // TEXT FIELD OVERRIDES
        MuiInputBase: {
            root: {
                '&$disabled': {
                    color: ThemeColors.action.disabled,
                },
            },
            input: {
                '&::placeholder': {
                    color: PXBColors.black[100],
                    opacity: 1,
                },
                '&:-webkit-autofill': {
                    '-webkit-box-shadow': `0 0 0 30px ${PXBColors.white[50]} inset`,
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
                    borderBottomColor: BlackBorder,
                },
                '&$disabled:before': {
                    borderBottomColor: ThemeColors.divider,
                    borderBottomStyle: 'solid',
                },
                '&$error:not($focused):after': {
                    borderBottomWidth: 1,
                },
                '&$error:not($focused)&:hover:after': {
                    borderBottomColor: ThemeColors.error.dark,
                },
            },
            disabled: {},
        },
        MuiFilledInput: {
            root: {
                backgroundColor: ThemeColors.background.default,
                '&:hover': {
                    backgroundColor: PXBColors.white[400],
                },
                '&$focused': {
                    backgroundColor: ThemeColors.background.default,
                },
                '&$disabled': {
                    color: Color(ThemeColors.text.primary).alpha(0.3).string(),
                    backgroundColor: PXBColors.white[100],
                    pointerEvents: 'none',
                },
            },
            input: {
                '&:-webkit-autofill': {
                    '-webkit-box-shadow': `0 0 0 30px ${ThemeColors.background.default} inset`,
                },
            },
            underline: {
                '&:before': {
                    borderBottomColor: ThemeColors.divider,
                },
                '&$error:not($focused):after': {
                    borderBottomWidth: 1,
                },
                '&$disabled:before': {
                    borderBottomColor: ThemeColors.divider,
                    borderBottomStyle: 'solid',
                },
            },
            focused: {},
            disabled: {},
        },
        MuiOutlinedInput: {
            root: {
                '& $notchedOutline': {
                    borderColor: ThemeColors.divider,
                },
                '&:hover $notchedOutline': {
                    borderColor: PXBColors.gray[500],
                },
                '&$error$colorSecondary$focused $notchedOutline': {
                    borderColor: ThemeColors.error.main,
                },
                '&$error:hover:not($focused) $notchedOutline': {
                    borderColor: ThemeColors.error.dark,
                },
                '&$disabled $notchedOutline': {
                    borderColor: ThemeColors.divider,
                },
            },
            colorSecondary: {},
            focused: {},
            error: {},
            notchedOutline: {
                borderColor: ThemeColors.divider,
            },
            disabled: {},
        },
        MuiFormLabel: {
            root: {
                color: ThemeColors.text.secondary,
                '&$disabled': {
                    color: ThemeColors.action.disabled,
                },
                '&$filled:not($disabled):not($focused):not($error)': {
                    color: ThemeColors.text.primary,
                },
                '&$error$colorSecondary$focused': {
                    color: ThemeColors.error.main,
                },
            },
            colorSecondary: {},
            focused: {},
            filled: {},
            disabled: {},
            error: {},
        },
        MuiFormHelperText: {
            root: {
                '&$disabled': {
                    color: ThemeColors.action.disabled,
                },
            },
            disabled: {},
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
                color: ThemeColors.text.hint,
                borderColor: PXBColors.gray[100],
                '&:hover': {
                    backgroundColor: Color(PXBColors.black[500]).alpha(0.05).string(),
                },
                '&$selected': {
                    backgroundColor: ThemeColors.primary.light,
                    color: ThemeColors.primary.main,
                    '&:hover': {
                        backgroundColor: PXBColors.blue[100],
                    },
                },
            },
            selected: {},
        },
    },
};
