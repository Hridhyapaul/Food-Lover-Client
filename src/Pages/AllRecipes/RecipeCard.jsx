import { Badge, Card } from 'flowbite-react';
import React, { useState } from 'react';
import IngredientsModal from '../../Others/IngredientsModal';
import IngredientsModalTable from '../../Others/IngredientsModalTable';
import ReactStars from 'react-rating-stars-component';
import { ToastContainer, toast } from 'react-toastify';

const RecipeCard = ({ item }) => {
    console.log(item)
    const { image, ingredients, method, name, price, rating } = item;

    const [favorite, setFavorite] = useState('')
    const [isDisable, setIsDisable] = useState(false)

    const [ingredientModal, setIngredientShowModal] = useState(false)
    const [methodModal, setMethodModal] = useState(false)

    const firstExample = {
        size: 30,
        value: rating.number,
        edit: false
    };

    const handleFavorite = () => {
        setFavorite(toast("Wow so easy!"))
        setIsDisable(true)
    }

    return (
        <div className='col-span-1'>
            <div className="max-w-xl">
                <Card>
                    <div className='flex justify-center items-center gap-8'>
                        <div className='w-[48%]'>
                            <img src={image} alt="" className='h-[300px] w-[300px] object-cover rounded' />
                        </div>
                        <div className='w-[48%] space-y-6'>
                            <div>
                                <button className='bg-[#2563eb] px-3 py-1 rounded text-[white]'  onClick={handleFavorite}>Favorite</button>
                                
                            </div>
                            <div>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {name}
                                </h5>

                                <div className='flex justify-between items-center'>
                                    <ReactStars {...firstExample} />

                                    <Badge
                                        color="success"
                                        size="lg"
                                    >
                                        {rating.badge}
                                    </Badge>
                                </div>
                                <div>
                                    <h2 className='text-xl font-semibold'>${price}</h2>
                                </div>
                            </div>
                            <div className='flex justify-between items-center gap-2'>
                                <div>
                                    <button className='bg-[#64748b] px-3 py-2 rounded-full font-bold mt-6 text-white ' onClick={() => setIngredientShowModal(true)}>Ingredients</button>

                                    <IngredientsModal isVisible={ingredientModal} onClose={() => setIngredientShowModal(false)} >
                                        <h2 className='text-2xl font-semibold text-center'>Ingredients of {name}</h2>
                                        <hr className='my-4' />
                                        <div className='grid grid-cols-2'>
                                            {
                                                ingredients.map((ingredient, index) => <IngredientsModalTable key={index} ingredient={ingredient}></IngredientsModalTable>)
                                            }
                                        </div>
                                    </IngredientsModal>
                                </div>

                                <div className='w-full'>
                                    <button className='bg-[#64748b] px-3 py-2 rounded-full font-bold mt-6 text-white ' onClick={() => setMethodModal(true)}>How to Make</button>

                                    <IngredientsModal isVisible={methodModal} onClose={() => setMethodModal(false)} >
                                        <h2 className='text-2xl font-semibold text-center'>Cooking Method of {name}</h2>
                                        <hr className='my-4' />
                                        <div>
                                            {method}
                                        </div>
                                    </IngredientsModal>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default RecipeCard;