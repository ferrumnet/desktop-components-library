/// <reference types="react" />
declare module "BaseTheme" {
    export class BaseTheme {
        static Spaces: {
            screenMarginHorizontal: string;
            screenMarginVertical: string;
            gap: string;
            line: string;
        };
        static Colors: {
            bkgShade0: string;
            bkgShade1: string;
            bkgShade2: string;
            bkgShade3: string;
            bkgShade4: string;
            textColor: string;
            highlight: string;
            splash: string;
            themeNavBkg: string;
        };
        static Button: {
            btnPrimary: string;
            inverseBtnPrimary: string;
            btnHighlight: string;
            btnPrimaryTextColor: string;
            inverseBtnPrimaryTextColor: string;
            btnHighlightTextColor: string;
            btnBorderRadius: string;
            btnPadding: string;
        };
        static Font: {
            main: string;
        };
        static Text: {
            textColor: string;
            inversTextColor: string;
            subTextColor: string;
            disabledColor: string;
            linkColor: string;
            infoColor: string;
            h1Size: string;
            h2Size: string;
            h3Size: string;
            h4Size: string;
            pSize: string;
            numberDownColor: string;
            numberUpColor: string;
        };
        static Page: {
            titleColor: string;
            titleSize: string;
            titleIconColor: string;
        };
        static Chart: {
            redGradiantStart: string;
            redGradiantEnd: string;
            greenGradiantStart: string;
            greenGradiantEnd: string;
        };
        static Input: {
            inputBackground: string;
            inputTextColor: string;
            inputTextSize: string;
            inputLabelColor: string;
            inputLabelSize: string;
            inputLargeLabelSize: string;
            inputLargeLabelColor: string;
        };
        static List: {
            listItemPaddingTop: string;
            listItemPaddingButtom: string;
            listItemBorderColor: string;
        };
        static Icon: {
            backgroundColor: string;
            iconColor: string;
            iconBorderRadius: string;
        };
        static Switch: {
            thumbColor: string;
            backgroundColorFalse: string;
            backgroundColorTrue: string;
        };
        static Pin: {
            keyboardBackground: string;
            keyboardTextColor: string;
            bubbleActive: string;
            bubbleInActive: string;
        };
        static Coin: {
            iconBackground: string;
        };
        static Logo: {
            logo: string;
        };
    }
}
declare module "Theme" {
    export class Theme {
        static Spaces: {
            screenMarginHorizontal: string;
            screenMarginVertical: string;
            gap: string;
            line: string;
        };
        static Colors: {
            bkgShade0: string;
            bkgShade1: string;
            bkgShade2: string;
            bkgShade3: string;
            bkgShade4: string;
            textColor: string;
            highlight: string;
            splash: string;
            themeNavBkg: string;
        };
        static Button: {
            btnPrimary: string;
            inverseBtnPrimary: string;
            btnHighlight: string;
            btnPrimaryTextColor: string;
            inverseBtnPrimaryTextColor: string;
            btnHighlightTextColor: string;
            btnBorderRadius: string;
            btnPadding: string;
        };
        static Font: {
            main: string;
        };
        static Text: {
            textColor: string;
            inversTextColor: string;
            subTextColor: string;
            disabledColor: string;
            linkColor: string;
            infoColor: string;
            h1Size: string;
            h2Size: string;
            h3Size: string;
            h4Size: string;
            pSize: string;
            numberDownColor: string;
            numberUpColor: string;
        };
        static Page: {
            titleColor: string;
            titleSize: string;
            titleIconColor: string;
        };
        static Chart: {
            redGradiantStart: string;
            redGradiantEnd: string;
            greenGradiantStart: string;
            greenGradiantEnd: string;
        };
        static Input: {
            inputBackground: string;
            inputTextColor: string;
            inputTextSize: string;
            inputLabelColor: string;
            inputLabelSize: string;
            inputLargeLabelSize: string;
            inputLargeLabelColor: string;
        };
        static List: {
            listItemPaddingTop: string;
            listItemPaddingButtom: string;
            listItemBorderColor: string;
        };
        static Icon: {
            backgroundColor: string;
            iconColor: string;
            iconBorderRadius: string;
        };
        static Switch: {
            thumbColor: string;
            backgroundColorFalse: string;
            backgroundColorTrue: string;
        };
        static Pin: {
            keyboardBackground: string;
            keyboardTextColor: string;
            bubbleActive: string;
            bubbleInActive: string;
        };
        static Coin: {
            iconBackground: string;
        };
        static Logo: {
            logo: string;
        };
    }
}
declare module "types" {
    export type BaseConstValue<T> = {
        [k: string]: T;
    };
    export class ConstantBuilder<TConstValueType, TConstType extends BaseConstValue<TConstValueType>> {
        private consts;
        private constructor();
        set(k: string, v: TConstValueType, x?: any): this;
        build(): TConstType;
        static builder<T1, T2 extends BaseConstValue<T1>>(): ConstantBuilder<T1, T2>;
    }
    export type ThemeConstants = {
        [k: string]: number | string;
    };
    export class ThemeError extends Error {
    }
    export class ConstantProvider<TConstValueType, TConstType extends {
        [k: string]: TConstValueType;
    }> {
        name: string;
        private constants;
        constructor(name: string, defaultMap: TConstType);
        register(map: TConstType): void;
        get(key: string): TConstValueType;
        has(key: string): boolean;
        private getOptional;
    }
    export class WebThemeConstantProvider extends ConstantProvider<number | string, ThemeConstants> {
    }
}
declare module "themeLoader" {
    export const BuilderVariables: {
        palette: {
            themeNavLight: string;
            themePrimary: string;
            themeLighterAlt: string;
            themeLighter: string;
            themeLight: string;
            themeTertiary: string;
            themeSecondary: string;
            themeDarkAlt: string;
            themeDark: string;
            themeDarker: string;
            neutralLighterAlt: string;
            neutralLighter: string;
            neutralLight: string;
            neutralQuaternaryAlt: string;
            neutralQuaternary: string;
            neutralTertiaryAlt: string;
            neutralTertiary: string;
            neutralSecondary: string;
            neutralPrimaryAlt: string;
            neutralPrimary: string;
            neutralDark: string;
            black: string;
            white: string;
            wierd: string;
            logoUrl: string;
        };
        logoUrl: string;
    };
    export const WebThemeLoader: () => import("@fluentui/react").ITheme;
}
declare module "ThemeContext" {
    import { ConstantBuilder, WebThemeConstantProvider, ThemeConstants } from "types";
    export const WebdefaultDarkThemeConstantsBuilder: (theme: any) => ConstantBuilder<string | number, ThemeConstants>;
    export const WebdefaultLightThemeConstantsBuilder: (theme: any) => ConstantBuilder<string | number, ThemeConstants>;
    export const WebThemeContext: import("react").Context<WebThemeConstantProvider>;
}
