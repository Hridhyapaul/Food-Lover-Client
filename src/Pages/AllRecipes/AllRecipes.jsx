import { Card } from 'flowbite-react';
import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const AllRecipes = () => {
    const recipe = useLoaderData();
    console.log(recipe)
    const { bio, image, name, menu, experience, id, likes, recipes } = recipe;
    const [like, setLike] = useState(likes)
    const [isLike, setIsLike] = useState(false)
    const handleLikeButton = () => {
        setLike(like + (isLike ? -1 : 1));
        setIsLike(!isLike)
    }
    return (
        <div className='container mx-auto px-[60px] mt-16'>
            <h2 className='text-5xl font-bold text-center'>About <span className='text-[#f59e0b]'>{name}</span></h2>
            <Card className='p-0 gap-0 mt-10'>
                <div className='px-10 pt-4'>
                    <div className='flex justify-between items-center'>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                        <div className='flex justify-center items-center gap-2'>
                            <FaHeart className={`text-[20px] ${isLike ? "text-[#dc2626]" : "text-[#d1d5db]"}`} onClick={handleLikeButton}></FaHeart>
                            <span>{like}</span>
                        </div>
                    </div>
                    <hr className='my-6'/>
                    <div className='flex justify-between items-start gap-8 mt-5'>
                        <div className='w-[48%]'>
                            <img src={image} alt="" className='h-[500px] w-[900px] object-contain' />
                        </div>
                        <div className='w-[48%]'>
                            <p className="font-normal text-gray-700 dark:text-gray-400 text-lg">
                                {bio}
                            </p>
                            <div className='mt-5 text-lg space-y-2'>
                                <p><span className='font-semibold'>Experience:</span> {experience} years</p>
                                <p><span className='font-semibold'>Recipes:</span> {recipes} items</p>
                            </div>
                            <div>
                                <button className='bg-[#f59e0b] px-5 py-3 rounded-full font-bold mt-6 text-white'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            <h2 className='text-5xl font-bold text-center mt-16'>Best Recipes of <span className='text-[#f59e0b]'>{name}</span></h2>

            <div className='grid grid-cols-2 gap-6 mt-16'>
                {
                    menu.map((item, index) => <RecipeCard key={index} item={item}></RecipeCard>)
                }
            </div>
        </div>

    );
};

export default AllRecipes;