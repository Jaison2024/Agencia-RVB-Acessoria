import { useReadingProgress } from "@/hooks/useReadingProgress";

const ReadingProgressBar = () => {
  const progress = useReadingProgress();

  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
      <div
        className="h-full bg-primary transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgressBar;
