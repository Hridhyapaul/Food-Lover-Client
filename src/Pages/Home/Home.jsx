import React from 'react';
import OurStory from '../../SubComponent/OurStory/OurStory';
import BestChef from '../../SubComponent/BestChef/BestChef';

const Home = () => {
    return (
        <div>
            <div>
                <OurStory></OurStory>
            </div>
            <div>
                <BestChef></BestChef>
            </div>
        </div>
    );
};

export default Home;