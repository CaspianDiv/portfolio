import { cn } from "../utils/helpers";

export const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "animate-shimmer rounded-md bg-gradient-to-r from-secondary via-secondary/50 to-secondary bg-[length:1000px_100%]",
        className
      )}
      {...props}
    />
  );
};

export const SkeletonCard = () => {
  return (
    <div className="rounded-xl border border-border bg-background p-6 space-y-4">
      <Skeleton className="h-48 w-full rounded-lg" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
    </div>
  );
};
