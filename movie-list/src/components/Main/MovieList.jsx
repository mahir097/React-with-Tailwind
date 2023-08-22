import React from "react";

export default function MovieList({ movies, setSelectedId }) {
  return (
    <div className=" absolute top-9 box-border ">
      {movies.map((movie) => {
        const { imdbID, Title, Year, Poster } = movie;
        return (
          <div
            key={imdbID}
            className=" flex items-center bg-gray-700  border-b hover:bg-gray-600 transition-all cursor-pointer px-5 rounded-xl mb-1"
            onClick={() => setSelectedId(imdbID)}
          >
            <img src={Poster} alt={Title} className="w-10" />
            <div className="mx-auto text-center  ">
              <p className="text-gray-200 font-bold text-xs">{Title}</p>
              <p className="text-gray-200 text-xs">{Year}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
