"use strict";
/**
 Copyright (c) 2020-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("./shared");
var PXBColors = __importStar(require("@pxblue/colors"));
var color_1 = __importDefault(require("color"));
/*
    Variable color definitions so we can reuse them in the theme overrides below
*/
var ThemeColors = {
    primary: shared_1.createSimpleLightPalette(PXBColors.blue),
    secondary: shared_1.createSimpleLightPalette(PXBColors.lightBlue),
    error: shared_1.createSimpleLightPalette(PXBColors.red),
    success: shared_1.createSimpleLightPalette(PXBColors.green),
    info: shared_1.createSimpleLightPalette(PXBColors.lightBlue),
    divider: color_1.default(PXBColors.black[500]).alpha(0.12).rgb().string(),
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
        secondary: PXBColors.black[300],
        // disabled: Color(PXBColors.black[300]).alpha(0.32).rgb().string(),
        hint: PXBColors.gray[500],
    },
    action: {
        // hover: Color(PXBColors.black[50]).alpha(0.1).rgb().string(),
        active: PXBColors.gray[500],
        disabled: 'rgba(0, 0, 0, .25)',
    },
};
var WhiteText = PXBColors.white[50];
var BlackBorder = PXBColors.black[500];
/*
    Refer to https://material-ui.com/customization/default-theme/ for a list of properties that are available
    to customize in our themes. These have changed periodically from version to version of Material UI.
*/
exports.blueTheme = {
    direction: 'ltr',
    typography: shared_1.typography,
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
                backgroundColor: PXBColors.gray[50],
            },
            colorSecondary: {
                color: PXBColors.white[50],
                backgroundColor: ThemeColors.primary.dark,
                '& .MuiInputBase-root': {
                    color: PXBColors.white[50],
                },
                '& .MuiSelect-icon': {
                    color: PXBColors.white[50],
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
            containedPrimary: {
                '&$disabled': {
                    backgroundColor: ThemeColors.primary.light,
                    color: PXBColors.blue[200],
                    opacity: 1,
                },
            },
            outlined: {
                borderColor: BlackBorder,
            },
            outlinedPrimary: {
                borderColor: ThemeColors.primary.main,
            },
            outlinedSecondary: {
                borderColor: ThemeColors.secondary.main,
            },
            disabled: {},
        },
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
                    color: ThemeColors.primary.main,
                },
            },
            clickable: {
                '&:hover': {
                    backgroundColor: PXBColors.gray[100],
                },
            },
            deleteIcon: {
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
            deleteIconOutlinedColorPrimary: {
                color: PXBColors.blue[200],
                '&:hover': {
                    color: ThemeColors.primary.main,
                },
            },
            outlined: {
                borderColor: color_1.default(BlackBorder).alpha(0.12).rgb().string(),
                '&$clickable:hover': {
                    backgroundColor: PXBColors.white[200],
                },
            },
            outlinedPrimary: {
                backgroundColor: color_1.default(ThemeColors.primary.main).alpha(0.05).rgb().string(),
                '&$clickable:hover': {
                    backgroundColor: color_1.default(ThemeColors.primary.main).alpha(0.1).rgb().string(),
                },
            },
            avatar: {},
        },
        // FAB OVERRIDES
        MuiFab: {
            root: {
                textTransform: 'none',
            },
        },
        // LIST ITEM OVERRIDES
        MuiListItem: {
            root: {
                color: ThemeColors.text.primary,
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
            },
        },
        // STEPPER OVERRIDES
        MuiStepper: {},
        MuiStepConnector: {
            line: {
                borderColor: color_1.default(BlackBorder).alpha(0.12).rgb().string(),
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
            },
            colorPrimary: {
                '&$checked': {
                    color: ThemeColors.primary.main,
                },
            },
            track: {
                backgroundColor: PXBColors.black[100],
                opacity: 1,
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
                color: PXBColors.black[50],
                backgroundColor: '#FBFBFB',
                '&$hover:hover': {
                    backgroundColor: color_1.default('#FBFBFB').mix(color_1.default(PXBColors.black[50]), 0.5).rgb().string(),
                },
                '&:nth-of-type(odd):not($selected)': {
                    backgroundColor: PXBColors.white[50],
                    '&$hover:hover': {
                        backgroundColor: color_1.default(PXBColors.white[50]).mix(color_1.default(PXBColors.black[50]), 0.5).rgb().string(),
                    },
                },
                '&$selected': {
                    backgroundColor: color_1.default(ThemeColors.primary.main).alpha(0.05).rgb().string(),
                    '&$hover:hover': {
                        backgroundColor: color_1.default(ThemeColors.primary.main).alpha(0.07).rgb().string(),
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
        },
        MuiTabs: {
            indicator: {
                backgroundColor: PXBColors.white[50],
            },
        },
        // TEXT FIELD OVERRIDES
        MuiInput: {
            underline: {
                '&$disabled:before': {
                    borderBottomColor: ThemeColors.action.disabled,
                    borderBottomStyle: 'solid',
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
                    color: color_1.default(ThemeColors.text.primary).alpha(0.3).rgb().string(),
                    backgroundColor: PXBColors.white[100],
                    pointerEvents: 'none',
                },
            },
            underline: {
                '&:before': {
                    borderBottomColor: ThemeColors.divider,
                },
            },
            focused: {},
            disabled: {},
        },
        MuiOutlinedInput: {
            root: {
                '&$error$colorSecondary$focused $notchedOutline': {
                    borderColor: ThemeColors.error.main,
                },
                '&$error:hover $notchedOutline': {
                    borderColor: PXBColors.red[900],
                },
            },
            colorSecondary: {},
            focused: {},
            error: {},
            notchedOutline: {
                borderColor: ThemeColors.divider,
            },
        },
        MuiFormLabel: {
            root: {
                color: ThemeColors.text.hint,
                '&$error$colorSecondary$focused': {
                    color: ThemeColors.error.main,
                },
            },
            colorSecondary: {},
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
                color: ThemeColors.text.hint,
                borderColor: PXBColors.gray[100],
                '&$selected': {
                    backgroundColor: ThemeColors.primary.light,
                    color: ThemeColors.primary.main,
                },
            },
            selected: {},
        },
    },
};
