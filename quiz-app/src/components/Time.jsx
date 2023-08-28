import React, { useEffect } from "react";

export default function Time({ dispatch, secondRemaining }) {
  const mins = Math.floor(secondRemaining / 60);
  const secs = secondRemaining % 60;
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="bg-gray-700 px-4 py-2 rounded-full text-white">
        {mins}:{secs < 10 ? `0${secs}` : secs}
      </div>
    </div>
  );
}
