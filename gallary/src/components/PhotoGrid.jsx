import PhotoCard from "./PhotoCard";

function PhotoGrid({ photos, favorites, onFavorite }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          favorites={favorites}
          onFavorite={onFavorite}
        />
      ))}
    </div>
  );
}

export default PhotoGrid;