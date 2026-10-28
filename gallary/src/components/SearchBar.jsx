
function SearchBar({ search, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by author name..."
      value={search}
      onChange={onSearch}
      className="mb-6 w-full rounded-lg border border-gray-700 bg-[#1c1c1c] px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-gray-400 sm:max-w-md"
    />
  );
}

export default SearchBar;
