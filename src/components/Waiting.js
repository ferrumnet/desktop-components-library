import React, {useContext} from 'react';
import { Hourglass } from 'react-spinners-css';
import { ThemedText } from './ThemedText';
import { Gap, Row } from './Layouts';
import {ThemeContext, Theme} from 'unifyre-react-helper';

export function Waiting({show, message}) {
    const theme = useContext(ThemeContext);
    const styles = themedStyles(theme);
    if (!show) {
        return (<div />);
    }
    const messageComp = message ? (
        <>
        <Row withPadding centered>
            <div style={{textAlign: 'center'}}>
            <ThemedText.H3>{message}</ThemedText.H3>
            </div>
        </Row>
        </>
    ) : undefined;
    return (
        <div style={styles.FullScreen}>
            <div style={styles.subContainer}>
                {messageComp}
                <Gap />
                <Hourglass color={theme.get(Theme.Colors.bkgShade3)} />
            </div>
        </div>
    )
}

const themedStyles = theme => ({
    FullScreen: {
        opacity: '0.5',
        background: '#000', 
        width: '100%',
        height: '100%', 
        top: '0',
        left: '0', 
        position: 'fixed', 
    },
    subContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: theme.get(Theme.Colors.bkgShade0).substr(0, 7) + 'CC',
    }
});