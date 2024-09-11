import React from 'react';
import { useDrop } from 'react-dnd';
type DropZoneProps = {
    onDrop : any
}

const DropZone : React.FC<DropZoneProps>= ({ onDrop }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'item',
        drop: (item) => onDrop(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <div
            ref={drop}
            style={{
                border: `1px dashed ${isOver ? 'green' : 'black'}`,
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: '600',
            }}>
                Drop here
        </div>
    );
};

export default DropZone;
