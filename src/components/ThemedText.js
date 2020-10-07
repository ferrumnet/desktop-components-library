
import React, {useContext} from 'react';
import {ThemeContext, Theme} from 'unifyre-react-helper';

export class ThemedText {
    static H1({style, children}) {
        return ThemedText.text({children, style}, s => s.h1);
    }

    static H2({style, children}) {
        return ThemedText.text({children, style}, s => s.h2);
    }

    static H3({style, children}) {
        return ThemedText.text({children, style}, s => s.h3);
    }

    static H4({style, children}) {
        return ThemedText.text({children, style}, s => s.h4);
    }

    static P({style, children}) {
        return ThemedText.text({children, style}, s => s.p);
    }

    static MONO({style, children}) {
        return ThemedText.text({children, style}, s => s.mono);
    }

    static SMALL({style, children }) {
        return ThemedText.text({children, style}, s => s.small);
    }

    static text({children, style}, styleSelector) {
        const theme = useContext(ThemeContext);
        const styles = themedStyles(theme);

        return (
            <span style={{...styles.commonText, ...styleSelector(styles), ...(style || {})}}
            >{children}</span>
        );
    }
}


const W = {};

export function widthFactor() {
    return 1;
}

const themedStyles = theme => ({
    commonText: {
        fontFamily: theme.get(Theme.Font.main),
        color: theme.get(Theme.Colors.textColor),
    },
    h1: {
        fontSize: theme.get(Theme.Text.h1Size),
    },
    h2: {
        fontSize: theme.get(Theme.Text.h2Size),
    },
    h3: {
        fontSize: theme.get(Theme.Text.h3Size),
    },
    h4: {
        fontSize: theme.get(Theme.Text.h4Size),
    },
    p: {
        fontSize: theme.get(Theme.Text.pSize),
    },
    small: {
        fontSize: theme.get(Theme.Text.h3Size),
    },
    mono: {
        fontFamily: 'Courier, monospace',
        fontSize: theme.get(Theme.Text.h3Size),
    }
});

