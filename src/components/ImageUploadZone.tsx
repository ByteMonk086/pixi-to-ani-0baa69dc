import { useCallback } from "react";
import { Upload, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";

interface ImageUploadZoneProps {
  onImageUpload: (file: File) => void;
}

const ImageUploadZone = ({ onImageUpload }: ImageUploadZoneProps) => {
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    
    if (file && file.type.startsWith('image/')) {
      onImageUpload(file);
    } else {
      toast.error("Please upload a valid image file");
    }
  }, [onImageUpload]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      if (file.type.startsWith('image/')) {
        onImageUpload(file);
      } else {
        toast.error("Please upload a valid image file");
      }
    }
  }, [onImageUpload]);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="relative group"
    >
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleFileInput}
        className="hidden"
      />
      
      <label
        htmlFor="image-upload"
        className="flex flex-col items-center justify-center min-h-[400px] cursor-pointer
                   border-4 border-dashed border-primary/30 rounded-2xl
                   hover:border-primary/60 transition-all duration-300
                   bg-gradient-to-br from-primary/5 to-secondary/5
                   hover:from-primary/10 hover:to-secondary/10
                   group-hover:scale-[1.02]"
      >
        <div className="flex flex-col items-center gap-6 p-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative bg-gradient-to-br from-primary to-secondary p-6 rounded-full">
              <Upload className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-foreground">
              Upload Your Image
            </h3>
            <p className="text-muted-foreground">
              Drag & drop or click to select
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              <span>JPG, PNG, WEBP</span>
            </div>
          </div>

          <div className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg group-hover:shadow-xl transition-shadow">
            Choose File
          </div>
        </div>
      </label>
    </div>
  );
};

export default ImageUploadZone;
