import React, { useEffect, useState } from "react";
import Loader from "../Loader";

export default function MovieDetails({
  selectedId,
  API,
  onCloseMovie,
  onAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      const response = await fetch(`${API}&i=${selectedId}`);
      const data = await response.json();
      console.log(data);
      setMovie(data);
      setLoading(false);
    }

    fetchMovie();
  }, [selectedId]);

  const {
    Title,
    Year,
    Poster,
    Runtime,
    imdbRating,
    Plot,
    Released,
    Actors,
    Director,
    Genre,
  } = movie || {};
  console.log(Title);

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      Title,
      Year,
      Poster,
      imdbRating: Number(imdbRating),
      Runtime: Number(Runtime.split(" ").at(0)),
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);

  if (loading) return <Loader />;

  return (
    <div className="relative mt-10 bg-gray-700 text-white h-[calc(100vh-115px)] rounded-xl text-center">
      <button
        onClick={() => onCloseMovie()}
        className="absolute -top-1 left-1 text-4xl"
      >
        ⇦
      </button>
      <header className="flex  p-2 pt-10">
        <img src={Poster} alt={Title} className="w-1/3 " />
        <div className="p-2">
          <h2 className="text-md font-bold">{Title}</h2>
          <div className="text-sm">
            <p>
              {Released} &bull; {Runtime}
            </p>
            <p>{Genre}</p>
            <p>
              <span>⭐️</span>
              {imdbRating} IMDb rating
            </p>
          </div>
        </div>
      </header>

      <section className="flex flex-col">
        <div className="rating"></div>
        {!isWatched && (
          <button onClick={handleAdd} className="m-5 mx-auto bg-gray-500 w-1/2">
            Add to List
          </button>
        )}

        <p className="text-sm p-4">
          <em>{Plot}</em>
        </p>
        <p className="text-sm font-bold p-1">Starring {Actors}</p>
        <p className="underline">Directed by {Director}</p>
      </section>
    </div>
  );
}
