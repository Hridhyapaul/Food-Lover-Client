import React from 'react';

const HowToMakeModal = () => {
    return (
            <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                <div className='w-[700px] flex flex-col'>
                    <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
                    <div className='bg-white p-8 rounded'>
                        <h2 className='text-2xl font-semibold text-center'>Ingredients of {name}</h2>
                        <hr className='my-4' />
                        <div className='grid grid-cols-2'>

                            {
                                ingredients.map((ingredient, index) => <IngredientsModalTable ingredient={ingredient}></IngredientsModalTable>)
                            }

                        </div>

                    </div>
                </div>
            </div>
    );
};

export default HowToMakeModal;