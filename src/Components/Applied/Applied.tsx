// import faceImg from '../../assets/face.png'
import DragItem from '../../DragItem'
import { candidates } from '../../candidates'

export default function Applied() {
    

    return (
        <div className='md:w-1/3 w-full px-4 pb-4 bg-gray-200 h-[50vh] md:h-[100vh] overflow-y-scroll'>
            <div className='border-b-4 border-blue-400 py-6 bg-gray-200 sticky top-0 z-50'>
                <div className='flex justify-between'>
                    <div className=''>
                        <input type="checkbox" name="applied" id="applied" disabled />
                        <label className='ms-2 font-semibold' htmlFor="applied">Applied</label>
                    </div>
                    <button className='bg-blue-200 text-blue-500 rounded-md px-2'><i className='fa-solid fa-plus me-3'></i>Add Applicants</button>
                    <button><i className='fa-solid fa-bars'></i></button>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <h2 className='text-4xl font-semibold'>8</h2>
                        <h2 className='ms-3 text-gray-400 font-semibold'>REJECTED</h2>
                    </div>
                    <div className='flex items-center'>
                        <h2 className='text-4xl font-semibold'>{candidates?.length}</h2>
                        <h2 className='ms-3 text-gray-400 font-semibold'>TOTAL</h2>
                    </div>
                </div>
            </div>
            {candidates?.map((detail) => <DragItem key={detail.name} name={detail} />)}
        </div>

    )
}
