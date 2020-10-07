import React, {useContext} from 'react';
import {ThemeContext, Theme} from 'unifyre-react-helper';
import './DesktopPage.css';

export function DesktopPage({children,NavBar,Footer}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    return (
    <div className="full-screen-page" style={{...styles.fullScreen}}>
        <div className="nav-bar-container" >
            {NavBar}
        </div>
        <div className="full-screen-page contents-container page-container">
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
    fullScreen: {
        minHeight: window.innerHeight,
        backgroundColor: theme.get(Theme.Colors.bkgShade0)
    },
    smallGap: {
    }
});