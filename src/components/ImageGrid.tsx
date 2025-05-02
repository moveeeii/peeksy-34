
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface ImageGridProps {
  images: string[];
  onReorder: (newOrder: string[]) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onReorder }) => {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    
    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    onReorder(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="instagram-grid" direction="horizontal">
        {(provided) => (
          <div 
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="instagram-grid"
          >
            {images.map((image, index) => (
              <Draggable key={`image-${index}`} draggableId={`image-${index}`} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`instagram-grid-item ${snapshot.isDragging ? "opacity-50" : ""}`}
                  >
                    <img src={image} alt={`Grid item ${index + 1}`} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            {images.length === 0 && (
              <div className="col-span-3 flex justify-center items-center h-48 text-gray-500">
                Upload images to see your grid
              </div>
            )}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ImageGrid;
