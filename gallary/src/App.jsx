
import {
  useState,
  useCallback,
  useMemo,
  useReducer,
  useEffect,
} from "react";

import useFetchPhotos from "./hooks/useFetchPhotos";

import PhotoGrid from "./components/PhotoGrid";
import Loading from "./components/Loading";
import SearchBar from "./components/SearchBar";

import favoritesReducer from "./reducers/favoritesReducer";

function App() {
  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    []
  );

  const [favoritesLoaded, setFavoritesLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem("favorites");

      if (savedFavorites) {
        dispatch({
          type: "LOAD_FAVORITES",
          payload: JSON.parse(savedFavorites),
        });
      }
    } catch (error) {
      console.error("Failed to load favorites:", error);
    } finally {
      setFavoritesLoaded(true);
    }
  }, []);

  /**
   * @description Save favorites to localStorage
   */
  useEffect(() => {
    if (favoritesLoaded) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
      );
    }
  }, [favorites, favoritesLoaded]);

  /**
   * @description Search handler
   */
  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  /**
   * @description Filter photos by author
   */
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [photos, search]);

  /**
   * @description Add or remove favorite
   */
  function handleFavorite(photo) {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: photo,
    });
  }

  /**
   * @description Loading screen
   */
  if (loading || !favoritesLoaded) {
    return <Loading />;
  }

  /**
   * @description Loading screen
   */
  if (error) {
    return (
      <div className="min-h-screen bg-[#111111] p-6 text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] px-4 py-8 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-3xl font-bold">
          Photo Gallery
        </h1>

        <p className="mb-6 text-gray-400">
          Explore beautiful photos from different photographers.
        </p>

        <SearchBar
          search={search}
          onSearch={handleSearch}
        />

        <p className="mb-4 text-sm text-gray-400">
          Favourites: {favorites.length}
        </p>

        {filteredPhotos.length > 0 ? (
          <PhotoGrid
            photos={filteredPhotos}
            favorites={favorites}
            onFavorite={handleFavorite}
          />
        ) : (
          <p className="text-gray-400">
            No photos found.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
