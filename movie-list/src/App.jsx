import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Logo from "./components/NavBar/Logo";
import Search from "./components/NavBar/Search";
import NumResult from "./components/NavBar/NumResult";
import Main from "./components/Main/Main";
import Box from "./components/Main/Box";
import Loader from "./components/Loader";
import MovieList from "./components/Main/MovieList";
import Error from "./components/Error";
import MovieDetails from "./components/Main/MovieDetails";
import WatchedList from "./components/Main/WatchedList";
import WatchedDetails from "./components/Main/WatchedDetails";

const API = "http://www.omdbapi.com/?apikey=72820529";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("watched"));
    if (storedItems) {
      setWatched(storedItems);
    }
  }, []);

  function saveToLocalStorage(watchedMovie) {
    localStorage.setItem("watched", JSON.stringify(watchedMovie));
  }

  function handleAddWatched(movie) {
    const updatedWatched = [...watched, movie];
    setWatched(updatedWatched);
    saveToLocalStorage(updatedWatched);
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleRemoveWatched(imdbID) {
    const updatedWatched = watched.filter((movie) => movie.imdbID !== imdbID);
    setWatched(updatedWatched);
    saveToLocalStorage(updatedWatched);
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(`${API}&s=${search}`);
        const data = await response.json();
        console.log(data);
        if (data.Response === "True") {
          setMovies(data.Search);
          setError("");
        } else {
          setMovies([]);
          setError(data.Error);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }

      if (search.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
    }

    fetchMovies();
  }, [search]);

  console.log(selectedId);
  return (
    <div className="xl:mx-10">
      <div className="">
        <NavBar>
          <Logo />
          <Search search={search} setSearch={setSearch} />
          <NumResult movieLength={movies.length} />
        </NavBar>
      </div>

      <Main>
        <Box search={search}>
          {loading && <Loader />}
          {error && <Error message={error} />}
          {!loading && !error && (
            <MovieList movies={movies} setSelectedId={setSelectedId} />
          )}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              API={API}
              onAddWatched={handleAddWatched}
              onCloseMovie={handleCloseMovie}
              watched={watched}
            />
          ) : (
            <>
              <WatchedDetails watched={watched} />
              <WatchedList
                watched={watched}
                setSelectedId={setSelectedId}
                onRemoveWatched={handleRemoveWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}
