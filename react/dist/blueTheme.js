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
var ThemeColors = __importStar(require("@pxblue/colors"));
var color_1 = __importDefault(require("color"));
/*
    Refer to https://material-ui.com/customization/default-theme/ for a list of properties that are available
    to customize in our themes. These have changed periodically from version to version of Material UI.
*/
exports.blueTheme = {
    direction: 'ltr',
    typography: shared_1.typography,
    palette: {
        type: 'light',
        primary: shared_1.createSimpleLightPalette(ThemeColors.blue),
        secondary: shared_1.createSimpleLightPalette(ThemeColors.lightBlue),
        error: shared_1.createSimpleLightPalette(ThemeColors.red),
        success: shared_1.createSimpleLightPalette(ThemeColors.green),
        info: shared_1.createSimpleLightPalette(ThemeColors.lightBlue),
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
        MuiCheckbox: {
            root: {
                color: ThemeColors.gray[500],
            },
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
                borderColor: color_1.default(ThemeColors.black[500]).alpha(0.12).rgb().string(),
                '&$clickable:hover': {
                    backgroundColor: ThemeColors.white[200],
                },
            },
            outlinedPrimary: {
                backgroundColor: color_1.default(ThemeColors.blue[500]).alpha(0.05).rgb().string(),
                '&$clickable:hover': {
                    backgroundColor: color_1.default(ThemeColors.blue[500]).alpha(0.1).rgb().string(),
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
        MuiOutlinedInput: {
            root: {
                '&$error$colorSecondary$focused $notchedOutline': {
                    borderColor: ThemeColors.red[500],
                }
            },
            colorSecondary: {},
            focused: {},
            error: {},
            notchedOutline: {}
        },
        MuiFormLabel: {
            root: {
                '&$error$colorSecondary$focused': {
                    color: ThemeColors.red[500],
                }
            },
            colorSecondary: {},
            error: {},
            focused: {},
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
                color: ThemeColors.black[500],
            },
        },
        // SLIDER OVERRIDES
        MuiSlider: {
            root: {
                height: 6,
                color: ThemeColors.blue[300],
            },
            track: {
                height: 6,
                marginTop: -1,
            },
            rail: {
                height: 4,
                backgroundColor: ThemeColors.black[100],
            },
            thumb: {
                height: 20,
                width: 20,
                marginTop: -8,
                backgroundColor: ThemeColors.blue[500],
            },
            thumbColorSecondary: {
                backgroundColor: ThemeColors.lightBlue[500],
            },
            mark: {
                backgroundColor: ThemeColors.blue[200],
                marginTop: 1,
            },
            markActive: {
                backgroundColor: ThemeColors.blue[200],
            },
        },
        // SNACKBAR OVERRIDES
        MuiSnackbarContent: {
            root: {
                backgroundColor: ThemeColors.black[900],
                color: ThemeColors.black[50],
                '& .MuiButton-textPrimary': {
                    color: ThemeColors.blue[200],
                },
            },
        },
        // STEPPER OVERRIDES
        MuiStepper: {},
        MuiStepConnector: {
            line: {
                borderColor: color_1.default(ThemeColors.black[500]).alpha(0.12).rgb().string(),
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
                    backgroundColor: ThemeColors.white[50],
                    borderRadius: '50%',
                },
            },
        },
        MuiStepIcon: {
            root: {
                color: ThemeColors.white[500],
                zIndex: 1,
            },
            text: {
                fill: ThemeColors.black[500],
            },
            active: {
                '& $text': {
                    fill: ThemeColors.white[50],
                },
            },
        },
        MuiStepLabel: {
            label: {
                color: ThemeColors.black[500],
                '&$active': {
                    fontWeight: 600,
                    color: ThemeColors.blue[500],
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
        // TABLE OVERRIDES
        MuiTableCell: {
            head: {
                fontWeight: 600,
            },
        },
        MuiTableHead: {
            root: {
                background: ThemeColors.white[50],
            },
        },
        MuiTableRow: {
            root: {
                color: ThemeColors.black[50],
                backgroundColor: '#FBFBFB',
                '&$hover:hover': {
                    backgroundColor: color_1.default('#FBFBFB').mix(color_1.default(ThemeColors.black[50]), 0.5).rgb().string(),
                },
                '&:nth-of-type(odd):not($selected)': {
                    backgroundColor: ThemeColors.white[50],
                    '&$hover:hover': {
                        backgroundColor: color_1.default(ThemeColors.white[50]).mix(color_1.default(ThemeColors.black[50]), 0.5).rgb().string(),
                    },
                },
                '&$selected': {
                    backgroundColor: color_1.default(ThemeColors.blue[500]).alpha(0.05).rgb().string(),
                    '&$hover:hover': {
                        backgroundColor: color_1.default(ThemeColors.blue[500]).alpha(0.07).rgb().string(),
                    },
                },
            },
            hover: {},
        },
        MuiTableSortLabel: {
            root: {
                '&:hover': {
                    color: ThemeColors.black[500],
                    '& $icon': {
                        color: ThemeColors.black[300],
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
