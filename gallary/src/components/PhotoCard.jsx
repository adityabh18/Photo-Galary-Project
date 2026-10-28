
function PhotoCard({ photo, favorites, onFavorite }) {
  const isFavorite = favorites.some(
    (favorite) => favorite.id === photo.id
  );

  return (
    <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#1c1c1c]">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="h-56 w-full object-cover"
      />

      <div className="flex items-center justify-between p-4">
        <p className="truncate text-sm text-gray-200">
          {photo.author}
        </p>

        <button
          type="button"
          onClick={() => onFavorite(photo)}
          aria-label={
            isFavorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
          aria-pressed={isFavorite}
          className={`ml-3 text-2xl ${
            isFavorite
              ? "text-red-500"
              : "text-gray-400 hover:text-red-500"
          }`}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;
