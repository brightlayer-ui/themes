type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

const defaultFontConfig = {
    regular: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400' as FontWeight,
    },
    medium: {
        fontFamily: 'OpenSans-SemiBold',
        fontWeight: '600' as FontWeight,
    },
    light: {
        fontFamily: 'OpenSans-Light',
        fontWeight: '300' as FontWeight,
    },
    thin: {
        fontFamily: 'OpenSans-Light',
        fontWeight: '100' as FontWeight,
    },
};

export const fontConfig = {
    default: defaultFontConfig,
    ios: defaultFontConfig,
    android: defaultFontConfig,
};
