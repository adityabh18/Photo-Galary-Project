
function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#111111]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-white"></div>

        <p className="text-gray-300">
          Loading photos...
        </p>
      </div>
    </div>
  );
}

export default Loading;
