import React from 'react'
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';

const Other = () => {
    return (
        <div className="container other">
            <h1>How it Works?</h1>
            <div className="other__stuff">
                <div>
                    <PhonelinkRingIcon style={{ color: '#be057e' }} />
                    <p>Send your Request</p>
                </div>

                <div>
                    <DesktopWindowsIcon style={{ color: '#be057e' }} />
                    <p>Get Special Video Message</p>
                </div>

                <div>
                    <ScreenShareIcon style={{ color: '#be057e' }} />
                    <p>Share With Family and Friends</p>
                </div>
            </div>
        </div>
    )
}

export default Other;
