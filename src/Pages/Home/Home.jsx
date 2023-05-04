import React from 'react';
import OurStory from '../../SubComponent/OurStory/OurStory';
import BestChef from '../../SubComponent/BestChef/BestChef';
import DeliciousFood from '../../SubComponent/DeliciousFood/DeliciousFood';

const Home = () => {
    return (
        <div>
            <div>
                <OurStory></OurStory>
            </div>
            <div>
                <BestChef></BestChef>
            </div>
            <div>
                <DeliciousFood></DeliciousFood>
            </div>
        </div>
    );
};

export default Home;