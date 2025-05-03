
import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useTheme } from 'next-themes';

interface ImageGridProps {
  images: string[];
  onReorder: (newOrder: string[]) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onReorder }) => {
  const { theme } = useTheme();
  
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
            className={`grid grid-cols-3 gap-[1px] mt-3 ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'}`}
          >
            {images.map((image, index) => (
              <Draggable key={`image-${index}`} draggableId={`image-${index}`} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`aspect-[3/4] ${snapshot.isDragging ? "opacity-50" : ""} w-full`}
                  >
                    <img 
                      src={image} 
                      alt={`Grid item ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            {images.length === 0 && (
              <div className={`col-span-3 flex justify-center items-center h-48 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Tagged photos will appear here
              </div>
            )}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ImageGrid;
