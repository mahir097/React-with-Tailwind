import React from "react";

export default function WatchedList({
  watched,
  setSelectedId,
  onRemoveWatched,
}) {
  return (
    <div>
      {watched.map((movie) => {
        const { imdbID, Title, Year, Poster } = movie;
        return (
          <div
            key={imdbID}
            className=" flex items-center justify-between bg-gray-500  border-b hover:bg-gray-600 transition-all cursor-pointer px-5 rounded-xl mb-1 py-1"
          >
            <div
              className="flex flex-1 items-center "
              onClick={() => setSelectedId(imdbID)}
            >
              <img src={Poster} alt={Title} className="w-10 " />
              <div className="mx-auto text-center  ">
                <p className="text-gray-200 font-bold text-xs px-2">{Title}</p>
                <p className="text-gray-200 text-xs">{Year}</p>
              </div>
            </div>

            <div className="flex items-center">
              <button
                onClick={() => onRemoveWatched(imdbID)}
                className="relative bg-red-500 hover:bg-red-600 transition-all text-white px-3 py-2  rounded-md -mr-3"
              >
                <span className="absolute pb-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  x
                </span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
