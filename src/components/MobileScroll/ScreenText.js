import React from 'react';

const ScreenText = (screen, setCurrentImg, i) => {
    return <div className='screen-text'>
        <div className='screen-heading'>
            {screen.heading}
        </div>
        <div className='mobile-mockup-wrapper only-mobile'>
            <div className='mobile-mockup'>
                <div className='mobile-mockup-screen flex absolute-center'>
                    <img src={screen.mobile_img} className='mobile-screen-img' alt="screen" />
                </div>
            </div>
        </div>
        <div className='screen-description'>
            {screen.description}
        </div>
    </div>;
};

export default ScreenText;
