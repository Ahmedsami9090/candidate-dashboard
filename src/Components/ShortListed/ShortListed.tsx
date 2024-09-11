import { useState } from 'react'
import DropZone from '../../DropZone'
import { candidate } from '../../candidate.type'
import DragItem from '../../DragItem'

export default function ShortListed() {
    const [droppedItem, setdroppedItem] = useState<candidate[]>([])
    const handleDrop = (item: candidate) => {
        setdroppedItem((prev) => [...prev, item])
    }

    return (
        <>
            <div className='md:w-1/3 w-full px-4 pb-4 bg-gray-200 h-[50vh] md:h-[100vh] overflow-y-scroll relative overflow-x-hidden'>
                <div className='border-b-4 border-green-400 py-6 sticky bg-gray-200 top-0 z-50'>
                    <div className='flex justify-between'>
                        <div className=''>
                            <input type="checkbox" name="applied" id="applied" disabled />
                            <label className='ms-2 font-semibold' htmlFor="applied">ShortListed</label>
                        </div>
                        <button><i className='fa-solid fa-bars'></i></button>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <h2 className='text-4xl font-semibold'>3</h2>
                            <h2 className='ms-3 text-gray-400 font-semibold'>REJECTED</h2>
                        </div>
                        <DropZone onDrop={handleDrop} />
                        <div className='flex items-center'>
                            <h2 className='text-4xl font-semibold'>{droppedItem?.length}</h2>
                            <h2 className='ms-3 text-gray-400 font-semibold'>TOTAL</h2>
                        </div>
                    </div>
                </div>
                {droppedItem?.map((cand) => <DragItem key={cand.name} name={cand} />)}
            </div>
        </>
    )
}
