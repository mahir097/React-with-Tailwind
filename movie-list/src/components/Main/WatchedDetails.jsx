import React from "react";

export default function WatchedDetails({ watched }) {
  console.log(watched);
  return (
    <div className="mt-9 mb-3 rounded-md bg-gray-300">
      Watched {watched.length} movies
    </div>
  );
}
