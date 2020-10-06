import React, {useContext} from 'react';
import {ThemeContext as WebThemeContext} from 'unifyre-react-helper';

export function DesktopPage({children,NavBar,Footer}) {
    const theme = useContext(WebThemeContext);
    const styles = themedStyles(theme);
    return (
    <div style={{...styles.fullScreen, ...styles.smallGap}}>
        <div style={styles.navbarContainer}>
            {NavBar}
        </div>
        <div style={{...styles.fullScreen, ...styles.innerContainer}}>
            {children}
        </div>
        <div style={styles.footer}>
            {Footer}
        </div>
    </div>
    );
}

const themedStyles = theme => ({
    footer: {
        position: 'relative',
        backgroundColor: 'white',
        bottom: '0',
        width: '100%'
    },
    navbarContainer:{
        backgroundColor: 'white',
        color: 'white',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        zindex: 1
    },
    innerContainer: {
        minWidth: '50%',
        margin: '0px auto',
        marginTop: '3%',
        position: 'relative',
        minHeight: window.innerHeight,
    },
    fullScreen: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: window.innerHeight,
        backgroundColor: theme.backgroundColor,
    },
    smallGap: {
    }
});