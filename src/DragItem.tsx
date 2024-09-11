//DragItem.js

import React from 'react';
import { useDrag } from 'react-dnd';
import { candidate } from './candidate.type';
type DragItemProps = {
    name: candidate
}

const DragItem: React.FC<DragItemProps> = ({ name }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'item',
        item:  name ,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <>
            <div ref={drag} style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
            }}>
                <div key={name.name} className='flex border-b-2 mt-2 py-3 bg-white px-3 rounded-lg relative'>
                    {name.isNew && <div className='absolute w-fit px-2 bg-gray-200 bottom-2 right-2 rounded-lg'>New</div>}
                    {name.isFollowed && <div className='absolute w-fit px-2 bg-blue-500 text-white bottom-2 right-2 rounded-lg'>Followed</div>}
                    <div className='w-1/2'>
                        <div className='w-1/2'>
                            <img src={name.profileImage} className='w-full rounded-md' alt="face image" />
                        </div>
                        <div className='bg-gray-200 w-1/2 p-2 text-center mt-2 rounded-md'>
                            <h3 className='font-bold'>{name.rating}<i className='fa-solid fa-star text-yellow-500 ms-2'></i></h3>
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-start gap-4 relative'>
                        <h3 className='font-bold'><i className='fa-solid fa-signal me-2'></i>{name.name}</h3>
                        <h3 className='text-gray-400 font-semibold'>{name.address}</h3>
                        <h3 className='text-gray-400 font-semibold'>{name.phone}</h3>
                    </div>
                </div>
            </div>
        </>
    )
};

export default DragItem;
