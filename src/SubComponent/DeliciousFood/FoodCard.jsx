import { Card } from 'flowbite-react';
import React from 'react';

const FoodCard = ({ food, loading }) => {
    const { name, image } = food
    console.log(food)

    // Apply loading.....
    
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
            <div className="col-span-1">
                <Card className=''>
                    <img src={image} alt="" className='w-100 h-[200px] object-cover rounded-md' />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center h-12">
                        {name}
                    </h5>
                </Card>
            </div>
        </div>
    );
};

export default FoodCard;