"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontConfig = void 0;
var defaultFontConfig = {
    regular: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400',
    },
    medium: {
        fontFamily: 'OpenSans-SemiBold',
        fontWeight: '600',
    },
    light: {
        fontFamily: 'OpenSans-Light',
        fontWeight: '300',
    },
    thin: {
        fontFamily: 'OpenSans-Light',
        fontWeight: '100',
    },
};
exports.fontConfig = {
    default: defaultFontConfig,
    ios: defaultFontConfig,
    android: defaultFontConfig,
};
