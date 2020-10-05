define("BaseTheme", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaseTheme = void 0;
    const _BUTTON = 'Button.';
    const _COLOR = 'Color.';
    const _SPACES = 'Spaces.';
    const _FONT = 'Font.';
    const _TEXT = 'Text.';
    const _PAGE = 'Page.';
    const _CHART = 'Chart.';
    const _INPUT = 'Input.';
    const _LIST = 'List.';
    const _ICON = 'Icon.';
    const _SWITCH = 'Switch.';
    const _PIN = 'Pin.';
    const _COIN = 'Coin.';
    class BaseTheme {
    }
    exports.BaseTheme = BaseTheme;
    BaseTheme.Spaces = {
        screenMarginHorizontal: _SPACES + 'screenMarginHorizontal',
        screenMarginVertical: _SPACES + 'screenMarginVertical',
        gap: _SPACES + 'gap',
        line: _SPACES + 'line',
    };
    BaseTheme.Colors = {
        bkgShade0: _COLOR + 'bkgShade0',
        bkgShade1: _COLOR + 'bkgShade1',
        bkgShade2: _COLOR + 'bkgShade2',
        bkgShade3: _COLOR + 'bkgShade3',
        bkgShade4: _COLOR + 'bkgShade4',
        textColor: _COLOR + 'textColor',
        highlight: _COLOR + 'highlight',
        splash: _COLOR + 'splash',
        themeNavBkg: _COLOR + 'themeNavBkg',
    };
    BaseTheme.Button = {
        btnPrimary: _BUTTON + 'btnPrimary',
        inverseBtnPrimary: _BUTTON + 'inverseBtnPrimary',
        btnHighlight: _BUTTON + 'btnHighlight',
        btnPrimaryTextColor: _BUTTON + 'btnPrimaryTextColor',
        inverseBtnPrimaryTextColor: _BUTTON + 'inverseBtnPrimaryTextColor',
        btnHighlightTextColor: _BUTTON + 'btnHighlightTextColor',
        btnBorderRadius: _BUTTON + 'btnBorderRadius',
        btnPadding: _BUTTON + 'btnPadding',
    };
    BaseTheme.Font = {
        main: _FONT + 'main',
    };
    BaseTheme.Text = {
        textColor: _TEXT + 'textColor',
        inversTextColor: _TEXT + 'inversTextColor',
        subTextColor: _TEXT + 'subTextColor',
        disabledColor: _TEXT + 'disabledColor',
        linkColor: _TEXT + 'linkColor',
        infoColor: _TEXT + 'infoColor',
        h1Size: _TEXT + 'h1Size',
        h2Size: _TEXT + 'h2Size',
        h3Size: _TEXT + 'h3Size',
        h4Size: _TEXT + 'h4Size',
        pSize: _TEXT + 'pSize',
        numberDownColor: _TEXT + 'numberDown',
        numberUpColor: _TEXT + 'numberUp',
    };
    BaseTheme.Page = {
        titleColor: _PAGE + 'titleColor',
        titleSize: _PAGE + 'titleSize',
        titleIconColor: _PAGE + 'titleIconColor',
    };
    BaseTheme.Chart = {
        redGradiantStart: _CHART + 'redGradiantStart',
        redGradiantEnd: _CHART + 'redGradiantEnd',
        greenGradiantStart: _CHART + 'greenGradiantStart',
        greenGradiantEnd: _CHART + 'greenGradiantStart',
    };
    BaseTheme.Input = {
        inputBackground: _INPUT + 'inputBackground',
        inputTextColor: _INPUT + 'inputTextColor',
        inputTextSize: _INPUT + 'inputTextSize',
        inputLabelColor: _INPUT + 'inputLabelColor',
        inputLabelSize: _INPUT + 'inputLabelSize',
        inputLargeLabelSize: _INPUT + 'inputLargeLabelSize',
        inputLargeLabelColor: _INPUT + 'inputLargeLabelColor',
    };
    BaseTheme.List = {
        listItemPaddingTop: _LIST + 'listItemPaddingTop',
        listItemPaddingButtom: _LIST + 'listItemPaddingButtom',
        listItemBorderColor: _LIST + 'listItemBorderColor',
    };
    BaseTheme.Icon = {
        backgroundColor: _ICON + 'backgroundColor',
        iconColor: _ICON + 'iconColor',
        iconBorderRadius: _ICON + 'iconBorderRadius',
    };
    BaseTheme.Switch = {
        thumbColor: _SWITCH + 'thumbColor',
        backgroundColorFalse: _SWITCH + 'backgroundColorFalse',
        backgroundColorTrue: _SWITCH + 'backgroundColorTrue',
    };
    BaseTheme.Pin = {
        keyboardBackground: _PIN + 'keyboardBackground',
        keyboardTextColor: _PIN + 'keyboardTextColor',
        bubbleActive: _PIN + 'bubbleActive',
        bubbleInActive: _PIN + 'bubbleInActive',
    };
    BaseTheme.Coin = {
        iconBackground: _COIN + 'iconBackground',
    };
    BaseTheme.Logo = {
        logo: 'ICON.MAIN_LOGO'
    };
});
define("Theme", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Theme = void 0;
    const _BUTTON = 'Button.';
    const _COLOR = 'Color.';
    const _SPACES = 'Spaces.';
    const _FONT = 'Font.';
    const _TEXT = 'Text.';
    const _PAGE = 'Page.';
    const _CHART = 'Chart.';
    const _INPUT = 'Input.';
    const _LIST = 'List.';
    const _ICON = 'Icon.';
    const _SWITCH = 'Switch.';
    const _PIN = 'Pin.';
    const _COIN = 'Coin.';
    class Theme {
    }
    exports.Theme = Theme;
    Theme.Spaces = {
        screenMarginHorizontal: _SPACES + 'screenMarginHorizontal',
        screenMarginVertical: _SPACES + 'screenMarginVertical',
        gap: _SPACES + 'gap',
        line: _SPACES + 'line',
    };
    Theme.Colors = {
        bkgShade0: _COLOR + 'bkgShade0',
        bkgShade1: _COLOR + 'bkgShade1',
        bkgShade2: _COLOR + 'bkgShade2',
        bkgShade3: _COLOR + 'bkgShade3',
        bkgShade4: _COLOR + 'bkgShade4',
        textColor: _COLOR + 'textColor',
        highlight: _COLOR + 'highlight',
        splash: _COLOR + 'splash',
        themeNavBkg: _COLOR + 'themeNavBkg',
    };
    Theme.Button = {
        btnPrimary: _BUTTON + 'btnPrimary',
        inverseBtnPrimary: _BUTTON + 'inverseBtnPrimary',
        btnHighlight: _BUTTON + 'btnHighlight',
        btnPrimaryTextColor: _BUTTON + 'btnPrimaryTextColor',
        inverseBtnPrimaryTextColor: _BUTTON + 'inverseBtnPrimaryTextColor',
        btnHighlightTextColor: _BUTTON + 'btnHighlightTextColor',
        btnBorderRadius: _BUTTON + 'btnBorderRadius',
        btnPadding: _BUTTON + 'btnPadding',
    };
    Theme.Font = {
        main: _FONT + 'main',
    };
    Theme.Text = {
        textColor: _TEXT + 'textColor',
        inversTextColor: _TEXT + 'inversTextColor',
        subTextColor: _TEXT + 'subTextColor',
        disabledColor: _TEXT + 'disabledColor',
        linkColor: _TEXT + 'linkColor',
        infoColor: _TEXT + 'infoColor',
        h1Size: _TEXT + 'h1Size',
        h2Size: _TEXT + 'h2Size',
        h3Size: _TEXT + 'h3Size',
        h4Size: _TEXT + 'h4Size',
        pSize: _TEXT + 'pSize',
        numberDownColor: _TEXT + 'numberDown',
        numberUpColor: _TEXT + 'numberUp',
    };
    Theme.Page = {
        titleColor: _PAGE + 'titleColor',
        titleSize: _PAGE + 'titleSize',
        titleIconColor: _PAGE + 'titleIconColor',
    };
    Theme.Chart = {
        redGradiantStart: _CHART + 'redGradiantStart',
        redGradiantEnd: _CHART + 'redGradiantEnd',
        greenGradiantStart: _CHART + 'greenGradiantStart',
        greenGradiantEnd: _CHART + 'greenGradiantStart',
    };
    Theme.Input = {
        inputBackground: _INPUT + 'inputBackground',
        inputTextColor: _INPUT + 'inputTextColor',
        inputTextSize: _INPUT + 'inputTextSize',
        inputLabelColor: _INPUT + 'inputLabelColor',
        inputLabelSize: _INPUT + 'inputLabelSize',
        inputLargeLabelSize: _INPUT + 'inputLargeLabelSize',
        inputLargeLabelColor: _INPUT + 'inputLargeLabelColor',
    };
    Theme.List = {
        listItemPaddingTop: _LIST + 'listItemPaddingTop',
        listItemPaddingButtom: _LIST + 'listItemPaddingButtom',
        listItemBorderColor: _LIST + 'listItemBorderColor',
    };
    Theme.Icon = {
        backgroundColor: _ICON + 'backgroundColor',
        iconColor: _ICON + 'iconColor',
        iconBorderRadius: _ICON + 'iconBorderRadius',
    };
    Theme.Switch = {
        thumbColor: _SWITCH + 'thumbColor',
        backgroundColorFalse: _SWITCH + 'backgroundColorFalse',
        backgroundColorTrue: _SWITCH + 'backgroundColorTrue',
    };
    Theme.Pin = {
        keyboardBackground: _PIN + 'keyboardBackground',
        keyboardTextColor: _PIN + 'keyboardTextColor',
        bubbleActive: _PIN + 'bubbleActive',
        bubbleInActive: _PIN + 'bubbleInActive',
    };
    Theme.Coin = {
        iconBackground: _COIN + 'iconBackground',
    };
    Theme.Logo = {
        logo: 'ICON.MAIN_LOGO'
    };
});
define("types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebThemeConstantProvider = exports.ConstantProvider = exports.ThemeError = exports.ConstantBuilder = void 0;
    class ConstantBuilder {
        constructor() {
            this.consts = {};
        }
        set(k, v, x) {
            const value = typeof v === 'string' && v.startsWith('$') ?
                this.consts[v.replace('$', '')] : v;
            // @ts-ignore
            this.consts[k] = value;
            return this;
        }
        build() {
            return this.consts;
        }
        static builder() {
            return new ConstantBuilder();
        }
    }
    exports.ConstantBuilder = ConstantBuilder;
    class ThemeError extends Error {
    }
    exports.ThemeError = ThemeError;
    class ConstantProvider {
        constructor(name, defaultMap) {
            this.name = name;
            this.constants = [];
            this.constants.push(defaultMap);
        }
        register(map) {
            this.constants.push(map);
        }
        get(key) {
            const res = this.getOptional(key);
            if (!res) {
                throw new ThemeError(`ThemeConstantProvider.get: Key "${key}" has no registered constant.`);
            }
            return res;
        }
        has(key) {
            return !!this.getOptional(key);
        }
        getOptional(key) {
            for (let i = this.constants.length - 1; i >= 0; i--) {
                const res = this.constants[i][key];
                if (res) {
                    return res;
                }
            }
        }
    }
    exports.ConstantProvider = ConstantProvider;
    class WebThemeConstantProvider extends ConstantProvider {
    }
    exports.WebThemeConstantProvider = WebThemeConstantProvider;
});
define("themeLoader", ["require", "exports", "@fluentui/react"], function (require, exports, react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebThemeLoader = exports.BuilderVariables = void 0;
    exports.BuilderVariables = {
        palette: {
            themeNavLight: '#0078d4',
            themePrimary: '#0078d4',
            themeLighterAlt: '#eff6fc',
            themeLighter: '#deecf9',
            themeLight: '#c7e0f4',
            themeTertiary: '#71afe5',
            themeSecondary: '#2b88d8',
            themeDarkAlt: '#106ebe',
            themeDark: '#005a9e',
            themeDarker: '#004578',
            neutralLighterAlt: '#f8f8f8',
            neutralLighter: '#f4f4f4',
            neutralLight: '#eaeaea',
            neutralQuaternaryAlt: '#dadada',
            neutralQuaternary: '#d0d0d0',
            neutralTertiaryAlt: '#c8c8c8',
            neutralTertiary: '#c2c2c2',
            neutralSecondary: '#858585',
            neutralPrimaryAlt: '#4b4b4b',
            neutralPrimary: '#333333',
            neutralDark: '#272727',
            black: '#1d1d1d',
            white: '#ffffff',
            wierd: '#ffffff',
            logoUrl: 'https://secureservercdn.net/104.238.71.140/z9z.56c.myftpupload.com/wp-content/uploads/2020/09/ferrum-logo.png'
        },
        logoUrl: 'https://secureservercdn.net/104.238.71.140/z9z.56c.myftpupload.com/wp-content/uploads/2020/09/ferrum-logo.png'
    };
    exports.WebThemeLoader = () => react_1.loadTheme(Object.assign({}, exports.BuilderVariables));
});
define("ThemeContext", ["require", "exports", "react", "types", "BaseTheme", "themeLoader"], function (require, exports, react_2, types_1, BaseTheme_1, themeLoader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebThemeContext = exports.WebdefaultLightThemeConstantsBuilder = exports.WebdefaultDarkThemeConstantsBuilder = void 0;
    const _sr = 0.5;
    exports.WebdefaultDarkThemeConstantsBuilder = (theme) => {
        return types_1.ConstantBuilder.builder()
            .set(BaseTheme_1.BaseTheme.Spaces.screenMarginHorizontal, 50 * _sr)
            .set(BaseTheme_1.BaseTheme.Spaces.screenMarginVertical, 30 * _sr)
            .set(BaseTheme_1.BaseTheme.Spaces.gap, 60 * _sr)
            .set(BaseTheme_1.BaseTheme.Spaces.line, 30 * _sr)
            .set('bkgShade0', theme.palette.white)
            .set(BaseTheme_1.BaseTheme.Colors.bkgShade1, '#111112')
            .set('bkgShade2', '#0C1C1E')
            .set(BaseTheme_1.BaseTheme.Colors.bkgShade3, '#39393E')
            .set(BaseTheme_1.BaseTheme.Colors.bkgShade4, '#48484A')
            .set('bkgShade5', '#FFFFFF')
            .set(BaseTheme_1.BaseTheme.Logo.logo, theme.logoUrl)
            .set(BaseTheme_1.BaseTheme.Colors.highlight, '#FF3B2F')
            .set(BaseTheme_1.BaseTheme.Colors.splash, '#000000')
            .set(BaseTheme_1.BaseTheme.Button.btnPrimary, '#EEEEEE')
            .set(BaseTheme_1.BaseTheme.Button.inverseBtnPrimary, '#888888')
            .set(BaseTheme_1.BaseTheme.Button.btnHighlight, '#FF3B2F')
            .set(BaseTheme_1.BaseTheme.Button.btnPrimaryTextColor, '$Color.bkgShade1')
            .set(BaseTheme_1.BaseTheme.Button.inverseBtnPrimaryTextColor, '#EEEEEE')
            .set(BaseTheme_1.BaseTheme.Button.btnHighlightTextColor, '#FFFFFF')
            .set(BaseTheme_1.BaseTheme.Button.btnBorderRadius, 40 * _sr)
            .set(BaseTheme_1.BaseTheme.Button.btnPadding, 55 * _sr)
            .set(BaseTheme_1.BaseTheme.Font.main, 'SF Pro Text')
            .set(BaseTheme_1.BaseTheme.Text.textColor, '$Color.textColor')
            .set(BaseTheme_1.BaseTheme.Text.inversTextColor, '#FF3B2F')
            .set(BaseTheme_1.BaseTheme.Text.subTextColor, '#D1D1D6')
            .set(BaseTheme_1.BaseTheme.Text.linkColor, '#35708F')
            .set(BaseTheme_1.BaseTheme.Text.infoColor, '#EEEEEE')
            .set(BaseTheme_1.BaseTheme.Text.disabledColor, '#818186')
            .set(BaseTheme_1.BaseTheme.Text.h1Size, 55 * _sr)
            .set(BaseTheme_1.BaseTheme.Text.h2Size, 45 * _sr)
            .set(BaseTheme_1.BaseTheme.Text.h3Size, 35 * _sr)
            .set(BaseTheme_1.BaseTheme.Text.h4Size, 30 * _sr)
            .set(BaseTheme_1.BaseTheme.Text.pSize, 40 * _sr)
            .set(BaseTheme_1.BaseTheme.Text.numberUpColor, '#00FF40')
            .set(BaseTheme_1.BaseTheme.Text.numberDownColor, '$Color.highlight')
            .set(BaseTheme_1.BaseTheme.Page.titleColor, '#000000')
            .set(BaseTheme_1.BaseTheme.Page.titleSize, '$Text.h1Size')
            .set(BaseTheme_1.BaseTheme.Page.titleIconColor, '$Color.textColor')
            .set(BaseTheme_1.BaseTheme.Chart.redGradiantStart, '#000000')
            .set(BaseTheme_1.BaseTheme.Chart.redGradiantEnd, '#99221A')
            .set(BaseTheme_1.BaseTheme.Chart.greenGradiantStart, '#000000')
            .set(BaseTheme_1.BaseTheme.Chart.greenGradiantEnd, '#129996')
            .set(BaseTheme_1.BaseTheme.Input.inputBackground, '#1C1C1E')
            .set(BaseTheme_1.BaseTheme.Input.inputTextColor, '#FFFFFF')
            .set(BaseTheme_1.BaseTheme.Input.inputTextSize, 50 * _sr)
            .set(BaseTheme_1.BaseTheme.Input.inputLabelSize, 35 * _sr)
            .set(BaseTheme_1.BaseTheme.Input.inputLabelColor, '#D1D1D6')
            .set(BaseTheme_1.BaseTheme.Input.inputLargeLabelSize, 45 * _sr)
            .set(BaseTheme_1.BaseTheme.Input.inputLargeLabelColor, "$Color.textColor")
            .set(BaseTheme_1.BaseTheme.List.listItemPaddingTop, 30 * _sr)
            .set(BaseTheme_1.BaseTheme.List.listItemPaddingButtom, 30 * _sr)
            .set(BaseTheme_1.BaseTheme.List.listItemBorderColor, '#D1D1D6')
            .set(BaseTheme_1.BaseTheme.Icon.iconColor, '$Color.bkgShade4')
            .set(BaseTheme_1.BaseTheme.Icon.backgroundColor, '#1C1C1E')
            .set(BaseTheme_1.BaseTheme.Switch.thumbColor, '#D1D1D6')
            .set(BaseTheme_1.BaseTheme.Switch.backgroundColorFalse, '#111113')
            .set(BaseTheme_1.BaseTheme.Switch.backgroundColorTrue, '#1C1C1E')
            .set(BaseTheme_1.BaseTheme.Pin.keyboardBackground, '#1C1C1E')
            .set(BaseTheme_1.BaseTheme.Pin.keyboardTextColor, '#FFFFFF')
            .set(BaseTheme_1.BaseTheme.Pin.bubbleActive, '#FFFFFF')
            .set(BaseTheme_1.BaseTheme.Pin.bubbleInActive, '#1C1C1E')
            .set(BaseTheme_1.BaseTheme.Icon.iconBorderRadius, 5 * _sr)
            .set(BaseTheme_1.BaseTheme.Coin.iconBackground, '$Color.bkgShade2');
    };
    exports.WebdefaultLightThemeConstantsBuilder = (theme) => {
        return types_1.ConstantBuilder.builder()
            .set(BaseTheme_1.BaseTheme.Spaces.screenMarginHorizontal, 50 * _sr)
            .set(BaseTheme_1.BaseTheme.Spaces.screenMarginVertical, 30 * _sr)
            .set(BaseTheme_1.BaseTheme.Spaces.gap, 60 * _sr)
            .set(BaseTheme_1.BaseTheme.Spaces.line, 30 * _sr)
            .set(BaseTheme_1.BaseTheme.Colors.bkgShade0, theme.palette.white)
            .set(BaseTheme_1.BaseTheme.Colors.bkgShade1, '#f2f2f2333')
            .set(BaseTheme_1.BaseTheme.Colors.bkgShade2, '#e3e3e3')
            .set(BaseTheme_1.BaseTheme.Colors.bkgShade3, '#c3c3c3')
            .set(BaseTheme_1.BaseTheme.Colors.bkgShade4, '#474646')
            .set(BaseTheme_1.BaseTheme.Logo.logo, theme.palette.logoUrl)
            .set(BaseTheme_1.BaseTheme.Colors.themeNavBkg, theme.palette.themeNavLight)
            .set(BaseTheme_1.BaseTheme.List.listItemBorderColor, '#D1D1D6')
            .set(BaseTheme_1.BaseTheme.Switch.thumbColor, '#f2f2f2')
            .set(BaseTheme_1.BaseTheme.Switch.backgroundColorFalse, '#FAFAFA')
            .set(BaseTheme_1.BaseTheme.Switch.backgroundColorTrue, '#26C97A')
            .set(BaseTheme_1.BaseTheme.Colors.textColor, theme.palette.themeLight)
            .set(BaseTheme_1.BaseTheme.Colors.highlight, '#DD1155')
            .set(BaseTheme_1.BaseTheme.Colors.splash, '#26c97a')
            .set(BaseTheme_1.BaseTheme.Button.btnPrimary, theme.palette.white)
            .set(BaseTheme_1.BaseTheme.Button.inverseBtnPrimary, '#FAFAF1')
            .set(BaseTheme_1.BaseTheme.Button.btnHighlight, '#DD1155')
            .set(BaseTheme_1.BaseTheme.Button.btnPrimaryTextColor, '$Color.bkgShade1')
            .set(BaseTheme_1.BaseTheme.Button.inverseBtnPrimaryTextColor, '#AAAAAA')
            .set(BaseTheme_1.BaseTheme.Button.btnHighlightTextColor, '#FFFFFF')
            .set(BaseTheme_1.BaseTheme.Button.btnBorderRadius, 40 * _sr)
            .set(BaseTheme_1.BaseTheme.Button.btnPadding, 55 * _sr)
            .set(BaseTheme_1.BaseTheme.Font.main, 'SF Pro Text')
            .set(BaseTheme_1.BaseTheme.Text.textColor, '$Color.textColor')
            .set(BaseTheme_1.BaseTheme.Text.inversTextColor, '#212121')
            .set(BaseTheme_1.BaseTheme.Text.subTextColor, '#D1D1D6')
            .set(BaseTheme_1.BaseTheme.Text.linkColor, '#26C97A')
            .set(BaseTheme_1.BaseTheme.Text.infoColor, '#212121')
            .set(BaseTheme_1.BaseTheme.Text.disabledColor, '#818186')
            .set(BaseTheme_1.BaseTheme.Text.h1Size, 55 * _sr)
            .set(BaseTheme_1.BaseTheme.Text.h2Size, 45 * _sr)
            .set(BaseTheme_1.BaseTheme.Text.h3Size, 35 * _sr)
            .set(BaseTheme_1.BaseTheme.Text.h4Size, 30 * _sr)
            .set(BaseTheme_1.BaseTheme.Text.pSize, 40 * _sr)
            .set(BaseTheme_1.BaseTheme.Text.numberUpColor, '#00FF40')
            .set(BaseTheme_1.BaseTheme.Text.numberDownColor, '#FF3B2F')
            .set(BaseTheme_1.BaseTheme.Page.titleColor, '#26C97A')
            .set(BaseTheme_1.BaseTheme.Page.titleSize, '$Text.h1Size')
            .set(BaseTheme_1.BaseTheme.Page.titleIconColor, '$Color.textColor')
            .set(BaseTheme_1.BaseTheme.Chart.redGradiantStart, '#000000')
            .set(BaseTheme_1.BaseTheme.Chart.redGradiantEnd, '#FAFAFA')
            .set(BaseTheme_1.BaseTheme.Chart.greenGradiantStart, '#000000')
            .set(BaseTheme_1.BaseTheme.Chart.greenGradiantEnd, '#FF392C')
            .set(BaseTheme_1.BaseTheme.Input.inputBackground, '#26C97A')
            .set(BaseTheme_1.BaseTheme.Input.inputTextColor, '#FFFFFF')
            .set(BaseTheme_1.BaseTheme.Input.inputTextSize, 50 * _sr)
            .set(BaseTheme_1.BaseTheme.Input.inputLabelSize, 35 * _sr)
            .set(BaseTheme_1.BaseTheme.Input.inputLabelColor, '#D1D1D6')
            .set(BaseTheme_1.BaseTheme.Input.inputLargeLabelSize, 45 * _sr)
            .set(BaseTheme_1.BaseTheme.Input.inputLargeLabelColor, "$Color.textColor")
            .set(BaseTheme_1.BaseTheme.List.listItemPaddingTop, 30 * _sr)
            .set(BaseTheme_1.BaseTheme.List.listItemPaddingButtom, 30 * _sr)
            .set(BaseTheme_1.BaseTheme.Icon.iconColor, '$Button.btnPrimary')
            .set(BaseTheme_1.BaseTheme.Icon.backgroundColor, '#212121')
            .set(BaseTheme_1.BaseTheme.Pin.keyboardBackground, '#111113')
            .set(BaseTheme_1.BaseTheme.Pin.keyboardTextColor, '#FAFAFA')
            .set(BaseTheme_1.BaseTheme.Pin.bubbleActive, '#FFFFFF')
            .set(BaseTheme_1.BaseTheme.Pin.bubbleInActive, '#26C97A')
            .set(BaseTheme_1.BaseTheme.Icon.iconBorderRadius, 5 * _sr)
            .set(BaseTheme_1.BaseTheme.Coin.iconBackground, '$Color.bkgShade3');
    };
    exports.WebThemeContext = react_2.createContext(new types_1.WebThemeConstantProvider('desktop', exports.WebdefaultLightThemeConstantsBuilder(themeLoader_1.BuilderVariables).build()));
});
