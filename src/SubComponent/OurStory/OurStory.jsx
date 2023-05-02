import React from 'react';
import storyImage from '../../../public/Images/Story.jpg'

const OurStory = () => {
    return (
        <div className='px-[80px] container mx-auto'>
            <div className='flex justify-between items-center w-full'>
                <div className='w-[45%]'>
                    <h3 className='text-[#f59e0b] text-2xl font-bold'>Our Story</h3>
                    <h1 className='text-5xl font-bold'>Who We Are</h1>
                    <hr />
                    <p>
                        Food is such an important part of our lives; it brings friends and family together and creates memories and traditions. Although as generations go on and schedules get busier meals become more of a quick easy fix and we start to forget where the food on our plates really comes from. <br /> <br />

                        The food we eat is a gift from our earth, created by its elements and nurtured by our farmers. <br /> <br />

                        The meat we eat is a sacrifice of life that deserves our respect and acknowledgment. <br /><br />

                        The values most important to us, and what we want to teach and inspire others, is the impact and importance that seasons have on our food, knowing the origin of our food and the process to which it comes to our plate. <br /><br />

                        We are traveling Indian fishing, foraging and hunting where possible, and where not possible, we will be out meeting our small-town farmers to be inspired by their passion, ideologies and fresh produce. <br /><br />

                        As we travel and explore Australia, we will be lighting up our Campfire along the way and showing you how all the meals that we love and enjoy at home can be easily replicated in our backyard. <br /> <br />

                        We are Roxie & Mark, and we look forward to sharing our adventure with you.
                    </p>
                </div>
                <div className='w-[45%]'>
                    <img src={storyImage} alt="" />
                </div>
            </div>

        </div>
    );
};

export default OurStory;