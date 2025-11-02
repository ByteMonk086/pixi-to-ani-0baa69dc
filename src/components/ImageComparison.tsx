import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageComparisonProps {
  originalImage: string;
  animeImage: string | null;
}

const ImageComparison = ({ originalImage, animeImage }: ImageComparisonProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Original Image */}
      <Card className="overflow-hidden bg-card/50 backdrop-blur border-primary/20 shadow-xl">
        <div className="p-4 bg-gradient-to-r from-muted/50 to-muted/30 border-b border-primary/10">
          <h3 className="font-semibold text-lg text-center">Original Photo</h3>
        </div>
        <div className="relative aspect-square">
          <img
            src={originalImage}
            alt="Original"
            className="w-full h-full object-cover"
          />
        </div>
      </Card>

      {/* Anime Image or Loading State */}
      <Card className="overflow-hidden bg-card/50 backdrop-blur border-primary/20 shadow-xl">
        <div className="p-4 bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-primary/20">
          <h3 className="font-semibold text-lg text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Anime Style ✨
          </h3>
        </div>
        <div className="relative aspect-square">
          {animeImage ? (
            <img
              src={animeImage}
              alt="Anime Style"
              className="w-full h-full object-cover animate-in fade-in duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="text-center space-y-4 p-8">
                <Skeleton className="w-full h-full absolute inset-0" />
                <div className="relative z-10">
                  <p className="text-muted-foreground text-lg">
                    Click "Convert" to see the magic ✨
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ImageComparison;
