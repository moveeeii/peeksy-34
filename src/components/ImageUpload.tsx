
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  onImagesAdded: (images: string[]) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImagesAdded }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    
    Promise.all(
      acceptedFiles.map((file) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => {
            if (typeof reader.result === 'string') {
              resolve(reader.result);
            }
          };
          reader.readAsDataURL(file);
        });
      })
    ).then((results) => {
      onImagesAdded(results);
      // Toast notification for uploads removed
    });
  }, [onImagesAdded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': []
    }
  });

  return (
    <div className="mb-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300 hover:border-primary'}`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          {isDragActive
            ? "drop the images here..."
            : "drag 'n' drop images here, or click to select files"}
        </p>
        <Button variant="outline" className="mt-4">
          select images
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
