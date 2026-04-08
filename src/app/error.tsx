"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <h2 className="text-2xl font-bold mb-4 text-brand-dark">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-brand-accent text-white rounded-full hover:bg-brand-dark transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
