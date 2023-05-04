import { Button, Card, Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Chef = ({ chef , loading}) => {
    const { id, image, experience, likes, name, recipes } = chef;

    const [like, setLike] = useState(likes)
    const [isLike, setIsLike] = useState(false)
    const handleLikeButton = () => {
        setLike (like + (isLike? -1 : 1 ));
        setIsLike (!isLike)
    }
    console.log(chef)

    if (loading) {
        return <div className='flex justify-center items-center'>
            <Button className=''>
                <Spinner aria-label="Spinner button example" />
                <span className="pl-3">
                    Loading...
                </span>
            </Button>
        </div>
    }

    return (
        <div className='col-span-1'>
            <div className="max-w-sm">
                <Card className='text-center'>
                    <img src={image} alt="" className='h-[500px] w-[900px] object-cover rounded-md' />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <hr />
                    <div>
                        <p>Experience: {experience} years</p>
                        <p>Total Recipes: {recipes}</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <FaHeart className={`text-[20px] ${isLike? "text-[#dc2626]":"text-[#d1d5db]"}`} onClick={handleLikeButton}></FaHeart>
                        <span>{like}</span>
                    </div>
                
                    <Link to={`/recipes/${id}`}><button className='bg-[#f59e0b] px-5 py-3  rounded-full font-bold text-white'>View Recipes</button></Link>

                </Card>
            </div>
        </div>
    );
};

export default Chef;