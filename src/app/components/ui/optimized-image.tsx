import { useState } from "react";
import { cn } from "./utils";
import { Skeleton } from "./skeleton";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
  containerClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallbackClassName,
  containerClassName,
  loading = "lazy",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {!isLoaded && !hasError && (
        <Skeleton className={cn("absolute inset-0 z-10 w-full h-full", fallbackClassName)} />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={cn(
          "transition-opacity duration-500",
          !isLoaded ? "opacity-0" : "opacity-100",
          className
        )}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
        {...props}
      />
    </div>
  );
}

