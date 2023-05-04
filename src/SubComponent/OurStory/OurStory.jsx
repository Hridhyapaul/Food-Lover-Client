import React from 'react';
import storyImage from '../../../public/Images/Story.jpg'

const OurStory = () => {
    return (
        <div className='px-[80px] container mx-auto mt-16'>
            <div className='flex justify-between items-start w-full'>

                {/* Our Story section title */}

                <div className='w-[45%]'>
                    <h3 className='text-[#f59e0b] text-2xl font-bold'>Our Story</h3>
                    <h1 className='text-5xl font-bold'>Who We Are</h1>
                    <hr className='border-[#f59e0b] border-[1.5px] mt-5 mb-5'/>

                    {/* Our story section details */}

                    <p>
                        Food is such an important part of our lives; it brings friends and family together and creates memories and traditions. Although as generations go on and schedules get busier meals become more of a quick easy fix and we start to forget where the food on our plates really comes from. The food we eat is a gift from our earth, created by its elements and nurtured by our farmers. <br /> <br />

                        The meat we eat is a sacrifice of life that deserves our respect and acknowledgment. The values most important to us, and what we want to teach and inspire others, is the impact and importance that seasons have on our food, knowing the origin of our food and the process to which it comes to our plate. <br /> <br />

                        We are traveling Indian fishing, foraging and hunting where possible, and where not possible, we will be out meeting our small-town farmers to be inspired by their passion, ideologies and fresh produce. As we travel and explore Australia, we will be lighting up our Campfire along the way and showing you how all the meals that we love and enjoy at home can be easily replicated in our backyard. <br /> <br />

                        We are food lover, and we look forward to sharing our adventure with you.
                    </p>

                    <button className='bg-[#f59e0b] px-5 py-3 rounded-full font-bold mt-6 text-white'>Book Now</button>
                </div>

                {/* Our story section image */}

                <div className='w-[45%]'>
                    <img src={storyImage} alt="" className='rounded-xl'/>
                </div>
            </div>
        </div>
    );
};

export default OurStory;