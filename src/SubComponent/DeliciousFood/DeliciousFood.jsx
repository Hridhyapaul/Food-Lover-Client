import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import { Button, Spinner } from 'flowbite-react';

const DeliciousFood = () => {
    const [loading, setLoading] = useState(true)
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://food-lover-xi.vercel.app/food')
            .then(res => res.json())
            .then(data => setFoods(data))
            setLoading(false)
    }, [])

    // Apply Loading....

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
        <div>

            {/* Apply delicious food section title */}

            <h3 className='text-[#f59e0b] text-2xl font-bold text-center'>Food for You</h3>
            <h1 className='text-5xl font-bold text-center'>Delicious Food</h1>

            {/* Data mapping for delicious food section */}

            <div className='grid grid-cols-4 gap-4 container mx-auto px-[80px] mb-16 mt-10'>
                {
                    foods.map(food => <FoodCard key={food.id} food={food} loading={loading}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default DeliciousFood;