import React from 'react';
import './StoryReel.css';
import Story from './Story';
import arjun from './images/arjun.PNG';
import drone from './images/drone.jpg';
import earth from './images/earth.jpg';
import forest from './images/forest.jpg';
import sith from './images/sith.jpg';
import camel from './images/camel.jpg';
import lion from './images/lionn.jpg';
import bmw from './images/bmw.jpg';
import peacock from './images/peacock.jpg';
import deer from './images/deerGraphic.jpg';

function StoryReel() {
    return (<div className='storyReel'>
        <Story
            image={drone}
            profileSrc={arjun}
            title='Arjun Myanger'
        />
        <Story
            image={earth}
            profileSrc={lion}
            title='Nadai Sarai'
        />
        <Story
            image={forest}
            profileSrc={bmw}
            title='Nikola Tesla'
        />
        <Story
            image={sith}
            profileSrc={peacock}
            title='Clark Kent'
        />
        <Story
            image={camel}
            profileSrc={deer}
            title='Bruce Wayne'
        />
    </div>
    )
}

export default StoryReel;
