"use strict";
/**
 Copyright (c) 2020-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("./shared");
var color_1 = __importDefault(require("color"));
var PXBColors = __importStar(require("@pxblue/colors"));
/*
    Variable color definitions so we can reuse them in the theme overrides below
*/
var ThemeColors = {
    primary: shared_1.createSimpleDarkPalette(PXBColors.blue),
    secondary: shared_1.createSimpleDarkPalette(PXBColors.lightBlue),
    error: shared_1.createSimpleDarkPalette(PXBColors.red),
    success: shared_1.createSimpleDarkPalette(PXBColors.green),
    info: shared_1.createSimpleDarkPalette(PXBColors.lightBlue),
    divider: color_1.default(PXBColors.black[200]).alpha(0.36).string(),
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
        disabled: color_1.default(PXBColors.black[300]).alpha(0.36).string(),
        hint: color_1.default(PXBColors.black[300]).alpha(0.36).string(),
    },
    action: {
        hover: color_1.default(PXBColors.black[50]).alpha(0.1).string(),
        active: PXBColors.black[200],
        disabled: color_1.default(PXBColors.black[50]).alpha(0.1).string(),
        disabledBackground: color_1.default(PXBColors.black[200]).alpha(0.24).string(),
    },
};
var WhiteText = PXBColors.white[50];
var MediumBlackBackground = PXBColors.black[500];
var BlackText = PXBColors.black[500];
var Spacing = 8;
// const BlackBorder = PXBColors.black[500];
/*
    Refer to https://material-ui.com/customization/default-theme/ for a list of properties that are available
    to customize in our themes. These have changed periodically from version to version of Material UI.
*/
exports.blueDarkTheme = {
    direction: 'ltr',
    typography: shared_1.typography,
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
                backgroundColor: PXBColors.black[900],
            },
        },
        // AVATAR OVERRIDES
        MuiAvatar: {
            colorDefault: {
                backgroundColor: color_1.default(PXBColors.black[50]).alpha(0.1).string(),
                color: ThemeColors.text.primary,
            },
        },
        // BACKDROP OVERRIDES
        MuiBackdrop: {
            root: {
                backgroundColor: color_1.default(PXBColors.darkBlack[900]).alpha(0.7).string(),
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
                    backgroundColor: color_1.default(PXBColors.black[50]).alpha(0.1).string(),
                },
                '&$disabled': {
                    borderColor: color_1.default(PXBColors.black[200]).alpha(0.36).string(),
                    color: color_1.default(PXBColors.black[300]).alpha(0.36).string(),
                },
            },
            outlinedPrimary: {
                borderColor: ThemeColors.primary.main,
                '&:hover': {
                    backgroundColor: color_1.default(ThemeColors.primary.dark).alpha(0.2).string(),
                },
            },
            outlinedSecondary: {
                '&:not($disabled)': {
                    borderColor: ThemeColors.secondary.main,
                    // backgroundColor: Color(ThemeColors.primary.dark).alpha(0.2).string(),
                    '&:hover': {
                        // color: PXBColors.blue[100],
                        // borderColor: PXBColors.blue[100],
                        backgroundColor: color_1.default(ThemeColors.secondary.dark).alpha(0.2).string(),
                    },
                },
                '&$disabled': {
                    borderColor: color_1.default(PXBColors.black[200]).alpha(0.36).string(),
                    color: color_1.default(PXBColors.black[300]).alpha(0.36).string(),
                },
            },
            contained: {
                backgroundColor: MediumBlackBackground,
                color: WhiteText,
                '&:hover': {
                    backgroundColor: PXBColors.black[400],
                },
                '&$disabled': {
                    backgroundColor: color_1.default(PXBColors.black[200]).alpha(0.24).string(),
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
                    color: color_1.default(PXBColors.black[300]).alpha(0.36).string(),
                },
                '&:hover': {
                    backgroundColor: color_1.default(PXBColors.black[50]).alpha(0.1).string(),
                },
            },
            textPrimary: {
                '&:hover': {
                    backgroundColor: color_1.default(ThemeColors.primary.dark).alpha(0.2).string(),
                },
            },
            textSecondary: {
                '&:hover': {
                    backgroundColor: color_1.default(ThemeColors.secondary.dark).alpha(0.2).string(),
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
                    // marginLeft: Spacing,
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
                margin: "0px " + Spacing + "px 0px -4px",
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
            colorSecondary: {
                color: WhiteText,
                backgroundColor: ThemeColors.secondary.dark,
                '&$clickable:hover': {
                    backgroundColor: PXBColors.lightBlue[300],
                },
            },
            outlined: {
                backgroundColor: ThemeColors.background.paper,
                borderColor: color_1.default(PXBColors.black[200]).alpha(0.32).string(),
                '&$clickable:hover': {
                    backgroundColor: PXBColors.black[800],
                },
                '& $avatar': {
                    backgroundColor: PXBColors.black[600],
                    color: ThemeColors.text.primary,
                    // marginLeft: Spacing,
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
                    margin: "0px " + Spacing + "px 0px -4px",
                },
            },
            outlinedPrimary: {
                backgroundColor: color_1.default(ThemeColors.primary.dark).alpha(0.2).string(),
                '&$clickable:hover': {
                    backgroundColor: color_1.default(ThemeColors.primary.dark).alpha(0.3).string(),
                },
            },
            icon: {
                fontSize: '1.125rem',
                color: ThemeColors.text.primary,
                marginLeft: Spacing,
                marginRight: -4,
            },
            avatar: {},
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
                backgroundColor: color_1.default(PXBColors.black[300]).alpha(0.36).string(),
                margin: "0px 4px",
            },
            dotActive: {
                backgroundColor: ThemeColors.primary.dark,
            },
        },
        // PROGRESS OVERRIDES
        MuiLinearProgress: {
            root: {},
            colorPrimary: {
                backgroundColor: color_1.default(ThemeColors.primary.dark).darken(0.7).string(),
            },
            colorSecondary: {
                backgroundColor: color_1.default(ThemeColors.secondary.dark).darken(0.7).string(),
            },
            dashedColorPrimary: {
                backgroundImage: "radial-gradient(" + color_1.default(ThemeColors.primary.dark).darken(0.5).string() + " 0%, " + color_1.default(ThemeColors.primary.dark)
                    .darken(0.7)
                    .string() + " 16%, transparent 42%)",
            },
            dashedColorSecondary: {
                backgroundImage: "radial-gradient(" + color_1.default(ThemeColors.secondary.dark).darken(0.5).string() + " 0%, " + color_1.default(ThemeColors.secondary.dark)
                    .darken(0.7)
                    .string() + " 16%, transparent 42%)",
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
                color: color_1.default(PXBColors.black[300]).alpha(0.32).string(),
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
                    backgroundColor: color_1.default(PXBColors.darkBlack[300]).mix(color_1.default(PXBColors.black[500]), 0.5).string(),
                },
                '&:nth-of-type(odd):not($selected)': {
                    backgroundColor: PXBColors.black[900],
                    '&$hover:hover': {
                        backgroundColor: color_1.default(PXBColors.black[900]).mix(color_1.default(PXBColors.black[500]), 0.5).string(),
                    },
                },
                '&$selected': {
                    backgroundColor: color_1.default(ThemeColors.primary.dark).alpha(0.2).string(),
                    '&$hover:hover': {
                        backgroundColor: color_1.default(ThemeColors.primary.dark)
                            .mix(color_1.default(PXBColors.black[500]), 0.5)
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
                    color: color_1.default(PXBColors.black[300]).alpha(0.36).string(),
                    backgroundColor: color_1.default(PXBColors.black[800]).alpha(0.5).string(),
                    pointerEvents: 'none',
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
                borderColor: color_1.default(PXBColors.black[200]).alpha(0.32).string(),
                '&$selected': {
                    backgroundColor: color_1.default(ThemeColors.primary.dark).alpha(0.36).string(),
                    color: ThemeColors.primary.main,
                    '&:hover': {
                        backgroundColor: color_1.default(ThemeColors.primary.main).alpha(0.36).string(),
                    },
                },
                '&:hover': {
                    backgroundColor: color_1.default(PXBColors.black[50]).alpha(0.1).string(),
                },
            },
            selected: {},
        },
    },
};
