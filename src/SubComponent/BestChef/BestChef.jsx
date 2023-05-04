import React, { useEffect, useState } from 'react';
import Chef from './Chef';
import { Button, Spinner } from 'flowbite-react';

const BestChef = () => {
    const [loading, setLoading] = useState(true)
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('https://food-lover-xi.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            setLoading(false)
    }, [])
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
        <div className='container mx-auto px-[80px] mt-16 mb-16'>
            <h3 className='text-[#f59e0b] text-2xl font-bold text-center'>Chef Team</h3>
            <h1 className='text-5xl font-bold text-center'>Best Chefs for You</h1>
            <div className='grid grid-cols-3 gap-5 mt-8'>
                {
                    chefs.map(chef => <Chef key={chef.id} chef={chef} loading={loading}></Chef>)
                }
            </div>
        </div>
    );
};

export default BestChef;