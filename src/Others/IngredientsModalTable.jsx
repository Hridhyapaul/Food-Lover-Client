import { Table } from 'flowbite-react';
import React from 'react';

const IngredientsModalTable = ({ingredient}) => {
    return (
        <div className='col-span-1'>
            <Table hoverable={true}>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {ingredient}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
};

export default IngredientsModalTable;